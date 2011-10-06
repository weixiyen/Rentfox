"""The application's model objects"""
from sqlalchemy import orm, schema, types, and_, or_
from pylons import session, request
from rentfox.model import meta
from rentfox.model.unit import Unit
from rentfox.model.floorplan import Floorplan
from rentfox.model.manager import Manager
from rentfox.model.photo import Photo
from rentfox.model.property_manager import Property_manager
from rentfox.model.recycle import Recycle
from rentfox.lib import image
from rentfox.lib.types_uuid import UUID
from rentfox.lib.search import Index, Update as IndexUpdate
import datetime
import calendar
import uuid
import os

property_table = schema.Table('property', meta.metadata,
    schema.Column('id', UUID(), primary_key=True),
    schema.Column('companyid', UUID(),
        schema.ForeignKey('company.id')),
    schema.Column('name', types.Unicode(100), nullable=False),
    schema.Column('address', types.Unicode(100), nullable=False),
    schema.Column('city', types.Unicode(50), nullable=False),
    schema.Column('state', types.Unicode(2), nullable=False),
    schema.Column('zip', types.Unicode(10), nullable=False),
    schema.Column('type', types.Unicode(50)),
    schema.Column('photoid', UUID(),
        schema.ForeignKey('photo.id')),
    schema.Column('thumbid', UUID(),
        schema.ForeignKey('photo.id')),
    schema.Column('deleted', UUID())
)


