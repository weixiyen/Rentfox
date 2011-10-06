from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 5
_modified_time = 1281767584.1808951
_template_filename='/var/apps/rentfox_dev/rentfox/templates/foxhelper/index.html'
_template_uri='/foxhelper/index.html'
_template_cache=cache.Cache(__name__, _modified_time)
_source_encoding='utf-8'
from webhelpers.html import escape
_exports = []


def render_body(context,**pageargs):
    context.caller_stack._push_frame()
    try:
        __M_locals = __M_dict_builtin(pageargs=pageargs)
        c = context.get('c', UNDEFINED)
        __M_writer = context.writer()
        # SOURCE LINE 1
        __M_writer(u'<div class="wrap">\n\n\t<div class="foxClose"><span>Close</span></div>\n\n\t<h2>')
        # SOURCE LINE 5
        __M_writer(escape(c.alert['title']))
        __M_writer(u'</h2>\n    <p>')
        # SOURCE LINE 6
        __M_writer(escape(c.alert['message']))
        __M_writer(u'</p>\n')
        # SOURCE LINE 7
        if 'button' in c.alert:
            # SOURCE LINE 8
            __M_writer(u'\t<div class="action">\n\t\t<a class="primary button" href="')
            # SOURCE LINE 9
            __M_writer(escape(c.alert['link']))
            __M_writer(u'"><span>')
            __M_writer(escape(c.alert['button']))
            __M_writer(u'</span></a>\n\t\t<a class="button foxClose"><span>Cancel</span></a>\n\t</div>\n')
        # SOURCE LINE 13
        __M_writer(u'\n</div>')
        return ''
    finally:
        context.caller_stack._pop_frame()


