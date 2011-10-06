from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 5
_modified_time = 1248236090.984
_template_filename='C:\\foxdev\\rentfox\\rentfox\\templates/dashboard_henry.html'
_template_uri='/dashboard_henry.html'
_template_cache=cache.Cache(__name__, _modified_time)
_source_encoding='utf-8'
from webhelpers.html import escape
_exports = ['heading']


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
    return runtime._inherit_from(context, '/base/index.html', _template_uri)
def render_body(context,**pageargs):
    context.caller_stack._push_frame()
    try:
        __M_locals = __M_dict_builtin(pageargs=pageargs)
        h = context.get('h', UNDEFINED)
        c = context.get('c', UNDEFINED)
        enumerate = context.get('enumerate', UNDEFINED)
        __M_writer = context.writer()
        # SOURCE LINE 1
        __M_writer(u'\n\n')
        # SOURCE LINE 5
        __M_writer(u'\n\n<div class="block">\n<p><b>Owner Block</b></p>\n<p>First Name: ')
        # SOURCE LINE 9
        __M_writer(escape(c.owner.first_name))
        __M_writer(u'<br />\nLast Name: ')
        # SOURCE LINE 10
        __M_writer(escape(c.owner.last_name))
        __M_writer(u'<br />\nPhone: ')
        # SOURCE LINE 11
        __M_writer(escape(c.owner.phone))
        __M_writer(u'<br />\nEmail: ')
        # SOURCE LINE 12
        __M_writer(escape(c.owner.email))
        __M_writer(u'\n</p>\n\n</div>\n\n<table>\n<tr>\n<td valign="top">\n<div class="block">\n\t<p><b>Property Block</b></p>\n')
        # SOURCE LINE 22
        for i, c.property in enumerate(c.property):
            # SOURCE LINE 23
            __M_writer(u'\t\t<div class="box">\n\t\t\t<a href="')
            # SOURCE LINE 24
            __M_writer(escape(h.url_for(controller='property', action='view', id=c.property.id)))
            __M_writer(u'">')
            __M_writer(escape(c.property.name))
            __M_writer(u'</a><br />\n\t\t\t')
            # SOURCE LINE 25
            __M_writer(escape(c.property.address))
            __M_writer(u'<br />\n\t\t\t')
            # SOURCE LINE 26
            __M_writer(escape(c.property.city))
            __M_writer(u'<br />\n\t\t\t')
            # SOURCE LINE 27
            __M_writer(escape(c.property.state))
            __M_writer(u'<br />\n\t\t\t')
            # SOURCE LINE 28
            __M_writer(escape(c.property.zip))
            __M_writer(u'<br />\n\t\t\t<a href="')
            # SOURCE LINE 29
            __M_writer(escape(h.url_for(controller='property', action='json', id=c.property.id)))
            __M_writer(u'">Return JSON</a>\n\t\t</div>\n')
        # SOURCE LINE 32
        __M_writer(u'\n\t<div class="actionLinks"> \n\t\t<a href="')
        # SOURCE LINE 34
        __M_writer(escape(h.url_for(controller='property', action='new')))
        __M_writer(u'">Add Property</a>\n\t</div>\n</div>\n</td>\n<td>\n<div class="block">\n\t<p><b>Unit Block</b></p>\n')
        # SOURCE LINE 41
        for i, c.unit in enumerate(c.unit):
            # SOURCE LINE 42
            __M_writer(u'\t\t<div class="box">\n\t\t\tLabel (unit number) = <b>')
            # SOURCE LINE 43
            __M_writer(escape(c.unit.label))
            __M_writer(u'</b><br />\n\t\t\tproperty id = ')
            # SOURCE LINE 44
            __M_writer(escape(c.unit.propertyid))
            __M_writer(u'<br />\n\t\t\tfloorplan id = ')
            # SOURCE LINE 45
            __M_writer(escape(c.unit.floorplanid))
            __M_writer(u'<br />\n\t\t</div>\n')
        # SOURCE LINE 48
        __M_writer(u'\n\t<div class="actionLinks"> \n\t\t<a href="')
        # SOURCE LINE 50
        __M_writer(escape(h.url_for(controller='unit', action='new')))
        __M_writer(u'">Add Unit</a>\n\t</div>\n</div>\n</td>\n\n<td valign="top">\n<div class="block">\n\t<p><b>Floorplan Block</b></p>\n')
        # SOURCE LINE 58
        for i, c.floorplan in enumerate(c.floorplan):
            # SOURCE LINE 59
            __M_writer(u'\t\t<div class="box">\n\t\t\tLabel (name) = <b>')
            # SOURCE LINE 60
            __M_writer(escape(c.floorplan.label))
            __M_writer(u'</b><br />\n\t\t\tsqrt = ')
            # SOURCE LINE 61
            __M_writer(escape(c.floorplan.sqft))
            __M_writer(u'<br />\n\t\t\tbeds = ')
            # SOURCE LINE 62
            __M_writer(escape(c.floorplan.beds))
            __M_writer(u'<br />\n\t\t\tbaths = ')
            # SOURCE LINE 63
            __M_writer(escape(c.floorplan.baths))
            __M_writer(u'<br />\n\t\t\tdescription = ')
            # SOURCE LINE 64
            __M_writer(escape(c.floorplan.description))
            __M_writer(u'<br />\n\t\t\t\n\t\t</div>\n')
        # SOURCE LINE 68
        __M_writer(u'\n\t<div class="actionLinks"> \n\t\t<a href="')
        # SOURCE LINE 70
        __M_writer(escape(h.url_for(controller='floorplan', action='new')))
        __M_writer(u'">Add Floorplan</a>\n\t</div>\n</div>\n</td>\n</tr>\n</table>\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_heading(context):
    context.caller_stack._push_frame()
    try:
        __M_writer = context.writer()
        # SOURCE LINE 3
        __M_writer(u'\n    <div id="pageTitle">Dashboard</div>\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


