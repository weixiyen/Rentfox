import logging

from pylons import request, response, session, tmpl_context as c, url
from pylons.controllers.util import abort, redirect_to
from rentfox.lib import valid
from rentfox.model.property import Property

from rentfox import model
from rentfox.lib.base import BaseController, render
import rentfox.lib.helpers as h
log = logging.getLogger(__name__)

import uuid, json

class ContactsController(BaseController):
    
    @h.authorize(h.is_manager)
    @h.authenticate
    def __before__(self):
        c.menuContacts = 'on'
        c.page_title = 'Contacts'
        
    
    def index(self):
        c.foxAlert = False
        return render("/contacts.html")
    
    def create(self):
        errorslist = self.validate()
        if errorslist:
            conJSON = {'errors': errorslist}
            return json.dumps(conJSON)
        
        type = request.POST['type'].strip()
        if int(request.POST['newtype']):
            type_id = str(uuid.uuid1())
            model.Contact_type.create(id=type_id, label=type)
        else:
            type_id = type
        
        contact_id = str(uuid.uuid1())
        
        model.Contact.create(
                             id=contact_id,
                             typeid=type_id,
                             label=request.POST['label'],
                             address=request.POST['address'],
                             city=request.POST['city'],
                             state=request.POST['state'],
                             zip=request.POST['zip'],
                             phone=request.POST['phone'],
                             email=request.POST['email'],
                             description=request.POST['description']
                             )
        
        redirect_to(controller='contacts', action='json', type='all')
    
    def update(self):
        errorslist = self.validate()
        if errorslist:
            conJSON = {'errors': errorslist}
            return json.dumps(conJSON)
        
        contact_id = request.POST['contactId']
        type = request.POST['type']
        if int(request.POST['newtype']):
            type_id = str(uuid.uuid1())
            model.Contact_type.create(id=type_id, label=type)
        else:
            type_id = type
        
        model.Contact.update(
                             id=contact_id,
                             typeid=type_id,
                             label=request.POST['label'],
                             address=request.POST['address'],
                             city=request.POST['city'],
                             state=request.POST['state'],
                             zip=request.POST['zip'],
                             phone=request.POST['phone'],
                             email=request.POST['email'],
                             description=request.POST['description']
                             )
        redirect_to(controller='contacts', action='json', type='all')
        
    def delete(self):
        contact_id = request.POST['contactId']
        model.Contact.delete(contact_id)
        
        
        redirect_to(controller='contacts', action='json', type='all')
    
    def renameType(self):
        type_id = request.POST['typeId']
        type_label = request.POST['typeLabel']
        
        model.Contact_type.rename(type_id, type_label)
        redirect_to(controller='contacts', action='json', type='all')
    
    def deleteType(self):
        type_id = request.POST['typeId']
        
        model.Contact_type.delete(type_id)
        
        redirect_to(controller='contacts', action='json', type='all')
        
    def validate(self):
        label = request.POST['label']
        address = request.POST['address']
        city = request.POST['city']
        state = request.POST['state']
        zip = request.POST['zip']
        phone = request.POST['phone']
        email = request.POST['email']
        type = request.POST['type'].strip()
        description = request.POST['description']
        
        errorslist = []
        
        if not valid.label(label):
            errorslist.append({'selector':'#name', "message":"Please enter a valid name"})
        
        if not email and not phone:
            errorslist.append({'selector':'#email,#phone', "message":"You must enter either an email or a phone number"})
        
        if email and not valid.email(email):
            errorslist.append({'selector':'#email', "message":"Please enter a valid email"})
        
        if phone and not valid.phone(phone):
            errorslist.append({'selector':'#phone', "message":"Please enter a valid phone"})
        
        if int(request.POST['newtype']) and not valid.label(type):
            errorslist.append({'selector':'#new-type-label', "message":"Please enter a valid type name"})
        
        if address and not valid.street(address):
            errorslist.append({'selector':'#street', "message":"Please enter a valid street"})
        
        if city and not valid.city(city):
            errorslist.append({'selector':'#city', "message":"Please enter a valid city"})
        
        if state and not valid.state(state):
            errorslist.append({'selector':'#state', "message":"Please enter a valid state"})
        
        if zip and not valid.zip(zip):
            errorslist.append({'selector':'#zip', "message":"Please enter a valid zip code"})
        
        if description and not valid.description(description):
            errorslist.append({'selector':'#description', "message":'Please enter description without special characters\
        																		such as "<","^","@", etc'})
        
        if not type:
            errorslist.append({'selector':'#new-type-label', "message":"Please enter a valid category"})
        
        return errorslist
    
    def json(self, type): #Type is either id or 'all'
        contactsInfo = []
        if type == 'all':
            contacts = model.Contact.get_all()
        else:
            contacts = model.Contact.get_all_with_typeid(type)
        
        for contact in contacts:
            contactObj = {
                'id': contact.id,
                'type': model.Contact_type.get_label(contact.typeid),
                'typeid': contact.typeid,
                'label': contact.label,
                'street': contact.address,
                'email': contact.email,
                'phone': contact.phone,
                'city': contact.city,
                'state': contact.state,
                'zip': contact.zip,
                'description': contact.description
            }
            contactsInfo.append(contactObj)
        
        typesInfo = []
        types = model.Contact_type.get_all()
        for type in types:
            typeObj = {
                'id': type.id,
                'label': type.label
            }
            typesInfo.append(typeObj)
        
        contactDetails = {
            'contacts': contactsInfo,
            'types': typesInfo
        }

        return json.dumps(contactDetails)