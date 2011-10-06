"""The application's model objects"""
import sqlalchemy as sa
from sqlalchemy import orm
from sqlalchemy import schema, types
from pylons import session

from rentfox.model import meta
from rentfox.lib.types_uuid import UUID
import datetime

property_manager_table = schema.Table('property_manager', meta.metadata,
    schema.Column('id', UUID(), primary_key=True),
    schema.Column('property_id', UUID(),
        schema.ForeignKey('property.id'), nullable=False),
    schema.Column('manager_id', UUID(),
        schema.ForeignKey('manager.id'), nullable=False),
    schema.Column('deleted', UUID())
)


class Property_manager(object):
        
    @staticmethod
    def create(**kwargs):
        record = Property_manager()
        
        for key in kwargs:
            record.__setattr__(key, kwargs[key])
        
        meta.Session.add(record)
        meta.Session.commit()
        session.save()
    
    @staticmethod
    def delete(propertyid, managerid):
        record = meta.Session.query(Property_manager).filter_by(property_id=propertyid).filter_by(manager_id=managerid).first()
        meta.Session.delete(record)
        meta.Session.commit()
        session.save()
    
    @staticmethod
    def revokeAllAccessFrom(userid):
        meta.Session.query(Property_manager).filter(Property_manager.manager_id==userid).delete()
    
    @staticmethod
    def get_records_with_managerid(managerid):
        return meta.Session.query(Property_manager).filter_by(manager_id=managerid).all()
    
    @staticmethod
    def get_records_with_propertyid(propertyid):
        return meta.Session.query(Property_manager).filter_by(property_id=propertyid).all()
    