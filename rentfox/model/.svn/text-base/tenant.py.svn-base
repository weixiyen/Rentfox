"""The application's model objects"""
import sqlalchemy as sa
from sqlalchemy import orm
from sqlalchemy import schema, types
from pylons import session, request
from rentfox.lib.types_uuid import UUID
from rentfox.lib.search import Index, Update as IndexUpdate

from rentfox.model import meta, Lease, Property

import datetime

def now():
    return datetime.datetime.now()

tenant_table = schema.Table('tenant', meta.metadata,
    schema.Column('id', UUID(), primary_key=True),
    schema.Column('first_name', types.Unicode(30)),
    schema.Column('last_name', types.Unicode(30)),
    schema.Column('middle_name', types.Unicode(30)),
    schema.Column('suffix', types.Unicode(10)),
    schema.Column('phone', types.Unicode(20)),
    schema.Column('dob', types.Date),
    schema.Column('ssn', types.Unicode(20)),
    schema.Column('created', types.TIMESTAMP(), default=now),
    schema.Column('email', types.Unicode(100)),
    schema.Column('photoid', UUID(), schema.ForeignKey('photo.id') ),
    schema.Column('deleted', UUID())
)

class Tenant(object):

    @staticmethod
    def create(**kwargs):
        tenant = Tenant()
        
        for key in kwargs:
            tenant.__setattr__(key, kwargs[key])
        
        meta.Session.add(tenant)
        meta.Session.commit()
        session.save()
        
        # index for searching later
        type = 'tenant'
        id = tenant.id
        text = ' '.join([tenant.first_name, tenant.last_name])
        terms = [
                 {'type':'company', 'id':request.environ.get('COMPANY_ID')},
                 {'type':'tenant', 'id':id}
                 ]
        index = Index()
        index.index(type, id, text, terms)

    @staticmethod
    def update(**kwargs):
        tenant = Tenant.get(kwargs['id'])
        
        for key in kwargs:
            tenant.__setattr__(key, kwargs[key])
        
        meta.Session.commit()
        session.save()
        
        text = ' '.join([tenant.first_name, tenant.last_name])
        index_update = IndexUpdate()
        index_update.updateItem('tenant', kwargs['id'])
        index_update.updateData(text)
        index_update.update()
    
    @staticmethod
    def get(tenantid):
        return meta.Session.query(Tenant).filter_by(id=tenantid).first()
    
    @staticmethod
    def get_tenantInfo(tenantid):
        from rentfox.model import Tenant_lease, Unit
        record = meta.Session.query(Lease.unitid,Property.id).join(Tenant_lease,Unit,Property).\
                                                                filter(Tenant_lease.tenantid==tenantid).\
                                                                filter(Lease.id==Tenant_lease.leaseid).\
                                                                filter(Unit.id==Lease.unitid).\
                                                                filter(Unit.propertyid==Property.id).first()
        return record
    
    @staticmethod
    def name_match(fname, lname):
        from rentfox.model import Tenant_company
        return meta.Session.query(Tenant).join(Tenant_company).filter(Tenant.first_name==fname).filter(Tenant.last_name==lname).filter(Tenant_company.companyid==request.environ.get('COMPANY_ID')).all()
    
    @staticmethod
    def email_match(email):
        from rentfox.model import Tenant_company
        return meta.Session.query(Tenant).join(Tenant_company).filter(Tenant.email==email).filter(Tenant_company.companyid==request.environ.get('COMPANY_ID')).all()