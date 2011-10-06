"""The application's model objects"""
import sqlalchemy as sa
from sqlalchemy import orm
from sqlalchemy import schema, types, desc, and_, or_
from pylons import session, request
from rentfox.lib.types_uuid import UUID
from rentfox.model import meta
from rentfox.model.tenant import Tenant
from rentfox.model.unit import Unit
from rentfox.model.lease import Lease
from rentfox.model.property import Property
from rentfox.model.tenant_company import Tenant_company

import datetime

tenant_lease_table = schema.Table('tenant_lease', meta.metadata,
    schema.Column('id', UUID(), primary_key=True),
    schema.Column('leaseid', UUID(),
        schema.ForeignKey('lease.id'), nullable=False),
    schema.Column('tenantid', UUID(),
        schema.ForeignKey('tenant.id'), nullable=False),
    schema.Column('deleted', UUID())
)


class Tenant_lease(object):
    
    @staticmethod
    def get_tenants_from_lease(leaseid):
        tenant_lease = meta.Session.query(Tenant_lease).filter_by(leaseid=leaseid).all()
        tenantList = []
        for item in tenant_lease:
            tenantid = item.tenantid
            tenant = meta.Session.query(Tenant).filter_by(id=tenantid).first()
            tenantList.append(tenant)
        
        return tenantList

    @staticmethod
    def create(**kwargs):
        tenant_lease = Tenant_lease()
        
        for key in kwargs:
            tenant_lease.__setattr__(key, kwargs[key])
        
        meta.Session.add(tenant_lease)
        meta.Session.commit()
        session.save()
    
    @staticmethod
    def remove(tenantid, leaseid):
        tenant_lease = meta.Session.query(Tenant_lease).filter_by(tenantid = tenantid).filter_by(leaseid = leaseid).one()
        meta.Session.delete(tenant_lease)
        meta.Session.commit()
        session.save()
    
    @staticmethod
    def tenantInLease(tenantid, leaseid):
        return meta.Session.query(Tenant_lease).filter_by(tenantid=tenantid).filter_by(leaseid=leaseid).count()
        
    @staticmethod
    def getUnitsByTenantId(tenantid):
        
        units = meta.Session.query(Unit.id, Unit.label, Property.name, Property.type).join(Property, Lease, Tenant_lease, Tenant, Tenant_company).filter(Tenant.id==tenantid).filter(Tenant_company.companyid==request.environ.get('COMPANY_ID')).order_by(desc(Lease.startdate)).all()
        
        units_array = []
        for unit in units:
            label = unit.name if unit.type == 'single' else '{0} #{1}'.format(unit.name, unit.label)
            units_array.append({'id': unit.id, 'label': label})
        return units_array
    
    @staticmethod
    def getTenantsByLeaseId(leaseid):
        
        tenants = meta.Session.query(Tenant).join(Tenant_lease).filter(Tenant_lease.leaseid==leaseid).order_by(Tenant.created).all()
        
        tenants_arr = []
        for tenant in tenants:
            tenants_arr.append({'id':tenant.id,
                                'name':'{0} {1}'.format(tenant.first_name, tenant.last_name),
                                'email':tenant.email,
                                'phone':tenant.phone
                                })
        return tenants_arr
    
    @staticmethod
    def get_lease_of_tenant(tenantid):
        leaseid = ''
        record = meta.Session.query(Tenant_lease).filter(Tenant_lease.tenantid==tenantid).first()
        if record:
            leaseid = record.leaseid
        
        return leaseid
    
    @staticmethod
    def totalActiveTenantsInProperty(propertyid):
        today = datetime.date.today()
        total = meta.Session.query(Tenant_lease).join(Lease,Unit).filter(Unit.propertyid==propertyid).filter(or_(Lease.outdate == None, Lease.outdate >= today)).count()
        return total
    
    @staticmethod
    def totalTenantsInCompany(companyid):
        today = datetime.date.today()
        total = meta.Session.query(Tenant_lease).join(Lease,Unit,Property).filter(Property.companyid==companyid).count()
        return total
    
    @staticmethod
    def get_tenants_from_unit(unitid):
        return meta.Session.query(Tenant).join(Tenant_lease,Lease).filter(and_(Lease.unitid==unitid,Lease.id==Tenant_lease.leaseid,Tenant_lease.tenantid==Tenant.id)).all()