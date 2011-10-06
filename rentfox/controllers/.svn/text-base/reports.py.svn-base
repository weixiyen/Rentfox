import logging

from pylons import request, response, session, tmpl_context as c
from pylons.controllers.util import redirect_to
from pylons.decorators import validate
from pylons.decorators.rest import restrict

from rentfox.lib.base import BaseController, render
from rentfox.model import Transaction, Contact, Unit, Lease, Tenant_lease, Tenant, meta
import rentfox.lib.helpers as h
from rentfox.lib import valid
from sqlalchemy import and_, or_, asc, desc, func
import datetime
import uuid
import calendar
import json
from pylons import session

log = logging.getLogger(__name__)

class ReportsController(BaseController):
    @h.authorize(h.is_manager)
    @h.authenticate
    def __before__(self):
        c.menuReports = 'on'
    
    def transactions(self):
        c.page_title = 'Ledger'
        return render('/reports_transactions.html')
    
    def get(self):
        unitId = request.POST['unitId']
        type = request.POST['type']
        
        transactions = Transaction.get_type(unitId, type)
        
        transactionInfo = []
        for transaction in transactions:
            date = transaction.date
            if transaction.amount > 0:
                transAmount = '$' + str('%.2f' % transaction.amount)
            else:
                transAmount = '- $' + str('%.2f' % transaction.amount)
            
            transObj = {
                'type': transaction.type,
                'amount': transAmount,
                'month': date.month,
                'day': date.day,
                'year': date.year
            }
            transactionInfo.append(transObj)
        
        return json.dumps(transactionInfo)
    
    def addExpense(self):
        errorslist = self.validate()
        
        if errorslist:
            obj = {
                'errors': errorslist
            }
            return json.dumps(obj)
        
        expenseType = request.POST['expenseType']
        payTo = request.POST['payTo']
        expenseAmount = '-'+request.POST['expenseAmount']
        expenseDate = request.POST['expenseDate']
        contactType = request.POST['contactType']
        contactId = request.POST['contactId']
        companyId = request.environ.get("COMPANY_ID")
        now = datetime.datetime.today()
        curHour = now.hour
        curMin = now.minute
        curSec = now.second
        date = expenseDate.split('/')
        date = datetime.datetime(int(date[2]),int(date[0]),int(date[1]),curHour,curMin,curSec)
        
        if contactType == 'unit':
            leaseId = Lease.get_current_of_unit(contactId)
            if not leaseId:
                leaseId = None
            unitInfo = Unit.get_unit_info(contactId)
            propertyId = unitInfo[2]
            payTo = payTo.split('#')
            prop = payTo[0]
            prop = prop.strip()
            unit = payTo[1]
            payTo = prop + ' #' + unit
            
            Transaction.create(
                                    id=str(uuid.uuid1()),
                                    leaseid=leaseId,
                                    unitid=contactId,
                                    companyid=companyId,
                                    propertyid=propertyId,
                                    type=expenseType,
                                    name=payTo,
                                    amount=expenseAmount,
                                    date=date
                                    )
        elif contactType == 'property':
            Transaction.create(
                                    id=str(uuid.uuid1()),
                                    companyid=companyId,
                                    propertyid=contactId,
                                    type=expenseType,
                                    name=payTo,
                                    amount=expenseAmount,
                                    date=date
                                    )
        elif contactType == 'tenant':
            leaseId = Tenant_lease.get_lease_of_tenant(contactId)
            if not leaseId:
                leaseId = None
            record = Tenant.get_tenantInfo(contactId)
            if record:
                unitId = record[0]
                propertyId = record[1]
            else:
                unitId = None
                propertyId = None
            Transaction.create(
                                    id=str(uuid.uuid1()),
                                    leaseid=leaseId,
                                    unitid=unitId,
                                    companyid=companyId,
                                    propertyid=propertyId,
                                    type=expenseType,
                                    name=payTo,
                                    amount=expenseAmount,
                                    date=date
                                    )
        elif contactType == 'contact':
            Transaction.create(
                                    id=str(uuid.uuid1()),
                                    contactid=contactId,
                                    companyid=companyId,
                                    type=expenseType,
                                    name=payTo,
                                    amount=expenseAmount,
                                    date=date
                                    )
        else:
            Transaction.create(
                                    id=str(uuid.uuid1()),
                                    companyid=companyId,
                                    type=expenseType,
                                    name=payTo,
                                    amount=expenseAmount,
                                    date=date
                                    )
        return json.dumps('')
    
    def editExpense(self):
        errorslist = self.validate()
        
        if errorslist:
            obj = {
                'errors': errorslist
            }
            return json.dumps(obj)
        
        transId = request.POST['transId']
        expenseType = request.POST['expenseType']
        expenseTo = request.POST['payTo']
        expenseAmount = '-'+request.POST['expenseAmount']
        expenseDate = request.POST['expenseDate']
        now = datetime.datetime.today()
        curHour = now.hour
        curMin = now.minute
        curSec = now.second
        date = expenseDate.split('/')
        date = datetime.datetime(int(date[2]),int(date[0]),int(date[1]),curHour,curMin,curSec)
        
        Transaction.save(
                                id=transId,
                                type=expenseType,
                                name=expenseTo,
                                amount=expenseAmount,
                                date=date
                                )
        return json.dumps('')
    
    def addIncome(self):
        errorslist = self.validate()
        
        if errorslist:
            obj = {
                'errors': errorslist
            }
            return json.dumps(obj)
        
        incomeType = request.POST['incomeType']
        incomeFrom = request.POST['incomeFrom']
        incomeAmount = request.POST['incomeAmount']
        incomeDate = request.POST['incomeDate']
        contactType = request.POST['contactType']
        contactId = request.POST['contactId']
        companyId = request.environ.get("COMPANY_ID")
        now = datetime.datetime.today()
        curHour = now.hour
        curMin = now.minute
        curSec = now.second
        date = incomeDate.split('/')
        date = datetime.datetime(int(date[2]),int(date[0]),int(date[1]),curHour,curMin,curSec)
        
        if contactType == 'unit':
            leaseId = Lease.get_current_of_unit(contactId)
            if not leaseId:
                leaseId = None
            unitInfo = Unit.get_unit_info(contactId)
            propertyId = unitInfo[2]
            incomeFrom = incomeFrom.split('#')
            prop = incomeFrom[0]
            prop = prop.strip()
            unit = incomeFrom[1]
            incomeFrom = prop + ' #' + unit
            
            Transaction.create(
                                    id=str(uuid.uuid1()),
                                    leaseid=leaseId,
                                    unitid=contactId,
                                    companyid=companyId,
                                    propertyid=propertyId,
                                    type=incomeType,
                                    name=incomeFrom,
                                    amount=incomeAmount,
                                    date=date
                                    )
        elif contactType == 'property':
            Transaction.create(
                                    id=str(uuid.uuid1()),
                                    companyid=companyId,
                                    propertyid=contactId,
                                    type=incomeType,
                                    name=incomeFrom,
                                    amount=incomeAmount,
                                    date=date
                                    )
        elif contactType == 'tenant':
            leaseId = Tenant_lease.get_lease_of_tenant(contactId)
            if not leaseId:
                leaseId = None
            record = Tenant.get_tenantInfo(contactId)
            if record:
                unitId = record[0]
                propertyId = record[1]
            else:
                unitId = None
                propertyId = None
            Transaction.create(
                                    id=str(uuid.uuid1()),
                                    leaseid=leaseId,
                                    unitid=unitId,
                                    companyid=companyId,
                                    propertyid=propertyId,
                                    type=incomeType,
                                    name=incomeFrom,
                                    amount=incomeAmount,
                                    date=date
                                    )
        elif contactType == 'contact':
            Transaction.create(
                                    id=str(uuid.uuid1()),
                                    contactid=contactId,
                                    companyid=companyId,
                                    type=incomeType,
                                    name=incomeFrom,
                                    amount=incomeAmount,
                                    date=date
                                    )
        else:
            Transaction.create(
                                    id=str(uuid.uuid1()),
                                    companyid=companyId,
                                    type=incomeType,
                                    name=incomeFrom,
                                    amount=incomeAmount,
                                    date=date
                                    )
        
        return json.dumps('')
    
    def editIncome(self):
        errorslist = self.validate()
        
        if errorslist:
            obj = {
                'errors': errorslist
            }
            return json.dumps(obj)
        
        transId = request.POST['transId']
        incomeType = request.POST['incomeType']
        incomeFrom = request.POST['incomeFrom']
        incomeAmount = request.POST['incomeAmount']
        incomeDate = request.POST['incomeDate']
        now = datetime.datetime.today()
        curHour = now.hour
        curMin = now.minute
        curSec = now.second
        date = incomeDate.split('/')
        date = datetime.datetime(int(date[2]),int(date[0]),int(date[1]),curHour,curMin,curSec)
        
        Transaction.save(
                                id=transId,
                                type=incomeType,
                                name=incomeFrom,
                                amount=incomeAmount,
                                date=date
                                )
        return json.dumps('')
    
    def delete(self):
        transId = request.POST['transId']
        Transaction.delete(id=transId)
        
        return json.dumps('')
    
    def validate(self):
        type = request.POST['type']
        action = request.POST['action']
        errorslist = []
        
        if type == 'expense':
            transType = request.POST['expenseType']
            transTo = request.POST['payTo']
            transAmount = request.POST['expenseAmount']
            transDate = request.POST['expenseDate']
            if transType == 'Choose expense type':
                errorslist.append({"message":"Please choose an expense type from the drop down menu"})
            if not valid.label(transTo):
                errorslist.append({'selector':'#expensePay', "message":"Please enter a valid name"})
            if not valid.money(transAmount):
                errorslist.append({'selector':'#expenseAmount', "message":"Please enter a valid amount"})
            if not valid.date(transDate):
                errorslist.append({'selector':'#expenseDate', "message":'Please enter a valid date (mm/dd/yyyy)'})
            transDate = transDate.split('/')
            year = int(transDate[2])
            if year < 2009:
                errorslist.append({'selector':'#expenseDate', "message":'Cannot add a transaction before 2009'})
            
        else:
            transType = request.POST['incomeType']
            transFrom = request.POST['incomeFrom']
            transAmount = request.POST['incomeAmount']
            transDate = request.POST['incomeDate']
            if transType == 'Choose income type':
                errorslist.append({"message":"Please choose an income type from the drop down menu"})
            if not valid.label(transFrom):
                errorslist.append({'selector':'#incomeFrom', "message":"Please enter a valid name"})
            if not valid.money(transAmount):
                errorslist.append({'selector':'#incomeAmount', "message":"Please enter a valid amount"})
            if not valid.date(transDate):
                errorslist.append({'selector':'#incomeDate', "message":'Please enter a valid date (mm/dd/yyyy)'})
            transDate = transDate.split('/')
            year = int(transDate[2])
            if year < 2009:
                errorslist.append({'selector':'#expenseDate', "message":'Cannot add a transaction before 2009'})
                
        return errorslist
    
    def json(self):
        month = request.POST['month']
        year = request.POST['year']
        type = request.POST['type']
        search = request.POST['search']
        filter = request.POST['filter']
        datePeriod = request.POST['datePeriod']
        page = request.POST['page']
        initLoad = request.POST['initLoad']
        periodClick = request.POST['periodClick']
        updateBalance = request.POST['updateBalance']
        property = request.POST['property']
        companyId = request.environ.get("COMPANY_ID")
        
        if not valid.search(search):
            return json.dumps({'errors':[{'selector':'', "message":"Search only accepts letters and numbers. Please try again."}]})
        
        startSlice = (int(page) - 1) * 20;
        endSlice = startSlice + 20;
        
        query = meta.Session.query(Transaction).filter(Transaction.companyid==companyId).filter(Transaction.deleted==None)
        
        if property != 'all':
            query = query.filter(Transaction.propertyid==property)
         
        incomeTotal = 0
        expenseTotal = 0
        if initLoad == '1' or updateBalance == '1':
            for record in query:
                if record.amount > 0:
                    incomeTotal = incomeTotal + record.amount
                else:
                    expenseTotal = expenseTotal + record.amount
            
            expenseTotal = expenseTotal * -1
            if incomeTotal:
                incomeTotal = '%.2f' % incomeTotal
            if expenseTotal:
                expenseTotal = '%.2f' % expenseTotal
        
        if search != 'all':
            query = query.filter(Transaction.name.like('%'+search+'%'))
        
        if periodClick == '1' and datePeriod != 'all':
            datePeriodList = Transaction.get_date_period(datePeriod)
            startDate = datePeriodList[0]
            endDate = datePeriodList[1]
            
            startDate = datetime.datetime(startDate[0],startDate[1],startDate[2])
            endDate = datetime.datetime(endDate[0],endDate[1],endDate[2])
            
            query = query.filter(and_(Transaction.date>=startDate,Transaction.date<=endDate))
            
            for record in query:
                if record.amount > 0:
                    incomeTotal = incomeTotal + record.amount
                else:
                    expenseTotal = expenseTotal + record.amount
            expenseTotal = expenseTotal * -1
        
        if month != 'all':
            month = int(month)
            year = int(year)
            lastDay = calendar.monthrange(year,month)
            lastDay = lastDay[1]
            
            firstDate = datetime.datetime(year,month,1)
            lastDate = datetime.datetime(year,month,lastDay)
            query = query.filter(and_(Transaction.date>=firstDate,Transaction.date<=lastDate))
        
        if type != 'all':
            if type == 'Rent':
                query = query.filter(Transaction.type=='Rent')
            elif type == 'Deposit':
                query = query.filter(Transaction.type=='Deposit')
            else:
                typeList = ['Rent','Deposit']
                query = query.filter(~Transaction.type.in_(typeList))
        
        if filter != 'all':
            if filter == 'income':
                query = query.filter(Transaction.amount>0)
            else:
                query = query.filter(Transaction.amount<0)
        
        all_records = query
        records = query.order_by(Transaction.date.desc()).all()
        
        allTransList = []
        
        for record in records:
            contact = record.name
            transDate = record.date
            d = str(transDate.day)
            m = str(transDate.month)
            y = str(transDate.year)
            hr = str(transDate.hour)
            min = str(transDate.minute)
            sec = str(transDate.second)
            date = y+'-'+m+'-'+d+'-'+hr+'-'+min+'-'+sec
            
            obj = {
                   'transId': record.id,
                   'transAmount': record.amount,
                   'transDate': date,
                   'transType': record.type,
                   'transContact': contact,
                   'transPropertyId': record.propertyid
            }
            allTransList.append(obj)
        
        slicedRecords = []
        counter = 0
        has_prev_records = 0
        for item in allTransList:
            if startSlice <= counter < endSlice:
                slicedRecords.append(item)
            if counter == endSlice:
                has_prev_records = 1
                break
            counter = counter + 1
        
        transList = slicedRecords
        
        backwards = lambda l: (backwards (l[1:]) + l[:1] if l else [])
        transList = backwards(transList)
        
        prevTotal = 0
        if has_prev_records:
            firstDate = transList[0]
            firstDate = firstDate['transDate'].split('-')
            year = int(firstDate[0])
            mo = int(firstDate[1])
            day = int(firstDate[2])
            hr = int(firstDate[3])
            min = int(firstDate[4])
            sec = int(firstDate[5])
            firstDate = datetime.datetime(year,mo,day,hr,min,sec)
            prev_query =  meta.Session.query(func.sum(Transaction.amount)).filter(and_(Transaction.companyid==companyId,\
                                                                            Transaction.date<firstDate,\
                                                                            Transaction.deleted==None))
            if property != 'all':
                prev_query = prev_query.filter(Transaction.propertyid==property)
            if search != 'all':
                prev_query = prev_query.filter(Transaction.name.like('%'+search+'%'))
            if periodClick == '1' and datePeriod != 'all':
                datePeriodList = Transaction.get_date_period(datePeriod)
                startDate = datePeriodList[0]
                endDate = datePeriodList[1]
                
                startDate = datetime.datetime(startDate[0],startDate[1],startDate[2])
                endDate = datetime.datetime(endDate[0],endDate[1],endDate[2])
                
                prev_query = prev_query.filter(and_(Transaction.date>=startDate,Transaction.date<=endDate))
            if month != 'all':
                month = int(month)
                year = int(year)
                lastDay = calendar.monthrange(year,month)
                lastDay = lastDay[1]
                
                firstDate = datetime.datetime(year,month,1)
                lastDate = datetime.datetime(year,month,lastDay)
                prev_query = prev_query.filter(and_(Transaction.date>=firstDate,Transaction.date<=lastDate))
            if type != 'all':
                if type == 'Rent':
                    prev_query = prev_query.filter(Transaction.type=='Rent')
                elif type == 'Deposit':
                    prev_query = prev_query.filter(Transaction.type=='Deposit')
                else:
                    typeList = ['Rent','Deposit']
                    prev_query = prev_query.filter(~Transaction.type.in_(typeList))
            if filter != 'all':
                if filter == 'income':
                    prev_query = prev_query.filter(Transaction.amount>0)
                else:
                    prev_query = prev_query.filter(Transaction.amount<0)
            prev_query = prev_query.first()
            prevTotal = prev_query[0]
            if not prevTotal:
                prevTotal = 0
            
        
        transRecords = {
            'transactions': transList,
            'totalRecords': len(records),
            'incomeTotal': incomeTotal,
            'expenseTotal': expenseTotal,
            'initLoad': initLoad,
            'prevTotal': prevTotal
        }
        
        return json.dumps(transRecords)
