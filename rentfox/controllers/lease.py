import logging

from pylons import request, response, session, tmpl_context as c
from pylons.controllers.util import redirect_to

from rentfox.lib.base import BaseController, render
from rentfox import model, settings
import rentfox.model.meta as meta
import rentfox.lib.helpers as h
from rentfox.lib import valid

import json
import uuid
import datetime

log = logging.getLogger(__name__)

class LeaseController(BaseController):
    @h.authorize(h.is_manager)
    @h.authenticate
    def __before__(self):
        pass
    
    def create(self):
    	errorslist = self.validate('create')
        if errorslist:
            leaseJSON = {'errors': errorslist}
            return json.dumps(leaseJSON)
    	
        unitid = request.POST['unitId']
        m2m = request.POST['m2m']
        due = request.POST['due']
        rent = request.POST['rent'].replace(',', '')
        depositPaid = request.POST['deposit_paid']
        startdate = request.POST['startdate'].split('/')
        startdate = datetime.date(int(startdate[2]), int(startdate[0]), int(startdate[1]))
        if m2m == 'true':
            enddate = None
            outdate = None
        else:
            enddate = request.POST['enddate'].split('/')
            enddate = datetime.date(int(enddate[2]), int(enddate[0]), int(enddate[1]))
            if request.POST['m2m_after'] == 'true':
            	outdate = None
            else:
            	outdate = enddate
        
        leaseid = str(uuid.uuid1())
        model.Lease.create(
                           id=leaseid,
                           unitid = unitid,
                           startdate = startdate,
                           enddate = enddate,
                           outdate = outdate,
                           deposit = request.POST['deposit'].replace(',', ''),
                           depositpaid = depositPaid,
                           rent = rent,
                           due = due,
                           latecharge = request.POST['latecharge'].replace(',', '') if request.POST['latecharge'] else 0,
                           interval = request.POST['interval'],
                           graceperiod = request.POST['graceperiod'] if request.POST['graceperiod'] else 0
                           )
        
        
        if depositPaid == 'true' or request.POST['prev_paid'] == 'true':
            propertyid = model.Unit.get_propertid_unit(unitid)
            record = model.Unit.get_unit_property_name(unitid)
            name = 'Unit ' + record[0] + ', ' + record[1]
            companyId = request.environ.get("COMPANY_ID")
            
        if depositPaid == 'true':
            depositDate = request.POST['startdate'].split('/')
            m = int(depositDate[0])
            d = int(depositDate[1])
            y = int(depositDate[2])
            now = datetime.datetime.today()
            depositDate = datetime.datetime(y,m,d,now.hour,now.minute,now.second)
            model.Transaction.create(
                                     id=str(uuid.uuid1()),
                                     leaseid=leaseid,
                                     unitid=unitid,
                                     companyid=companyId,
                                     propertyid=propertyid,
                                     type='Deposit',
                                     date= depositDate,
                                     amount= request.POST['deposit'].replace(',', ''),
                                     income=1,
                                     name=name
                                     )
        
        if request.POST['prev_paid'] == 'true':
            model.Transaction.record_prev_paid(
                                         leaseid=leaseid,
                                         unitid=unitid,
                                         companyid=companyId,
                                         propertyid=propertyid,
                                         due=due,
                                         rent=rent,
                                         startdate=request.POST['startdate'],
                                         name=name
                                         )
        
        redirect_to(protocol=settings.PROTOCOL, controller='unit', action='json', id=unitid)
    
    def save(self):
        errorslist = self.validate('save')
        if errorslist:
            leaseJSON = {'errors': errorslist}
            return json.dumps(leaseJSON)
        
        unitid = request.POST['unitId']
        m2m = request.POST['m2m']
        startdate = request.POST['startdate'].split('/')
        startdate = datetime.date(int(startdate[2]), int(startdate[0]), int(startdate[1]))
        if m2m == 'true':
            enddate = None
            outdate = None
        else:
            enddate = request.POST['enddate'].split('/')
            enddate = datetime.date(int(enddate[2]), int(enddate[0]), int(enddate[1]))
            if request.POST['m2m_after'] == 'true':
                outdate = None
            else:
                outdate = enddate
        
        model.Lease.save(
                           id=request.POST['leaseId'],
                           unitid = unitid,
                           startdate = startdate,
                           enddate = enddate,
                           outdate = outdate,
                           deposit = request.POST['deposit'].replace(',', ''),
                           depositpaid = request.POST['deposit_paid'],
                           rent = request.POST['rent'].replace(',', ''),
                           due = request.POST['due'],
                           latecharge = request.POST['latecharge'].replace(',', '') if request.POST['latecharge'] else 0,
                           interval = request.POST['interval'],
                           graceperiod = request.POST['graceperiod'] if request.POST['graceperiod'] else 0
                           )
        
        redirect_to(protocol=settings.PROTOCOL, controller='lease', action='json', id=request.POST['leaseId'])
        
    def endLease(self):
        leaseid = request.POST['leaseid']
        unitid = request.POST['unitId']
        
        if valid.date(request.POST['moveOutDate']):
            out = request.POST['moveOutDate'].split('/')
            outdate = datetime.date(int(out[2]), int(out[0]), int(out[1]))
            #pulse
            unit = model.Unit.get_unit(unitid)
            property_name = model.Property.get_name_by_id(unit.propertyid)
            model.Pulse.create(
                         unitid = unit.id,
                         propertyid = unit.propertyid,
                         type = 'lease',
                         html = '<div class="unit">Moveout date has been set for <a href="/unit/view/{1}">{3} #{2}</a> to {0}</div>'.format(
                                    outdate.strftime("%B %d, %Y"),
                                    unit.id,
                                    unit.label,
                                    property_name
                                    )
                         )
        else:
            outdate = None
        model.Lease.update(leaseid, outdate=outdate)
        redirect_to(protocol=settings.PROTOCOL, controller='lease', action='json', id=leaseid)
    
    def delete(self):
        leaseid = request.POST['leaseid']
        unitid = request.POST['unitId']
        model.Lease.delete(leaseid)
        redirect_to(protocol=settings.PROTOCOL, controller='unit', action='json', id=unitid)
    
    def validate(self, action=None):
    	startdate = request.POST['startdate']
    	enddate = request.POST['enddate']
    	deposit = request.POST['deposit']
    	rent = request.POST['rent'].replace(',','')
    	latecharge = request.POST['latecharge']
        unitid = request.POST['unitId']
    	now = datetime.date.today()
        m2m = request.POST['m2m']
        if m2m == 'false':
            end_date = request.POST['enddate'].split('/')
            end_date = datetime.date(int(end_date[2]), int(end_date[0]), int(end_date[1]))
        
    	errorslist = []
        
        if request.POST['m2m'] == 'false':
            if startdate and not enddate:
        		errorslist.append({'selector':'#lease-end', "message":"There is contract start date but no contract end date"})
            elif enddate and not startdate:
        		errorslist.append({'selector':'#lease-start', "message":"There is contract end date but no contract start date"})
            elif not valid.date(startdate):
                errorslist.append({'selector':'#lease-start', "message":'Please enter a valid date, i.e. "01/08/2010"'})
            elif not valid.date(enddate):
                errorslist.append({'selector':'#lease-end', "message":'Please enter a valid date, i.e. "01/08/2010"'})
            elif not valid.date(startdate, enddate):
                errorslist.append({'selector':'#lease-start', "message":"Contract start date cannot be after contract end date"})
            elif m2m == 'false' and now > end_date:
                errorslist.append({'selector':'#lease-end', "message":"Sorry, an expired lease contract cannot be added/edited"})
        else:
            if not valid.date(startdate):
                errorslist.append({'selector':'#lease-start', "message":'Please enter a valid date, i.e. "01/08/2010"'})
    	start = startdate.split('/')
        startYear = int(start[2])
        if startYear < 2006:
            errorslist.append({'selector':'#lease-start', "message":"Start date must be after 2005"})
        if not valid.money(rent):
            errorslist.append({'selector':'#lease-rent', "message":"Rent: Please enter a valid value"})
        if not valid.money(deposit):
    		errorslist.append({'selector':'#lease-deposit', "message":"Deposit: Please enter a valid value"})
    	if latecharge and not valid.money(latecharge):
    		errorslist.append({'selector':'#lease-lateFee', "message":"Late Fee: Please enter a valid value"})
        
        if not valid.rent(rent):
            errorslist.append({'selector':'#lease-rent', "message":"That's a bit too high for monthly rent."})
        if not valid.deposit(deposit):
            errorslist.append({'selector':'#lease-deposit', "message":"That's a bit too high for a deposit."})
        if not valid.latecharge(latecharge):
            errorslist.append({'selector':'#lease-lateFee', "message":"That's a bit too high for late charge."})
    	
        if action == 'create' and not errorslist:
            now = datetime.date.today()
            start = startdate.split('/')
            startYear = int(start[2])
            start = datetime.date(int(start[2]), int(start[0]), int(start[1]))
            
            if model.Lease.overlap(unitid, startdate):
                errorslist.append({"message":"Lease date overlap. Please make sure this lease does not overlap with another lease."})
            elif model.Lease.has_future_lease(unitid) and start > now:
                errorslist.append({"message":"This unit already has a future lease set up. Please delete that one before creating a new one."})
        
        return errorslist
    	
    def removeTenant(self):
        leaseid = request.POST['leaseid']
        tenantid = request.POST['userid']
        
        model.Tenant_lease.delete(tenantid, leaseid)
        
        unitid = model.Lease.get_unitid(leaseid)

        redirect_to(protocol=settings.PROTOCOL, controller='unit', action='json', id=unitid)
    
    def json(self, id=None):

        lease = model.Lease.get(id)

        if lease:
            tenants = model.Tenant_lease.getTenantsByLeaseId( id )
            outdate = lease.outdate and lease.outdate.strftime("%B %d, %Y") or 'No date set'
            enddate = lease.enddate and lease.enddate.strftime("%B %d, %Y") or 'No date set'
            editup = lease.enddate and lease.enddate.strftime("%m/%d/%Y") or ''
            leaseInfo = {
                'id': lease.id,
                'start': lease.startdate.strftime("%B %d, %Y"),
                'editStart': lease.startdate.strftime("%m/%d/%Y"),
                'editUp': editup,
                'up': enddate,
                'out': outdate,
                'deposit': lease.deposit,
                'depositPaid': lease.depositpaid,
                'rent': lease.rent,
                'due': lease.due,
                'lateCharge': lease.latecharge,
                'interval': lease.interval,
                'gracePeriod': lease.graceperiod,
                'type': 'past',
                'tenants' : tenants,
                'status': model.Lease.status(lease.startdate, lease.enddate, lease.outdate)
            }
        else:
            leaseInfo = 0
        
        return json.dumps(leaseInfo)