import logging
import os

from pylons import request, response, session, tmpl_context as c
from pylons.controllers.util import abort, redirect_to

from rentfox.lib.base import BaseController, render
from rentfox import model, settings
import rentfox.lib.helpers as h
import rentfox.model.meta as meta
from rentfox.lib import valid

import formencode
from formencode import htmlfill
from pylons.decorators import validate
from pylons.decorators.rest import restrict
import webhelpers.paginate as paginate
from sqlalchemy import *

import re
import json
import uuid

log = logging.getLogger(__name__)


class FloorplanController(BaseController):
    @h.authorize(h.is_manager)
    @h.authenticate
    def __before__(self):
        pass
   
    def create(self):
        property_id = request.POST['propertyid']
        
        errorslist = self.validate(action='create', propertyid=property_id)
        
        if errorslist:
            floorplanJSON = {
                'errors': errorslist
            }
            
            return json.dumps(floorplanJSON)
        
        floorplan_id = str(uuid.uuid1())
        unit_id = request.POST['unitid']
        floorplan_name = request.POST['name']
        floorplan_sqft = request.POST['sqft']
        floorplan_beds = request.POST['beds']
        floorplan_baths = request.POST['baths']
        floorplan_desc = request.POST['description']
        
        model.Floorplan.create(id=floorplan_id,
                               propertyid=property_id,
                               label=floorplan_name,
                               sqft=floorplan_sqft,
                               beds=floorplan_beds,
                               baths=floorplan_baths,
                               description=floorplan_desc)
        
        unit = model.Unit.update_floorplan(unit_id, floorplan_id)
        
        redirect_to(protocol=settings.PROTOCOL, controller='property', action='json', id=property_id)
    
    def uploadPhoto(self):
        photo = model.Floorplan.savePhoto(request.POST['floorplanId'])
        if photo:
            return json.dumps({'success':1})
        else:
            return json.dumps({'errors':[{'selector':'', "message":"Please provide a JPEG, GIF, or PNG image."}]})
    
    def save(self, id=None):
        property_id = model.Floorplan.get_propertyid_of_floorplan(id)
        
        errorslist = self.validate(action='save', floorplanid=id, propertyid=property_id)
        
        if errorslist:
            floorplanJSON = {
                'errors': errorslist
            }
            
            return json.dumps(floorplanJSON)
        
        label = request.POST['name'].strip()
        sqft = request.POST['sqft'].strip()
        beds = request.POST['beds'].strip()
        baths = request.POST['baths'].strip()
        description = request.POST['description'].strip()
        
        model.Floorplan.save(id=id,
                             label=label,
                             sqft=sqft,
                             beds=beds,
                             baths=baths,
                             description=description)
        
        redirect_to(protocol=settings.PROTOCOL, controller='property', action='json', id=property_id)
    
    def delete(self):
        propertyId = request.POST['propertyId']
        floorplanId = request.POST['floorPlanId']
        model.Floorplan.delete(floorplanId)
        redirect_to(protocol=settings.PROTOCOL, controller='property', action='json', id=propertyId)
    
    def assign(self, id=None):
        """ Assign floorplan to a unit.
        """
        propertyid = request.POST['propertyid']
        unitid = request.POST['unitid']
        
        model.Unit.update_floorplan(unitid, id)
        redirect_to(protocol=settings.PROTOCOL, controller='property', action='json', id=propertyid)

    def assignMultiple(self, id=None):
        """ Assign floorplan to multiple units.
        """
        propertyid = request.POST['propertyid']
        units = request.POST['units']
        if units:
            model.Unit.unassign_units_with_floorplan(id)
            
            unitsList = units.split(',')
            for unitid in unitsList:
                model.Unit.update_floorplan(unitid, id)
        
        #meta.Session.query(model.Unit.update().where(model.Unit.c.floorplanid==id).values(floorplanid=None))
        #u = update(model.Unit, model.Unit.c.floorplanid==id)
        #connection.execute(u, floorplanid=None)
        
        redirect_to(protocol=settings.PROTOCOL, controller='property', action='json', id=propertyid)

    def validate(self, action=None, floorplanid=None, propertyid=None):
        name = request.POST['name'].strip()
        sqft = request.POST['sqft'].strip()
        beds = request.POST['beds'].strip()
        baths = request.POST['baths'].strip()
        description = request.POST['description'].strip()
        
        errorslist = []
        
        if not valid.label(name):
            errorslist.append({'selector':'#floorPlanName', "message":"Please enter only letters and numbers for the floorplan name"})
        elif action=='create' or (action=='save' and model.Floorplan.get_name_by_id(floorplanid) != name):
            if model.Floorplan.floorplan_name_exist(name, propertyid):
                errorslist.append({'selector':'#floorPlanName', "message": "Floorplan name already exist"})
        
        if not valid.floorplan_numbers(sqft) or not valid.sqft(sqft):
            errorslist.append({'selector':'#sqft', "message":"Please enter a valid value for sqft"})
        
        if not valid.floorplan_numbers(beds) or not valid.beds(beds):
            errorslist.append({'selector':'#beds', "message":"Please enter a valid value for beds"})
            
        if not valid.floorplan_numbers(baths) or not valid.baths(baths):
            errorslist.append({'selector':'#baths', "message":"Please enter a valid value for baths"})
        
        if description and not valid.description(description):
        	errorslist.append({'selector':'#floorPlanDescription', "message":'Please enter description without special characters\
        																		such as "<","^","@", etc'})
        
        return errorslist