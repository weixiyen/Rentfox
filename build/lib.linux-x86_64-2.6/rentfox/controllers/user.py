import logging

from pylons import request, response, session, tmpl_context as c
from pylons.controllers.util import redirect_to

from rentfox.lib.base import BaseController, render
from rentfox import model
import rentfox.model.meta as meta
from rentfox.lib import valid, email as mailman
from rentfox.lib.date import days_ago
from PIL import Image
import rentfox.lib.helpers as h
import uuid
import json
from rentfox import settings

log = logging.getLogger(__name__)

auth_user = request.environ['authkit.users']

class UserController(BaseController):
    @h.authorize(h.is_manager)
    @h.authenticate
    def __before__(self):
        c.menuSubmenu = 1
        c.menuUsers = 'on'
        c.submenuStaff = 'on'
        c.page_title = 'User Management'
    
    def index(self, propertyId=None):
        if propertyId:
            c.curPropId = propertyId
            c.curPropName = model.Property.get_name_by_id(propertyId)
            c.menuProperty = 'on'
        c.foxAlert = False
        return render('/users.html')
    
    def create(self):
        """Create either a new admin or manager user in both the Manager table and Authkit Users table.
        """
        propertyFilter = request.POST['propertyId'] != 'false' and request.POST['propertyId'] or None 
        created_by = request.POST['created_by']
        manager_id = str(uuid.uuid1())
        company_id = request.environ.get("COMPANY_ID")
        first_name = request.POST['fname'].strip()
        last_name = request.POST['lname'].strip()
        email = request.POST['email'].strip()
        phone = request.POST['phone'].strip()
        usertype = int(request.POST['admin']) and 'admin' or 'manager'
        activation_code = str(uuid.uuid1())
        activation_link = 'http://{0}/activate/{1}'.format(settings.WEBSITE,activation_code)
        
        errorslist = self.validate(action='create')
        
        if errorslist:
            userJSON = {
                'errors': errorslist
            }
            return json.dumps(userJSON)
        
        model.Manager.create(
                             id = manager_id, 
                             companyid = company_id, 
                             first_name = first_name, 
                             last_name = last_name, 
                             email = email, 
                             phone = phone,
                             type = usertype,
                             activation_code = activation_code,
                             created_by = created_by
                             )
        
        
        meta.Session.commit()
        session.save()
        
        mailman.sendActivationLink(manager_id)
            
        return json.dumps({'currentUserId': manager_id})
    

    def save(self):
        """Save user's data to the userId given.
        """
        propertyFilter = request.POST['propertyId'] != 'false' and request.POST['propertyId'] or None 
        userId = request.POST['userId']
        fname = request.POST['fname'].strip()
        lname = request.POST['lname'].strip()
        email = request.POST['email'].strip()
        phone = request.POST['phone'].strip()
        admin = request.POST['admin']
        
        errorslist = self.validate(action='update')
        
        if errorslist:
            userJSON = {
                'errors': errorslist
            }
            return json.dumps(userJSON)
        
        user = meta.Session.query(model.Manager).filter_by(id=userId).first()
        user.first_name = fname
        user.last_name = lname
        user.email = email
        user.phone = phone
        user.type = int(admin) and 'admin' or 'manager'
        
        meta.Session.commit()
        session.save()
        redirect_to(controller='user', action='json', id=propertyFilter)

    def delete(self):
        """Delete user if either the logged-in user is an 'Admin' or the user being deleted is created by the logged-in user.
        """
        curUsername = request.environ.get("REMOTE_USER")
        
        userId = request.POST['userId']
        propertyFilter = request.POST['propertyId'] != 'false' and request.POST['propertyId'] or None 
        user = model.Manager.get(userId)
        username = user.username
        
        if model.Manager.has_permission(curUsername, userId):
            model.Property_manager.revokeAllAccessFrom(user.id)
            if username:
                auth_user.user_delete(username)
            meta.Session.delete(user)
            meta.Session.commit()
            session.save()
        else:
            userJSON = {
                'errors': [{"message":"Sorry, you do not have permission to delete this user"}]
            }
            return json.dumps(userJSON)
        
        redirect_to(controller='user', action='json', id=propertyFilter)
    
    def assignProperties(self):
        """Assign list of properties to the user.
        """
        curUsername = request.environ.get("REMOTE_USER")
        propertyFilter = request.POST['propertyId'] != 'false' and request.POST['propertyId'] or None 
        manager_id = request.POST['userId']
        otherUserId = request.POST['otherUserId']
        propList = len(request.POST['propList']) and request.POST['propList'].split(',') or []
        
        if model.Manager.has_permission(curUsername, otherUserId):
            for prop_id in propList:
                id = str(uuid.uuid1())
                model.Property_manager.create(id=id, property_id=prop_id, manager_id=manager_id)
        else:
            userJSON = {
                'errors': [{"message":"Sorry, you do not have permission to complete this task"}]
            }
            return json.dumps(userJSON)
        
        redirect_to(controller='user', action='json', id=propertyFilter)
    
    def unassignProperties(self):
        """ Unassign the property from the user by deleting the record in the Property_manager table
            that matches the given user-id and property-id.
        """
        curUsername = request.environ.get("REMOTE_USER")
        propertyFilter = request.POST['propertyId'] != 'false' and request.POST['propertyId'] or None 
        manager_id = request.POST['userId']
        otherUserId = request.POST['otherUserId']
        propList = len(request.POST['propList']) and request.POST['propList'].split(',') or []
        
        if model.Manager.has_permission(curUsername, otherUserId):
            for prop_id in propList:
                model.Property_manager.delete(prop_id, manager_id)
        else:
            userJSON = {
                'errors': [{"message":"Sorry, you do not have permission to complete this task"}]
            }
            return json.dumps(userJSON)
           
        redirect_to(controller='user', action='json', id=propertyFilter)
    
    def resendActivationLink(self):
        userId = request.POST['userId']
        errors = mailman.sendActivationLink(userId)
        return json.dumps({'errors':errors})
    
    def uploadPhoto(self):
        pass

    def getManager(self):
        manager = model.Manager.get(request.POST['userId'])
        propList = model.Property.get_propertyList_of_userid(manager.id)
        activation_link = 'http://{0}/activate/{1}'.format(settings.WEBSITE,manager.activation_code)
        managerProp = []
        for prop in propList:
            propObj = {
                'id': prop.id,
                'name': prop.name
            }
            managerProp.append(propObj)
        manager = {
                'id': manager.id,
                'first_name': manager.first_name,
                'last_name': manager.last_name,
                'email': manager.email,
                'phone': manager.phone,
                'username': manager.username,
                'type': manager.type,
                'created': manager.created.strftime('%b %d, %Y'),
                'created_by': manager.created_by,
                'activation_link': activation_link,
                'activation_sent': days_ago(manager.activation_sent),
                'properties': managerProp
                }
        return json.dumps(manager)
    
    def validate(self, action=None):
        company_id = request.environ.get("COMPANY_ID")
        first_name = request.POST['fname'].strip()
        last_name = request.POST['lname'].strip()
        email = request.POST['email'].strip()
        phone = request.POST['phone'].strip()
        usertype = int(request.POST['admin']) and 'admin' or 'manager'
        userid = action == 'update' and request.POST['userId'] or None
        
        errorslist = []
        
        if not valid.name(first_name):
            errorslist.append({'selector':'#{0}-fname'.format(action), "message":"Please enter a valid first name"})
         
        if not valid.name(last_name):
            errorslist.append({'selector':'#{0}-lname'.format(action), "message":"Please enter a valid last name"})
        
        if not valid.phone(phone):
            errorslist.append({'selector':'#{0}-phone'.format(action), "message":"Please enter a valid phone number"})
        
        if not valid.email(email):
            errorslist.append({'selector':'#{0}-email'.format(action), "message":"Please enter a valid email"})
        else:
            if model.Manager.email_exist(email, userid):
                errorslist.append({"selector":"#{0}-email".format(action), "message":"Sorry, this email address is taken."})
            
        return errorslist

    
    def json(self, id=None):
        usersInfo = []
        adminList = model.Manager.get_admins_of_company(request.environ.get("COMPANY_ID"))
        for admin in adminList:
            adminObj = {
                'id': admin.id,
                'name': admin.first_name + ' ' + admin.last_name,
                'type': 'admin'
            }
            usersInfo.append(adminObj)
        
        if id:
            managerList = model.Manager.get_managers_of_property(id)
        else:
            managerList = model.Manager.get_managers_of_company(request.environ.get("COMPANY_ID"))
        managerInfo = []
        for manager_id in managerList:
            manager = model.Manager.get(manager_id)
            propList = model.Property.get_propertyList_of_userid(manager_id)
            managerProp = []
            for prop in propList:
                propObj = {
                    'id': prop.id,
                    'name': prop.name
                }
                managerProp.append(propObj)
            
            managerObj = {
                'id': manager.id,
                'name': manager.first_name + ' ' + manager.last_name,
                'type': 'manager',
                'properties': managerProp
            }
            managerInfo.append(managerObj)
        
        # Sort managerInfo dictionary by name 
        nameList = []
        for item in managerInfo:
            nameList.append((item['name'], item['id']))
           
        nameList = sorted(nameList)
       
        sortedNameList = []
        for item in nameList:
            sortedNameList.extend([d for d in managerInfo if d['name'] == item[0] and d['id'] == item[1]])
         
        managerInfo = sortedNameList
        for item in managerInfo:
            usersInfo.append(item)
        
        propertiesInfo = []
        curUser = model.Manager.get_manager_with_username(request.environ.get("REMOTE_USER"))
        if curUser.type == 'admin':
            propList = model.Property.get_propertyList_of_companyid(curUser.companyid)
        else:
            propList = model.Property.get_propertyList_of_userid(curUser.id)
        for prop in propList:
            propObj = {
                'id': prop.id,
                'name': prop.name
            }
            propertiesInfo.append(propObj)
            
        manager = model.Manager.get_manager_with_username(request.environ.get("REMOTE_USER"))
        me = {
              'id': manager.id,
              'type': manager.type,
              'created_by': manager.created_by
              }
        
        result = {
            'users': usersInfo,
            'properties': propertiesInfo,
            'me': me
        }
        return json.dumps(result)
        