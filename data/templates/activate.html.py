from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 5
_modified_time = 1281181656.8982539
_template_filename='/var/apps/rentfox_dev/rentfox/templates/activate.html'
_template_uri='/activate.html'
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
        __M_writer(u'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\n<html xmlns="http://www.w3.org/1999/xhtml">\n<head>\n\t<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n\t<!--<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />-->\n    <title>Rentfox | Account Activation</title>\n\t')
        # SOURCE LINE 7
        runtime._include_file(context, 'externalfiles.html', _template_uri)
        __M_writer(u'\n</head>\n<body id="activatepage">\n    <div id="eventStatus">loading...</div>\t\n    <div id="foxhelper">\n            <img src="/styles/img/foxhelper_shadow.png" class="thefox" />\n            <div class="foxpanel"><div class="panelwrap">\n                    <div class="display">\n                        <div class="wrap">\n                        \t\n                        \t<form id="activationForm" method="post" onsubmit="javascript:return false;">\n                        \t\t<div class="error" id="activateError"></div>\n                            \t\n\t                            <label for="username">Desired Username</label>\n\t                            <input type="text" id="username" name="username" />\n\t                            \n\t                            <label for="password">Desired Password</label>\n\t                            <input type="password" id="password" name="password" />\n\t                            \n\t                            <label for="password">Secret Reminder<span>...to help trigger memory of your password</span></label>\n\t                            <input type="text" id="reminder" />\n\t                            \n\t                            <div class="action">\n\t                                <a class="button primary" id="activateButton"><span>Activate me &raquo;</span></a>\n\t                            </div>\n                            </form>\n                            \n                            <div id="cannotActivate">\n                            \t<div class="error on">\n                            \t\tWe are sorry, but it appears that the activation link you are using no longer exists.\n                            \t\tPlease ask your manager to issue a new activation link.\n                            \t</div>\n                            </div>\n                        \n                        </div>\n                    </div>\n            </div></div>\n    </div>\n    <a href="/" class="footer">Rentfox Homepage</a>\n    \n    <script type="text/javascript">\n        $(document).ready(function(){\n            var activate = new Activate(\'')
        # SOURCE LINE 49
        __M_writer(escape(c.activation_code))
        __M_writer(u"');\n        });\n    </script>\n    \n</body>\n</html>\n\n")
        return ''
    finally:
        context.caller_stack._pop_frame()


