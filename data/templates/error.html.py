from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 5
_modified_time = 1282444839.9103949
_template_filename='/var/apps/rentfox_dev/rentfox/templates/error.html'
_template_uri='/error.html'
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
        __M_writer(u'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\n<html xmlns="http://www.w3.org/1999/xhtml">\n<head>\n\t<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n\t<!--<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />-->\n    <title>404 File not found</title>\n\t')
        # SOURCE LINE 7
        runtime._include_file(context, 'externalfiles.html', _template_uri)
        __M_writer(u'\n</head>\n<body id="signinpage">\n    <div id="foxhelper">\n            <img src="/styles/img/foxhelper_shadow.png" class="thefox" />\n            <div class="foxpanel"><div class="panelwrap">\n                    <div class="display">\n                        <div class="wrap">\n                        \n                           <h3>Oops!</h3>\n                           \n                           <p>We are very sorry, but we can\'t find or render the page you are looking for.</p>\n                           \n                           <p>It is possible that you mistyped a link or you were signed out for security reasons.<br /><br /></p>\n                           \n                           <h5>Bug Report</h5>\n                           \n                           <p>If you believe this to be a bug, please email us at <a href="mailto:support@rentfox.net">support@rentfox.net</a> <br /> <br /></p>\n                           \n\t                        <div class="action">\n\t                            <a class="button primary" href="/"><span>Go to Dashboard &raquo;</span></a>\n\t                            <a class="button" href="javascript:history.go(-1)"><span>Go Back</span></a>\n\t                        </div>\n\t                        \n\t                         <div class="links">\n                                Still having trouble? <a class="link" href="/signout">Force Sign In &raquo;</a>\n                            </div>\n                         \n                        </div>\n                    </div>\n            </div></div>\n    </div>\n    <a href="/" class="footer">Rentfox Homepage</a>\n    \n</body>\n</html>')
        return ''
    finally:
        context.caller_stack._pop_frame()


