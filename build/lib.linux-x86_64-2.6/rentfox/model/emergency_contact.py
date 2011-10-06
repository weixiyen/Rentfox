"""The application's model objects"""
import sqlalchemy as sa
from sqlalchemy import orm
from sqlalchemy import schema, types
from pylons import session

from rentfox.model import meta
import datetime
from rentfox.lib.types_uuid import UUID

emergency_contact_table = schema.Table('emergency_contact', meta.metadata,
    schema.Column('id', UUID(), primary_key=True),
    schema.Column('tenantid', UUID(),
        schema.ForeignKey('tenant.id')),
    schema.Column('name', types.Unicode(50), nullable=False),
    schema.Column('phone', types.Unicode(50), nullable=False),
    schema.Column('relationship', types.Unicode(50), nullable=False),
    schema.Column('deleted', UUID())
)


class Emergency_contact(object):
    @staticmethod
    def create(**kwargs):
        e_contact = Emergency_contact()
        
        for key in kwargs:
            e_contact.__setattr__(key, kwargs[key])
            
        meta.Session.add(e_contact)
        meta.Session.commit()
        session.save()
    
    @staticmethod
    def get(id):
        return meta.Session.query(Emergency_contact).filter_by(id=id).first()
    
    @staticmethod
    def save(**kwargs):
        e_contact = Emergency_contact.get(kwargs['id'])
        
        for key in kwargs:
            e_contact.__setattr__(key, kwargs[key])
        
        meta.Session.commit()
        session.save()
    
    @staticmethod
    def delete(id):
        contact = Emergency_contact.get(id)
        meta.Session.delete(contact)
        meta.Session.commit()
        session.save()
    
    @staticmethod
    def get_econtacts_of_tenantid(tenantid):
        return meta.Session.query(Emergency_contact).filter_by(tenantid=tenantid).order_by(Emergency_contact.name.asc())


