"""The application's model objects"""
import sqlalchemy as sa
from sqlalchemy import orm

from rentfox.model import meta

import datetime
from sqlalchemy import schema, types

from rentfox.model.floorplan import *
from rentfox.model.property import *
from rentfox.model.pulse import *
from rentfox.model.lease import *
from rentfox.model.tenant_lease import *
from rentfox.model.tenant_company import *
from rentfox.model.transaction import *
from rentfox.model.unit import *
from rentfox.model.unitphoto import *
from rentfox.model.property_manager import *
from rentfox.model.tenant import *
from rentfox.model.manager import *
from rentfox.model.company import *
from rentfox.model.recycle import *
from rentfox.model.photo import *
from rentfox.model.contact import *
from rentfox.model.contact_type import *
from rentfox.model.emergency_contact import *
from rentfox.model.previous_residence import *


def init_model(engine):
    """Call me before using any of the tables or classes in the model"""
    ## Reflected tables must be defined and mapped here
    #global reflected_table
    #reflected_table = sa.Table("Reflected", meta.metadata, autoload=True,
    #                           autoload_with=engine)
    #orm.mapper(Reflected, reflected_table)
    #
    sm = orm.sessionmaker(autoflush=True, autocommit=False, bind=engine)

    meta.engine = engine
    meta.Session = orm.scoped_session(sm)


orm.mapper(Tenant, tenant_table, properties={
    'lease':orm.relation(Lease, secondary=tenant_lease_table),
    'company':orm.relation(Company, secondary=tenant_company_table),
    'emergency_contact':orm.relation(Emergency_contact, backref='tenant'),
    'previous_residence':orm.relation(Previous_residence, backref='tenant')
})

orm.mapper(Manager, manager_table, properties={
    'property':orm.relation(Property, secondary=property_manager_table),
    'recycle':orm.relation(Recycle, backref='manager')    
})

orm.mapper(Recycle, recycle_table)

orm.mapper(Company, company_table, properties={
    'tenant':orm.relation(Tenant, secondary=tenant_company_table),
    'property':orm.relation(Property, backref='company'),
    'manager':orm.relation(Manager, backref='company'),
    'transaction':orm.relation(Transaction, backref='company')
})

orm.mapper(Property, property_table, properties={
    'manager':orm.relation(Manager, secondary=property_manager_table),
    'unit':orm.relation(Unit, backref='property'),
    'pulse':orm.relation(Pulse, backref='property'),
    'floorplan':orm.relation(Floorplan, backref='property'),
    'transaction':orm.relation(Transaction, backref='property')
})

orm.mapper(Unit, unit_table, order_by=unit_table.c.label, properties={
    'pulse':orm.relation(Pulse, backref='unit'),
    'lease':orm.relation(Lease, backref='unit'),
    'transaction':orm.relation(Transaction, backref='unit')
})

orm.mapper(Photo, photo_table)

orm.mapper(Pulse, pulse_table)

orm.mapper(Unitphoto, unitphoto_table)

orm.mapper(Lease, lease_table, properties={
    'tenant':orm.relation(Tenant, secondary=tenant_lease_table),
    'transaction':orm.relation(Transaction, backref='lease')
})

orm.mapper(Transaction, transaction_table)

orm.mapper(Floorplan, floorplan_table, properties={
    'unit':orm.relation(Unit, backref='floorplan')
})

orm.mapper(Contact, contact_table)

orm.mapper(Contact_type, contact_type_table, properties={
    'contact':orm.relation(Contact, backref='contact_type')
})

orm.mapper(Tenant_lease, tenant_lease_table)

orm.mapper(Tenant_company, tenant_company_table)

orm.mapper(Emergency_contact, emergency_contact_table)

orm.mapper(Previous_residence, previous_residence_table)

orm.mapper(Property_manager, property_manager_table)


