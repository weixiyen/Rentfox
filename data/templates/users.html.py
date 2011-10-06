from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 5
_modified_time = 1281767151.0487549
_template_filename='/var/apps/rentfox_dev/rentfox/templates/users.html'
_template_uri='/users.html'
_template_cache=cache.Cache(__name__, _modified_time)
_source_encoding='utf-8'
from webhelpers.html import escape
_exports = []


def _mako_get_namespace(context, name):
    try:
        return context.namespaces[(__name__, name)]
    except KeyError:
        _mako_generate_namespaces(context)
        return context.namespaces[(__name__, name)]
def _mako_generate_namespaces(context):
    pass
def _mako_inherit(template, context):
    _mako_generate_namespaces(context)
    return runtime._inherit_from(context, '/base.html', _template_uri)
def render_body(context,**pageargs):
    context.caller_stack._push_frame()
    try:
        __M_locals = __M_dict_builtin(pageargs=pageargs)
        c = context.get('c', UNDEFINED)
        __M_writer = context.writer()
        # SOURCE LINE 1
        __M_writer(u'<script type="text/javascript">\n\t$(document).ready(function(){\n\t\tpage = new Page;\n\t\tuser = new Users({propertyId:\'')
        # SOURCE LINE 4
        __M_writer(escape(c.curPropId))
        __M_writer(u'\'});\n\t});\n</script>\n<div class="page" id="users">\n\t\n\t<div class="left"><a class="mini button" id="createNewUser"><span><img src="/styles/img/ico/user_add.png" />Create new user</span></a></div>\n\t\n\t<div class="middle">\n\t\t<div class="userbox" id="createBox"><div class="wrap"><div class="wrap">\n\t\t\t\n\t\t\t<div class="create">\n\t\t\t\t<a class="close" id="closeCreateBox"><span>Close</span></a>\n\t\t\t\t<h3>Create new property manager</h3>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class="userForm">\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="left">First Name</div>\n\t\t\t\t\t<div class="right"><input type="text" class="date" id="create-fname" /></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="left">Last Name</div>\n\t\t\t\t\t<div class="right"><input type="text" class="date" id="create-lname" /></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="left">Phone</div>\n\t\t\t\t\t<div class="right"><input type="text" class="date" id="create-phone" /></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="row break">\n\t\t\t\t\t<div class="left">Email</div>\n\t\t\t\t\t<div class="right"><input type="text" class="date" id="create-email" /></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="row break" id="createUserRoleSection">\n\t\t\t\t\t<div class="left">Role</div>\n\t\t\t\t\t<div class="right">\n\t\t\t\t\t\t<input type="checkbox" id="create-admin" />\n\t\t\t\t\t\t<label for="create-admin">Administrator</label>\n\t\t\t\t\t\t<div class="indented">\n\t\t\t\t\t\t\tAdministrators can view ALL properties and modify users.\n\t\t\t\t\t\t\tNon-administrators (managers) only have access to properties \n\t\t\t\t\t\t\tthat you specify.\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="row">\n\t\t\t\t\t<a class="button primary" id="createUserButton"><span>Create this user</span></a>\n\t\t\t\t\t<a class="button cancel" id="cancelCreateBox"><span>Cancel</span></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t</div></div></div>\n\n\t\t<div class="userbox" id="displayBox"><div class="wrap"><div class="wrap">\n\t\t\t\n\t\t\t<div class="display">\n\t\t\t\t\n\t\t\t\t<a class="close" id="closeDisplayBox"><span>Close</span></a>\n\t\t\t\t<div class="useredit" id="userMoremenu">\n\t\t\t\t\t<div class="moremenu"><div class="wrap">\n\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t<div class="options">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li id="editBasicInfo">Edit basic info</li>\n\t\t\t\t\t\t\t\t<li id="addProperties">Add properties</li>\n\t\t\t\t\t\t\t\t<li id="removeProperties">Remove properties</li>\n\t\t\t\t\t\t\t\t<li id="deleteUser">Delete user</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div></div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="profile">\n\t\t\t\t\t<div class="thumb white user"><span class="frame"><img src="" /></span></div>\n\t\t\t\t\t<dl>\n\t\t\t\t\t\t<dt class="display-name"></dt>\n\t\t\t\t\t\t<dd class="display-email"></dd>\n\t\t\t\t\t\t<dd class="display-phone"></dd>\n\t\t\t\t\t</dl>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class="activation" id="activation">\n\t\t\t\t\t<span class="important"><span class="display-fname"></span> has not signed up yet...</span>\n\t\t\t\t\t<p>We have sent an activation email to <span class="display-fname"></span>\n\t\t\t\t\t at <span class="display-email"></span>.</p>\n\t\t\t\t\t<p>If <span class="display-fname"></span> has not received an email from us, please provide him / her\n\t\t\t\t\tthe following link:</p>\n\t\t\t\t\t<input class="link" id="activation-link" type="text" />\n\t\t\t\t\t<div class="action">\n\t\t\t\t\t\t<span id="activation-last-sent"></span>\n\t\t\t\t\t\t<a class="mini button" id="resendActivationEmail"><span><img src="/styles/img/ico/mail.png" />Re-send activation link</span></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class="info">\n\t\t\t\t\t<div class="label">Stats</div>\n\t\t\t\t\t<div class="content">\n\t\t\t\t\t\tUser was created on <span id="stats-user-created"></span>.<br />\n\t\t\t\t\t\tGranted access to Rentfox for <span id="stats-user-total-properties"></span>.\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t<div class="info">\n\t\t\t\t\t<div class="label">\n\t\t\t\t\t\tProperties\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="content" id="userPropertyList"></div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\n\t\t\t</div>\n\t\t</div></div></div>\n\t\t\n\t\t<div class="userbox" id="editBox"><div class="wrap"><div class="wrap">\n\t\t\t\t\n\t\t\t<div class="edit"><h3 id="editorName"></h3></div>\n\t\t\t\n\t\t\t<div class="userForm">\n\t\t\t\t\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="left">First Name</div>\n\t\t\t\t\t<div class="right"><input type="text" class="date" id="update-fname" /></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="left">Last Name</div>\n\t\t\t\t\t<div class="right"><input type="text" class="date" id="update-lname" /></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="left">Phone</div>\n\t\t\t\t\t<div class="right"><input type="text" class="date" id="update-phone" /></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="row break">\n\t\t\t\t\t<div class="left">Email</div>\n\t\t\t\t\t<div class="right"><input type="text" class="date" id="update-email" /></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="row break" id="updateUserRoleSection">\n\t\t\t\t\t<div class="left">Role</div>\n\t\t\t\t\t<div class="right">\n\t\t\t\t\t\t<input type="checkbox" id="update-admin" />\n\t\t\t\t\t\t<label for="update-admin">Administrator</label>\n\t\t\t\t\t\t<div class="indented">Administrators can view all properties and modify users.</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="row">\n\t\t\t\t\t<a class="button primary" id="saveUserButton"><span>Save user</span></a>\n\t\t\t\t\t<a class="button cancel" id="cancelEditBox"><span>Cancel</span></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t</div></div></div>\n\t\t\n\t\t\n\t\t\n\t</div>\n\t\n\t<div class="right">\n\t\t<div class="filter">\n\t\t\t<select id="propertyList"></select>\n\t\t</div>\n\t\t<div class="userList" id="userList">\n\t\t\t<ul>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t\n</div>\n\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


