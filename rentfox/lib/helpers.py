"""Helper functions

Consists of functions to typically be used within templates, but also
available to Controllers. This module is available to templates as 'h'.
"""
# Import helpers as desired, or define your own, ie:
#from webhelpers.html.tags import checkbox, password
from routes import url_for
from pylons import request, tmpl_context as c
from pylons.controllers.util import redirect as redirect_to
from decorator import decorator
from authkit.authorize.pylons_adaptors import authorize
from authkit.permissions import ValidAuthKitUser, HasAuthKitGroup, And
from rentfox import model

is_valid_user = ValidAuthKitUser()
is_admin = HasAuthKitGroup(['admin'])
is_manager = HasAuthKitGroup(['manager', 'admin', 'deleted'])

@decorator
def authenticate(f, *args):
    if request.environ.get("REMOTE_USER"):
        request.environ.__setitem__("PROPERTY_LIST", model.Property.get_propertyList_of_username(request.environ.get("REMOTE_USER")))
    
        if not request.environ.get("COMPANY_ID"):
            request.environ.__setitem__("COMPANY_ID", model.Manager.get_companyid_of_username(request.environ.get("REMOTE_USER")))
            request.environ.__setitem__("COMPANY_NAME", model.Company.get_name_by_id(request.environ.get("COMPANY_ID")))
        
        if not request.environ.get("USER_GROUP"):
            request.environ.__setitem__("USER_GROUP", request.environ['authkit.users'].user_group(request.environ.get('REMOTE_USER')))
        
        if 'deleted' == request.environ.get("USER_GROUP"):
            request.environ.__delitem__('REMOTE_USER')
            request.environ.__delitem__('COMPANY_ID')
            request.environ.__delitem__('USER_GROUP')
            redirect_to(controller='account', action='cancelled')
        
        c.foxAlert = model.Company.foxAlert()

    return f(*args)
