# -*- encoding:utf-8 -*-
from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 6
_modified_time = 1318760200.616128
_template_filename='/root/rentfox/rentfox/templates/account_manage.html'
_template_uri='/account_manage.html'
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
    return runtime._inherit_from(context, u'/base.html', _template_uri)
def render_body(context,**pageargs):
    context.caller_stack._push_frame()
    try:
        __M_locals = __M_dict_builtin(pageargs=pageargs)
        c = context.get('c', UNDEFINED)
        __M_writer = context.writer()
        # SOURCE LINE 1
        __M_writer(u'<script type="text/javascript">\n\t$(document).ready(function(){\n\t\tpage = new Page;\n\t\taccount = new AccountManage;\n\t});\n</script>\n<div class="page" id="accountManage">\n\t<div class="left"><div class="wrap">\n\t\t<div class="row">\n\t\t\t<label>Name</label>\n\t\t\t<div class="item"><span id="editName"></span></div>\n\t\t</div>\n\t\t<div class="row">\n\t\t\t<label>Email</label>\n\t\t\t<div class="item"><span id="editEmail"></span></div>\n\t\t</div>\n\t\t<div class="row">\n\t\t\t<label>Phone</label>\n\t\t\t<div class="item"><span id="editPhone"></span></div>\n\t\t</div>\n\t\t<div class="row">\n\t\t\t<label>Username</label>\n\t\t\t<div class="item" id="displayUsername"></div>\n\t\t</div>\n\t\t<div class="row">\n\t\t\t<label>Password</label>\n\t\t\t<div class="item"><a id="pwLink" class="link">Change Password</a></div>\n\t\t</div>\n\t\t\n\t\t<div class="row last">\n\t\t\t<label>Delete</label>\n\t\t\t<div class="item"><a id="deleteAccount" class="deleteAccount">Delete Account</a></div>\n\t\t</div>\n\t</div></div>\n\t<div class="right">\n\t\t<div class="sect">\n\t\t\t<h3><span id="managerFirstName"></span>\'s stats</h3>\n\t\t\t<p>\n\t\t\t\tCreated on ')
        # SOURCE LINE 39
        __M_writer(escape(c.created))
        __M_writer(u'<br />\n\t\t\t\tOwner of ')
        # SOURCE LINE 40
        __M_writer(escape(c.propertiesOwned))
        __M_writer(u' ')
        __M_writer(escape(c.propertyLabel))
        __M_writer(u'\n\t\t\t</p>\n\t\t</div>\n\t\t<div class="sect last">\n\t\t\t<p id="manages"></p>\n\t\t\t<div id="myProperties"></div>\n\t\t</div>\n\t\t\n\t</div>\n</div>\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


