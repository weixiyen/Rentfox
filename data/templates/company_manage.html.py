# -*- encoding:utf-8 -*-
from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 6
_modified_time = 1318760196.491192
_template_filename='/root/rentfox/rentfox/templates/company_manage.html'
_template_uri='/company_manage.html'
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
    return runtime._inherit_from(context, u'/base.html', _template_uri)
def render_body(context,**pageargs):
    context.caller_stack._push_frame()
    try:
        __M_locals = __M_dict_builtin(pageargs=pageargs)
        c = context.get('c', UNDEFINED)
        len = context.get('len', UNDEFINED)
        __M_writer = context.writer()
        # SOURCE LINE 1
        __M_writer(u'<script type="text/javascript">\n\t$(document).ready(function(){\n\t\tpage = new Page;\n')
        # SOURCE LINE 4
        if c.is_superuser:
            # SOURCE LINE 5
            __M_writer(u'\t\tcompany = new CompanyManage\n')
            pass
        # SOURCE LINE 7
        __M_writer(u'\t});\n</script>\n<div class="page" id="companyManage">\n\t<div class="left"><div class="wrap">\n\t\t<div class="row">\n\t\t\t<label>Company</label>\n\t\t\t<div class="item"><span id="editName">')
        # SOURCE LINE 13
        __M_writer(escape(c.name))
        __M_writer(u'</span></div>\n\t\t</div>\n\t\t<div class="row">\n\t\t\t<label>Street</label>\n\t\t\t<div class="item"><span id="editStreet">')
        # SOURCE LINE 17
        __M_writer(escape(c.street))
        __M_writer(u'</span></div>\n\t\t</div>\n\t\t<div class="row">\n\t\t\t<label>City, state, zip</label>\n\t\t\t<div class="item"><span id="editLocation">')
        # SOURCE LINE 21
        __M_writer(escape(c.location))
        __M_writer(u'</span></div>\n\t\t</div>\n\t\t<div class="row">\n\t\t\t<label>Phone</label>\n\t\t\t<div class="item"><span id="editPhone">')
        # SOURCE LINE 25
        __M_writer(escape(c.phone))
        __M_writer(u'</span></div>\n\t\t</div>\n\t\t<div class="row">\n\t\t\t<label>Email</label>\n\t\t\t<div class="item"><span id="editEmail">')
        # SOURCE LINE 29
        __M_writer(escape(c.email))
        __M_writer(u'</span></div>\n\t\t</div>\n\t\t<div class="row">\n\t\t\t<label>Account Owner</label>\n\t\t\t<div class="item">')
        # SOURCE LINE 33
        __M_writer(escape(c.superuser))
        __M_writer(u'</div>\n\t\t</div>\n')
        # SOURCE LINE 35
        if c.is_superuser:
            # SOURCE LINE 36
            __M_writer(u'\t\t<div class="row">\n\t\t\t<label>&nbsp;</label>\n\t\t\t<div class="item"><a id="switchSuperuser" class="link">Give Account Owner to someone else</a></div>\n\t\t</div>\n\t\t<div class="row last">\n\t\t\t<label>Delete</label>\n\t\t\t<div class="item"><a id="deleteAccount" class="deleteAccount">Delete Company</a></div>\n\t\t</div>\n')
            pass
        # SOURCE LINE 45
        __M_writer(u'\t\t\n\t</div></div>\n\t<div class="right">\n\t\t<div class="sect">\n\t\t\t<h3 id="company-name">')
        # SOURCE LINE 49
        __M_writer(escape(c.name))
        __M_writer(u'</h3>\n\t\t\t<p>\n\t\t\t\tOwner of ')
        # SOURCE LINE 51
        __M_writer(escape(len(c.properties)))
        __M_writer(u' ')
        __M_writer(escape(c.propertyLabel))
        __M_writer(u'<br />\n\t\t\t\tOwner of ')
        # SOURCE LINE 52
        __M_writer(escape(c.totalUnits))
        __M_writer(u' units<br />\n\t\t\t\tCurrently ')
        # SOURCE LINE 53
        __M_writer(escape(c.totalTenants))
        __M_writer(u' tenants<br />\n\t\t\t\t')
        # SOURCE LINE 54
        __M_writer(escape(c.occupancy))
        __M_writer(u' occupancy rate<br />\n\t\t\t\tCreated on ')
        # SOURCE LINE 55
        __M_writer(escape(c.companyCreated))
        __M_writer(u'\n\t\t\t</p>\n\t\t</div>\n\t\t<div class="sect last">\n')
        # SOURCE LINE 59
        if len(c.properties):
            # SOURCE LINE 60
            __M_writer(u'\t\t\t\t<p>Portfolio contains ')
            __M_writer(escape(len(c.properties)))
            __M_writer(u' ')
            __M_writer(escape(c.propertyLabel))
            __M_writer(u':</p>\n\t\t\t\t<p>\n')
            # SOURCE LINE 62
            for property in c.properties:
                # SOURCE LINE 63
                __M_writer(u'\t\t\t\t\t\t')
                __M_writer(escape(property['name']))
                __M_writer(u'<br />\n')
                pass
            # SOURCE LINE 65
            __M_writer(u'\t\t\t\t</p>\n')
            # SOURCE LINE 66
        else:
            # SOURCE LINE 67
            __M_writer(u'\t\t\t\t<p>Portfolio contains no properties yet.</p>\n')
            pass
        # SOURCE LINE 69
        __M_writer(u'\t\t\t\n\t\t</div>\n\t</div>\n</div>\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


