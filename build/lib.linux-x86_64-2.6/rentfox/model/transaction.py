"""The application's model objects"""
import sqlalchemy as sa
from sqlalchemy import orm
from sqlalchemy import schema, types, and_, or_, asc, desc
from pylons import session

from rentfox.model import meta, Lease, Unit, Property, Pulse, Recycle
import datetime, uuid
from rentfox.lib.types_uuid import UUID


def now():
    return datetime.datetime.now()

transaction_table = schema.Table('transaction', meta.metadata,
    schema.Column('id', UUID(), primary_key=True),
    schema.Column('leaseid', UUID(),
        schema.ForeignKey('lease.id'), nullable=True),
    schema.Column('unitid', UUID(),
        schema.ForeignKey('unit.id'), nullable=True),
    schema.Column('contactid', UUID(),
        schema.ForeignKey('contact.id'), nullable=True),
    schema.Column('companyid', UUID(),
        schema.ForeignKey('company.id'), nullable=False),
    schema.Column('propertyid', UUID(),
        schema.ForeignKey('property.id'), nullable=True),
    schema.Column('type', types.Unicode(50)),
    schema.Column('formonth', types.Integer),
    schema.Column('foryear', types.Integer),
    schema.Column('date', types.DateTime),
    schema.Column('amount', types.Float),
    schema.Column('income', types.Integer),
    schema.Column('name', types.Unicode(50)),
    schema.Column('latefee', types.Float),
    schema.Column('latepaid', types.Integer),
    schema.Column('deleted', UUID())
)


