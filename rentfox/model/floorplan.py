"""The application's model objects"""
import sqlalchemy as sa
from sqlalchemy import orm
from sqlalchemy import schema, types

from pylons import session
from rentfox.model import meta
from rentfox.model.photo import Photo
from rentfox.lib import image
from rentfox.lib.types_uuid import UUID

import datetime, uuid, os

floorplan_table = schema.Table('floorplan', meta.metadata,
    schema.Column('id', UUID(), primary_key=True),
    schema.Column('propertyid', UUID(),
        schema.ForeignKey('property.id')),
    schema.Column('label', types.Unicode(50), nullable=False),
    schema.Column('sqft', types.Float(1)),
    schema.Column('beds', types.Float(1)),
    schema.Column('baths', types.Float(1)),
    schema.Column('description', types.Unicode(255)),
    schema.Column('photoid', UUID(),
        schema.ForeignKey('photo.id')),
    schema.Column('thumbid', UUID(),
        schema.ForeignKey('photo.id')),
    schema.Column('deleted', UUID())
)


class Floorplan(object):
    
    @staticmethod
    def create(**kwargs):
        floorplan = Floorplan()
            
        for key in kwargs:
            floorplan.__setattr__(key, kwargs[key])
        
        meta.Session.add(floorplan)
        meta.Session.commit()
        session.save()
    
    @staticmethod
    def save(**kwargs):
        floorplan = Floorplan.get(kwargs['id'])
        for key in kwargs:
            floorplan.__setattr__(key, kwargs[key])
        
        meta.Session.commit()
        session.save()
    
    @staticmethod
    def delete(floorplanid):
        floorplan = Floorplan.get(floorplanid)
        meta.Session.delete(floorplan)
        meta.Session.commit()
        session.save()
    
    @staticmethod
    def get(floorplanid):
        return meta.Session.query(Floorplan).filter_by(id=floorplanid).first()
    
    @staticmethod
    def get_propertyid_of_floorplan(floorplanid):
        floorplan = Floorplan.get(floorplanid)
        return floorplan.propertyid
    
    @staticmethod
    def get_floorplans_of_property(propertyid):
        floorplans = meta.Session.query(Floorplan).filter_by(propertyid=propertyid).all()
        return floorplans
    
    @staticmethod
    def floorplan_name_exist(name, propertyid):
        floorplanList = Floorplan.get_floorplans_of_property(propertyid)
        for floorplan in floorplanList:
            if floorplan.label == name:
                return 1
        return 0
    
    @staticmethod
    def get_name_by_id(id):
        floorplan = Floorplan.get(id)
        return floorplan.label
    
    @staticmethod
    def savePhoto(floorplanId):
        filename = str(uuid.uuid1())
        
        # create tmp photos
        photo = image.create('userfile', filename, True, 950, 800)
        
        if not photo:
            return False
        
        floorplan = Floorplan.get(floorplanId)
        
        # store old photo ids
        old_photo_id = floorplan.photoid
        old_thumb_id = floorplan.thumbid
        
        # save new photos
        floorplan.photoid = Photo.create(photo['name'], photo['path'])
        floorplan.thumbid = Photo.create(photo['thumbname'], photo['thumbpath'])
        meta.Session.commit()
        session.save()
        
        # remove tmp photos
        os.remove(photo['path'])
        os.remove(photo['thumbpath'])
        
        # remove old photos from s3
        if old_photo_id:
            Photo.remove(old_photo_id)
            Photo.remove(old_thumb_id)
        
        return {'photoid': floorplan.photoid,
                'thumbid': floorplan.thumbid}
    
    @staticmethod
    def deleteByPropertyId(propertyid, recycleId):
        meta.Session.query(Floorplan).filter(Floorplan.propertyid==propertyid).update({Floorplan.deleted:recycleId})
    

