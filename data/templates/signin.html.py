# -*- encoding:utf-8 -*-
from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 6
_modified_time = 1318761770.33637
_template_filename='/root/rentfox/rentfox/templates/signin.html'
_template_uri='/signin.html'
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
        __M_writer(u'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\n<html xmlns="http://www.w3.org/1999/xhtml">\n<head>\n\t<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n\t<!--<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />-->\n    <title>Rentfox | Sign in</title>\n\t')
        # SOURCE LINE 7
        runtime._include_file(context, u'externalfiles.html', _template_uri)
        __M_writer(u'\n</head>\n<body id="signinpage">\n    <div id="eventStatus">loading...</div>\t\n    <div id="foxhelper">\n            <img src="/styles/img/foxhelper_shadow.png" class="thefox" />\n            <div class="foxpanel"><div class="panelwrap">\n                    <div class="display">\n                        <div class="wrap">\n                            \n                            <div class="default view on">\n')
        # SOURCE LINE 18
        if c.error:
            # SOURCE LINE 19
            __M_writer(u'                                <div class="error on">')
            __M_writer(escape(c.error))
            __M_writer(u'</div>\n')
            pass
        # SOURCE LINE 21
        __M_writer(u'                                <form method="post" action="')
        __M_writer(escape(c.path))
        __M_writer(u'" id="signInForm">\n                                    <label for="username">Username</label>\n                                    <input type="text" id="username" name="username" />\n                                    \n                                    <label for="password">Password</label>\n                                    <input type="password" id="password" name="password" />\n\n                                    \n                                    <div class="action">\n                                        <a class="button primary" id="signInButton"><span>Sign in to Rentfox &raquo;</span></a>\n                                    </div>\n                                </form>\n                                \n                                <div class="links">\n                                    <a class="link forgotEmail">Password recovery</a> | \n                                    <a class="link signup" href="/#signup">Sign up</a>\n                                </div>\n                            </div>\n                            \n                            <div class="emailReminder view">\n                                <div class="error" id="emailError"></div>\n                                <label for="email">Enter your email</label>\n                                <input type="text" id="email" />\n                                <div class="action">\n                                    <a class="button primary" id="remindMe"><span>Let\'s figure this out!</span></a>\n                                </div>\n                                <div class="links">\n                                    <a class="link back">&laquo; Back to sign in page</a>\n                                </div>\n                            </div>\n                            \n                            <div class="hint view">\n                                <h2>Secret Reminder</h2>\n                                <div class="info hint" id="passwordSecret"></div>\n                                \n                                <div class="info email">\n                                    If the hint above didn\'t help, I also sent you\n                                    an email to with directions to reset your password. \n                                    <em id="emailRecoveryDestination">weixiyen@gmail.com</em>\n                                </div>\n                            \n                                <div class="action">\n                                    <a class="button primary" id="signInAgain"><span>Back to sign in page &raquo;</span></a>\n                                </div>\n                                \n                                \n                                \n                            </div>\n                            \n                        </div>\n                    </div>\n            </div></div>\n    </div>\n    <a href="/" class="footer">Rentfox Homepage</a>\n    \n    <script type="text/javascript">\n        $(document).ready(function(){\n            signin = new SignIn;\n        });\n    </script>\n    \n</body>\n</html>\n\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


