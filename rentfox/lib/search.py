import xapian
import string
from pylons import request
from rentfox import settings

MAX_PROB_TERM_LENGTH = 64
TYPE_VALUE_ID = 0
UUID_VALUE_ID = 1

TYPE_MAP = {
            'company': 'A',
            'property': 'P',
            'unit': 'U',
            'manager': 'M',
            'tenant': 'T',
            'contact': 'C',
            'type': 'Z',
            'deleted': 'X'
            }

def p_alnum(c):
    return (c in string.ascii_letters or c in string.digits)

def p_notalnum(c):
    return not p_alnum(c)

def p_notplusminus(c):
    return c != '+' and c != '-'

def find_p(string, start, predicate):
    while start<len(string) and not predicate(string[start]):
        start += 1
    return start

def serializeUUID(uuid):
    return uuid.replace('-','')
'''
    USAGE
    
    Index(TYPE, UUID, TEXT, [ {type:company, id:id}, {type:unit, id:id} ])
'''
class Index(object):
    def __init__(self):
        self.db = xapian.WritableDatabase(settings.XAPIAN_DB, xapian.DB_CREATE_OR_OPEN)
        self.stemmer = xapian.Stem('en')
        
    def index(self, type, id, text, terms=[]):
        self.doc = xapian.Document()
        self._setMetadata( type, id, terms )
        self.doc.set_data( text )
        self._index( text )
    
    def _index(self, text):
        self._processPostings( text )
        self.db.add_document( self.doc )
        
    def _processPostings(self, text):
        pos = 0
        i = 0
        while i < len(text):
            i = find_p(text, i, p_alnum)
            j = find_p(text, i, p_notalnum)
            k = find_p(text, j, p_notplusminus)
            if k == len(text) or not p_alnum(text[k]):
                j = k
            if (j - i) <= MAX_PROB_TERM_LENGTH and j > i:
                term = self.stemmer(string.lower(text[i:j]))
                self.doc.add_posting(term, pos)
                pos += 1
            i = j
    
    def _setMetadata(self, type, id, terms):
                
        self.doc.add_value(TYPE_VALUE_ID, type)
        self.doc.add_value(UUID_VALUE_ID, id)
        
        self.doc.add_term(TYPE_MAP['type'] + str(type))
        self.doc.add_term(TYPE_MAP['deleted'] + '0')
        for term in terms:
            self.doc.add_term(TYPE_MAP[ term['type'] ] + str( serializeUUID(term['id']) ))


DEFAULT_SEARCH_FLAGS = (
        xapian.QueryParser.FLAG_BOOLEAN |
        xapian.QueryParser.FLAG_PHRASE |
        xapian.QueryParser.FLAG_LOVEHATE |
        xapian.QueryParser.FLAG_BOOLEAN_ANY_CASE
        )


