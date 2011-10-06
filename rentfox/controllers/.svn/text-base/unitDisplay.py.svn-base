import logging

from pylons import request, response, session, tmpl_context as c
from pylons.controllers.util import redirect_to
from pylons.decorators import validate
from pylons.decorators.rest import restrict

from rentfox.lib.base import BaseController, render
from rentfox.model import Lease, Unit, Property, Manager, Transaction, meta
import rentfox.lib.helpers as h
from rentfox.lib import valid
from sqlalchemy import and_, or_, asc, desc
import datetime
import json
from pylons import session

log = logging.getLogger(__name__)

class UnitdisplayController(BaseController):

    @h.authorize(h.is_manager)
    @h.authenticate
    def __before__(self):
        c.menuSubmenu = 1
        c.menuProperty = 'on'
        c.submenuProperty = 'on'
        c.page_title = 'Units'
        
    def keynat(self, string=None):
        """ Sort list in alphanumeric order.
            
            >>> print(sorted(['a','3','c','B'], key=self.keynat))
            ['3', 'B', 'a', 'c']
        """
        r = []
        for c in string:
            try:
                c = int(c)
                try: r[-1] = r[-1] * 10 + c
                except: r.append(c)
            except:
                r.append(c)
        return r
        
    def json(self):
        
        companyid = request.environ.get("COMPANY_ID")
        propertyId = request.POST['propertyId']
        unit = request.POST['unit']
        sort = request.POST['sort']
        sortOrder = request.POST['sortOrder']
        status = request.POST['status']
        curPage = request.POST['curPage']
        
        if not valid.search(unit):
            return json.dumps({'errors':[{'selector':'', "message":"Unit filter only accepts letters and numbers. Please try again."}]})
        
        if status == 'vacant':
            status = 'Vacant'
        elif status == 'underContract':
            status = 'Under Contract'
        elif status == 'movingIn':
            status = 'Moving In'
        elif status == 'movingOut':
            status = 'Moving Out'
        elif status == 'm2m':
            status = 'Month-to-month'
        now = datetime.date.today()

        startSlice = (int(curPage) - 1) * 20;
        endSlice = startSlice + 20;
        
        propIdList = []
        if propertyId == 'all':
            user_id = Manager.get_id_of_username(request.environ.get("REMOTE_USER"))
            properties = Property.get_propertyList_of_userid(user_id)
            for item in properties:
                propIdList.append(item.id)
        else:
            propIdList.append(propertyId)
        
        if sort == 'rent':
            if sortOrder == 'asc':
                order = Lease.rent.asc()
            else:
                order = Lease.rent.desc()
        elif sort == 'due':
            if sortOrder == 'asc':
                order = Lease.due.asc()
            else:
                order = Lease.due.desc()
        elif sort == 'latePay':
            order = Property.name.asc() # ignore latePay for time being
        else:
            order = Unit.label.asc()
        
        records = meta.Session.query(Unit.label, Unit.id, Lease.rent, Lease.due,\
                                     Lease.startdate, Lease.enddate, Lease.outdate, Lease.id,\
                                     Property.id, Property.name).outerjoin(Lease,Property).\
                                     filter(Unit.deleted==None).\
                                     filter(Lease.deleted==None).\
                                     filter(Unit.propertyid.in_(propIdList))
        # records at this point includes multiple records of same unit with multiple lease records
        
        allRecords = []
        for record in records:
            allRecords.append((record[1], record[4], record[6]))
        
        no_lease_ever = []
        has_old_lease = []
        cur_active_lease = []
        future_lease = []
        
        for item in allRecords:
            unitid = item[0]
            startdate = item[1]
            outdate = item[2]
            
            if not startdate:
                no_lease_ever.append(unitid)
            elif now >= startdate and (not outdate or now <= outdate):
                cur_active_lease.append(unitid)
            elif now > startdate and (now > outdate):
                has_old_lease.append(unitid)
            elif now < startdate:
                future_lease.append(unitid)
        
        records = records.filter(or_(Unit.id.in_(no_lease_ever),\
                                     (and_(Unit.id.in_(cur_active_lease),\
                                           now>=Lease.startdate,\
                                           (or_(Lease.outdate==None,now<Lease.outdate)))),\
                                    (and_(Unit.id.in_(has_old_lease),\
                                          ~Unit.id.in_(cur_active_lease),\
                                          ~Unit.id.in_(future_lease))),\
                                     (and_(Unit.id.in_(future_lease),\
                                           ~Unit.id.in_(cur_active_lease),\
                                           (or_(Lease.outdate==None,\
                                                now<Lease.outdate))))))
        if unit != '0':
            labelLike = '%'+unit+'%'
            records = records.filter(Unit.label.like('%'+labelLike+'%'))
        
        records = records.order_by(order,Unit.label).all()
        
        unsortedRecords = []
        duplicateUnit = []
        for label, unitid, rent, due, start, end, out, leaseid, propid, propname in records:
            if unitid in duplicateUnit and unitid in has_old_lease and not unitid in cur_active_lease and not unitid in future_lease:
                continue
            
            obj = {
                   'label': label,
                   'unitid': unitid,
                   'rent': rent,
                   'due': due,
                   'start': start,
                   'end': end,
                   'out': out,
                   'leaseid': leaseid,
                   'propid': propid,
                   'propname': propname
            }
            unsortedRecords.append(obj)
            duplicateUnit.append(unitid)
            

        labelUnitIdList = []
        recordsList = []
        
        for record in unsortedRecords:
            label = record['label']
            unitid = record['unitid']
            rent = record['rent']
            due = record['due']
            start = record['start']
            end = record['end']
            out = record['out']
            leaseid = record['leaseid']
            propid = record['propid']
            propname = record['propname']
            
            labelId = label+'*'+unitid
            labelUnitIdList.append(labelId)
            
            obj = {
                   'label': label,
                   'unitid': unitid,
                   'rent': rent,
                   'due': due,
                   'start': start,
                   'end': end,
                   'out': out,
                   'leaseid': leaseid,
                   'propid': propid,
                   'propname': propname
            }
            recordsList.append(obj)
            
        sortedRecords = []
        if sort == "0":
            labelUnitIdList = sorted(labelUnitIdList, key=self.keynat)
            for labelId in labelUnitIdList:
                labelId = labelId.split('*')
                label = labelId[0]
                id = labelId[1]
                sortedRecords.extend([d for d in recordsList if d['label'] == label and d['unitid'] == id])
            recordsList = sortedRecords
                                   
        unitRecords = []
        vacantList = []
        vacant = 0
        m2m = 0
        underContract = 0
        movingIn = 0
        movingOut = 0
        totalStatusRecords = 0
        for record in recordsList:
            label = record['label']
            unitid = record['unitid']
            rent = record['rent']
            due = record['due']
            start = record['start']
            end = record['end']
            out = record['out']
            leaseid = record['leaseid']
            propid = record['propid']
            propname = record['propname']
            
            unit_status = Lease.unit_status(start, end, out)
            if unit_status == "Vacant":
                rent = '-'
                due = '-'
                vacant = vacant + 1
            elif unit_status == 'Month-to-month': 
                m2m = m2m + 1
            elif unit_status == 'Under Contract': 
                underContract = underContract + 1
            elif unit_status == 'Moving In':
                movingIn = movingIn + 1
            elif unit_status == 'Moving Out':
                movingOut = movingOut + 1
            
            if status == "all" or unit_status == status:
                totalStatusRecords = totalStatusRecords + 1
                
                obj = {
                       'propertyName': propname,
                       'propertyId': propid,
                       'leaseid': leaseid,
                       'unitId': unitid,
                       'label': label,
                       'rent': rent,
                       'due': due,
                       'latepay': '-',
                       'status': unit_status
                }
                
                if unit_status == 'Vacant':
                    vacantList.append(obj)
                else: 
                    unitRecords.append(obj)
        
        unitRecords.extend(vacantList)
        
        slicedRecords = []
        counter = 0
        for record in unitRecords:
            if startSlice <= counter < endSlice:
                slicedRecords.append(record)
            counter = counter + 1
        
        slicedRecords = Transaction.calLatefee(slicedRecords)
        unitRecords = slicedRecords
        propertyUnit = {
            'unit': unitRecords,
            'totalStatusRecords': totalStatusRecords,
            'vacant': vacant,
            'm2m': m2m,
            'underContract': underContract,
            'movingIn': movingIn,
            'movingOut': movingOut
        }
        return json.dumps(propertyUnit)
        """
        unitDisplay json:
        
        {
            unit:  [
                {
                    propertyName: 'Bayside',
                    propertyId: 'ukef-dfsd-sdfe-360f',
                    unitId: '0265823a-66da-11df-8256-000c29f0db84',
                    label: '101',
                    rent: '2000',
                    due: '5th',
                    latepay: '10',
                    status: 'Vacant' #either Vacant, Month-to-month, Under Contract, Moving Out, Moving In
                },
                {
                    propertyName: 'Shoreline',
                    propertyId: 'ukef-dfsd-sdfe-360f',
                    unitId: 'b06806c8-624d-11df-8256-000c29f0db84',
                    label: '102',
                    rent: '2200',
                    due: '5',
                    latepay: '10',
                    status: 'Vacant' #either Vacant, Month-to-month, Under Contract, Moving Out, Moving In
                },
            ],
            totalStatusRecords: 10,
            vacant: 4,
            m2m: 5,
            underContract: 18,
            movingIn: 0,
            movingOut: 0
        }
        """