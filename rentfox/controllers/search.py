import logging

from pylons import request, response, session, tmpl_context as c, url
from pylons.controllers.util import abort, redirect

from rentfox.lib.base import BaseController, render
from rentfox.lib import valid
from rentfox.lib.search import Search
from rentfox.model.property import Property
from rentfox.model.unit import Unit
from rentfox.model.tenant import Tenant
from rentfox.model.contact import Contact
import rentfox.lib.helpers as h
import json

log = logging.getLogger(__name__)

class SearchController(BaseController):
    
    @h.authorize(h.is_manager)
    @h.authenticate
    def __before__(self):
        c.page_title = 'Search Results'
    
    def index(self):
        c.q = request.GET['q']
        return render('/search.html')
    
    def find(self):
    	
        q = request.GET['q']
        
        if not valid.search(q):
            return json.dumps({'errors':[{'selector':'', "message":"Search only accepts letters and numbers. Please try again."}]})
        
        page = int(request.GET['page'])
        limit = int(request.GET['limit'])
        filter = str(request.GET['filter'])
        
        username = request.environ.get('REMOTE_USER')
        property_access_list = Property.get_property_ids_of_username(username)
        
        s = Search(q)
        s.filter('company', request.environ.get('COMPANY_ID'))
        s.filter('property', property_access_list)
        s.filter('deleted', '0')
        if filter != 'all': s.filter('type', filter)
        matches = s.find(page, limit) 
        partial_results = matches['results']
        
        results = []
        for result in partial_results:
            type = result['type']
            uuid = result['uuid']
            try:
                if type == 'property':
                    property = Property.get_property(uuid)
                    results.append({'type': type,
                                    'id': uuid,
                                    'title': property.name,
                                    'link': '/property/view/{0}'.format(property.id),
                                    'description': '{0}, {1}, {2} {3}'.format(property.address, 
                                                                              property.city, 
                                                                              property.state, 
                                                                              property.zip)})
                elif type == 'unit':
                    unit = Unit.get_unit(uuid)
                    property = Property.get_property(unit.propertyid)
                    results.append({'type': type,
                                    'id': uuid,
                                    'title': '{0} #{1}'.format(property.name, unit.label),
                                    'link': '/unit/view/{0}'.format(unit.id),
                                    'description': '{0} #{1}, {2}, {3} {4}'.format(property.address, 
                                                                                   unit.label, 
                                                                                   property.city, 
                                                                                   property.state, 
                                                                                   property.zip)})
                elif type == 'tenant':
                    tenant = Tenant.get(uuid)
                    
                    details = []
                    if tenant.email: details.append(tenant.email)
                    if tenant.phone: details.append(tenant.phone)
                    contact_info = '<br />'.join(details)
                    
                    results.append({'type': type,
                                    'id': uuid,
                                    'title': '{0} {1}'.format(tenant.first_name, tenant.last_name),
                                    'link': '/tenant/view/{0}'.format(tenant.id),
                                    'description': contact_info})
                elif type == 'contact':
                    contact = Contact.get(uuid)
                    
                    details = []
                    if contact.email: details.append(contact.email)
                    if contact.phone: details.append(contact.phone)
                    contact_info = '<br />'.join(details)
                    
                    address = '<br />{0}, {1}'.format(contact.address, contact.city) if contact.address and contact.city else ''
                    description = '<br />{0}'.format(contact.description) if contact.description else ''
                    
                    results.append({'type': type,
                                    'id': uuid,
                                    'title': contact.label,
                                    'description': '{0}{1}{2}'.format(contact_info,
                                                                        address,
                                                                        description)})
            except:
                pass
            
        return json.dumps({'results':results,
                           'start':matches['start'],
                           'end':matches['end'],
                           'page':matches['page'],
                           'total':matches['total']})