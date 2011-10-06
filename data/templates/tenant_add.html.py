from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 5
_modified_time = 1281511759.3606009
_template_filename='/var/apps/rentfox_dev/rentfox/templates/tenant_add.html'
_template_uri='/tenant_add.html'
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
        __M_writer(u'<script type="text/javascript">\n\t$(document).ready(function(){\n\t\tpage = new Page;\n\t\ttenant = new TenantAdd({leaseId:\'')
        # SOURCE LINE 4
        __M_writer(escape(c.leaseId))
        __M_writer(u'\'});\n\t});\n</script>\n\n<!-- Page -->\n<div class="page" id="tenantAdd">\n\t\n\t<div class="header">Add a new tenant to <strong>')
        # SOURCE LINE 11
        __M_writer(escape(c.unit))
        __M_writer(u'</strong></div>\n\t\n\t<div class="createForm" id="createForm">\n\t\t<label for="fname">First Name<input type="text" id="fname" /></label>\n\t\t<label for="lname">Last Name<input type="text" id="lname" /></label>\n\t\t<label for="email">Email<input type="text" id="email" /></label>\n\t\t<label for="phone">Phone<input type="text" id="phone" /></label>\n\t\t<div class="tooltip">\n\t\t\t<div class="arrow"></div>\n\t\t\t<h5>SMS Alerts</h5>\n\t\t\t<p>\n\t\t\t\tRentfox will automatically send SMS rent\n\t\t\t\treminders 3 days before rent \n\t\t\t\tis due to this phone number.\n\t\t\t</p>\n\t\t</div>\n\t\t<a class="primary button" id="continueCreateTenant"><span>Continue</span></a>\n\t\t<a class="button" href="/unit/view/')
        # SOURCE LINE 28
        __M_writer(escape(c.unitId))
        __M_writer(u'"><span>Cancel</span></a>\n\t</div>\n\t\n\t<div class="tenantMatches" id="tenantMatches">\n\t\t<div class="prompt">\n\t\t\t<h1>Wait!</h1>\n\t\t\t<p>Could this person already exist in the database?</p>\n\t\t\n\t\t\t<div class="submit">\n\t\t\t\t<a class="primary button" id="noMatchButton"><span>No, lets continue...</span></a>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class="tenants" id="tenantMatchList"></div>\n\t\t\n\t</div>\n\t\n</div>\n\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


