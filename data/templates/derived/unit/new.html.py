from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 5
_modified_time = 1248197560.234
_template_filename='C:\\fox\\rentfox\\rentfox\\templates/derived/unit/new.html'
_template_uri='/derived/unit/new.html'
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
    # SOURCE LINE 2
    ns = runtime.Namespace('fields', context._clean_inheritance_tokens(), templateuri='fields.html', callables=None, calling_uri=_template_uri, module=None)
    context.namespaces[(__name__, 'fields')] = ns

def _mako_inherit(template, context):
    _mako_generate_namespaces(context)
    return runtime._inherit_from(context, '/base/index.html', _template_uri)
def render_body(context,**pageargs):
    context.caller_stack._push_frame()
    try:
        __M_locals = __M_dict_builtin(pageargs=pageargs)
        _import_ns = {}
        _mako_get_namespace(context, 'fields')._populate(_import_ns, ['*'])
        h = _import_ns.get('h', context.get('h', UNDEFINED))
        fields = _mako_get_namespace(context, 'fields')
        __M_writer = context.writer()
        # SOURCE LINE 1
        __M_writer(u'\n')
        # SOURCE LINE 2
        __M_writer(u'\n\n')
        # SOURCE LINE 6
        __M_writer(u'\n<p>Enter unit(s) or a range (i.e. "101", "101,102,104" or "105-109")</p>\n\n')
        # SOURCE LINE 9
        __M_writer(escape(h.form_start(h.url_for(controller='unit', action='create'), method="post")))
        __M_writer(u'\n    ')
        # SOURCE LINE 10
        __M_writer(escape(fields.body()))
        __M_writer(u'\n    ')
        # SOURCE LINE 11
        __M_writer(escape(h.field(field=h.submit(value="Add Unit", name='submit'))))
        __M_writer(u'\n')
        # SOURCE LINE 12
        __M_writer(escape(h.form_end()))
        __M_writer(u'\n\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_heading(context):
    context.caller_stack._push_frame()
    try:
        _import_ns = {}
        _mako_get_namespace(context, 'fields')._populate(_import_ns, ['*'])
        __M_writer = context.writer()
        # SOURCE LINE 4
        __M_writer(u'\n    <div id="pageTitle">Add a new unit</div>\n')
        return ''
    finally:
        context.caller_stack._pop_frame()

