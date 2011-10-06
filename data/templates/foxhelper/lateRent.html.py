from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 5
_modified_time = 1281181034.2577491
_template_filename='/var/apps/rentfox_dev/rentfox/templates/foxhelper/lateRent.html'
_template_uri='/foxhelper/lateRent.html'
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
        __M_writer(u'<div class="wrap">\n\n\t<div class="foxClose"><span>Close</span></div>\n        \n        <p>\n            <label>Rent received on</label>\n            <input type="text" id="rentReceivedDate" value="')
        # SOURCE LINE 7
        __M_writer(escape(c.rentReceivedDate))
        __M_writer(u'" />\n        </p>\n        <p class="important"><strong id="lateFee">$')
        # SOURCE LINE 9
        __M_writer(escape(c.totalFee))
        __M_writer(u'</strong> due in late fees</p>\n        \n        <p>\n            <label class="checkbox"><input type="checkbox" checked="checked" value="1" id="remindTenant" /> Remind tenant to pay late fee.</label>\n            <span id="willRemindText" class="description indented">\n                We will email the residents of this unit to notify them of the late charge.\n            </span>\n        </p>\n        \n        \n\n\t<div class="action">\n\t\t<a class="primary button" id="chargeLateFee"><span>Charge late fee</span></a>\n\t\t<a class="button foxClose"><span>Cancel</span></a>\n\t</div>\n\n</div>\n<script>\nvar date = new Datepicker(\'#rentReceivedDate\', \'days\');\n\n$(\'#rentReceivedDate\').bind(\'click\', function() {\n\t$(\'.datepickerDays a\').bind(\'click\', function() {\n\t\tsetTimeout(_calculateLate,100);\n\t});\n});\n\nfunction _calculateLate() {\n\tvar newDate = $(\'#rentReceivedDate\').val();\n\tvar newDate = newDate.split(\'/\');\n\tvar m = newDate[0];\n\tvar d = newDate[1];\n\tvar y = newDate[2];\n\t\n\tvar due = ')
        # SOURCE LINE 42
        __M_writer(escape(c.due))
        __M_writer(u'\n\tvar formonth = ')
        # SOURCE LINE 43
        __M_writer(escape(c.formonth))
        __M_writer(u'\n\tvar foryear = ')
        # SOURCE LINE 44
        __M_writer(escape(c.foryear))
        __M_writer(u'\n\tvar latefee = ')
        # SOURCE LINE 45
        __M_writer(escape(c.latefee))
        __M_writer(u'\n\tvar interval = ')
        # SOURCE LINE 46
        __M_writer(escape(c.interval))
        __M_writer(u'\n\t\n\tvar payDate = new Date(y,m,d);\n\tvar dueDate = new Date(foryear,formonth,due);\n\tvar dayDiff = (payDate - dueDate)/86400000;\n\tdayDiff = dayDiff - ')
        # SOURCE LINE 51
        __M_writer(escape(c.grace))
        __M_writer(u'\n\t\n\tif (dayDiff > 0) {\n\t\tif (interval === 1) {\n\t\t\tvar newAmount = dayDiff * latefee;\n\t\t} else {\n\t\t\tvar newAmount = latefee;\n\t\t}\n\t} else {\n\t\tvar newAmount = 0;\n\t}\n\t$(\'#lateFee\').text(\'$\'+newAmount.toFixed(2));\n}\n\n$(\'#lateFee\').hover(function() {\n\t$(this).css({\'background\':\'#333\',\'color\':\'#fff\',\'cursor\':\'pointer\'})\n}, function() {\n\t$(this).css({\'background\':\'#fff\',\'color\':\'#D30000\'})\n});\n\n$(\'#lateFee\').bind(\'click\', function() {\n\tvar amount = $(\'#lateFee\').text().match(/\\d+.\\d+/);\n\t\n\t$(\'#lateFee\').replaceWith(\'<input id="lateFee" type="text" size="5" value="\'+amount+\'" />\');\n})\n</script>')
        return ''
    finally:
        context.caller_stack._pop_frame()


