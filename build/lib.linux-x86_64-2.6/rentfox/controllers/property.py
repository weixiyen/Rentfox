import logging
import os

from pylons import request, response, session, tmpl_context as c
from pylons.controllers.util import redirect_to

from rentfox.lib.base import BaseController, render
from rentfox import model

import rentfox.model.meta as meta
from rentfox.lib import valid
import rentfox.lib.helpers as h
import re
import uuid
import json
import datetime

from pylons.decorators import validate
from pylons.decorators.rest import restrict
from sqlalchemy import delete, and_, or_


#from rentfox.lib.usps import usps

log = logging.getLogger(__name__)

class PropertyController(BaseController):
    @h.authorize(h.is_manager)
    @h.authenticate
    def __before__(self):
        c.menuSubmenu = 1
        c.menuProperty = 'on'
        c.submenuProperty = 'on'
    
    def view(self, id=None):
        c.property = model.Property.get_property(id)
        
        if c.property.type == 'single':
            unit = model.Unit.get_unit_with_propertyid('Unit', id)
            redirect_to(controller='unit', action='view', id=unit.id)
        
        c.property.photo = c.property.thumbid and model.Photo.path(c.property.thumbid) or ''
        c.curPropId = id
        c.curPropName = c.property.name
        if not id or not c.property:
            abort(404)
        
        this_month = datetime.date.today().month
        c.rentPaid = model.Property.totalRentPaidInMonth(id, 2010, this_month)
        c.rentDue = model.Property.totalActiveLeasesInMonth(id, 2010, this_month)
        rent_percent = c.rentDue > 0 and (c.rentPaid * 100 / c.rentDue) or 0
        c.rentPercent = '{0}%'.format(rent_percent)
        c.currentMonth = datetime.date.today().strftime('%B')
        
        c.page_title = c.curPropName

        return render('/property_view.html')
    
    def setup(self, id=None, unitId=None):
        if id:
            c.curPropId = id
            c.curPropName = model.Property.get_name_by_id(id)
            c.unitId = unitId
            c.curPropId = id
        
        c.page_title = 'Property Setup'
        c.foxAlert = False
        
        return render('/property_setup.html')

    def sampleCreate(self): 
        address = usps() 
        address.address2 = '6406 Ivy Lane' 
        address.city = 'Greenbelt' 
        address.state = 'MD' 
        address = address.verify() 
        if not address: 
            return 'nothing' 
        return address['address2'] 
        
    def create(self):
        errorslist = self.validate(action='create')
        
        if errorslist:
            propJSON = {
                'errors': errorslist
            }
            return json.dumps(propJSON)
        
        property_id = str(uuid.uuid1())
        property_companyid = request.environ.get("COMPANY_ID")
        property_name = request.POST['name'].strip()
        property_address = request.POST['street'].strip()
        property_city = request.POST['city'].strip()
        property_state = request.POST['state'].strip().upper()
        property_zip = request.POST['zip'].strip()
        property_type = request.POST['type']
        property_photoid = request.POST['photoid'] and request.POST['photoid'] or None
        property_thumbid = request.POST['thumbid'] and request.POST['thumbid'] or None
        
        model.Property.create(id=property_id,
                              companyid=property_companyid,
                              name=property_name,
                              address=property_address,
                              city=property_city,
                              state=property_state,
                              zip=property_zip,
                              type=property_type,
                              photoid = property_photoid,
                              thumbid = property_thumbid)
        
        propertyDetails = {
            'id': property_id,
            'name': property_name,
            'street': property_address,
            'city': property_city,
            'state': property_state,
            'zip': property_zip,
            'units' : 0,
            'errors': 0
        }
        
        return json.dumps(propertyDetails)
    
    def uploadPhoto(self):
        photo = model.Property.savePhoto(request.POST['propertyId'])
        if photo:
            return json.dumps({'thumbpath':model.Photo.path(photo['thumbid'])})
        else:
            return json.dumps({'errors':[{'selector':'', "message":"Please provide a JPEG, GIF, or PNG image."}]})
    
    def uploadTempPhoto(self):
        photo = model.Property.saveTempPhoto()
        if photo:
            return json.dumps({
                    'photoid':photo['photoid'],
                    'thumbid':photo['thumbid'],
                    'thumbpath':model.Photo.path(photo['thumbid'])
                    })
        else:
            return json.dumps({'errors':[{'selector':'', "message":"Please provide a JPEG, GIF, or PNG image."}]})
    
    def save(self):
        errorslist = self.validate(action='save')
        
        if errorslist:
            propJSON = {
                'errors': errorslist
            }
            return json.dumps(propJSON)
        
        property_id = request.POST['id']
        property_name = request.POST['name'].strip()
        property_address = request.POST['street'].strip()
        property_city = request.POST['city'].strip()
        property_state = request.POST['state'].strip().upper()
        property_type = request.POST['type']
        property_zip = request.POST['zip'].strip()
        
        model.Property.save(id=property_id,
                            name=property_name,
                            address=property_address,
                            city=property_city,
                            state=property_state,
                            type=property_type,
                            zip=property_zip)
        
        redirect_to(controller='property', action='json', id=property_id)

    def delete(self):
        propertyId = request.POST['propertyId']
        model.Property.delete(propertyId)
        
        return json.dumps([])
    
    def validate(self, action=None):
        name = request.POST['name'].strip()
        address = request.POST['street'].strip()
        city = request.POST['city'].strip()
        state = request.POST['state'].strip()
        zip = request.POST['zip'].strip()
        
        errorslist = []
        
        if action == 'create':
            record = model.Unit.get_num_units(request.environ.get('COMPANY_ID'))
            unitCount = record[0]
            maxUnits = record[1]
            if unitCount >= maxUnits:
                errorslist.append({"message":"You have reached the max units allowed for your account ("+str(maxUnits)+"). If you would like to add \
                                                            more, please contact us at support@rentfox.net so that we can better accommodate you."})
                return errorslist
        
        if not valid.label(name):
            errorslist.append({'selector':'#propertyName', "message": "Please enter a valid property name"})
        elif action=='create' or (action=='save' and model.Property.get_name_by_id(request.POST['id']) != name):
            if model.Property.property_name_exist(name, request.environ.get("COMPANY_ID")):
                errorslist.append({'selector':'#propertyName', "message": "Property name already exists"})
        
        if not valid.street(address):
            errorslist.append({'selector':'#propertyStreet', "message":"Please enter a valid street"})
        
        if not valid.city(city):
            errorslist.append({'selector':'#propertyCity', "message":"Please enter a valid city"})
        
        if not valid.state(state):
            errorslist.append({'selector':'#propertyState', "message":"Please enter a valid state"})
        
        if not valid.zip(zip):
            errorslist.append({'selector':'#propertyZip', "message":"Please enter a valid zip code"})
        
        return errorslist

    def json(self, id=None):
        property = model.Property.get_property(id)
        units_without_floorplan = model.Unit.get_units_without_floorplan(id)
        units_with_floorplan = model.Unit.join_unit_floorplan(id)
        floorplans = model.Floorplan.get_floorplans_of_property(id)
        
        unitList = []
        for item in units_without_floorplan:
            unitObj = {
                'id': item.id,
                'label': item.label,
                'floorPlan': 0
            }
            unitList.append(unitObj)
        
        for item in units_with_floorplan:
            unitObj = {
                'id': item.id,
                'label': item.label,
                'floorPlan': {
                    'id': item.floorplan.id,
                    'label': item.floorplan.label,
                    'sqft': item.floorplan.sqft,
                    'beds': item.floorplan.beds,
                    'baths': item.floorplan.baths,
                    'description': item.floorplan.description
                }
            }
            unitList.append(unitObj)
            
        labelList = []
        for item in unitList:
            labelList.append(item['label'])
            
        labelList = sorted(labelList, key=self.keynat)
        
        sortedUnit = []
        for label in labelList:
            sortedUnit.extend([d for d in unitList if d['label'] == label])

        allFloorPlans = []
        for item in floorplans:
            thumb = item.thumbid and model.Photo.path(item.thumbid) or ''
            photo = item.photoid and model.Photo.path(item.photoid) or ''
            FloorPlanPropObj = {
                'id': item.id,
                'label': item.label,
                'thumb': thumb,
                'photo': photo
            }
            allFloorPlans.append(FloorPlanPropObj)
        
        if len(allFloorPlans) is 0:
            allFloorPlans = 0
        
        photo = property.thumbid and model.Photo.path(property.thumbid) or ''
        
        propertyDetails = {
            'id': property.id,
            'name': property.name,
            'street': property.address,
            'city': property.city,
            'state': property.state,
            'zip': property.zip,
            'type': property.type,
            'photo': photo,
            'units' : sortedUnit,
            'floorPlans' : allFloorPlans
        }
        
        return json.dumps(propertyDetails)
    
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
    
    def record(self):
        c.menuSubmenu = 0
        self._selectMenu('record')
        c.page_title = 'Record Rent'
        return render('/property_record.html')
    
    def units(self, id=None):
        c.menuSubmenu = 0
        self._selectMenu('units')
        c.page_title = 'Units'
        return render('/property_units.html')
    
    def _selectMenu(self, menuItem=None):
        c.menuProperty = 'off'
        if menuItem == 'record':
            c.menuRecord = 'on'
        if menuItem == 'units':
            c.menuUnits = 'on'
    
    def getPropertyList(self):
        curUsername = request.environ.get("REMOTE_USER")
        propList = model.Property.get_propertyList_of_username(curUsername)
        propInfo = {
            'properties': propList
        }
        return json.dumps(propInfo)
    
    def getPropAndLeaseDates(self):
        curUsername = request.environ.get("REMOTE_USER")
        propList = model.Property.get_propertyList_of_username(curUsername)
        
        propIdList = []
        if propList:
            for prop in propList:
                propIdList.append(prop['id'])
        
        dateList = []
        earliestDate = model.Lease.get_earliest(propIdList)
        
        if earliestDate:
            date = earliestDate[0]
            m = date.month
            y = date.year
            
            now = datetime.date.today()
            curM = now.month + 1
            curY = now.year
            
            if (m < curM and y == curY) or y < curY:
                while (True):
                    if m == curM and y == curY:
                        break
                    dateList.append(str(m)+'+'+str(y))
                    if m == 12:
                        m = 1
                        y = y + 1
                    else:
                        m = m + 1
        dateList.reverse()
        
        result = {
            'properties': propList,
            'dates': dateList
        }
        return json.dumps(result)
        """
        getPropAndLeaseDates json:
        
        {
            dates:  ['1+2009','2+2009'],
            properties: [
                {
                    'name': 'Bay View',
                    'id': '19224dc6-7e8d-11df-9011-0023dfa8d222'
                },
                {
                    'name': 'Shoreline',
                    'id': '19224dc6-7e8d-11df-9011-0023dfa8d222'
                },
            ]
        }
        """
    
    def getPropAndTransDates(self):
        curUsername = request.environ.get("REMOTE_USER")
        propList = model.Property.get_propertyList_of_username(curUsername)
        curCompId = request.environ.get("COMPANY_ID")
        
        dateList = []
        earliestDate = model.Transaction.get_earliest(curCompId)
        
        if earliestDate:
            earliestDate = earliestDate[0]
            m = earliestDate.month
            y = earliestDate.year
            
            now = datetime.datetime.today()
            curM = now.month
            curY = now.year
            
            if (m <= curM and y == curY) or y < curY:
                while (True):
                    dateList.append(str(m)+'+'+str(y))
                    if m == curM and y == curY:
                        break
                    if m == 12:
                        m = 1
                        y = y + 1
                    else:
                        m = m + 1
        dateList.reverse()
        
        result = {
            'properties': propList,
            'dates': dateList,
            'companyId': curCompId
        }
        
        return json.dumps(result)
    




