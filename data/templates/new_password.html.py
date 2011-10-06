from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 5
_modified_time = 1281521192.946609
_template_filename='/var/apps/rentfox_dev/rentfox/templates/new_password.html'
_template_uri='/new_password.html'
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
        __M_writer(u'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\n<html xmlns="http://www.w3.org/1999/xhtml">\n<head>\n\t<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n\t<!--<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />-->\n    <title>Rentfox | Reset Password</title>\n\t')
        # SOURCE LINE 7
        runtime._include_file(context, 'externalfiles.html', _template_uri)
        __M_writer(u'\n</head>\n<body id="signinpage">\n    <div id="eventStatus">loading...</div>\t\n    <div id="foxhelper">\n            <img src="/styles/img/foxhelper_shadow.png" class="thefox" />\n            <div class="foxpanel"><div class="panelwrap">\n                    <div class="display">\n                        <div class="wrap">\n                            \n                            <div class="default view on">\n                            \t\n                            \t<div class="error" id="error"></div>\n                            \t\n                                <label for="password">Your New Password</label>\n                                <input type="password" id="password" name="password" />\n                                <input type="hidden" id="key" name="key" value="')
        # SOURCE LINE 23
        __M_writer(escape(c.key))
        __M_writer(u'" />\n\n                                <div class="action">\n                                    <a class="button primary" id="resetPassword"><span>Reset My Password &raquo;</span></a>\n                                </div>\n                                \n                                <div class="links">\n                                    <a class="link" href="/signin">Sign In</a>\n                                </div>\n                                \n                            </div>\n                            \n                            <div class="finished view" id="finished">\n                                <h2>Your password has been reset!</h2>\n                                <p>You can now use your new password to access Rentfox!</p>\n                                <div class="action">\n                                    <a class="button primary" id="signin"><span>Sign in page &raquo;</span></a>\n                                </div>\n                            </div>\n                            \n                        </div>\n                    </div>\n            </div></div>\n    </div>\n    <a href="/" class="footer">Rentfox Homepage</a>\n    \n    <script type="text/javascript">\n        $(document).ready(function(){\n        \n            $(\'#resetPassword\').bind(\'click\',function(){\n            \t$.ajax({\n\t                url: \'/account/setNewPassword\',\n\t\t\t\t\tcache: false,\n\t                data: {\n\t                    key: $(\'#key\').val(),\n\t                    password: $(\'#password\').val()\n\t                },\n\t                type: \'POST\',\n\t                dataType: \'json\',\n\t                beforeSend: function() {\n\t                    $(\'div#eventStatus\').css({display:\'block\'});\n\t                },\n\t               \tsuccess: function(json) {\n\t                    $(\'div#eventStatus\').css({display:\'none\'});\n\t                    if (json.error) {\n\t                        $(\'#error\').text(json.error).css({display:\'block\'});   \n\t                    } else {\n\t                        $(\'#error\').css({display:\'none\'});\n\t                        $(\'.view\').hide();\n\t                        $(\'#finished\').show();\n\t                    }\n\t               \t}\n\t            });\n            })\n            \n            $(\'#password\').bind(\'keypress\',function(e) {\n            \tvar code = e.keyCode || e.which;\n            \tif (code == 13) $(\'#resetPassword\').click();\n            });\n            \n            $(\'#signin\').bind(\'click\',function(){\n            \tlocation.href = \'/signin\';\n            });\n            \n        });\n    </script>\n    \n</body>\n</html>\n\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


