from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 5
_modified_time = 1281511771.711668
_template_filename='/var/apps/rentfox_dev/rentfox/templates/tenant_view.html'
_template_uri='/tenant_view.html'
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
        __M_writer(u'<script type="text/javascript">\n\t$(document).ready(function(){\n\t\tpage = new Page;\n\t\ttenant = new TenantView({tenantId: \'')
        # SOURCE LINE 4
        __M_writer(escape(c.tenantId))
        __M_writer(u'\'});\n\t});\n</script>\n\n<!-- Page -->\n<div class="page" id="tenantView">\n\t\n\t<div class="personal"><div class="wrap">\n\t\t<h3><span>Personal Details</span></h3>\n\t\t<div class="display" id="tenantInfoDisplay">\n\t\t\t\t\n\t\t\t<div class="edit"><a class="mini button" id="editTenantInfo"><span><img src="/styles/img/ico/user_edit.png" />Edit tenant details</span></a></div>\n\t\t\t\n\t\t\t<p>\n\t\t\t\t<span id="personalName"></span>\n\t\t\t\t<span id="personalEmail"></span>\n\t\t\t\t<span id="personalPhone"></span>\n\t\t\t\t<span id="personalDOB"></span>\n\t\t\t\t<span id="personalSSN"></span>\n\t\t\t</p>\n\t\t\t\n\t\t\t<p>\n')
        # SOURCE LINE 26
        for unit in c.tenantResidences:
            # SOURCE LINE 27
            __M_writer(u'\t\t\t<a href="/unit/view/')
            __M_writer(escape(unit['id']))
            __M_writer(u'" class="unit">')
            __M_writer(escape(unit['label']))
            __M_writer(u'</a>\n')
        # SOURCE LINE 29
        __M_writer(u'\t\t\t</p>\n\t\t</div>\n\t\t<div class="editor" id="tenantInfoEditor"><div class="wrap">\n\t\t\t<label for="tenantFname">First Name<input type="text" id="tenantFname" alt="e.g. Michael" /></label>\n\t\t\t<label for="tenantLname">Last Name<input type="text" id="tenantLname" alt="e.g. Johnson" /></label>\n\t\t\t<label for="tenantPhone">Phone<input type="text" id="tenantPhone" /></label>\n\t\t\t<label for="tenantEmail">Email<input type="text" id="tenantEmail" /></label>\n\t\t\t<label for="tenantDOB">D.O.B. <span>(MM/DD/YYYY)</span><input type="text" id="tenantDOB" /></label>\n\t\t\t<label for="tenantSSN">Social Security Number<input type="text" id="tenantSSN" /></label>\n\t\t\t<a class="primary button" id="saveTenantInfo"><span>Save Tenant</span></a><a class="button" id="cancelTenantInfo"><span>Cancel</span></a>\n\t\t</div></div>\n\t</div></div>\n\t\n\t<div class="emergency" id="emergencyContacts"><div class="wrap">\n\t\t<h3><span>Emergency Contacts</span></h3>\n\t\t<div class="display" id="contactButton">\n\t\t\t<div class="edit"><a class="mini button" id="addContact"><span><img src="/styles/img/ico/add.png" />Add contact</span></a></div>\n\t\t</div>\n\t\t<div class="editor" id="contactEditor"><div class="wrap">\n\t\t\t<label for="emergencyName">Name<input type="text" id="emergencyName" /></label>\n\t\t\t<label for="emergencyPhone">Phone<input type="text" id="emergencyPhone" /></label>\n\t\t\t<label for="emergencyRelationship">Relationship<input type="text" id="emergencyRelationship" alt="e.g. Friend" /></label>\n\t\t\t<a class="primary button" id="saveContact"><span>Save Contact</span></a><a class="button" id="cancelContact"><span>Cancel</span></a>\n\t\t</div></div>\n\t\t<div id="contactList"></div>\n\t</div></div>\n\t\n\t<div class="residences" id="previousResidences"><div class="wrap">\n\t\t<h3><span>Previous Residences</span></h3>\n\t\t<div class="display" id="residenceButton">\n\t\t\t<div class="edit"><a class="mini button" id="addResidence"><span><img src="/styles/img/ico/add.png" />Add residence</span></a></div>\n\t\t</div>\n\t\t<div class="editor" id="residenceEditor"><div class="wrap">\n\t\t\t<label for="residenceStart" class="half">Started<input type="text" id="residenceStart" class="datefield" /></label>\n\t\t\t<label for="residenceEnd" class="half">Ended<input type="text" id="residenceEnd" class="datefield" /></label>\n\t\t\t<label for="residenceStreet">Street<input type="text" id="residenceStreet" /></label>\n\t\t\t<label for="residenceCity" class="long">City<input type="text" id="residenceCity" /></label>\n\t\t\t<label for="residenceState" class="short">State<input type="text" class="zip" id="residenceState" maxlength="2" /></label>\n\t\t\t<label for="residenceLandlord">Landlord<input type="text" id="residenceLandlord" /></label>\n\t\t\t<label for="residenceLandlordPhone">Landlord phone<input type="text" id="residenceLandlordPhone" /></label>\n\t\t\t<label for="residenceLandlordEmail">Landlord email<input type="text" id="residenceLandlordEmail" /></label>\n\t\t\t<label for="residenceReasonLeaving">Reason for leaving<input type="text" id="residenceReasonLeaving" /></label>\n\t\t\t<a class="primary button" id="saveResidence"><span>Save Residence</span></a><a class="button" id="cancelResidence"><span>Cancel</span></a>\n\t\t</div></div>\n\t\t<div id="residenceList"></div>\n\t</div></div>\n\t\n</div>\n\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


