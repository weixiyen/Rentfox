"""The application's model objects"""
from pylons import request
from sqlalchemy import orm
from sqlalchemy import schema, types
from pylons import session
from rentfox.model import meta
from rentfox.model.photo import Photo
import uuid
from rentfox.lib.types_uuid import UUID
from rentfox.lib import image

unitphoto_table = schema.Table('unitphoto', meta.metadata,
    schema.Column('id', UUID(), primary_key=True),
    schema.Column('unitid', UUID(),
        schema.ForeignKey('unit.id')),
    schema.Column('photoid', UUID(),
        schema.ForeignKey('photo.id')),
    schema.Column('thumbid', UUID(),
        schema.ForeignKey('photo.id')),
    schema.Column('deleted', UUID())
)

class Unitphoto(object):
    @staticmethod
    def create(unitid):
        
        filename = str(uuid.uuid1())
        photo = image.create('userfile', filename, True)
        if not photo:
            return False
        
        # save photo
        uphoto = Unitphoto()
        id = str(uuid.uuid1()) 
        uphoto.id = id
        uphoto.unitid = unitid
        uphoto.photoid = Photo.create(photo['name'], photo['path'])
        uphoto.thumbid = Photo.create(photo['thumbname'], photo['thumbpath'])
        meta.Session.add(uphoto)
        meta.Session.commit()
        session.save()
        return Unitphoto.get(id)
    
        '''
        for k in request.POST:
            if isinstance(request.POST[k], cgi.FieldStorage):
                # create photo
        '''

    @staticmethod
    def remove(id):
        photo = meta.Session.query(Unitphoto).filter_by(id=id).first()
        meta.Session.delete(photo)
        meta.Session.commit()
        session.save()
        Photo.remove(photo.photoid)
        Photo.remove(photo.thumbid)
    
    @staticmethod
    def countPhotosInUnit(unitid):
        return meta.Session.query(Unitphoto).filter_by(unitid=unitid).count()
    
    @staticmethod
    def get(id):
        photo = meta.Session.query(Unitphoto).filter_by(id=id).first()
        return [{'id':photo.id,
                'photo': Photo.path(photo.photoid),
                'thumb': Photo.path(photo.thumbid)}]
    
    @staticmethod
    def getByUnitId(unitid):
        photos = meta.Session.query(Unitphoto).filter_by(unitid=unitid).all()
        photo_arr = []
        for photo in photos:
            photo_arr.append({
                              'id':photo.id,
                              'photo': Photo.path(photo.photoid),
                              'thumb': Photo.path(photo.thumbid)})
        return photo_arr