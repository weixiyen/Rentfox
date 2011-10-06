from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 5
_modified_time = 1281345361.5247951
_template_filename='/var/apps/rentfox_dev/rentfox/templates/foxhelper/confirm.html'
_template_uri='/foxhelper/confirm.html'
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
        __M_writer(u'<div class="wrap">\n\n\t<div class="foxClose"><span>Close</span></div>\n\n\t<p id="foxConfirmMessage"></p>\n\n\t<div class="action">\n\t\t<a class="primary button" id="foxConfirmYes"><span id="foxConfirmYesText">Yes, do it</span></a>\n\t\t<a class="button foxClose"><span>Cancel</span></a>\n\t</div>\n\n</div>')
        return ''
    finally:
        context.caller_stack._pop_frame()


