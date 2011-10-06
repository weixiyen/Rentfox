import logging

from pylons import request, response, session, tmpl_context as c, url
from pylons.controllers.util import abort, redirect, redirect_to

from rentfox.lib.base import BaseController, render
from rentfox.lib import valid
from rentfox import model, settings
import rentfox.model.meta as meta
import rentfox.lib.helpers as h
import json

log = logging.getLogger(__name__)

class CompanyController(BaseController):
    @h.authorize(h.is_manager)
    @h.authenticate
    def __before__(self):
        c.page_title = 'Company'
    def manage(self):
        c.menuCompany = 'on'
        companyid = request.environ.get('COMPANY_ID')
        company = model.Company.get(companyid)
        c.name = company.name
        c.street = company.street or '[no street entered]'
        c.location = company.city and company.state and company.zip \
            and '{0}, {1}, {2}'.format(company.city,company.state,company.zip) \
            or '[no location entered]'
        c.phone = company.phone or '[no phone entered]'
        c.email = company.email or '[no email entered]'
        
        superuser = model.Company.get_superuser()
        c.superuser = superuser['name']
        c.is_superuser = superuser['username'] == request.environ.get('REMOTE_USER') and 1 or 0
        c.properties = model.Company.get_properties()
        c.propertyLabel = len(c.properties) == 1 and 'property' or 'properties'
        c.companyId = request.environ.get('COMPANY_ID')
        
        # stats
        active_leases = model.Lease.totalActiveLeasesInCompany(companyid)
        total_units = model.Company.totalUnitsInCompany(companyid)
        occupancy = total_units > 0 and (active_leases * 100 / total_units) or 0
        
        c.companyCreated = company.created.strftime('%B %d, %Y')
        c.totalUnits = total_units
        c.totalTenants = model.Tenant_lease.totalTenantsInCompany(companyid)
        c.occupancy = "{0}%".format( occupancy and occupancy or 1 )
                
        return render('/company_manage.html')
    
    def getInfo(self):
        company = model.Company.get(request.environ.get("COMPANY_ID"))
        location = ''
        if company.street and company.state and company.zip:
            location =  '{0}, {1}, {2}'.format(company.city, company.state, company.zip)
            
        company = {
                'id': company.id,
                'name': company.name,
                'email': company.email,
                'phone': company.phone,
                'street': company.street,
                'city': company.city,
                'state': company.state,
                'zip': company.zip,
                'location': location
                }
        return json.dumps(company)
    
    def getCompanyActiveUsers(self):
        userlist = model.Company.get_active_users(request.environ.get('COMPANY_ID'))
        return json.dumps(userlist)
    
    def switchSuperuser(self):
        managerId = request.POST['managerId']
        try:
            model.Company.switch_superuser(managerId)
        except:
            return json.dumps({'errors':[{'message':'Sorry, there was an error and we could not switch superusers.'}]})
        
        return json.dumps({'success':1})
    
    def save(self):
    	errorslist = self.validate()
    	if errorslist:
            comJSON = {'errors': errorslist}
            return json.dumps(comJSON)
        
        name = request.POST['name'].strip()
        street = request.POST['street'].strip()
        city = request.POST['city'].strip()
        state = request.POST['state'].strip()
        zip = request.POST['zip'].strip()
        email = request.POST['email'].strip()
        phone = request.POST['phone'].strip()
        
        company = meta.Session.query(model.Company).filter_by(id=request.environ.get('COMPANY_ID')).first()
        company.name = name
        company.street = street
        company.city = city
        company.state = state
        company.zip = zip
        company.email = email
        company.phone = phone
        
        meta.Session.commit()
        session.save()
        
        redirect_to(protocol=settings.PROTOCOL, controller='company', action='getInfo')
    
    def validate(self):
        name = request.POST['name'].strip()
        street = request.POST['street'].strip()
        city = request.POST['city'].strip()
        state = request.POST['state'].strip()
        zip = request.POST['zip'].strip()
        email = request.POST['email'].strip()
        phone = request.POST['phone'].strip()
        
        errorslist = []
        
        if not valid.label(name):
            errorslist.append({'selector':'#update-name', "message":"Please enter a valid company name"})
        elif street and not valid.street(street):
            errorslist.append({'selector':'#update-street', "message":"Please enter a valid street address"})
        elif phone and not valid.phone(phone):
            errorslist.append({'selector':'#update-phone', "message":"Please enter a valid phone"})
        elif email and not valid.email(email):
            errorslist.append({'selector':'#update-email', "message":"Please enter a valid email"})
        elif city or state or zip:
        	if not valid.city(city):
        		errorslist.append({'selector':'#update-city', "message":"Please enter a valid city"})
        	if not valid.state(state):
        		errorslist.append({'selector':'#update-state', "message":"Please enter a valid state"})
        	if not valid.zip(zip):
        		errorslist.append({'selector':'#update-zip', "message":"Please enter a valid zip"})
        
        return errorslist
        
    def delete(self):
        try:
            username = request.environ.get("REMOTE_USER")
            password = request.POST['password']
            users = request.environ['authkit.users']
            if not users.user_has_password(username, password):
                return json.dumps({'errors':[{"message":"Sorry, you did not enter the correct password."}]})
            else:
                result = model.Company.delete()
            return json.dumps({'success':1})
        except:
            return json.dumps({'errors':[{"message":"Oops! There was a server error processing your request."}]})