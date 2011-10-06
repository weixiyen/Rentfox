from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 5
_modified_time = 1248197038.484
_template_filename='C:\\fox\\rentfox\\rentfox\\templates/derived/floorplan/fields.html'
_template_uri='/derived/floorplan/fields.html'
_template_cache=cache.Cache(__name__, _modified_time)
_source_encoding='utf-8'
from webhelpers.html import escape
_exports = []


def render_body(context,**pageargs):
    context.caller_stack._push_frame()
    try:
        __M_locals = __M_dict_builtin(pageargs=pageargs)
        h = context.get('h', UNDEFINED)
        __M_writer = context.writer()
        # SOURCE LINE 1
        __M_writer(escape(h.field(
    "Label (floorplan name)",
    h.text(name='label'),
)))
        # SOURCE LINE 4
        __M_writer(u'\n\n')
        # SOURCE LINE 6
        __M_writer(escape(h.field(
    "Sqft",
    h.text(name='sqft'),
)))
        # SOURCE LINE 9
        __M_writer(u'\n\n')
        # SOURCE LINE 11
        __M_writer(escape(h.field(
    "Number of beds",
    h.text(name='beds'),
)))
        # SOURCE LINE 14
        __M_writer(u'\n\n')
        # SOURCE LINE 16
        __M_writer(escape(h.field(
    "Number of baths",
    h.text(name='baths'),
)))
        # SOURCE LINE 19
        __M_writer(u'\n\n')
        # SOURCE LINE 21
        __M_writer(escape(h.field(
    "Description",
    h.text(name='description'),
)))
        # SOURCE LINE 24
        __M_writer(u'\n\n\n\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