class Property(object):
    
    @staticmethod
    def create(**kwargs):
        from rentfox.model.pulse import Pulse
        
        property = Property()
        
        for key in kwargs:
            property.__setattr__(key, kwargs[key])
        
        meta.Session.add(property)
        meta.Session.commit()
        session.save()
        
        Property_manager.create(
            id = str(uuid.uuid1()),
            property_id = kwargs['id'],
            manager_id = Manager.get_id_of_username(request.environ.get('REMOTE_USER'))
        )
        
        Pulse.create(
                     propertyid = property.id,
                     type = 'property',
                     html = '<div class="unit"><a href="/property/view/{0}">{1}</a> was created.</div>'.format(
                                property.id,
                                property.name
                                )
                     )
        
        # index for searching later
        type = 'property'
        id = property.id
        text = ' '.join([property.name, property.name, property.address, property.city, property.zip])
                
        terms = [
                 {'type':'company', 'id':request.environ.get('COMPANY_ID')},
                 {'type':'property', 'id':id}
                 ]
        index = Index()
        index.index(type, id, text, terms)
    
    @staticmethod
    def save(**kwargs):
        property = Property.get_property(kwargs['id'])
        
        for key in kwargs:
            property.__setattr__(key, kwargs[key])

        meta.Session.commit()
        session.save()
        
        text = ' '.join([str(property.name), str(property.name), str(property.address), str(property.city), str(property.zip)])
        index_update = IndexUpdate()
        index_update.updateItem('property', property.id)
        index_update.moreData(text)
        index_update.update()
    
    @staticmethod
    def delete(propertyid):
        from rentfox.model.pulse import Pulse
        from rentfox.model.lease import Lease
        from rentfox.model.contact_type import Contact_type
        
        property = Property.get_property(propertyid)
        recycleId = Recycle.create("Property deleted: {0}".format(property.name))
        
        #set property, units, floorplans to deleted
        property.deleted = recycleId
        Unit.deleteByPropertyId(propertyid, recycleId)
        Floorplan.deleteByPropertyId(propertyid, recycleId)
        Lease.deleteByPropertyId(propertyid, recycleId)
        
        meta.Session.commit()
        session.save()
        
        index_update = IndexUpdate()
        index_update.updateItem('property', propertyid)
        index_update.updateTerm('deleted', 0, recycleId)
        index_update.update()
        
    @staticmethod
    def get_properties(companyid):
        """ Return the list of properties of a company.
        """
        return meta.Session.query(Property).filter_by(companyid=companyid).filter(Property.deleted==None).order_by('name').all()
    
    @staticmethod
    def totalUnits(propertyid):
        return meta.Session.query(Unit).filter_by(propertyid=propertyid).count()
    
    
    @staticmethod
    def get_property(propertyid):
        """ Return the property with propertyid.
        """
        return meta.Session.query(Property).filter_by(id=propertyid).filter(Property.deleted==None).first()
    
    @staticmethod
    def get_name_by_id(propertyid):
        """ Return the property name with propertyid.
        """
        q = meta.Session.query(Property).filter_by(id=propertyid).filter(Property.deleted==None).first()
        return q.name
    
    @staticmethod
    def property_name_exist(property_name, company_id):
        propList = Property.get_properties(company_id)
        for prop in propList:
            if prop.name == property_name:
                return 1
        return 0
    
    @staticmethod
    def get_propertyList_of_userid(userid):
        if Manager.is_admin(userid):
            return Property.get_propertyList_of_adminid(userid)
        else:
            return Property.get_propertyList_of_managerid(userid)
    
    @staticmethod
    def get_propertyList_of_adminid(adminid):
        user = Manager.get(adminid)
        company_id = user.companyid
        return Property.get_propertyList_of_companyid(company_id)
        
    @staticmethod
    def get_propertyList_of_managerid(managerid):
        return meta.Session.query(Property).join(Property_manager).filter(Property.deleted==None).filter(Property_manager.manager_id==managerid).order_by(Property.name).all()
    
    @staticmethod
    def get_propertyList_of_companyid(companyid):
        return Property.get_properties(companyid)
    
    @staticmethod
    def get_propertyList_of_username(username):
        managerid = Manager.get_id_of_username(username)
        properties = Property.get_propertyList_of_userid(managerid)
        propList = []
             
        if properties:
            for property in properties:
                propObj = {
                    'id': property.id,
                    'name': property.name
                }
                propList.append(propObj)
        
        return propList
    
    @staticmethod
    def get_properties_of_username(username):
        managerid = Manager.get_id_of_username(username)
        properties = Property.get_propertyList_of_userid(managerid)
        return properties
    
    @staticmethod
    def get_property_ids_of_username(username):
        user_properties = Property.get_propertyList_of_username(username)
        return map(lambda n: n['id'], user_properties)
    
    @staticmethod
    def totalActiveLeasesInMonth(id, year, month):
        
        from rentfox.model import Lease, Transaction        
        
        lastDay = calendar.monthrange(year,month)
        lastDay = lastDay[1]
        firstDate = datetime.date(year,month,1)
        lastDate = datetime.date(year,month,int(lastDay))
        
        total_leases = meta.Session.query(Lease).\
            join(Unit).\
            filter(Unit.propertyid == id).\
            filter(Lease.deleted == None).\
            filter(and_(Lease.startdate<=lastDate, or_(Lease.outdate==None, Lease.outdate>=firstDate))).count()
        
        return total_leases
    
    @staticmethod
    def totalRentPaidInMonth(id, year, month):
        
        from rentfox.model import Lease, Transaction
                
        total_rent_paid = meta.Session.query(Transaction).\
            outerjoin((Lease,Lease.id==Transaction.leaseid), (Unit,Lease.unitid==Unit.id)).\
            filter(Transaction.type == 'Rent').\
            filter(Transaction.foryear == year).\
            filter(Lease.deleted == None).\
            filter(Unit.propertyid == id).\
            filter(Transaction.formonth == month).count()
        
        return total_rent_paid
    
    @staticmethod
    def totalUnits(propertyid):
        return meta.Session.query(Unit).filter(Unit.deleted==None).filter(Unit.propertyid==propertyid).count()
    
    @staticmethod
    def totalUnitsInProperties(propertyids):
        return meta.Session.query(Unit).filter(Unit.deleted==None).filter(Unit.propertyid.in_(propertyids)).count()
    
    @staticmethod
    def occupancyPercentage(id, year, month):
        active_leases_in_month = Property.totalActiveLeasesInMonth(id, year, month)
        total_units = Property.totalUnits(id)
        occupancy = total_units > 0 and active_leases_in_month * 100 / total_units or 0
        return occupancy
    
    @staticmethod
    def savePhoto(propertyId):
        
        filename = str(uuid.uuid1())
        
        # create tmp photos
        photo = image.create('userfile', filename, True)
        
        if not photo:
            return False
        
        property = Property.get_property(propertyId)
        
        # store old photo ids
        old_photo_id = property.photoid
        old_thumb_id = property.thumbid
        
        # save new photos
        property.photoid = Photo.create(photo['name'], photo['path'])
        property.thumbid = Photo.create(photo['thumbname'], photo['thumbpath'])
        meta.Session.commit()
        session.save()
        
        # remove tmp photos
        os.remove(photo['path'])
        os.remove(photo['thumbpath'])
        
        # remove old photos from s3
        if old_photo_id:
            Photo.remove(old_photo_id)
            Photo.remove(old_thumb_id)
        
        return {'photoid': property.photoid,
                'thumbid': property.thumbid}
    
    @staticmethod
    def saveTempPhoto():
        filename = str(uuid.uuid1())
        photo = image.create('userfile', filename, True)
        if not photo:
            return False
        
        photoid = Photo.create(photo['name'], photo['path'])
        thumbid = Photo.create(photo['thumbname'], photo['thumbpath'])
        return {'photoid': photoid,
                'thumbid': thumbid}