'''
    USAGE
    
    u = Update('property', 'propertyGUID')
    u.updateTerm('deleted', 'deleteGUID')
    u.updateData('address 1, city, state')
    u.execute()
'''
class Update(object):
    def __init__(self):
        self.db = xapian.WritableDatabase(settings.XAPIAN_DB, xapian.DB_CREATE_OR_OPEN)
        self.parser = xapian.QueryParser()
        self.stemmer = xapian.Stem('en')
        self.enquire = xapian.Enquire(self.db)
        self.data = False
        self.moredata = False
        self.terms = []
        self._setupPrefixes()
    def updateItem(self, type, id):
        self.id = str(id)
        self.type = str(type)
    def _setupPrefixes(self):
        for k in TYPE_MAP:
           self.parser.add_prefix(k, TYPE_MAP[k])
    def updateTerm(self, type, old, new):
        self.terms.append({'type':str(type),'old':serializeUUID(str(old)),'new':serializeUUID(str(new))})
    def updateData(self, data):
        self.data = data
    def moreData(self, data):
        self.moredata = data
    def update(self):
        q = '{0}:{1}'.format(self.type, serializeUUID(self.id))
        query = self.parser.parse_query(q, DEFAULT_SEARCH_FLAGS)
        self.enquire.set_query(query)
        matches = self.enquire.get_mset(0, 1000000)
        for match in matches:
            did = match.docid
            document = match.document       
            for term in self.terms:
                try:
                    document.remove_term(TYPE_MAP[term['type']] + term['old'])
                except:
                    pass
                document.add_term(TYPE_MAP[term['type']] + term['new'])
            if self.data:
                text = document.get_data()
                self._removePostings(document, text)
                self._processPostings(document, self.data)
                document.set_data(self.data)
            if self.moredata:
                self._processPostings(document, self.moredata)
            self.db.replace_document(did, document)
        self.terms = []
        self.data = False
        self.moredata = False
    
    def _removePostings(self, document, text):
        pos = 0
        i = 0
        while i < len(text):
            i = find_p(text, i, p_alnum)
            j = find_p(text, i, p_notalnum)
            k = find_p(text, j, p_notplusminus)
            if k == len(text) or not p_alnum(text[k]):
                j = k
            if (j - i) <= MAX_PROB_TERM_LENGTH and j > i:
                term = self.stemmer(string.lower(text[i:j]))
                try:
                    document.remove_term(term)
                except:
                    pass
                pos += 1
            i = j
        
    def _processPostings(self, document, text):
        pos = 0
        i = 0
        while i < len(text):
            i = find_p(text, i, p_alnum)
            j = find_p(text, i, p_notalnum)
            k = find_p(text, j, p_notplusminus)
            if k == len(text) or not p_alnum(text[k]):
                j = k
            if (j - i) <= MAX_PROB_TERM_LENGTH and j > i:
                term = self.stemmer(string.lower(text[i:j]))
                document.add_posting(term, pos)
                pos += 1
            i = j
            
'''
    USAGE
    
    s = Search('stuff')
    s.filter('company',companyid) 
    s.filter('property',[array of property ids])
    s.find(page=5, limit=10) # returns a dictionary of results
    
    RESULT QUERY
    '(property:propertyid) AND (type:contact) AND (query string)'
'''

class Search(object):
    
    def __init__(self, keywords):
        try:
            self.db = xapian.Database(settings.XAPIAN_DB)
        except:
            self.db = xapian.WritableDatabase(settings.XAPIAN_DB, xapian.DB_CREATE_OR_OPEN)
        finally:
            self.parser = xapian.QueryParser()
            self.stemmer = xapian.Stem('en')
            self.enquire = xapian.Enquire(self.db)
            self.query_maker = []
            self._setupPrefixes()
            self._setupKeywords(keywords)
        
    def filter(self, prefix, matches):
        if type(matches) is str:
            self.query_maker.append('({0}:{1})'.format(prefix, serializeUUID(matches)))
        elif type(matches) is list and len(matches) > 0:
            filter_arr = []
            
            if prefix == 'property':
                filter_arr.append('type:tenant')
                filter_arr.append('type:contact')
            
            for match in matches:
                filter_arr.append( '{0}:{1}'.format(prefix, serializeUUID(match)) )
            partial_query = ' OR '.join(filter_arr)
            self.query_maker.append('({0})'.format(partial_query))
    
    def find(self, page, limit):
        query_string = ' AND '.join(self.query_maker)
        query = self.parser.parse_query(query_string, DEFAULT_SEARCH_FLAGS)
        self.enquire.set_query(query)
        start = (page - 1) * limit
        results = []
        matches = self.enquire.get_mset(start, limit)        
        for match in matches:
            results.append({
                            'type': match.document.get_value(TYPE_VALUE_ID),
                            'uuid': match.document.get_value(UUID_VALUE_ID),
                            'relevancy': match.percent,
                            'text': match.document.get_data()
                            })
        return {'results':results,
                'start': start + 1,
                'end': start + limit,
                'page': page,
                'total': matches.get_matches_estimated()}
        
    def _getQueryString(self, keywords):
        words = keywords.split(' ')
        terms = []
        for word in words:
            terms.append(self.stemmer(word.lower()))
        partial_query = ' '.join(terms)
        return '({0})'.format(partial_query)
    
    def _setupPrefixes(self):
        for k in TYPE_MAP:
           self.parser.add_prefix(k, TYPE_MAP[k])
    
    def _setupKeywords(self, keywords):
        keywords = keywords.replace('*','')
        keywords = len(keywords) > 0 and keywords or 'rentfox'
        partial_query = self._getQueryString(keywords)
        self.query_maker.append(partial_query)
        self.query_maker.append('({0})'.format('deleted:0'))