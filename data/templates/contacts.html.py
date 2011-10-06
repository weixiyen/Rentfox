from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 5
_modified_time = 1302213897.349333
_template_filename='/var/apps/rentfox_dev/rentfox/templates/contacts.html'
_template_uri='/contacts.html'
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
    return runtime._inherit_from(context, '/base.html', _template_uri)
def render_body(context,**pageargs):
    context.caller_stack._push_frame()
    try:
        __M_locals = __M_dict_builtin(pageargs=pageargs)
        __M_writer = context.writer()
        # SOURCE LINE 1
        __M_writer(u'<script type="text/javascript">\n\t$(document).ready(function(){\n\t\tpage = new Page;\n\t\tnew Contacts();\n\t});\n</script>\n<div class="page" id="contacts">\n\n\t<div class="left">\n\t\t<a class="mini button" id="createNewContact">\n\t\t\t<span><img src="/styles/img/ico/contact_add.png" />New contact</span>\n\t\t</a>\n\t</div>\n\t\n\t<div class="middle">\n\t\t\n\t\t<div class="display" id="contactDisplay"></div>\n\t\t\n\t\t<div class="contactbox" id="contactBox"><div class="wrap"><div class="wrap">\n\t\t\t\t\n\t\t\t<div class="edit">\n\t\t\t\t<a class="close" id="closeContactBox"><span>Close</span></a>\n\t\t\t\t<h3 id="formHeader"></h3>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class="contactForm">\n\t\t\t\t\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="left">Contact name</div>\n\t\t\t\t\t<div class="right"><input type="text" id="name" /></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="left">Phone</div>\n\t\t\t\t\t<div class="right"><input type="text" id="phone" /></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="row break">\n\t\t\t\t\t<div class="left">Email</div>\n\t\t\t\t\t<div class="right"><input type="text" id="email" /></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="row break">\n\t\t\t\t\t<div class="left">Category</div>\n\t\t\t\t\t<div class="right">\n\t\t\t\t\t\t<em id="typeSelect">\n\t\t\t\t\t\t\t<select id="type"></select>\n\t\t\t\t\t\t\t<a class="new-type" id="open-create-type">Create new category</a>\n\t\t\t\t\t\t</em>\n\t\t\t\t\t\t<em id="typeCreate" class="type-create">\n\t\t\t\t\t\t\t<input type="text" id="new-type-label" />\n\t\t\t\t\t\t\t<a class="cancel-type" id="close-create-type">Cancel</a>\n\t\t\t\t\t\t</em>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="left">Street address</div>\n\t\t\t\t\t<div class="right"><input type="text" id="street" /></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="left">City</div>\n\t\t\t\t\t<div class="right"><input type="text" id="city" /></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="left">State</div>\n\t\t\t\t\t<div class="right"><input type="text" id="state" class="mini" /></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="left">Zip</div>\n\t\t\t\t\t<div class="right"><input type="text" class="small" id="zip" /></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="row break">\n\t\t\t\t\t<div class="left">Description</div>\n\t\t\t\t\t<div class="right"><textarea id="description"></textarea></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="row">\n\t\t\t\t\t<a class="button primary" id="saveContactButton"><span>Save contact</span></a>\n\t\t\t\t\t<a class="button close" id="cancelContactBox"><span>Cancel</span></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t</div></div></div>\n\t\t\n\t\t\n\t\t\n\t</div>\n\t\n\t<div class="right" id="typeList">\n\t\t<ul id="typeWrap">\n\t\t</ul>\n\t</div>\n\t\n</div>\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


