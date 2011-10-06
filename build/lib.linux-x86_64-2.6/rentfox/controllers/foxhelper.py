import logging
from rentfox import settings
from pylons import request, response, session, tmpl_context as c
from pylons.controllers.util import abort, redirect_to

from rentfox.lib.base import BaseController, render
from rentfox import model

import datetime

import rentfox.model.meta as meta
import rentfox.lib.helpers as h

log = logging.getLogger(__name__)

class FoxhelperController(BaseController):
    @h.authenticate
    def __before__(self):
        pass
    
    def index(self):
        default_alert = model.Company.foxAlert()
        if default_alert == False:
            default_alert = {
                    'title': "Need help?",
                    'message': "Email Rentfox at {0}. I'll get back to you within 24 hours.".format(settings.EMAIL_SUPPORT)
                    }
        c.alert = default_alert
        return render('/foxhelper/index.html')
    
    def confirm(self):
        return render('/foxhelper/confirm.html')
    
    def ajaxerror(self):
        return render('/foxhelper/ajaxerror.html')
    
    def message(self):
        return render('/foxhelper/message.html')
    
    def lateRent(self, id):
        transInfo = id.split('+')
        transUnit = transInfo[0]
        formonth = int(transInfo[1])
        foryear = int(transInfo[2])
        record = model.Transaction.get_rent_info(transUnit,formonth,foryear)
        
        rent = record[0]
        due = record[1]
        latefee = record[2]
        interval = record[3]
        grace = record[4]
        date = record[5]
        
        day = date.day
        month = date.month
        year = date.year
        
        target = due + grace
        if day > target:
            if interval != 1:
                c.totalFee = '%.2f' % latefee
            else:
                payDate = datetime.date(year,month,day)
                dueDate = datetime.date(foryear,formonth,due)
                dayDiff = payDate - dueDate
                dayDiff = dayDiff.days
                
                if dayDiff > 0:
                    result = dayDiff * latefee;
                    c.totalFee = '%.2f' % result;
                else:
                    c.totalFee = '%.2f' % 0;
                
        else:
            c.totalFee = '%.2f' % 0
        
        c.rentReceivedDate = date.strftime("%m/%d/%Y")
        c.due = due
        c.formonth = formonth
        c.foryear = foryear
        c.latefee = latefee
        c.interval = interval
        c.grace = grace
        
        return render('/foxhelper/lateRent.html')
    
    def unitContact(self, id):
        c.unitId = id
        c.tenantList = []
        tenants = model.Tenant_lease.get_tenants_from_unit(id)
        
        for tenant in tenants:
            obj = {
                   'name': tenant.first_name + ' ' + tenant.last_name,
                   'phone': tenant.phone,
                   'email': tenant.email
            }
            c.tenantList.append(obj)
            
        if len(c.tenantList) == 0:
            c.unit = model.Unit.get_unit(id)
            
        return render('/foxhelper/unitContact.html')
    
    def updateRent(self, id):
        c.rentAmount = id
        return render('/foxhelper/updateRent.html')
    
    def signup(self):
        return render('/foxhelper/signup.html')
    
    def resetPassword(self):
        return render('/foxhelper/resetPassword.html')
    
    def deleteUser(self):
        return render('/foxhelper/deleteUser.html')
    
    def deleteCompany(self):
        return render('/foxhelper/deleteCompany.html')
    
    def switchSuperuser(self):
        return render('/foxhelper/switchSuperuser.html')
    
    def renameType(self):
        return render('/foxhelper/renameType.html')
    def endLease(self):
        return render('/foxhelper/endLease.html')