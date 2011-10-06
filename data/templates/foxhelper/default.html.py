from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 5
_modified_time = 1281610454.6887209
_template_filename='/var/apps/rentfox_dev/rentfox/templates/foxhelper/default.html'
_template_uri='/foxhelper/default.html'
_template_cache=cache.Cache(__name__, _modified_time)
_source_encoding='utf-8'
from webhelpers.html import escape
_exports = []


def render_body(context,**pageargs):
    context.caller_stack._push_frame()
    try:
        __M_locals = __M_dict_builtin(pageargs=pageargs)
        __M_writer = context.writer()
        # SOURCE LINE 1
        __M_writer(u'Foxes are smart, but we\'re not perfect.\nWe want to hear from you!\n<br /><br />\n<strong><a href="#" onclick="UserVoice.Popin.show(uservoiceOptions); return false;">Rentfox User Forum</a></strong>')
        return ''
    finally:
        context.caller_stack._pop_frame()


