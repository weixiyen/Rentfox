"""The application's model objects"""
import sqlalchemy as sa
from sqlalchemy import orm
from sqlalchemy import schema, types
from pylons import session, request

from rentfox.model import meta
from rentfox.model.contact_type import Contact_type
from rentfox.model.recycle import Recycle
import datetime
from rentfox.lib.types_uuid import UUID
from rentfox.lib.search import Index, Update as IndexUpdate

contact_table = schema.Table('contact', meta.metadata,
    schema.Column('id', UUID(), primary_key=True),
    schema.Column('typeid', UUID(),
        schema.ForeignKey('contact_type.id')),
    schema.Column('label', types.Unicode(50), nullable=False),
    schema.Column('address', types.Unicode(100), nullable=False),
    schema.Column('city', types.Unicode(50), nullable=False),
    schema.Column('state', types.Unicode(2), nullable=False),
    schema.Column('zip', types.Unicode(10), nullable=False),
    schema.Column('phone', types.Unicode(50), nullable=False),
    schema.Column('email', types.Unicode(100), nullable=False),
    schema.Column('description', types.Unicode(255), nullable=False),
    schema.Column('deleted', UUID())
)


class Contact(object):
    @staticmethod
    def create(**kwargs):
        contact = Contact()
        
        for key in kwargs:
            contact.__setattr__(key, kwargs[key])
        
        meta.Session.add(contact)
        meta.Session.commit()
        session.save()
        
        # index for searching later
        type = 'contact'
        id = kwargs['id']
        
        contact_type = Contact_type.get(contact.typeid)
        text = 'contact {0} {1} {2}'.format(kwargs['label'], str(kwargs['description']), str(contact_type.label))
                                 
        terms = [
                 {'type':'company', 'id':request.environ.get('COMPANY_ID')},
                 {'type':'contact', 'id':id}
                 ]
        index = Index()
        index.index(type, id, text, terms)
    
    @staticmethod
    def get(id):
        return meta.Session.query(Contact).filter(Contact.deleted==None).filter_by(id=id).first()
    
    @staticmethod
    def update(**kwargs):
        contact = Contact.get(kwargs['id'])
        for key in kwargs:
            contact.__setattr__(key, kwargs[key])

        meta.Session.commit()
        session.save()
        
        contact_type = Contact_type.get(kwargs['typeid'])
        index_update = IndexUpdate()
        index_update.updateItem('contact', kwargs['id'])
        index_update.updateData(kwargs['label'] + ' ' + str(kwargs['description']) + ' ' + str(contact_type.label))
        index_update.update()
    
    @staticmethod
    def get_all():
        return meta.Session.query(Contact).join(Contact_type).filter(Contact.deleted==None).filter(Contact_type.companyid==request.environ.get('COMPANY_ID')).order_by(Contact.label).all()

    @staticmethod
    def get_all_with_typeid(typeid):
        return meta.Session.query(Contact).filter(Contact.deleted==None).filter_by(typeid=typeid).order_by(Contact.label).all()
    
    @staticmethod
    def delete(id):
        contact = Contact.get(id)
        recycleId = Recycle.create("Contact deleted: {0}".format(contact.label))
        contact.deleted = recycleId
        
        meta.Session.commit()
        session.save()
        
        index_update = IndexUpdate()
        index_update.updateItem('contact', id)
        index_update.updateTerm('deleted', 0, recycleId)
        index_update.update()
        
        