import logging

from pylons import request, response, session, tmpl_context as c
from pylons.controllers.util import abort, redirect_to
from pylons.decorators import validate
from pylons.decorators.rest import restrict

from rentfox.lib.base import BaseController, render
from rentfox.model import Lease, Unit, Property, Transaction, Tenant, Tenant_lease, meta
import rentfox.lib.helpers as h
from sqlalchemy import and_, or_, asc, desc
import datetime
import calendar
import json
import uuid
from rentfox.lib import email as mailman
from pylons import session

log = logging.getLogger(__name__)

class RentController(BaseController):

    @h.authorize(h.is_manager)
    @h.authenticate
    def __before__(self):
        c.menuSubmenu = 1
        c.menuProperty = 'on'
        c.submenuProperty = 'on'
    
    def markPaid(self):
        unitId = request.POST['unitId']
        leaseId = request.POST['leaseId']
        amount = request.POST['amount']
        due = int(request.POST['due'])
        forMonth = int(request.POST['forMonth'])
        forYear = int(request.POST['forYear'])
        markLatePaid = request.POST['markLatePaid']
        
        result = {}
        if markLatePaid == '1':
            Transaction.record_late_paid(unitId,forMonth,forYear)
        else:
            companyId = request.environ.get("COMPANY_ID")
            now = datetime.datetime.today()
            id = str(uuid.uuid1())
            record = Unit.get_unit_info(unitId)
            
            curM = now.month
            curY = now.year
            
            if curM != forMonth or (curM == forMonth and curY != forYear):
                now = datetime.datetime.today()
                curHour = now.hour
                curMin = now.minute
                curSec = now.second
                date = datetime.datetime(forYear,forMonth,due,curHour,curMin,curSec)
            else:
                date = now
            
            Transaction.record_rent(
                                    id=str(uuid.uuid1()),
                                    companyid=companyId,
                                    propertyid=record[2],
                                    leaseid=leaseId,
                                    unitid=unitId,
                                    type='Rent',
                                    formonth=forMonth,
                                    foryear=forYear,
                                    date=date,
                                    income=1,
                                    name='Unit ' + record[0] + ', ' + record[1],
                                    amount=amount
                                    )
        
        return json.dumps(result)
    
    def markLate(self):
        unitId = request.POST['unitId']
        latefee = request.POST['latefee']
        forMonth = request.POST['forMonth']
        forYear = request.POST['forYear']
        date = request.POST['date']
        latefeeNum = latefee.replace('$','')
        Transaction.record_latefee(unitId,latefeeNum,forMonth,forYear,date)
        
        remind = True if request.POST['remind'] == 'true' and float(latefeeNum) > 0.0 else False
        if remind:
            tenants = Tenant_lease.get_tenants_from_unit(unitId)
            emails = [tenant.email for tenant in tenants]
            subj = '{0} - late fee owed'.format(request.environ.get('COMPANY_NAME'))
            msg = """\
Dear Tenant,

This is a notice from your landlord that your rent was turned in late.

Amount owed: ${0}

Please pay this amount promptly.

Thanks,

{1}
""".format(latefee, request.environ.get('COMPANY_NAME'))
            mailman.send(emails, subj, msg)
        
        return json.dumps('')
    
    def markUnpaid(self):
        unitId = request.POST['unitId']
        forMonth = request.POST['forMonth']
        forYear = request.POST['forYear']
        
        Transaction.undo_rent(unitId,forMonth,forYear)
        return json.dumps('')
    
    def updateTransaction(self):
        unitId = request.POST['unitId']
        forMonth = request.POST['forMonth']
        forYear = request.POST['forYear']
        amount = request.POST['amount']
        
        Transaction.updateRent(amount,unitId,forMonth,forYear)
        return json.dumps('')
    
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
        month = int(request.POST['month'])
        year = int(request.POST['year'])
        unit = request.POST['unit']
        status = request.POST['status']
        page = request.POST['page']
        prop_list = request.POST['propList']
        propList = prop_list.split(',')
        
        now = datetime.date.today()
        thisDay = now.day
        thisMonth = now.month
        thisYear = now.year
        
        lastDay = calendar.monthrange(year,month)
        lastDay = lastDay[1]
        firstDate = datetime.date(year,month,1)
        lastDate = datetime.date(year,month,int(lastDay))
        
        labelLike = unit == 'all' and '%' or unit
        
        startSlice = (int(page) - 1) * 20;
        endSlice = startSlice + 20;
        
        records = []
        
        if prop_list:
            records = meta.Session.query(Lease.id, Lease.rent, Lease.due, Lease.startdate, Lease.enddate, Lease.outdate,\
                                         Unit.id, Unit.label, Transaction.id, Transaction.formonth, Transaction.foryear,\
                                         Transaction.amount, Transaction.latefee, Transaction.latepaid, Transaction.deleted,\
                                         Property.id, Property.name).\
                                         outerjoin(Unit,(Transaction,Lease.id==Transaction.leaseid),(Property,Unit.propertyid==Property.id)).\
                                         filter(Lease.deleted==None).\
                                         filter(Unit.propertyid.in_(propList)).\
                                         filter(or_(Transaction.formonth==None,Transaction.type=='Rent')).\
                                         filter(or_(Transaction.id==None,Transaction.deleted==None)).\
                                         filter(and_(Lease.startdate<=lastDate,\
                                                    or_(Lease.outdate==None,Lease.outdate>=firstDate)))
        
        allRecords = []
        rentList = []
        unitIdPaid = []
        unsortedRecords = []
        labelUnitIdList = []
        sortedRecords = []
        if records:
            for record in records:
                allRecords.append((record[8], record[9], record[10], record[6]))
            
            has_trans_records = []
            has_curMonth_trans = []
            dup_unitid = []
            cur_unitid = []
            for item in allRecords:
                transId = item[0]
                transMonth = item[1]
                transYear = item[2]
                unitId = item[3]
                if transId and not unitId in dup_unitid:
                    has_trans_records.append(transId)
                if transMonth and transMonth == month and transYear == year:
                    has_curMonth_trans.append(transId)
                    cur_unitid.append(unitId)
                dup_unitid.append(unitId)
                                        
            records = records.filter(or_(Transaction.id==None,\
                                         Transaction.id.in_(has_curMonth_trans),\
                                         and_(Transaction.id.in_(has_trans_records),\
                                              ~Unit.id.in_(cur_unitid)))).\
                        filter(Unit.label.like('%'+labelLike+'%')).\
                        order_by(Unit.label).all()
            
            
            for leaseid, rent, due, start, end, out, unitid, unitlabel, transid, formonth, foryear, amount, latefee, latepaid, deleted, propid, propname in records:
                if status == 'all' or\
                    (status == 'paid' and formonth and formonth == month and (latepaid == None or latepaid)) or\
                    (status == 'latefee' and not latepaid and formonth == month and foryear == year) or\
                    (status == 'overdue' and (not formonth or formonth != month)):
                    if formonth == month and foryear == year and not unitid in unitIdPaid:
                        unitIdPaid.append(unitid)
                    obj = {
                           'leaseid': leaseid,
                           'rent': rent,
                           'due': due,
                           'start': start,
                           'end': end,
                           'out': out,
                           'unitid': unitid,
                           'unitlabel': unitlabel,
                           'transid': transid,
                           'formonth': formonth,
                           'foryear': foryear,
                           'amount': amount,
                           'latefee': latefee,
                           'latepaid': latepaid,
                           'deleted': deleted,
                           'propid': propid,
                           'propname': propname
                    }
                    labelId = unitlabel+'*'+unitid
                    labelUnitIdList.append(labelId)
                    
                    unsortedRecords.append(obj)
            
            
            labelUnitIdList = sorted(labelUnitIdList, key=self.keynat)
            for labelId in labelUnitIdList:
                labelId = labelId.split('*')
                label = labelId[0]
                id = labelId[1]
                sortedRecords.extend([d for d in unsortedRecords if d['unitlabel'] == label and d['unitid'] == id])
            
            duplicateUnitId = []
            for record in sortedRecords:
                leaseid = record['leaseid']
                rent = record['rent']
                due = record['due']
                start = record['start']
                end = record['end']
                out = record['out']
                unitid = record['unitid']
                unitlabel = record['unitlabel']
                transid = record['transid']
                formonth = record['formonth']
                foryear = record['foryear']
                amount = record['amount']
                latefee = record['latefee']
                latepaid = record['latepaid']
                deleted = record['deleted']
                propid = record['propid']
                propname = record['propname']
                
                if not unitid in duplicateUnitId:
                    duplicateUnitId.append(unitid)
                else:
                    continue
                
                if start and start.month == month and start.year == year:
                    perDay = rent / lastDay
                    perDay = '%.2f' % perDay
                    perDay = float(perDay)
                    day = start.day
                    day = lastDay - day + 1
                    rent = round(day * perDay)
                elif out and out.month == month and out.year == year:
                    perDay = round(rent / lastDay)
                    day = out.day - 1
                    rent = (day * perDay)
                    
                curStatus = ''
                
                if formonth and month == formonth and year == foryear and deleted == None:
                    if latepaid == 0:
                        latefee = '%.2f' % latefee
                        curStatus = 'Rent Received, still owes $' + str(latefee) + ' late fee'
                        statusType = 3
                    elif latepaid == 1:
                        latefee = '%.2f' % latefee
                        curStatus = 'Rent Received, including $' + str(latefee) + ' late fee'
                        statusType = 4
                    else:
                        curStatus = 'Rent Received'
                        statusType = 1
                else:
                    # has only past records or no records
                    if year == thisYear and month == thisMonth and int(due) == thisDay:
                        curStatus = 'Due Today'
                        statusType = 5
                    elif (year == thisYear and month > thisMonth) or (year == thisYear and month == thisMonth and thisDay < int(due)) or year > thisYear:
                        curStatus = "Rent not due yet"
                        statusType = 6
                    else:
                        curStatus = 'Overdue'
                        statusType = 2
                
                if amount and month == formonth and year == foryear and deleted == None:
                    rent = amount
                
                obj = {
                       'propertyName': propname,
                       'propertyId': propid,
                       'unitId': unitid,
                       'unitLabel': unitlabel,
                       'leaseId': leaseid,
                       'rent': rent,
                       'due': due,
                       'statusType': statusType,
                       'status': curStatus
                }
                rentList.append(obj)
            
            slicedRecords = []
            counter = 0
            for item in rentList:
                if startSlice <= counter < endSlice:
                    slicedRecords.append(item)
                counter = counter + 1
            
            rentList = slicedRecords
        
        rentRecords = {
            'rent': rentList,
            'totalRecords': len(rentList)
        }
        
        return json.dumps(rentRecords)
    
        """
        rent json:
        {
            rent:  [
                {
                    propertyName: 'Shoreline',
                    propertyId: 'ukef-dfsd-sdfe-360f',
                    unitId: 'b06806c8-624d-11df-8256-000c29f0db84',
                    unitLabel: '102',
                    leaseId: '94f75ece-863e-11df-8256-000c29f0db84',
                    rent: '2200',
                    due: '5',
                    statusType: 1, 2, 3, 4, 5, or 6, // see below for what type means 
                    status: 'Paid' or 'Overdue' or 'Paid, still owes $100.00 late fee' 
                            or 'Paid, including $100.00 late fee' or 'Due today'
                            or 'Rent not due yet'
                },
                {
                    propertyName: 'Shoreline',
                    propertyId: 'ukef-dfsd-sdfe-360f',
                    unitId: 'b06806c8-624d-11df-8256-000c29f0db84',
                    unitLabel: '99',
                    leaseId: '801311a8-85a1-11df-8256-000c29f0db84',
                    rent: '1000',
                    due: '1',
                    statusType: 1, 2, 3, 4, 5, or 6, // see below for what type means 
                    status: 'Paid' or 'Overdue' or 'Paid, still owes $100.00 late fee' 
                            or 'Paid, including $100.00 late fee' or 'Due today'
                            or 'Rent not due yet'
                }
            ],
            totalRecords: '2'
        }
        """