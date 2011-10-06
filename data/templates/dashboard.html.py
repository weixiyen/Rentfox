from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 5
_modified_time = 1281763317.6005521
_template_filename='/var/apps/rentfox_dev/rentfox/templates/dashboard.html'
_template_uri='/dashboard.html'
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
        len = context.get('len', UNDEFINED)
        __M_writer = context.writer()
        # SOURCE LINE 1
        __M_writer(u'\n\n<script type="text/javascript">\n\t$(document).ready(function(){\n\t\tpage = new Page;\n\t\tdash = new Dashboard;\n\t});\n</script>\n\n<div class="page" id="dashboard">\n\n\t\n\t<div class="pulse" id="dashboard-pulse"><div class="wrap">\n\t\t<div class="filterList">\n\n\t\t\t<label id="dashboard-pulse-label">Everything</label>\n\t\t\t<div class="options">\n\t\t\t\t<ul id="dashboard-pulse-options">\n\t\t\t\t\t<li class="on" rel="all">Everything</li>\n\t\t\t\t\t<li rel="lease">Lease</li>\n\t\t\t\t\t<li rel="rent">Rent</li>\n\t\t\t\t\t<li rel="warning">Warnings</li>\n\t\t\t\t\t<li rel="transaction">Transactions</li>\n\t\t\t\t\t<li rel="message">Messages</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="container"></div>\n\t</div></div>\n\n\n\t<div class="props">\n\t\t<div class="create">\n\t\t\t<a class="mini button" href="/property/setup"><span><img src="/styles/img/ico/building_add.png" />Create Property</span></a>\n\t\t</div>\n')
        # SOURCE LINE 36
        if 0 < len(c.properties) < 20:
            # SOURCE LINE 37
            __M_writer(u'\t\t\n')
            # SOURCE LINE 38
            for property in c.properties:
                # SOURCE LINE 39
                __M_writer(u'\t\t\t<a class="prop" href="/property/view/')
                __M_writer(escape(property['id']))
                __M_writer(u'">\n\t\t\t\t<div class="pic">\n\t\t\t\t\t<div class="thumb"><span class="frame"><img src="')
                # SOURCE LINE 41
                __M_writer(escape(property['photo']))
                __M_writer(u'" /></span></div>\n\t\t\t\t</div>\n\t\t\t\t<dl>\n\t\t\t\t\t<dt>')
                # SOURCE LINE 44
                __M_writer(escape(property['name']))
                __M_writer(u'</dt>\n\t\t\t\t\t<dd class="units"><span class="title">Units</span><span class="data">')
                # SOURCE LINE 45
                __M_writer(escape(property['totalUnits']))
                __M_writer(u'</span></dd>\n\t\t\t\t\t<dd class="tenants"><span class="title">Tenants</span><span class="data">')
                # SOURCE LINE 46
                __M_writer(escape(property['totalTenants']))
                __M_writer(u'</span></dd>\n\t\t\t\t\t<dd class="occupied"><span class="title">Occupied</span><span class="data">')
                # SOURCE LINE 47
                __M_writer(escape(property['percentOccupied']))
                __M_writer(u'</span></dd>\n\t\t\t\t</dl>\n\t\t\t</a>\n')
            # SOURCE LINE 51
            __M_writer(u'\t\n')
            # SOURCE LINE 52
        elif len(c.properties):
            # SOURCE LINE 53
            __M_writer(u'\t\n')
            # SOURCE LINE 54
            for property in c.properties:
                # SOURCE LINE 55
                __M_writer(u'\t\t\t<a class="prop-textonly ')
                __M_writer(escape(property['type']))
                __M_writer(u'" href="/property/view/')
                __M_writer(escape(property['id']))
                __M_writer(u'">')
                __M_writer(escape(property['name']))
                __M_writer(u'</a>\n')
            # SOURCE LINE 57
            __M_writer(u'\t\t\n')
            # SOURCE LINE 58
        else:
            # SOURCE LINE 59
            __M_writer(u'\t\t<div class="tooltip">\n\t\t\t<div class="arrow"></div>\n\t\t\t<h1>Start Here</h1>\n\t\t\t<p>You\'ll need to create a property first, then some units, floorplans, and leases.</p>\n\t\t</div>\n')
        # SOURCE LINE 65
        __M_writer(u'\n\t</div>\n\n\t\n\t<div class="search" id="searchpanel">\n\t\t<div class="logo"></div>\n\n\t\t<div class="stats">\n\t\t\t\n\t\t\t<div class="progressbox" id="rent-progress">\n\t\t\t\t<h3>')
        # SOURCE LINE 75
        __M_writer(escape(c.currentMonth))
        __M_writer(u' rent tracker</h3>\n\t\t\t\t<div class="bar"><span style="width:')
        # SOURCE LINE 76
        __M_writer(escape(c.rentPercent))
        __M_writer(u'"></span></div>\n\t\t\t\t<label>')
        # SOURCE LINE 77
        __M_writer(escape(c.rentPercent))
        __M_writer(u' paid (')
        __M_writer(escape(c.rentPaid))
        __M_writer(u'/')
        __M_writer(escape(c.rentDue))
        __M_writer(u').</label>\n\t\t\t</div>\n\t\t\t<p>')
        # SOURCE LINE 79
        __M_writer(escape(c.totalUnits))
        __M_writer(u' Units</p><p>')
        __M_writer(escape(c.totalTenants))
        __M_writer(u' Tenants</p><p>')
        __M_writer(escape(c.occupancy))
        __M_writer(u' Occupancy</p>\n\t\t</div>\n\t</div>\n\n</div>\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