class Transaction(object):
    
    @staticmethod
    def create(**kwargs):
        trans = Transaction()
        
        for key in kwargs:
            trans.__setattr__(key, kwargs[key])
        
        meta.Session.add(trans)
        meta.Session.commit()
        session.save()
        
    @staticmethod
    def save(**kwargs):
        trans = Transaction.get(kwargs['id'])
        for key in kwargs:
            trans.__setattr__(key, kwargs[key])
        
        meta.Session.commit()
        session.save()
    
    @staticmethod
    def get(id):
        return meta.Session.query(Transaction).filter_by(id=id).first()
    
    @staticmethod
    def delete(id):
        transaction = Transaction.get(id)
        amount = '%.2f' % transaction.amount 
        amount = transaction.income and '$'+str(amount) or '-$'+str(amount)
        recycleId = Recycle.create("Transaction with {0} for {1} deleted".format(transaction.name, amount))
        
        meta.Session.delete(transaction)
        meta.Session.commit()
        session.save()
    
    @staticmethod
    def get_transactions_from_lease(leaseid):
        return meta.Session.query(Transaction).filter_by(leaseid=leaseid).filter(Transaction.deleted==None).order_by(desc(Transaction.date)).all()
    
    @staticmethod
    def get_transactions_from_unit(unitid):
        return meta.Session.query(Transaction).filter_by(unitid=unitid).filter(Transaction.deleted==None).order_by(desc(Transaction.date)).all()
    
    @staticmethod
    def get_type(unitid, type):
        records = meta.Session.query(Transaction).filter(Transaction.unitid==unitid).filter(Transaction.deleted==None)
        if type == 'all':
            pass
        else:
            typeList = ['Rent', 'Fee', 'Deposit', 'Deposit Return', 'Refund']
            if type == 'other':
                records = records.filter(~Transaction.type.in_(typeList))
            else:
                records = records.filter(Transaction.type==type)
        
        return records.order_by(Transaction.date.desc()).all()
    
    @staticmethod
    def record_late_paid(unitId,forMonth,forYear):
        record = meta.Session.query(Transaction).filter(and_(Transaction.unitid==unitId,\
                                                             Transaction.formonth==forMonth,\
                                                             Transaction.foryear==forYear)).first()
        
        record.latepaid = 1
        
        now = datetime.date.today()
        Transaction.create(
                           id=str(uuid.uuid1()),
                           leaseid=record.leaseid,
                           unitid=record.unitid,
                           companyid=record.companyid,
                           propertyid=record.propertyid,
                           type='Fee',
                           formonth=record.formonth,
                           foryear=record.foryear,
                           date=now,
                           income=1,
                           name=record.name,
                           amount=record.latefee,
                           )
        
        meta.Session.commit()
        session.save()
    
    @staticmethod
    def record_rent(**kwargs):
        transaction = Transaction()
            
        for key in kwargs:
            transaction.__setattr__(key, kwargs[key])
        
        meta.Session.add(transaction)
        meta.Session.commit()
        session.save()
        
        #pulse
        unit = Unit.get_unit(kwargs['unitid'])
        property_name = Property.get_name_by_id(unit.propertyid)
        Pulse.create(
                     unitid = unit.id,
                     propertyid = unit.propertyid,
                     type = 'rent',
                     html = '<div class="unit"><a href="/unit/view/{1}">{3} #{2}</a> has paid ${0} rent for {4}/{5}.</div>'.format(
                                kwargs['amount'],
                                unit.id,
                                unit.label,
                                property_name,
                                kwargs['formonth'],
                                kwargs['foryear']
                                )
                     )
    
    @staticmethod
    def record_latefee(unitId, lateFee, forMonth, forYear, date):
        date = date.split('/')
        m = int(date[0])
        d = int(date[1])
        y = int(date[2])
        
        record = meta.Session.query(Transaction).filter(and_(Transaction.unitid==unitId,\
                                                             Transaction.formonth==forMonth,\
                                                             Transaction.foryear==forYear)).first()
        record.date = datetime.date(y,m,d)
        record.latefee = float(lateFee)
        record.latepaid = 0
        
        meta.Session.commit()
        session.save()
    
    @staticmethod
    def updateRent(amount, unitId, forMonth, forYear):
        record = meta.Session.query(Transaction).filter(and_(Transaction.unitid==unitId,\
                                                             Transaction.formonth==forMonth,\
                                                             Transaction.foryear==forYear)).first()
        record.amount = amount
        meta.Session.commit()
        session.save()
    
    @staticmethod
    def undo_rent(unitId, forMonth, forYear):
        records = meta.Session.query(Transaction).filter(and_(Transaction.unitid==unitId,\
                                                             Transaction.formonth==forMonth,\
                                                             Transaction.foryear==forYear)).all()
        for record in records:
            meta.Session.delete(record)
        meta.Session.commit()
        session.save()
        
        #pulse
        unit = Unit.get_unit(unitId)
        property_name = Property.get_name_by_id(unit.propertyid)
        Pulse.create(
                     unitid = unit.id,
                     propertyid = unit.propertyid,
                     type = 'warning',
                     html = '<div class="unit"><a href="/unit/view/{1}">{3} #{2}</a>\'s rent for {0} has been unmarked.</div>'.format(
                                '{0}/{1}'.format(forMonth, forYear),
                                unit.id,
                                unit.label,
                                property_name
                                )
                     )
    
    @staticmethod
    def get_rent_info(unitid, formonth, foryear):
        now = datetime.date.today()
        record = meta.Session.query(Lease.rent, Lease.due, Lease.latecharge, Lease.interval, Lease.graceperiod,\
                                    Transaction.date).join(Transaction).\
                                    filter(and_(Transaction.unitid==unitid,\
                                                Transaction.formonth==formonth,\
                                                Transaction.foryear==foryear)).first()
        return record
    

    @staticmethod
    def get_earliest(companyid):
        return meta.Session.query(Transaction.date).filter(Transaction.companyid==companyid).\
                                                        order_by(asc(Transaction.date)).first()
                            
    @staticmethod
    def calLatefee(records):
        leaseList = []
        for record in records:
            if record['status'] == "Vacant":
                continue
            leaseList.append(record['leaseid'])
        
        transactions = meta.Session.query(Transaction).filter(and_(Transaction.type=='Rent',
                                                                   Transaction.leaseid.in_(leaseList),
                                                                   Transaction.deleted==None)).all()
        
        info = {}
        for record in transactions:
            if info.has_key(record.leaseid):
                count = info[record.leaseid]
                if record.latepaid in [0,1]:
                    count[0] = count[0] + 1
                else:
                    count[1] = count[1] + 1
                info[record.leaseid] = count
            else:
                count = [0,0]
                if record.latepaid in [0,1]:
                    count[0] = count[0] + 1
                else:
                    count[1] = count[1] + 1
                info[record.leaseid] = count
        
        for record in records:
            if info.has_key(record['leaseid']):
                l = info[record['leaseid']]
                late = l[0]
                onTime = l[1]
                latepay = late / float(late + onTime)
                latepay = '%.2f' % latepay
                latepay = float(latepay) * 100
                latepay = int(latepay)
                record['latepay'] = str(latepay) + '%'
            else:
                if record['leaseid']:
                    record['latepay'] = '0%'
                else:
                    record['latepay'] = '-'
        
        return records
    
    @staticmethod
    def record_prev_paid(**kwargs):
        leaseid = kwargs['leaseid']
        unitid = kwargs['unitid']
        companyid = kwargs['companyid']
        propertyid = kwargs['propertyid']
        due = int(kwargs['due'])
        rent = int(kwargs['rent'])
        startdate = kwargs['startdate']
        name = kwargs['name']
        
        startdate = startdate.split('/')
        m = int(startdate[0])
        d = int(startdate[1])
        y = int(startdate[2])
        startdate = datetime.datetime(y,m,d)
        
        now = datetime.datetime.today()
        curM = now.month
        curD = now.day
        curY = now.year
        
        dayDiff = now - startdate
        dayDiff = dayDiff.days
        
        if dayDiff < 400 and (m < curM and y == curY ) or y < curY :
            while (True):
                if m == curM and y == curY:
                    break
                
                Transaction.create(
                                   id = str(uuid.uuid1()),
                                   leaseid = leaseid,
                                   unitid = unitid,
                                   companyid = companyid,
                                   propertyid = propertyid,
                                   type = 'Rent',
                                   formonth = m,
                                   foryear = y,
                                   date = datetime.datetime(y,m,due),
                                   amount = rent,
                                   income = 1,
                                   name = name
                                   )
                if m == 12:
                    m = 1
                    y = y + 1
                else:
                    m = m + 1
            
        