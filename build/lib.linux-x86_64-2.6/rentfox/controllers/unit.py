import logging

from pylons import request, response, session, tmpl_context as c
from pylons.controllers.util import redirect_to
from pylons.decorators import validate
from pylons.decorators.rest import restrict
from sqlalchemy import delete

from rentfox.lib.base import BaseController, render
from rentfox import model
import rentfox.model.meta as meta
import rentfox.lib.helpers as h
from rentfox.lib import valid

import re
import json
import string

log = logging.getLogger(__name__)

class UnitController(BaseController):
    @h.authorize(h.is_manager)
    @h.authenticate
    def __before__(self):
        c.menuSubmenu = 1
        c.menuProperty = 'on'
        c.submenuProperty = 'on'
    
    def view(self, id):
        c.unit = model.Unit.get_unit(id)
        c.property = model.Property.get_property( c.unit.propertyid )
        c.property.photo = c.property.thumbid and model.Photo.path(c.property.thumbid) or ''
        c.floorplan = model.Floorplan.get(c.unit.floorplanid)
        if not c.floorplan:
            redirect_to(controller='property', action='setup', id=c.unit.propertyid, unitId=c.unit.id)
        c.floorplan.photo = c.floorplan.thumbid and model.Photo.path( c.floorplan.thumbid ) or ''
        c.curPropId = c.property.id
        c.curPropName = c.property.name
        c.page_title = c.curPropName + ' #' + c.unit.label
        c.foxAlert = False
        return render('/unit_view.html')
    
    def create(self):
        propertyId = request.POST['propertyId']
        input = request.POST['units']
        input = input.strip(' ')
        
        if input.startswith(('x ', 'X ')):
            errorslist = self.deleteValidate()
            
            if errorslist:
                unitJSON = {
                    'errors': errorslist
                }
                return json.dumps(unitJSON)
            
            input = input.strip(' ')
            input = input.lstrip('x')
            input = input.lstrip('X')
            input = input.replace(' ', '')
            model.Unit.delete_units(input, propertyId)
        else:
            errorslist = self.addValidate()
            
            if errorslist:
                unitJSON = {
                    'errors': errorslist
                }
                return json.dumps(unitJSON)
            
            input = input.replace(' ', '')
            model.Unit.add_units(input, propertyId)
        
        redirect_to(controller='property', action='json', id=propertyId)


    def updateDescription(self, unitid=None, desc=None):
        model.Unit.update_description(unitid, desc)
        redirect_to(controller='unit', action='json', id=unitid)
    
    def rename(self):
        unitid = request.POST['unitId']
        newlabel = request.POST['unitLabel']
        currentlabel = request.POST['currentLabel']
        propertyId = request.POST['propertyId']
        
        if newlabel == currentlabel:
            redirect_to(controller='property', action='json', id=propertyId)
        
        if model.Unit.unit_exist(newlabel, propertyId):
            errorslist = []
            errorslist.append({'selector':'#unitLabelInput', "message":"This unit already exists"})
            
            unitJSON = {
                'errors': errorslist
            }
            return json.dumps(unitJSON)
        else:
            model.Unit.rename(newlabel, unitid)
        
        redirect_to(controller='property', action='json', id=propertyId)
        
    def delete(self):
        unitid = request.POST['unitId']
        propertyId = request.POST['propertyId']
        
        if not unitid:
            errorslist = []
            errorslist.append({'selector':'#deleteUnitLink', "message":"Trying to delete an unit that does not exist"})
            
            unitJSON = {
                'errors': errorslist
            }
            return json.dumps(unitJSON)
        
        model.Unit.delete(unitid)
        
        redirect_to(controller='property', action='json', id=propertyId)
    
    def addValidate(self):
        propertyId = request.POST['propertyId']
        units = request.POST['units'].replace(' ', '')
        
        errorslist = []
        
        # Check for anything other than alphanumeric, '-' appears more than once,
        # '-' and ',' appear together, start or end with ',' or '-', or no input
        if not re.match('^[a-zA-Z0-9-,]+$', units) \
            or re.search('.*[-].*[-].*', units) \
            or re.search('(?=[-])(?=[,]).*', units) \
            or units[0] in '-,' or units[-1] in '-,' \
            or not units:
                errorslist.append({'selector':'#unitsInput', "message":"Please enter valid units with only numbers and letters."})
                return errorslist
        
        
        if '-' in units:
            unitRange = units.split('-')
            start = unitRange[0]
            end = unitRange[1]
            total = int(end) - int(start)
            # Special case: Allow for labels such as 12-B or C-2 to be added.
            if (start.isdigit() and end.isalpha())\
                or (end.isdigit() and start.isalpha()):
                    return errorslist
            elif len(start) > 6 or len(end) > 6:
                errorslist.append({'selector':'#unitsInput', "message":"Max length of unit label is 6"})
            elif re.search('(?=[a-zA-Z]).+', units):
                errorslist.append({'selector':'#unitsInput', "message":'Only numbers can be used in the range, i.e. "100-110" and not "100a-110c"'})
            elif int(end) < int(start):
                errorslist.append({'selector':'#unitsInput', "message":"First number cannot be greater than the second number"})
            elif total > 300:
                errorslist.append({'selector':'#unitsInput', "message":"Too many units are being added at once. The max is 300 units."})
            else:
                record = model.Unit.get_num_units(request.environ.get('COMPANY_ID'))
                unitCount = record[0]
                maxUnits = record[1]
                if total + unitCount > maxUnits:
                    errorslist.append({"message":"You are adding more units than the max allowed for your account ("+str(maxUnits)+"). If you would like to add \
                                                more, please contact us at support@rentfox.net so that we can better accommodate you."})    
        elif ',' in units:
            unitList = units.split(',')
            if any([len(unit) > 6 for unit in unitList]):
                errorslist.append({'selector':'#unitsInput', "message":"Max length of unit label is 6"})
            else:
                total = len(unitList)
                record = model.Unit.get_num_units(request.environ.get('COMPANY_ID'))
                unitCount = record[0]
                maxUnits = record[1]
                if total + unitCount > maxUnits:
                    errorslist.append({"message":"You are adding more units than the max allowed for your account ("+str(maxUnits)+"). If you would like to add \
                                                more, please contact us at support@rentfox.net so that we can better accommodate you."})
                
        else:
            if len(units) > 6:
                errorslist.append({'selector':'#unitsInput', "message":"Max length of unit label is 6"})
            elif units in model.Unit.get_units_list(propertyId):
                errorslist.append({'selector':'#unitsInput', "message":"Unit already exists."})
            else:
                record = model.Unit.get_num_units(request.environ.get('COMPANY_ID'))
                unitCount = record[0]
                maxUnits = record[1]
                if unitCount >= maxUnits:
                    errorslist.append({"message":"You are adding more units than the max allowed for your account ("+str(maxUnits)+"). If you would like to add \
                                                        more, please contact us at support@rentfox.net so that we can better accommodate you."})
        
        return errorslist
    
    def photos(self):
        return json.dumps(model.Unitphoto.getByUnitId( request.GET['unitid']))
    
    def uploadPhoto(self):
        unitid = request.POST['unitid']
        photosInUnit = model.Unitphoto.countPhotosInUnit(unitid)
        if photosInUnit > 24:
            return json.dumps({'errors':[{'selector':'', "message":"Sorry, Rentfox only allows 25 photos per unit."}]})
        
        photo = model.Unitphoto.create(unitid)
        if photo:
            return json.dumps(photo)
        else:
            return json.dumps({'errors':[{'selector':'', "message":"Please provide a JPEG, GIF, or PNG image."}]})
    
    def removePhoto(self):
        photo = model.Unitphoto.remove(request.POST['photoid'])
        return json.dumps({'success':1})
    
    def deleteValidate(self):
        propertyId = request.POST['propertyId']
        units = request.POST['units']
        units = units.strip(' ')
        units = units.lstrip('x').lstrip('X')
        units = units.replace(' ', '')
        
        errorslist = []
        
        # Check for anything other than alpha-numbers, '-' appears more than once,
        # '-' and ',' appear together, start or end with ',' or '-', or no input
        if not re.match('^[a-zA-Z0-9-,]+$', units) \
            or re.search('.*[-].*[-].*', units) \
            or re.search('(?=[-])(?=[,]).*', units) \
            or units[0] in '-,' or units[-1] in '-,' \
            or not units:
                errorslist.append({'selector':'#unitsInput', "message":'Please enter valid units to delete, i.e. "x 5", "x 5, 15, 25" or "x 101-150".'})
                return errorslist
        
        if '-' in units:
            unitRange = units.split('-')
            start = unitRange[0]
            end = unitRange[1]
            
            # Special case: Allow for labels such as 12-B or C-2 to be deleted.
            if (start.isdigit() and end.isalpha())\
                or (end.isdigit() and start.isalpha()):
                    return errorslist
            
            if re.search('(?=[a-zA-Z]).+', units):
                errorslist.append({'selector':'#unitsInput', "message":'Only numbers can be used in the range, i.e. " x 100-130" and not " x 100a-130c"'})
            elif int(end) < int(start):
                errorslist.append({'selector':'#unitsInput', "message":"First number cannot be greater than the second number"})
        elif ',' in units:
            unitList = units.split(',')
            existingUnits = model.Unit.get_units_list(propertyId)
            for unit in unitList:
                if unit in existingUnits:
                    break
            else:
                errorslist.append({'selector':'#unitsInput', "message":"Trying to delete units that do not exist"})
        else:
            existingUnits = model.Unit.get_units_list(propertyId)
            if units not in existingUnits:
                errorslist.append({'selector':'#unitsInput', "message":"Trying to delete an unit that does not exist"})
        
        return errorslist


    def json(self, id=None):
        unit = model.Unit.get_unit(id)
        floorplanId = unit.floorplanid
        propertyId = unit.propertyid
        
        property = model.Property.get_property(propertyId)
        leases = model.Lease.get_all_from_unit(unit.id)

        floorplanInfo = 0
        
        if floorplanId:
            floorplan = model.Floorplan.get(floorplanId)
            
            floorplanInfo = {
                'id': floorplan.id,
                'label': floorplan.label,
                'beds': floorplan.beds,
                'baths': floorplan.baths,
                'sqft': floorplan.sqft
            }
        
        propertyInfo = {
            'id': property.id,
            'name': property.name
        }
        
        lease = ''
        if leases:
        	lease = model.Lease.get_current(leases)
            
        

        if lease:
            tenants = model.Tenant_lease.getTenantsByLeaseId( lease.id )
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
                'type': 'current',
                'tenants': tenants,
                'status': model.Lease.status(lease.startdate, lease.enddate, lease.outdate)
            }
        else:
            leaseInfo = 0
        
        
        tenantsInfo = []
        if lease:
            allTenants = model.Tenant_lease.get_tenants_from_lease(lease.id)
            
            for tenant in allTenants:
                tenantObj = {
                    'id': tenant.id,
                    'name': tenant.first_name + ' ' + tenant.last_name,
                    'email': tenant.email,
                    'phone': tenant.phone
                    
                }
                tenantsInfo.append(tenantObj)
            
            tenantsInfo = len(tenantsInfo) and tenantsInfo or 0
            
        transactionInfo = []
        if unit:
            transaction_q = model.Transaction.get_transactions_from_unit(unit.id)
            for transaction in transaction_q:
                date = transaction.date
                if transaction.income:
                    transAmount = '$' + str('%.2f' % transaction.amount)
                else:
                    transAmount = '- $' + str('%.2f' % transaction.amount)
                transObj = {
                    'type': transaction.type,
                    'amount': transAmount,
                    'income': transaction.income,
                    'month': date.month,
                    'day': date.day,
                    'year': date.year
                }
                transactionInfo.append(transObj)
            
            transactionInfo = len(transactionInfo) and transactionInfo or 0
        
        all_leases = []
        for l in leases:
            all_leases.append({'id':l.id, 
                              'display':'{0} - {1}'.format(l.startdate.strftime("%B %d, %Y"), 
                                    l.outdate and l.outdate.strftime("%B %d, %Y") or 'No date set')})
                            # each row {id: asdf, display: asdf}
        unitDetails = {
            'id': unit.id,
            'label': unit.label,
            'description': unit.description,
            'floorplan': floorplanInfo,
            'property': propertyInfo,
            'tenants': tenantsInfo,
            'currentLease': leaseInfo,
            'lease': leaseInfo,
            'leases': all_leases,
            'transactions' : transactionInfo
        }
        
        return json.dumps(unitDetails)
    
