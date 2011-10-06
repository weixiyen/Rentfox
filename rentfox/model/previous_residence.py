"""The application's model objects"""
import sqlalchemy as sa
from sqlalchemy import orm
from sqlalchemy import schema, types
from pylons import session

from rentfox.model import meta
import datetime
from rentfox.lib.types_uuid import UUID

previous_residence_table = schema.Table('previous_residence', meta.metadata,
    schema.Column('id', UUID(), primary_key=True),
    schema.Column('tenantid', UUID(),
        schema.ForeignKey('tenant.id')),
    schema.Column('startdate', types.Date),
    schema.Column('enddate', types.Date),
    schema.Column('address', types.Unicode(100), nullable=False),
    schema.Column('city', types.Unicode(50), nullable=False),
    schema.Column('state', types.Unicode(2), nullable=False),
    schema.Column('landlordname', types.Unicode(70), nullable=False),
    schema.Column('landlordemail', types.Unicode(100), nullable=False),
    schema.Column('landlordphone', types.Unicode(50), nullable=False),
    schema.Column('reason', types.Unicode(255), nullable=False),
    schema.Column('deleted', UUID())
)


class Previous_residence(object):
    def __init__(self, id, tenantid, startdate, enddate, address,\
                 city, state, landlordname, landlordemail, landlordphone, reason):
        self.id = id
        self.tenantid = tenantid
        self.startdate = startdate
        self.enddate = enddate
        self.address = address
        self.city = city
        self.state = state
        self.landlordname = landlordname
        self.landlordemail = landlordemail
        self.landlordphone = landlordphone
        self.reason = reason
        
        meta.Session.add(self)
        meta.Session.commit()
        session.save()
    
    @staticmethod
    def get(id):
        return meta.Session.query(Previous_residence).filter_by(id=id).first()
    
    @staticmethod
    def save(id, tenantid, startdate, enddate, address,\
             city, state, landlordname, landlordemail, landlordphone, reason):
        residence = Previous_residence.get(id)
        
        residence.tenantid = tenantid
        residence.startdate = startdate
        residence.enddate = enddate
        residence.address = address
        residence.city = city
        residence.state = state
        residence.landlordname = landlordname
        residence.landlordemail = landlordemail
        residence.landlordphone = landlordphone
        residence.reason = reason
        
        meta.Session.commit()
        session.save()

    @staticmethod
    def get_records_with_tenantid(tenantid):
        return meta.Session.query(Previous_residence).filter_by(tenantid=tenantid).order_by(Previous_residence.enddate.desc())
    
    @staticmethod
    def delete(id):
        prevres = meta.Session.query(Previous_residence).filter_by(id=id).first()
        meta.Session.delete(prevres)
        meta.Session.commit()
        session.save()
