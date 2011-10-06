"""The application's model objects"""
import sqlalchemy as sa
from sqlalchemy import orm
from sqlalchemy import schema, types, desc, asc, and_, or_
from pylons import session, request

from rentfox.model import meta, Unit, Pulse, Property, Recycle
from rentfox.lib.types_uuid import UUID

import datetime

lease_table = schema.Table('lease', meta.metadata,
    schema.Column('id', UUID(), primary_key=True),
    schema.Column('unitid', UUID(),
        schema.ForeignKey('unit.id'), nullable=False),
    schema.Column('startdate', types.Date),
    schema.Column('enddate', types.Date),
    schema.Column('outdate', types.Date),
    schema.Column('deposit', types.Float(2)),
    schema.Column('depositpaid', types.Boolean),
    schema.Column('rent', types.Float(2)),
    schema.Column('due', types.Integer),
    schema.Column('latecharge', types.Float(2)),
    schema.Column('interval', types.Integer),
    schema.Column('graceperiod', types.Integer),
    schema.Column('deleted', UUID())
)


class Lease(object):
    @staticmethod
    def create(**kwargs):
        lease = Lease()
        
        for key in kwargs:
            lease.__setattr__(key, kwargs[key])
        
        meta.Session.add(lease)
        meta.Session.commit()
        session.save()
        
        unit = Unit.get_unit(kwargs['unitid'])
        property_name = Property.get_name_by_id(unit.propertyid)
        Pulse.create(
                     unitid = unit.id,
                     propertyid = unit.propertyid,
                     type = 'lease',
                     html = '<div class="unit">A new lease will begin on {0} in <a href="/unit/view/{1}">{3} #{2}</a></div>'.format(
                                kwargs['startdate'].strftime('%B %d'),
                                unit.id,
                                unit.label,
                                property_name
                                )
                     )
    
    @staticmethod
    def save(**kwargs):
        lease = Lease.get(kwargs['id'])
        
        for key in kwargs:
            lease.__setattr__(key, kwargs[key])
        
        meta.Session.commit()
        session.save()
    
    @staticmethod
    def get(id):
        return meta.Session.query(Lease).filter(Lease.deleted==None).filter_by(id=id).first()
    
    @staticmethod
    def get_all_from_unit(unitid):
        return meta.Session.query(Lease).filter(Lease.deleted==None).filter_by(unitid=unitid).order_by(desc(Lease.startdate)).all()
    
    @staticmethod
    def get_unitid(id):
        lease = Lease.get(id)
        return lease.unitid
    
    @staticmethod
    def update(id, **kwargs):
        lease = Lease.get(id)
        for key in kwargs:
            lease.__setattr__(key, kwargs[key])
        
        meta.Session.commit()
        session.save()
    
    @staticmethod
    def delete(leaseid):
        lease = Lease.get(leaseid)
        
        #pulse
        unit = Unit.get_unit(lease.unitid)
        property_name = Property.get_name_by_id(unit.propertyid)
        lease_start = lease.startdate.strftime("%B %d, %Y")
        unit_label = unit.label
        Pulse.create(
                     unitid = unit.id,
                     propertyid = unit.propertyid,
                     type = 'warning',
                     html = '<div class="unit">Lease starting from {0} for <a href="/unit/view/{1}">{3} #{2}</a>\'s has been deleted.</div>'.format(
                                lease_start,
                                unit.id,
                                unit_label,
                                property_name
                                )
                     )
        
        recycleId = Recycle.create("Lease starting from {0} deleted from {1} #{2}".format(lease_start, property_name, unit_label))
        lease.deleted = recycleId
        meta.Session.commit()
        session.save()
    
    @staticmethod
    def deleteByUnitId(unitid, recycleId):
        meta.Session.query(Lease).filter(Lease.unitid==unitid).update({Lease.deleted:recycleId})
        meta.Session.commit()
        session.save()
    
    @staticmethod
    def deleteByPropertyId(propertyid, recycleId):
        leases = meta.Session.query(Lease).join(Unit).filter(Unit.propertyid==propertyid).all()
        for lease in leases:
            lease.deleted = recycleId
        
        meta.Session.commit()
        session.save()
    
    @staticmethod
    def get_current(leaselist):
    	current = ''
        now = datetime.date.today()
    	for lease in leaselist:
            if not lease.outdate or now < lease.outdate:
                current = lease
                break

    	return current
 
    @staticmethod
    def get_current_of_unit(unitid):
        id = ''
        now = datetime.date.today()
        lease = meta.Session.query(Lease.id).filter(and_(Lease.unitid==unitid,\
                                                         Lease.startdate<=now,\
                                                         now<=Lease.outdate,\
                                                         Lease.deleted==None)).first()
        if lease:
            id = lease.id
        
        return id
    
    @staticmethod
    def get_earliest(propidList):
        return meta.Session.query(Lease.startdate).join(Unit).\
                            filter(Lease.deleted == None).\
                            filter(Unit.propertyid.in_(propidList)).\
                            order_by(asc(Lease.startdate)).first()
    
    @staticmethod
    def overlap(unitid, startdate):
        """ Return true if either the unit has a lease without a outdate or
            the startdate is before outdate of any lease for the unit.
        """
        date = startdate.split('/')
        start = datetime.date(int(date[2]), int(date[0]), int(date[1]))
        
        latestLease = meta.Session.query(Lease).filter(Lease.deleted==None).filter(Lease.unitid==unitid).order_by(desc(Lease.startdate)).first()
        if latestLease:
            if not latestLease.outdate or start < latestLease.outdate:
                return 1
        return 0
    
    @staticmethod
    def totalActiveLeasesInProperty(propertyid):
        today = datetime.date.today()
        total = meta.Session.query(Lease).join(Unit).filter(Lease.deleted==None).filter(Unit.propertyid==propertyid).filter(or_(Lease.outdate == None, Lease.outdate >= today)).count()
        return total
    
    @staticmethod
    def totalActiveLeasesInCompany(companyid):
        today = datetime.date.today()
        total = meta.Session.query(Lease).join(Unit,Property).filter(Lease.deleted==None).filter(Property.companyid==companyid).filter(or_(Lease.outdate == None, Lease.outdate >= today)).count()
        return total
    
    @staticmethod
    def has_future_lease(unitid):
        latestLease = meta.Session.query(Lease).filter(Lease.deleted==None).filter_by(unitid=unitid).order_by(desc(Lease.startdate)).first()
        now = datetime.date.today()
        if latestLease and latestLease.startdate > now:
            return 1
        return 0
            
    @staticmethod
    def status(startdate, enddate, outdate):
        now = datetime.date.today()
    	today = datetime.date(now.year, now.month, now.day)
    	start = startdate and startdate.strftime("%B %d, %Y") or None
        if enddate:
            enddate = datetime.date(enddate.year, enddate.month, enddate.day)
            end = enddate.strftime("%B %d, %Y")
        if outdate:
            outdate = datetime.date(outdate.year, outdate.month, outdate.day)
            out = outdate and outdate.strftime("%B %d, %Y") or None
    	
        if not startdate:
            return 'Contract Broken'
        if today < startdate:
            return 'Contract begins on ' + start
        if today == startdate:
            return 'Contract begins today'
        if enddate and outdate:
            if today == enddate == outdate:
                return 'Lease ends today'
            if today == enddate < outdate:
                return 'Contract ends today, month-to-month until' + out
            if today == outdate < enddate:
                return 'Lease ended prematurely today'
            if today < enddate == outdate:
                return 'Contract is active. Lease ends on ' + out
            if today < enddate < outdate:
                return 'Contract is active. Month-to-month after contract until ' + out
            if today < outdate < enddate:
                return 'Lease will end prematurely on ' + out
            if enddate < today == outdate:
                return 'Lease ending today'
            if enddate < today < outdate:
                return 'Contract ended. Month-to-month until ' + out
            if outdate < today or outdate < enddate:
                return 'Lease ended prematurely on ' + out
        if enddate and not outdate:
            if today < enddate:
                return 'Contract is active. Month-to-month after contract'
            if today == enddate:
                return 'Contract ends today. Starting month-to-month tomorrow'
            if enddate < today:
                return 'Contract from ' + start + ' - ' + end + 'has ended, now month-to-month'
        if outdate and not enddate:
            if today < outdate:
                return 'Month-to-month ending on ' + out
            if today == outdate:
                return 'Month-to-month lease ends today'
            if outdate < today:
                return 'Month-to-month lease ended on ' + out
        if not enddate and not outdate:
            return 'Month-to-month contract is active'
        
        return 'Lease status not available'
    
    @staticmethod
    def unit_status(startdate, enddate, outdate):
        """ Return either Vacant, Month-to-month, Under Contract, Moving Out, or Moving In
        """
        
        if not startdate:
            return 'Vacant'
        now = datetime.date.today()
        today = datetime.date(now.year, now.month, now.day)
        if enddate:
            enddate = datetime.date(enddate.year, enddate.month, enddate.day)
        if outdate:
            outdate = datetime.date(outdate.year, outdate.month, outdate.day)
        
        
        if startdate:
            if today < startdate and (not enddate or today < enddate) and (not outdate or today < outdate):
                return 'Moving In'
            if (not enddate and not outdate) or (enddate and enddate < today and not outdate):
                return 'Month-to-month'
            if outdate:
                if today == outdate:
                    return 'Moving Out'
                if today > outdate:
                    return 'Vacant'
                if today < outdate:
                    return 'Under Contract'
            else:
                return 'Under Contract'
        else:
            return 'Vacant'
    