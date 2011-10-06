"""The application's model objects"""
import sqlalchemy as sa
from sqlalchemy import orm
from pylons import request, session
from rentfox.model import meta
from rentfox.model.property import Property
from rentfox.lib.types_uuid import UUID

import datetime, uuid
from sqlalchemy import schema, types, desc

def now():
    return datetime.datetime.now()

pulse_table = schema.Table('pulse', meta.metadata,
    schema.Column('id', UUID(), primary_key=True),
    schema.Column('companyid', UUID(),
        schema.ForeignKey('company.id'), nullable=False),
    schema.Column('propertyid', UUID(),
        schema.ForeignKey('property.id'), nullable=False),
    schema.Column('unitid', UUID(),
        schema.ForeignKey('unit.id')),
    schema.Column('type', types.Unicode(15), nullable=False),
    schema.Column('date', types.TIMESTAMP, default=now),
    schema.Column('html', types.Text, nullable=False),
    schema.Column('deleted', UUID())
)

class Pulse(object):
    def __init__(self):
        pass
    
    @staticmethod
    def create(**kwargs):
        pulse = Pulse()
        for key in kwargs:
            pulse.__setattr__(key, kwargs[key])
        pulse.id = str(uuid.uuid1())
        pulse.companyid = request.environ.get("COMPANY_ID")
        meta.Session.add(pulse)
        meta.Session.commit()
        session.save()
        return pulse.id
    
    @staticmethod
    def delete(id):
        meta.Session.query(Pulse).filter_by(id=id).first()
        meta.Session.delete(pulse)
        meta.Session.commit()
        session.save()
    
    @staticmethod
    def get(type=None, limit=None, propertyid=None, unitid=None):
        companyid = request.environ.get("COMPANY_ID")
        pulse_arr = []
        counter = 0
        if limit == None: limit = 20
        
        filter = Property.get_property_ids_of_username(request.environ.get('REMOTE_USER'))
        
        query = meta.Session.query(Pulse).filter(Pulse.propertyid.in_(filter))
        if type != None:
            query = query.filter(Pulse.type==type)
        if propertyid:
            query = query.filter(Pulse.propertyid==propertyid)
        if unitid:
            query = query.filter(Pulse.unitid==unitid)
        pulses = query.order_by(desc(Pulse.date))[:limit]  
        
        for pulse in pulses:
            show_pulse = pulse.propertyid in filter and True or False
            if show_pulse:
                pulse_arr.append({
                                 'id': pulse.id,
                                 'type': pulse.type,
                                 'html': pulse.html,
                                 'date': pulse.date.strftime("%m/%d/%Y"),
                                 'day': pulse.date.strftime("%b %d")
                                 })
            
        return pulse_arr
        