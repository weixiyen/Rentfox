from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 5
_modified_time = 1302213184.764394
_template_filename='/var/apps/rentfox_dev/rentfox/templates/property_view.html'
_template_uri='/property_view.html'
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
        __M_writer(u'\r\n\r\n<script type="text/javascript">\r\n\t$(document).ready(function(){\r\n\t\tpage = new Page;\r\n\t\tproperty = new PropertyView({propertyId:\'')
        # SOURCE LINE 6
        __M_writer(escape(c.curPropId))
        __M_writer(u'\'});\r\n\t});\r\n</script>\r\n\r\n<!-- Page -->\r\n<div class="page" id="propertyView">\r\n\t\r\n\t<div class="content">\r\n\t\t<div class="body">\r\n\t\t\t<div class="info">\r\n\t\t\t\t<div class="header">\r\n\t\t\t\t\t<div class="miniProp">\r\n\t\t\t\t\t\t<div class="pic"><div class="thumb"><span class="frame"><img src="')
        # SOURCE LINE 18
        __M_writer(escape(c.property.photo))
        __M_writer(u'" /></span></div></div>\r\n\t\t\t\t\t\t<div class="info">\r\n\t\t\t\t\t\t\t<h3>')
        # SOURCE LINE 20
        __M_writer(escape(c.property.name))
        __M_writer(u'</h3>\r\n\t\t\t\t\t\t\t<p>')
        # SOURCE LINE 21
        __M_writer(escape(c.property.address))
        __M_writer(u'<br />')
        __M_writer(escape(c.property.city))
        __M_writer(u', ')
        __M_writer(escape(c.property.state))
        __M_writer(u', ')
        __M_writer(escape(c.property.zip))
        __M_writer(u'<br />\r\n\t\t\t\t\t\t\t\t<a href="/property/setup/')
        # SOURCE LINE 22
        __M_writer(escape(c.property.id))
        __M_writer(u'" class="mini button"><span><img src="/styles/img/ico/building_edit.png" />Property Setup</span></a>\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="stats">\r\n\t\t\t\t\t<div class="progressbox" id="rent-progress">\r\n\t\t\t\t\t\t<h3>')
        # SOURCE LINE 29
        __M_writer(escape(c.currentMonth))
        __M_writer(u' rent tracker</h3>\r\n\t\t\t\t\t\t<div class="bar"><span style="width:')
        # SOURCE LINE 30
        __M_writer(escape(c.rentPercent))
        __M_writer(u'"></span></div>\r\n\t\t\t\t\t\t<label>')
        # SOURCE LINE 31
        __M_writer(escape(c.rentPercent))
        __M_writer(u' paid (')
        __M_writer(escape(c.rentPaid))
        __M_writer(u'/')
        __M_writer(escape(c.rentDue))
        __M_writer(u').</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div id="monthly-occupancy-chart" class="chart">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div class="pulse" id="property-pulse"><div class="wrap">\r\n\t\t\t\t<div class="filterList">\r\n\t\t\r\n\t\t\t\t\t<label id="property-pulse-label">Everything</label>\r\n\t\t\t\t\t<div class="options">\r\n\t\t\t\t\t\t<ul id="property-pulse-options">\r\n\t\t\t\t\t\t\t<li class="on" rel="all">Everything</li>\r\n\t\t\t\t\t\t\t<li rel="lease">Lease</li>\r\n\t\t\t\t\t\t\t<li rel="rent">Rent</li>\r\n\t\t\t\t\t\t\t<li rel="warning">Warnings</li>\r\n\t\t\t\t\t\t\t<li rel="transaction">Transactions</li>\r\n\t\t\t\t\t\t\t<li rel="message">Messages</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="container"></div>\r\n\t\t\t</div></div>\r\n\t\t\t\r\n\t\t</div>\r\n\t\r\n\t</div>\r\n\t\r\n\t<div class="unitnav">\r\n\t\t<!-- unit scroller (re-usable) -->\r\n\t\t<div class="unitScroller" id="unitScroller">\r\n\t\t\t<div class="label">Unit #</div>\r\n\t\t\t<div class="manualInput">\r\n\t\t\t\t<input type="text" alt="filter" />\r\n\t\t\t</div>\r\n\t\t\t<div class="scrollFrame" id="scrollFrame"><ul></ul></div>\r\n\t\t\t<div class="controls">\r\n\t\t\t\t<div class="slider"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- end unit scroller -->\r\n\t</div>\r\n</div>')
        return ''
    finally:
        context.caller_stack._pop_frame()


