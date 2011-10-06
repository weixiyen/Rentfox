"""The application's model objects"""
import sqlalchemy as sa
from sqlalchemy import orm
from sqlalchemy import schema, types
from pylons import session
from rentfox.lib.types_uuid import UUID
from rentfox.model import meta

tenant_company_table = schema.Table('tenant_company', meta.metadata,
    schema.Column('id', UUID(), primary_key=True),
    schema.Column('companyid', UUID(),
        schema.ForeignKey('company.id'), nullable=False),
    schema.Column('tenantid', UUID(),
        schema.ForeignKey('tenant.id'), nullable=False),
    schema.Column('deleted', UUID())
)


class Tenant_company(object):
    @staticmethod
    def create(**kwargs):
        tenant_company = Tenant_company()
        
        for key in kwargs:
            tenant_company.__setattr__(key, kwargs[key])
        
        meta.Session.add(tenant_company)
        meta.Session.commit()
        session.save()