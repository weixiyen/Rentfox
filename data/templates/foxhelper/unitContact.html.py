from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 5
_modified_time = 1281512168.2111521
_template_filename='/var/apps/rentfox_dev/rentfox/templates/foxhelper/unitContact.html'
_template_uri='/foxhelper/unitContact.html'
_template_cache=cache.Cache(__name__, _modified_time)
_source_encoding='utf-8'
from webhelpers.html import escape
_exports = []


def render_body(context,**pageargs):
    context.caller_stack._push_frame()
    try:
        __M_locals = __M_dict_builtin(pageargs=pageargs)
        c = context.get('c', UNDEFINED)
        len = context.get('len', UNDEFINED)
        __M_writer = context.writer()
        # SOURCE LINE 1
        __M_writer(u'<div id="unitContact" class="wrap center">\n\n\t<div class="foxClose"><span>Close</span></div>\n\n\t<h2>Resident Contact Info</h2>\n')
        # SOURCE LINE 6
        if len(c.tenantList) != 0:
            # SOURCE LINE 7
            for tenant in c.tenantList:
                # SOURCE LINE 8
                __M_writer(u'\t\t\t<ul class="tenant">\n\t            <li class="name">')
                # SOURCE LINE 9
                __M_writer(escape(tenant['name']))
                __M_writer(u'</li>\n\t            <li class="phone">')
                # SOURCE LINE 10
                __M_writer(escape(tenant['phone']))
                __M_writer(u'</li>\n\t            <li class="email">')
                # SOURCE LINE 11
                __M_writer(escape(tenant['email']))
                __M_writer(u'</li>\n\t        </ul>\n')
            # SOURCE LINE 14
            __M_writer(u'\t\t<p>\n\t\t<div class="action"><a href="/unit/view/')
            # SOURCE LINE 15
            __M_writer(escape(c.unitId))
            __M_writer(u'" class="link">View this unit</a></div>\n\t\t</p>\n')
            # SOURCE LINE 17
        else:
            # SOURCE LINE 18
            if c.unit.floorplan:
                # SOURCE LINE 19
                __M_writer(u'\t\t\t<p>No tenant records.</p>\n\t\t\t<p><a href="/unit/view/')
                # SOURCE LINE 20
                __M_writer(escape(c.unitId))
                __M_writer(u'" class="link">View this unit</a></p>\n')
                # SOURCE LINE 21
            else:
                # SOURCE LINE 22
                __M_writer(u'\t\t\t<p>Unit ')
                __M_writer(escape(c.unit.label))
                __M_writer(u' does not have a floorplan. Go to <a class="link" href="/property/setup/')
                __M_writer(escape(c.unit.propertyid))
                __M_writer(u'/')
                __M_writer(escape(c.unit.id))
                __M_writer(u'">property setup</a> to create a floorplan for this unit.</p>\n')
        # SOURCE LINE 25
        __M_writer(u'</div>')
        return ''
    finally:
        context.caller_stack._pop_frame()


