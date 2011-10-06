"""The application's model objects"""
from pylons import request
from sqlalchemy import orm
from sqlalchemy import schema, types
from pylons import session
from rentfox.model import meta
from rentfox.lib import storage
import datetime, uuid
from rentfox import settings
from rentfox.lib.types_uuid import UUID
import datetime

def now():
    return datetime.datetime.now()

photo_table = schema.Table('photo', meta.metadata,
    schema.Column('id', UUID(), primary_key=True),
    schema.Column('key', types.Unicode(70)),
    schema.Column('created', types.TIMESTAMP(), default=now),
    schema.Column('modified', types.TIMESTAMP()),
    schema.Column('deleted', UUID())
)

class Photo(object):

    @staticmethod
    def create(key, path):
        
        storage.save(key, path)
        
        photoid = str(uuid.uuid1())
        
        photo = Photo()
        photo.id = photoid
        photo.key = key
        photo.modified = now()
        
        meta.Session.add(photo)
        meta.Session.commit()
        session.save()
        
        return photoid
    
    @staticmethod
    def get(id):
        return meta.Session.query(Photo).filter_by(id=id).first()
    
    @staticmethod
    def remove(id):
        photo = Photo.get(id)
        storage.remove(photo.key)
        meta.Session.delete(photo)
        meta.Session.commit()
        session.save()
    
    @staticmethod
    def path(id):
        photo = Photo.get(id)
        return settings.CDN_LINK + photo.key


