"""The application's model objects"""
import sqlalchemy as sa
from sqlalchemy import orm
from sqlalchemy import schema, types
from pylons import session, request

from rentfox.model import meta
from rentfox.model.recycle import Recycle
from rentfox.model.property import Property
import datetime
from rentfox.lib.types_uuid import UUID
from rentfox.lib.search import Update as IndexUpdate

contact_type_table = schema.Table('contact_type', meta.metadata,
    schema.Column('id', UUID(), primary_key=True),
    schema.Column('companyid', UUID(),
        schema.ForeignKey('company.id')),
    schema.Column('label', types.Unicode(50), nullable=False),
    schema.Column('deleted', UUID())
)


class Contact_type(object):
    @staticmethod
    def create(**kwargs):
        type = Contact_type()

        for key in kwargs:
            type.__setattr__(key, kwargs[key])
        
        if not type.companyid:
            type.companyid = request.environ.get('COMPANY_ID')
        
        meta.Session.add(type)
        meta.Session.commit()
        session.save() 

    @staticmethod
    def get(id):
        return meta.Session.query(Contact_type).filter_by(id=id).first()
    
    @staticmethod
    def get_label(id):
        type = Contact_type.get(id)
        return type.label
    
    @staticmethod
    def rename(id, label):
        type = Contact_type.get(id)
        type.label = label
        
        meta.Session.commit()
        session.save()
    
    @staticmethod
    def delete(id):
        from rentfox.model.contact import Contact
        
        contact_type = Contact_type.get(id)
        recycleId = Recycle.create("Contacts deleted from {0}.".format(contact_type.label))

        contacts = meta.Session.query(Contact).filter_by(typeid=id).filter(Contact.deleted==None).all()
        
        index_update = IndexUpdate()
        
        for contact in contacts:
            contact.deleted = recycleId
            index_update.updateItem('contact', contact.id)
            index_update.updateTerm('deleted', 0, recycleId)
            index_update.update()
        
        contact_type.deleted = recycleId
        
        meta.Session.commit()
        session.save()
        
    @staticmethod
    def get_all():
        return meta.Session.query(Contact_type).filter(Contact_type.deleted==None).filter_by(companyid=request.environ.get('COMPANY_ID')).order_by(Contact_type.label).all()