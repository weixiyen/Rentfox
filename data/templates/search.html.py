from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 5
_modified_time = 1281182555.9710281
_template_filename='/var/apps/rentfox_dev/rentfox/templates/search.html'
_template_uri='/search.html'
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
        __M_writer(u'\n<script type="text/javascript">\n\t$(document).ready(function(){\n\t\tpage = new Page();\n\t\tvar search = new Search(\'')
        # SOURCE LINE 5
        __M_writer(escape(c.q))
        __M_writer(u'\');\n\t});\n</script>\n\n<!-- Page -->\n<div class="page" id="search">\n\t<div class="results">\n\t\t<div class="display" id="search-results"></div>\n\t</div>\n\t<div class="filters">\n\t\n\t\t<div class="unitTable section">\n\t\t\t<div class="pagination left" id="pagination">\n\t\t\t\t<a class="first control disabled"></a>\n\t\t\t\t<a class="prev control disabled"></a>\n\t\t\t\t<a class="pages" id="pagination-info"></a>\n\t\t\t\t<a class="next control disabled"></a>\n\t\t\t\t<a class="last control disabled"></a>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class="section">\n\t\t\t<input id="search-box" type="text" class="searchbox" value="')
        # SOURCE LINE 27
        __M_writer(escape(c.q))
        __M_writer(u'" />\n\t\t</div>\n\t\t\n\t\t<div class="last section">\n\t\t\t<a class="filter on" id="filter-all">All Property Information</a>\n\t\t\t<a class="filter" id="filter-property">Properties</a>\n\t\t\t<a class="filter" id="filter-unit">Units</a>\n\t\t\t<a class="filter" id="filter-tenant">Tenants</a>\n\t\t\t<a class="filter" id="filter-contact">Contacts</a>\n\t\t</div>\n\t</div>\n</div>\n\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


