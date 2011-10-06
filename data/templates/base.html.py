from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 5
_modified_time = 1281763317.614516
_template_filename='/var/apps/rentfox_dev/rentfox/templates/base.html'
_template_uri='/base.html'
_template_cache=cache.Cache(__name__, _modified_time)
_source_encoding='utf-8'
from webhelpers.html import escape
_exports = []


def render_body(context,**pageargs):
    context.caller_stack._push_frame()
    try:
        __M_locals = __M_dict_builtin(pageargs=pageargs)
        c = context.get('c', UNDEFINED)
        request = context.get('request', UNDEFINED)
        self = context.get('self', UNDEFINED)
        __M_writer = context.writer()
        # SOURCE LINE 1
        __M_writer(u'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\n<html xmlns="http://www.w3.org/1999/xhtml">\n<head>\n\t<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n\t<!--<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />-->\n    <title>')
        # SOURCE LINE 6
        __M_writer(escape(c.page_title))
        __M_writer(u' - ')
        __M_writer(escape(request.environ.get('COMPANY_NAME')))
        __M_writer(u'</title>\n\t')
        # SOURCE LINE 7
        runtime._include_file(context, 'externalfiles.html', _template_uri)
        __M_writer(u'\n</head>\n<body>\n<div id="header">\n\t<form class="search" method="GET" action="/search">\n\t\t<div class="box"><input class="searchbox" type="text" name="q" alt="Search anything..." /></div>\n\t\t<div class="find"><button><span>Search</span></button></div>\n\t</form>\n\t<ul class="me">\n\t\t<li class="')
        # SOURCE LINE 16
        __M_writer(escape(c.menuDashboard))
        __M_writer(u'"><a href="/dashboard">Dashboard</a></li>\n\t\t<li class="')
        # SOURCE LINE 17
        __M_writer(escape(c.menuCompany))
        __M_writer(u'"><a href="/company">Company</a></li>\n\t\t<li class="')
        # SOURCE LINE 18
        __M_writer(escape(c.menuAccount))
        __M_writer(u'"><a href="/account">Account</a></li>\n\t\t<li class="')
        # SOURCE LINE 19
        __M_writer(escape(c.menuUsers))
        __M_writer(u'"><a href="/users">Users</a></li>\n\t\t<li class="')
        # SOURCE LINE 20
        __M_writer(escape(c.menuHelp))
        __M_writer(u'"><a href="/help">Help</a></li>\n\t\t<li><a href="/signout">Sign Out</a></li>\n\t</ul>\n</div>\n\n<div id="eventStatus">loading...</div>\n\n')
        # SOURCE LINE 27
        __M_writer(escape(self.body()))
        __M_writer(u'\n\n<div id="menu">\n\n\t<div id="foxhelper">\n\t\t<div class="balloon">Yo</div>\n\t\t<img src="/styles/img/foxhelper_shadow.png" class="thefox" />\n\t\t<div class="foxpanel"><div class="panelwrap">\n\t\t\t<div class="display"></div>\n\t\t</div></div>\n\t</div>\n\n\t<div id="logo"><a href="/dashboard"><span>Rentfox</span></a></div>\t\n\t\n')
        # SOURCE LINE 41
        if c.menuSubmenu:
            # SOURCE LINE 42
            __M_writer(u'\t<div class="sub">\n\t\t<div class="options" id="propertyOptions"><a href="#"><span>Options</span></a>\n\t\t\t<div class="optionlist" id="propertyOptionsList">\n\t\t\t\t<div class="list">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li class="edit"><a href="/property/setup/')
            # SOURCE LINE 47
            __M_writer(escape(c.curPropId))
            __M_writer(u'">Property Setup</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class="trunk"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<ul>\n\t\t\t<li class="')
            # SOURCE LINE 54
            __M_writer(escape(c.submenuStaff))
            __M_writer(u'"><a href="/users/')
            __M_writer(escape(c.curPropId))
            __M_writer(u'">Staff</a></li>\n\t\t\t<li class="')
            # SOURCE LINE 55
            __M_writer(escape(c.submenuProperty))
            __M_writer(u'"><a href="/property/view/')
            __M_writer(escape(c.curPropId))
            __M_writer(u'">')
            __M_writer(escape(c.curPropName))
            __M_writer(u'</a></li>\n\t\t</ul>\n\t</div>\n')
        # SOURCE LINE 59
        __M_writer(u'\t\n\t<div class="main">\n\t\t<ul>\n\t\t\t<li class="record ')
        # SOURCE LINE 62
        __M_writer(escape(c.menuRecord))
        __M_writer(u'"><a href="/property/record">Record Rent</a></li>\n\t\t\t<li class="properties ')
        # SOURCE LINE 63
        __M_writer(escape(c.menuProperty))
        __M_writer(u'"><a id="menuProperties"><span>Properties</span></a>\n\t\t\t\t<div class="menulist" id="menuPropertiesList">\n\t\t\t\t\t<div class="list">\n\t\t\t\t\t\t<div class="create"><a href="/property/setup" class="mini button"><span><img src="/styles/img/ico/building_add.png" />Create Property</span></a></div>\n\t\t\t\t\t\t<div class="wrap">\n\t\t\t\t\t\t\t<ul>\n')
        # SOURCE LINE 69
        for property in request.environ.get('PROPERTY_LIST'):
            # SOURCE LINE 70
            __M_writer(u'\t\t\t\t\t\t\t\t<li><a href="/property/view/')
            __M_writer(escape(property['id']))
            __M_writer(u'">')
            __M_writer(escape(property['name']))
            __M_writer(u'</a></li>\n')
        # SOURCE LINE 72
        __M_writer(u'\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="trunk"></div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class="units ')
        # SOURCE LINE 78
        __M_writer(escape(c.menuUnits))
        __M_writer(u'"><a href="/property/units">Units</a></li>\n\t\t\t<li class="reports ')
        # SOURCE LINE 79
        __M_writer(escape(c.menuReports))
        __M_writer(u'"><a href="/reports">Ledger</a></li>\n\t\t\t<li class="contacts ')
        # SOURCE LINE 80
        __M_writer(escape(c.menuContacts))
        __M_writer(u'"><a href="/contacts">Contacts</a></li>\n\t\t</ul>\n\t</div>\n\t\n')
        # SOURCE LINE 84
        if c.menuSubmenu:
            # SOURCE LINE 85
            __M_writer(u'\t<div class="submenu backdrop" id="menuBackdrop"></div>\n')
            # SOURCE LINE 86
        else:
            # SOURCE LINE 87
            __M_writer(u'\t<div class="backdrop" id="menuBackdrop"></div>\n')
        # SOURCE LINE 89
        __M_writer(u'\n</div>\n\n')
        # SOURCE LINE 92
        if c.foxAlert != False:
            # SOURCE LINE 93
            __M_writer(u'<script type="text/javascript">\n\t$(function(){\n\t\tpage.fox.showAlert();\n\t});\n</script>\n')
        # SOURCE LINE 99
        __M_writer(u'\n<script type="text/javascript">\n\t\n\tvar _gaq = _gaq || [];\n\t_gaq.push([\'_setAccount\', \'UA-2806397-2\']);\n\t_gaq.push([\'_trackPageview\']);\n\n\t(function() {\n\t    var ga = document.createElement(\'script\'); ga.type = \'text/javascript\'; ga.async = true;\n\t    ga.src = (\'https:\' == document.location.protocol ? \'https://ssl\' : \'http://www\') + \'.google-analytics.com/ga.js\';\n\t    var s = document.getElementsByTagName(\'script\')[0]; s.parentNode.insertBefore(ga, s);\n\t})();\n\n</script>\n\n<script type="text/javascript">\n  var uservoiceOptions = {\n    key: \'rentfox\',\n    host: \'rentfox.uservoice.com\', \n    forum: \'24116\',\n    lang: \'en\',\n    showTab: false\n  };\n  function _loadUserVoice() {\n    var s = document.createElement(\'script\');\n    s.src = ("https:" == document.location.protocol ? "https://" : "http://") + "cdn.uservoice.com/javascripts/widgets/tab.js";\n    document.getElementsByTagName(\'head\')[0].appendChild(s);\n  }\n  _loadSuper = window.onload;\n  window.onload = (typeof window.onload != \'function\') ? _loadUserVoice : function() { _loadSuper(); _loadUserVoice(); };\n</script>\n\n</body>\n</html>')
        return ''
    finally:
        context.caller_stack._pop_frame()


