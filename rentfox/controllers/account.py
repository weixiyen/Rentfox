import logging
from rentfox import settings
from pylons import request, response, session, tmpl_context as c
from pylons.controllers.util import abort, redirect_to, redirect

from rentfox.lib.base import BaseController, render
from rentfox import model
from rentfox.model import meta
from rentfox.lib import valid, email as mailman

import rentfox.model.meta as meta
import json, uuid
import rentfox.lib.helpers as h
from recaptcha.client import captcha
from rentfox.lib import email as mailman

c.menuDashboard = 'off'
c.menuCompany = 'off'
c.menuAccount = 'off'
c.menuUsers = 'off'
c.menuHelp = 'off'
c.menuRecord = 'off'
c.menuProperty = 'off'
c.menuUnits = 'off'
c.menuReports = 'off'
c.menuContacts = 'off'
c.submenuStaff = 'off'
c.submenuProperty = 'off'
c.curPropName = ''
c.curPropId = False

log = logging.getLogger(__name__)

users = request.environ['authkit.users']

class AccountController(BaseController):
    

    def __before__(self, action, **params):
        c.page_title = 'My Account'
        pass
            
    def signout(self):
        return render('/signin.html')
    
    def signin(self):
        c.path = '/dashboard'
        return render('/signin.html')
    
    def cancelled(self):
        c.support_email = settings.EMAIL_SUPPORT
        return render('/cancelled.html')
    
    def newPassword(self, id):
        c.key = id
        return render('/new_password.html')
    
    def setNewPassword(self):
        error = 0
        key = request.POST['key']
        password = request.POST['password']
        
        try:
            manager = model.Manager.get_manager_by_password_key(key)
            username = manager.username
            users.user_delete(username)
            users.user_create(username, password, group=manager.type)
            meta.Session.commit()
            session.save()
            model.Manager.set_reset_password_key(manager.id, None)
        except:
            error = 'It appears you do not have a valid password recovery link. \
                    Try requesting a new one by going back to the sign in page \
                    and clicking on "Password Recovery".'
            
        return json.dumps({'error':error})
        
    def recoverPasswordByEmail(self):
        email = request.POST['email']
        manager = model.Manager.get_manager_with_email(email)
        
        if manager:
            response = {
                    'secret' : manager.password_secret,
                    'username' : manager.username
                        }
            reset_password_key = str(uuid.uuid1())
            model.Manager.set_reset_password_key( manager.id, reset_password_key )
            
            msg = """\
Hi {0},

We received a request for a password reset.

Your username is: {3}

You can reset your password here:
http://{1}/newPassword/{2}

If you did not issue such a request, please ignore this email.

Thank you,

Rentfox
http://{1}
            """.format(manager.first_name, settings.WEBSITE, manager.reset_password_key, manager.username)
            
            mailman.send([email], 'Reset your password', msg)
        else:
            response = { 'error' : 'Oops! The email address you entered does not exist.' }
        return json.dumps(response)
            
    def createNewClient(self):
        captchaPrivateKey = settings.RECAPTCHA_PRIVATE_KEY
        response = captcha.submit(
            request.POST['captchaChallenge'],
            request.POST['captchaResponse'],
            captchaPrivateKey,
            request.environ['REMOTE_ADDR'],
            )
        if not response.is_valid:
            errors = []
            errors.append({"selector":"#recaptcha_response_field", "message":"Sorry, please try again."})
            return json.dumps({"errors":errors})
        else:
            usertype = 'admin'
            
            company_id = str(uuid.uuid1())
            company_name = request.POST['company']
            username = request.POST['username'].strip()
            first_name = request.POST['fname'].strip()
            last_name = request.POST['lname'].strip()
            email = request.POST['email'].strip().lower()
            phone = request.POST['phone']
            password_secret = request.POST['secret'].strip()
            
            model.Company.create(
                                 id = company_id,
                                 name = company_name,
                                 email = email,
                                 phone = phone,
                                 maxunits = 500
                                 )
            
            manager_id = str(uuid.uuid1())

            model.Manager.create(
                             id = manager_id, 
                             companyid = company_id, 
                             username = username, 
                             first_name = first_name, 
                             last_name = last_name, 
                             email = email, 
                             phone = phone,
                             type = usertype,
                             password_secret = password_secret,
                             created_by = 'rentfox'
                             )
            
            users.user_create(request.POST['username'], request.POST['password'], group=usertype)
            meta.Session.commit()
            session.save()
            
            type_id = str(uuid.uuid1())
            model.Contact_type.create(id=type_id, label='Vendors', companyid=company_id)
            type_id = str(uuid.uuid1())
            model.Contact_type.create(id=type_id, label='Utilities', companyid=company_id)
            
            mailman.sendWelcome(email, manager_id, first_name, company_name, username, request.POST['password'])
            
            return json.dumps({"errors":0})
    
    def signUpBasicInfoCheck(self):
        company = request.POST['company'].strip()
        fname = request.POST['fname'].strip()
        lname = request.POST['lname'].strip()
        email = request.POST['email'].strip()
        phone = request.POST['phone'].strip()
        
        errors = []
        if not valid.text(company):
            errors.append({"selector":"#signupCompany", "message":"Invalid characters detected."})
        if not valid.name(fname):
            errors.append({"selector":"#signupFName", "message":"Please enter a valid first name."})
        if not valid.name(lname):
            errors.append({"selector":"#signupLName", "message":"Please enter a valid last name."})
        if not valid.email(email):
            errors.append({"selector":"#signupEmail", "message":"Please enter a valid email."})
        if not valid.phone(phone):
            errors.append({"selector":"#signupPhone", "message":"Please enter a valid phone #."})
            
        return json.dumps({"errors":errors})
    
    def signUpAuthInfoCheck(self):
        username = request.POST['username'].strip()
        password = request.POST['password'].strip()
        secret = request.POST['secret'].strip()

        errors = []
        if not valid.text(username):
            errors.append({"selector":"#signupUsername", "message":"Enter letters and/or numbers."})
        else:
            if users.user_exists(username):
                errors.append({"selector":"#signupUsername", "message":"Username is taken."})
        if not valid.text(password):
            errors.append({"selector":"#signupPassword", "message":"Please enter a password."})
        if not valid.text(secret):
            errors.append({"selector":"#signupSecret", "message":"Please enter a valid secret."})
        
        return json.dumps({"errors":errors})
    
    def activate(self, id):
        if request.environ.get('REMOTE_USER'):
            redirect('/signout#/activate/{0}'.format(id))
        c.activation_code = 'fake'
        if model.Manager.get_user_by_activation_code(id):
            c.activation_code = id
        return render('/activate.html')
    
    def activateUser(self):
        errors = []
        username = request.POST['username'].strip()
        password = request.POST['password']
        reminder = request.POST['reminder']
        activation_code = request.POST['code']
        
        if username:
            if model.Manager.get_manager_with_username(username):
                errors.append('The username you have chosen exists.  Please choose a different username.')
        else:
            errors.append('You did not enter a username.')
            
        if not password:
            errors.append('You did not enter a password')
        
        if not reminder:
            errors.append('You did not enter a secret reminder to help remember your password')
        
        if not errors:
            manager = model.Manager.get_user_by_activation_code(activation_code)
            manager.username = username
            manager.password_secret = reminder
            manager.activation_code = None
            users.user_create(username, password, group=manager.type)
            meta.Session.commit()
            session.save()
            
            company_name = model.Company.get_name_by_id(manager.companyid)
            mailman.sendWelcome(manager.email, manager.id, manager.first_name, company_name, username, password)
        
        return json.dumps({'errors':errors})
    
    @h.authorize(h.is_manager)
    @h.authenticate
    def manage(self):
        c.menuAccount = 'on'
        c.manager = model.Manager.get_manager_with_username(request.environ.get("REMOTE_USER"))
        c.created = c.manager.created.strftime("%B %d, %Y")
        c.propertiesOwned = len(request.environ.get('PROPERTY_LIST'))
        c.propertyLabel = c.propertiesOwned == 1 and 'property' or 'properties'
        return render('/account_manage.html')
    
    @h.authorize(h.is_manager)
    @h.authenticate
    def getLoggedInUser(self):
        manager = model.Manager.get_manager_with_username(request.environ.get("REMOTE_USER"))
        propList = model.Property.get_propertyList_of_userid(manager.id)
        managerProp = []
        for prop in propList:
            propObj = {
                'id': prop.id,
                'name': prop.name
            }
            managerProp.append(propObj)
        manager = {
                'id': manager.id,
                'name': '{0} {1}'.format(manager.first_name, manager.last_name),
                'first_name': manager.first_name,
                'last_name': manager.last_name,
                'email': manager.email,
                'phone': manager.phone,
                'username': manager.username,
                'type': manager.type,
                'created_by': manager.created_by,
                'properties': managerProp
                }
        return json.dumps(manager)
    
    @h.authorize(h.is_manager)
    @h.authenticate
    def resetPassword(self):
        username = request.environ.get("REMOTE_USER")
        old_password = request.POST['old_password']
        new_password = request.POST['new_password']
        password_secret = request.POST['password_secret']
        manager = model.Manager.get_manager_with_username(username)
        
        if users.user_has_password(username, old_password):
            users.user_set_password(username, new_password)
            model.Manager.set_with_username(username, password_secret=password_secret)
            meta.Session.commit()
            session.save()
        else:
            propJSON = {
                'errors': [{"message":"Sorry, you did not enter the correct old password."}]
            }
            return json.dumps(propJSON)
        
        return json.dumps({'success':1})
    
    def save(self):
    	errorslist = self.validate()
    	if errorslist:
            accJSON = {'errors': errorslist}
            return json.dumps(accJSON)
        
        userId = request.POST['userId']
        fname = request.POST['fname'].strip()
        lname = request.POST['lname'].strip()
        email = request.POST['email'].strip()
        phone = request.POST['phone'].strip()
        
        user = meta.Session.query(model.Manager).filter_by(id=userId).first()
        user.first_name = fname
        user.last_name = lname
        user.email = email
        user.phone = phone
        
        meta.Session.commit()
        session.save()
        
        redirect_to(protocol=settings.PROTOCOL, controller='account', action='getLoggedInUser')
    
    
    def validate(self):
    	fname = request.POST['fname'].strip()
        lname = request.POST['lname'].strip()
        email = request.POST['email'].strip()
        phone = request.POST['phone'].strip()
        
        errorslist = []
        
        if email and not valid.email(email):
            errorslist.append({'selector':'#update-email', "message":"Please enter a valid email"})
        elif phone and not valid.phone(phone):
            errorslist.append({'selector':'#update-phone', "message":"Please enter a valid phone"})
        else:
        	if not valid.name(fname):
        		errorslist.append({'selector':'#update-fname', "message":"Please enter a valid name"})
        	if not valid.name(lname):
        		errorslist.append({'selector':'#update-lname', "message":"Please enter a valid name"})
        
        return errorslist

    def delete(self):
        # 2) if created_by == 'rentfox', pick the re-assign superuser or just delete everything
        
        errors = []
        username = request.environ.get("REMOTE_USER")
        password = request.POST['password']
        
        user = model.Manager.get_manager_with_username(username)
        
        if not users.user_has_password(username, password):
            errors.append({"message":"Sorry, you did not enter the correct password."})
            return json.dumps({'errors':errors})
        
        if not errors:
            model.Property_manager.revokeAllAccessFrom(user.id)
            users.user_delete(user.username)
            meta.Session.delete(user)
            meta.Session.commit()
            session.save()
        
        return json.dumps({})
