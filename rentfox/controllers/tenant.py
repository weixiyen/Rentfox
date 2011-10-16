import logging

from pylons import request, response, session, tmpl_context as c
from pylons.controllers.util import redirect_to

from rentfox.lib.base import BaseController, render
from rentfox import model, settings
from rentfox.lib import valid

import rentfox.model.meta as meta
import rentfox.lib.helpers as h
import json
import uuid
import datetime

import rentfox.lib.valid as valid

log = logging.getLogger(__name__)

class TenantController(BaseController):
    @h.authorize(h.is_manager)
    @h.authenticate
    def __before__(self):
        c.menuSubmenu = 0
    
    def add(self, id):
        c.leaseId = id
        lease = model.Lease.get(id)
        unit = model.Unit.get_unit(lease.unitid)
        property = model.Property.get_property(unit.propertyid)
        
        c.unit = property.name if property.type == 'single' else '{0} #{1}'.format(property.name, unit.label)
        c.unitId = lease.unitid
        c.page_title = 'Add Tenant'
        return render('/tenant_add.html')
    
    def view(self, id):
        tenant = model.Tenant.get(id)
        c.tenantId = tenant.id
        c.tenantResidences = model.Tenant_lease.getUnitsByTenantId(id)        
        c.page_title = tenant.first_name + ' ' + tenant.last_name
        return render('/tenant_view.html')
    
    def create(self, fname=None, lname=None, email=None, phone=None, dob=None, ssn=None, leaseId=None):
        if fname == None:
            fname = request.POST['fname']
        if lname == None:
            lname = request.POST['lname']
        if email == None:
            email = request.POST['email']
        if phone == None:
            phone = request.POST['phone']
        if dob == None:
            if len(request.POST['dob'].strip()):
                birthday = request.POST['dob'].split('/')
                dob = datetime.date(int(birthday[2]), int(birthday[0]), int(birthday[1]))
            else:
                dob = None
        if ssn == None:
            ssn = request.POST['ssn']
        if leaseId == None:
            leaseId = request.POST['leaseId']
        
        tenant_id = str(uuid.uuid1())
        tenant_lease_id = str(uuid.uuid1())
        tenant_company_id = str(uuid.uuid1())
        model.Tenant.create(
                            id=tenant_id,
                            first_name=fname,
                            last_name=lname,
                            email=email,
                            phone=phone,
                            dob=dob,
                            ssn=ssn)
        model.Tenant_lease.create(id=tenant_lease_id, 
                                  tenantid=tenant_id,
                                  leaseid = leaseId)
        model.Tenant_company.create(id=tenant_company_id,
                                    tenantid = tenant_id,
                                    companyid = request.environ.get('COMPANY_ID')
                                    )
        
        redirect_to(protocol=settings.PROTOCOL, controller='tenant', action='json', id=tenant_id)
    
    def addLease(self):
        tenant_lease_id = str(uuid.uuid1())
        tenant_id = request.POST['tenantId']
        lease_id = request.POST['leaseId']
        in_lease = model.Tenant_lease.tenantInLease(tenant_id, lease_id)
        if not in_lease:
            model.Tenant_lease.create(id=tenant_lease_id, 
                                      tenantid = tenant_id,
                                      leaseid = lease_id)
        return json.dumps({'tenantId':tenant_id})
    
    def removeFromLease(self):
        tenantid = request.POST['tenantId']
        leaseid = request.POST['leaseId']
        unitid = request.POST['unitId']
        model.Tenant_lease.remove(tenantid, leaseid)
        redirect_to(protocol=settings.PROTOCOL, controller='unit', action='json', id=unitid) 
    
    def updateTenant(self):
        tenantid = request.POST['tenantId']
        fname = request.POST['fname']
        lname = request.POST['lname']
        email = request.POST['email']
        phone = request.POST['phone']
        if len(request.POST['dob'].strip()):
            birthday = request.POST['dob'].split('/')
            dob = datetime.date(int(birthday[2]), int(birthday[0]), int(birthday[1]))
        else:
            dob = None
        ssn = request.POST['ssn']
        
        errors = []
        if not valid.name(fname):
            errors.append({'selector':'#tenantFname','message':'The first name is invalid.'})
        if not valid.name(lname):
            errors.append({'selector':'#tenantLname','message':'The last name is invalid.'})
        if not valid.phone(phone) and len(phone):
            errors.append({'selector':'#tenantPhone','message':'The phone number is not valid.'})
        if not valid.email(email) and len(email):
            errors.append({'selector':'#tenantEmail','message':'Please enter a valid email address.'})
        if not valid.date(request.POST['dob']) and len(request.POST['dob']):
            errors.append({'selector':'#tenantDOB','message':'Please enter a valid date for the D.O.B.'})
        if not valid.ssn(ssn) and len(ssn):
            errors.append({'selector':'#tenantSSN','message':'Please enter a valid social security number.'})
        if errors:
            return json.dumps({'errors':errors})
        
        model.Tenant.update(
                            id=tenantid,
                            first_name=fname,
                            last_name=lname,
                            email=email,
                            phone=phone,
                            dob=dob,
                            ssn=ssn)
        redirect_to(protocol=settings.PROTOCOL, controller='tenant', action='json', id=tenantid)
            
    def exists(self):
        fname = request.POST['fname']
        lname = request.POST['lname']
        email = request.POST['email']
        phone = request.POST['phone']
        if len(request.POST['dob'].strip()):
            birthday = request.POST['dob'].split('/')
            dob = datetime.date(int(birthday[2]), int(birthday[0]), int(birthday[1]))
        else:
            dob = None
        ssn = request.POST['ssn']
        leaseId = request.POST['leaseId']
        fullName = fname + ' ' + lname
        
        errors = []
        if not valid.name(fname):
            errors.append({'selector':'#fname','message':'The first name is invalid.'})
        if not valid.name(lname):
            errors.append({'selector':'#lname','message':'The last name is invalid.'})
        if not valid.email(email) and len(email):
            errors.append({'selector':'#email','message':'Please enter a valid email address.'})
        if errors:
            return json.dumps({'errors':errors})
        
        tenant_q = model.Tenant.name_match(fname, lname)
        
        if tenant_q:
            tenantsArray = []
            for tenant in tenant_q:
                # improve this code with join later
                tenant_lease = meta.Session.query(model.Tenant_lease).filter_by(tenantid=tenant.id).first()
                if tenant_lease:
                    lease = meta.Session.query(model.Lease).filter_by(id=tenant_lease.leaseid).first()
                    unitid = lease.unitid
                    unit = meta.Session.query(model.Unit).filter_by(id=unitid).first()
                    unit = {
                        'id': unit.id,
                        'display': unit.label
                    }
                else:
                    unit = 0
                
                tenantObj = {
                    'id': tenant.id,
                    'name': tenant.first_name + ' ' + tenant.last_name,
                    'email': tenant.email,
                    'unit': unit
                }
                tenantsArray.append(tenantObj)
        
            matchJSON = {
                'match': 1,
                'tenants': tenantsArray
            }
        
            return json.dumps(matchJSON)
            
        else:
            self.create(fname, lname, email, phone, dob, ssn, leaseId)

    
    def saveContact(self):
        contactid = request.POST['contactId']
        tenantid = request.POST['tenantId']
        name = request.POST['name'].strip()
        phone = request.POST['phone'].strip()
        relationship = request.POST['relationship'].strip()
        
        errors = []
        """
        if not valid.name(name):
            errors.append({'selector':'#emergencyName','message':'The name is invalid.'})
        """
        if not valid.phone(phone):
            errors.append({'selector':'#emergencyPhone','message':'The phone number is not valid.'})
        if not valid.text(relationship):
            errors.append({'selector':'#emergencyRelationship','message':'Please specify a valid relationship, eg "Friend".'})
        if errors:
            return json.dumps({'errors':errors})
        
        
        if contactid == '0':
            contactid = str(uuid.uuid1())
            model.Emergency_contact.create(
                                           id=contactid,
                                           tenantid=tenantid,
                                           name=name,
                                           phone=phone,
                                           relationship=relationship)
        else:
            model.Emergency_contact.save(
                                         id=contactid,
                                         tenantid=tenantid,
                                         name=name,
                                         phone=phone,
                                         relationship=relationship)
        
        redirect_to(protocol=settings.PROTOCOL, controller='tenant', action='json', id=tenantid)
    
    def deleteContact(self):
        contactId = request.POST['contactId']
        tenantid = request.POST['tenantId']
        model.Emergency_contact.delete(contactId)
        redirect_to(protocol=settings.PROTOCOL, controller='tenant', action='json', id=tenantid)

    def saveResidence(self):
        residenceid = request.POST['residenceId']
        tenantid = request.POST['tenantId']
        startdate = request.POST['startdate'].strip()
        enddate = request.POST['enddate'].strip()
        street = request.POST['street'].strip()
        city = request.POST['city'].strip()
        state = request.POST['state'].strip()
        landlordname = request.POST['landlordname'].strip()
        landlordphone = request.POST['landlordphone'].strip()
        landlordemail = request.POST['landlordemail'].strip()
        reason = request.POST['reason'].strip()
        
        errors = []
        if not valid.date(startdate):
            errors.append({'selector':'#residenceStart','message':'Please enter a valid date.'})
        if not valid.date(enddate):
            errors.append({'selector':'#residenceEnd','message':'Please enter a valid date.'})
        if not valid.date(startdate, enddate):
            errors.append({'selector':'#residenceEnd','message':'The end date is greater than the start date.'})
        if not valid.street(street):
            errors.append({'selector':'#residenceStreet','message':'Please enter a valid street.'})
        if not valid.city(city):
            errors.append({'selector':'#residenceCity','message':'Please enter a valid city.'})
        if not valid.state(state):
            errors.append({'selector':'#residenceState','message':'Please enter a valid state.'})
        """
        if not valid.name(landlordname) and len(landlordname):
            errors.append({'selector':'#residenceLandlord','message':'Please enter a valid name for the landlord.'})
        """
        if not valid.phone(landlordphone) and len(landlordphone):
            errors.append({'selector':'#residenceLandlordPhone','message':'Please enter a phone number for the landlord.'})
        if not valid.email(landlordemail) and len(landlordemail):
            errors.append({'selector':'#residenceLandlordEmail','message':'Please enter a valid email for the landlord.'})
        if not valid.text(reason) and len(reason):
            errors.append({'selector':'#residenceReasonLeaving','message':'There is an error with the "reason for leaving" field.  Please double check you didn\'t enter any strange characters.'})
        if errors:
            return json.dumps({'errors':errors})
        
        startdate = startdate.split("/")
        startdate = datetime.date(int(startdate[2]), int(startdate[0]), int(startdate[1]))
        
        enddate = enddate.split("/")
        enddate = datetime.date(int(enddate[2]), int(enddate[0]), int(enddate[1]))
        
        if residenceid == '0':
            residenceid = str(uuid.uuid1())
            model.Previous_residence(residenceid, tenantid, startdate, enddate, street,\
                                     city, state, landlordname, landlordemail, landlordphone, reason) 
        else:
            model.Previous_residence.save(residenceid, tenantid, startdate, enddate, street,\
                                          city, state, landlordname, landlordemail, landlordphone, reason) 
        
        redirect_to(protocol=settings.PROTOCOL, controller='tenant', action='json', id=tenantid)
    
    def deleteResidence(self):
        residenceId = request.POST['residenceId']
        tenantid = request.POST['tenantId']
        model.Previous_residence.delete(residenceId)
        redirect_to(protocol=settings.PROTOCOL, controller='tenant', action='json', id=tenantid)
    
    def json(self, id=None):
        tenant = model.Tenant.get(id)
        econtact = model.Emergency_contact.get_econtacts_of_tenantid(id)
        prev_res = model.Previous_residence.get_records_with_tenantid(id)
        
        contactsInfo = []
        for contact in econtact:
            contactObj = {
                'id': contact.id,
                'name': contact.name,
                'phone': contact.phone,
                'relationship': contact.relationship
            }
            contactsInfo.append(contactObj)
            
        residencesInfo = []
        for res in prev_res:
            resObj = {
                'id': res.id,
                'started': res.startdate.strftime("%m/%d/%Y"),
                'ended': res.enddate.strftime("%m/%d/%Y"),
                'started_display': res.startdate.strftime("%b %d, %Y"),
                'ended_display': res.enddate.strftime("%b %d, %Y"),
                'street': res.address,
                'city': res.city,
                'state': res.state,
                'landlord': res.landlordname,
                'landlordEmail': res.landlordemail,
                'landlordPhone': res.landlordphone,
                'reason': res.reason
            }
            residencesInfo.append(resObj)
        
        tenantDetails = {
            'id': tenant.id,
            'firstname': tenant.first_name,
            'lastname': tenant.last_name,
            'email': tenant.email,
            'phone': tenant.phone,
            'ssn': tenant.ssn,
            'dob': tenant.dob.strftime("%m/%d/%Y") if tenant.dob else '',
            'contacts': contactsInfo,
            'residences': residencesInfo
        }

        return json.dumps(tenantDetails)
        '''
            Tenant - USER JSON SAMPLE
            {
                id: 'xbsd-efer-efer',
                firstname: 'Weixi',
                lastname: 'Yen',
                email: 'weixi@gmail.com',
                phone: '415-999-0000',
                ssn: '555-55-5555',
                dob: '1984-12-24',
                contacts: [
                    {
                        id: 'xcaf',
                        name: 'John Smith',
                        phone: '555-555-5555',
                        relationship: 'Friend'
                    },
                    {
                        id: 'xcfa',
                        name: 'John Smith',
                        phone: '555-555-5555',
                        relationship: 'Friend'
                    }
                ],
                residences: [
                    {
                        started: '05/13/2008',
                        ended: '05/13/2009',
                        street: '1345 Bay Street #707',
                        city: 'San Francisco',
                        state: 'CA',
                        landlord: 'John Avery',
                        landlordEmail': 'john@john.com',
                        landlordPhone': '555-555-5555',
                        reason: 'I suck'
                    }
                ]
            }
        '''
