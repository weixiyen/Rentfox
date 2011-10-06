"""The application's model objects"""
import sqlalchemy as sa
from rentfox.lib.cache import Memcache
from sqlalchemy import orm, schema, types, select, and_, or_
from pylons import session, request
from rentfox.model import meta
from rentfox.model.manager import Manager
from rentfox.model.property import Property
from rentfox.model.unit import Unit
from rentfox.model.floorplan import Floorplan
from rentfox.model.lease import Lease
from rentfox.model.recycle import Recycle
from rentfox.lib.types_uuid import UUID

import datetime, uuid, calendar

def now():
    return datetime.datetime.now()

company_table = schema.Table('company', meta.metadata,
    schema.Column('id', UUID(), primary_key=True),
    schema.Column('name', types.Unicode(100), nullable=False),
    schema.Column('street', types.Unicode(100)),
    schema.Column('city', types.Unicode(50)),
    schema.Column('state', types.Unicode(2)),
    schema.Column('zip', types.Unicode(10)),
    schema.Column('phone', types.Unicode(50)),
    schema.Column('email', types.Unicode(100)),
    schema.Column('created', types.TIMESTAMP(), default=now),
    schema.Column('maxunits', types.Integer),
    schema.Column('deleted', UUID())
)

class Company(object):
    def __init__(self):
        pass
    
    @staticmethod
    def create(**kwargs):
        company = Company()
        
        for key in kwargs:
            company.__setattr__(key, kwargs[key])

        meta.Session.add(company)
        meta.Session.commit()
        session.save()
        
    @staticmethod
    def get(id):
        return meta.Session.query(Company).filter_by(id=id).first()
    
    @staticmethod
    def get_name_by_id(id):
        q = meta.Session.query(Company.name).filter_by(id=id).first()
        return q.name
    
    @staticmethod
    def get_active_users(company_id):
        managers = meta.Session.query(Manager.id, Manager.first_name, Manager.last_name)\
            .filter_by(companyid = company_id)\
            .filter(Manager.username != None)\
            .filter(Manager.username != request.environ.get('REMOTE_USER'))\
            .order_by(Manager.first_name).all()
        list = []
        if managers:
            for manager in managers:
                listitem = {
                    'id': manager.id,
                    'name': '{0} {1}'.format(manager.first_name, manager.last_name)
                }
                list.append(listitem)
        return list
    
    @staticmethod
    def switch_superuser(manager_id):
        Manager.set(manager_id,
                    created_by = 'rentfox',
                    type = 'admin'
                    )
        Manager.set_with_username(request.environ.get('REMOTE_USER'),
                    created_by = manager_id
                    )
    
    @staticmethod
    def get_superuser():
        superuser = meta.Session.query(Manager.first_name, Manager.last_name, Manager.username)\
            .filter_by(companyid = request.environ.get('COMPANY_ID')).filter_by(created_by='rentfox').first()
        return {
                'name' :'{0} {1}'.format(superuser.first_name, superuser.last_name),
                'username' : superuser.username
                }
    
    @staticmethod
    def get_properties():
        properties = meta.Session.query(Property.name).filter(Property.deleted==None).filter_by(companyid = request.environ.get('COMPANY_ID'))\
                                                                .order_by(Property.name).all()
        list = []
        if properties:
            for property in properties:
                listitem = {
                            'name': property.name
                            }
                list.append(listitem)
        return list
    
    @staticmethod
    def delete():
 
        recycleId = Recycle.create("Company account deleted.")
        
        company_users = meta.Session.query(Manager).filter_by(companyid = request.environ.get('COMPANY_ID') )
        
        company_users.update({Manager.deleted: recycleId})
        
        for user in company_users:
            if user.username:
                request.environ['authkit.users'].user_set_group(user.username, 'deleted')
            else:
                meta.Session.delete(user)
        
        meta.Session.query(Company).filter_by(id = request.environ.get('COMPANY_ID') )\
            .update({Company.deleted: recycleId})
        
        meta.Session.commit()
        session.save()
    
    @staticmethod
    def totalUnitsInCompany(companyid):
        return meta.Session.query(Unit).join(Property).filter(Unit.deleted==None).filter(Property.companyid==companyid).count()


    @staticmethod
    def totalActiveLeasesInMonth(year, month):
        
        from rentfox.model import Lease, Transaction
        
        proplist = Property.get_property_ids_of_username(request.environ.get('REMOTE_USER'))
        
        
        lastDay = calendar.monthrange(year,month)
        lastDay = lastDay[1]
        firstDate = datetime.date(year,month,1)
        lastDate = datetime.date(year,month,int(lastDay))
        
        total_leases = meta.Session.query(Lease).\
            join(Unit).\
            filter(Unit.propertyid.in_(proplist)).\
            filter(Lease.deleted == None).\
            filter(and_(Lease.startdate <= lastDate, or_(Lease.outdate==None, Lease.outdate >= firstDate))).count()
        
        return total_leases
    
    @staticmethod
    def totalRentPaidInMonth(year, month):
        
        from rentfox.model import Lease, Transaction
        
        proplist = Property.get_property_ids_of_username(request.environ.get('REMOTE_USER'))
        
        total_rent_paid = meta.Session.query(Transaction).\
            outerjoin((Lease,Lease.id==Transaction.leaseid), (Unit,Lease.unitid==Unit.id)).\
            filter(Transaction.type == 'Rent').\
            filter(Transaction.foryear == year).\
            filter(Lease.deleted == None).\
            filter(Unit.propertyid.in_(proplist)).\
            filter(Transaction.formonth == month).count()
        
        return total_rent_paid
    
    @staticmethod
    def getUnitsWithFloorplans(property_ids):
        units = meta.Session.query(Unit).filter(Unit.deleted == None).filter(Unit.floorplanid != None).filter(Unit.propertyid.in_(property_ids)).all()
        return units
    
    @staticmethod
    def foxAlert():        
        companyid = request.environ.get('COMPANY_ID')
        username = request.environ.get('REMOTE_USER')
        propertyids = Property.get_property_ids_of_username(username)
        
        mc = Memcache()
        key = 'foxalert:{0}'.format(username)
        fox_alert = mc.get(key)
        if fox_alert == 'Saved': return False
        
        if len(propertyids) == 0:
            return {
                    'title': "Welcome!",
                    'message':"I'm here to help you. Let's get started by creating a property!",
                    'button':"Let's get started!",
                    'link':'/property/setup'
                    }
        
        if Property.totalUnitsInProperties(propertyids) == 0:
            return {
                    'title': "Create a unit!",
                    'message':"I just realized you don't have any units... let's create one!",
                    'button':"Okay!",
                    'link':'/property/setup/{0}'.format(propertyids[0])
                    }
            
        units_with_floorplans = Company.getUnitsWithFloorplans(propertyids)
        if len(units_with_floorplans) == 0:
            units = Unit.get_units_of_properties(propertyids)
            unitid = units[0].id
            propertyid = units[0].propertyid
            return {
                    'title': "No floorplans yet?",
                    'message': "Your units need floorplans. Floorplans are cool because you can apply them to other units in the same building.",
                    "button": "Add Floorplans",
                    'link': '/property/setup/{0}/{1}'.format(propertyid,unitid)
                    }
        
        lease = Lease.get_earliest(propertyids)
        if not lease:
            unitid = units_with_floorplans[0].id
            return {
                    'title': "Got leases?",
                    'message': "Are you ready to add a lease to one of your units?",
                    "button": "Yes, take me there!",
                    'link': '/unit/view/{0}'.format(unitid)
                    }
        
        mc.set(key, 'Saved', time=86400)
        
        return False