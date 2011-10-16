# -*- encoding:utf-8 -*-
from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 6
_modified_time = 1318786167.620197
_template_filename='/root/rentfox/rentfox/templates/property_units.html'
_template_uri='/property_units.html'
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
        __M_writer = context.writer()
        # SOURCE LINE 1
        __M_writer(u'\r\n<script type="text/javascript">\r\n\t$(document).ready(function(){\r\n\t\tpage = new Page;\r\n\t\trecord = new PropertyUnits;\r\n\t});\r\n</script>\r\n\r\n<!-- Page -->\r\n<div class="page" id="propertyUnits">\r\n\t<div class="unitTable">\r\n\t\t<table>\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th class="property"><span>\r\n\t\t\t\t\t\t<select id="propertyDropDown">\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</span></th>\r\n\t\t\t\t\t<th class="unit"><span><input type="text" id="unit" alt="Unit" /></span></th>\r\n\t\t\t\t\t<th class="rent text sortable" id="rent"><span>Rent</span></th>\r\n\t\t\t\t\t<th class="due text sortable" id="due"><span>Due</span></th>\r\n\t\t\t\t\t<th class="late text sortable" id="late"><span>Late Pay</span></th>\r\n\t\t\t\t\t<th class="status"><span>\r\n\t\t\t\t\t\t<div class="pagination">\r\n\t\t\t\t\t\t\t<a class="first control disabled"></a>\r\n\t\t\t\t\t\t\t<a class="prev control disabled"></a>\r\n\t\t\t\t\t\t\t<a class="pages"></a>\r\n\t\t\t\t\t\t\t<a class="next control disabled"></a>\r\n\t\t\t\t\t\t\t<a class="last control disabled"></a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<select id="statusDropDown">\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</span></th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n\t</div>\r\n\t<img id="sortUp" src="/styles/img/sort_up.png" alt="" class="sortImg" />\r\n\t<img id="sortDown" src="/styles/img/sort_down.png" alt="" class="sortImg" />\r\n</div>\r\n\r\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


