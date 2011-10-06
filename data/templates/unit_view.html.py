from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 5
_modified_time = 1281763326.7169881
_template_filename='/var/apps/rentfox_dev/rentfox/templates/unit_view.html'
_template_uri='/unit_view.html'
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
        c = context.get('c', UNDEFINED)
        __M_writer = context.writer()
        # SOURCE LINE 1
        __M_writer(u'<script type="text/javascript">\n\t$(document).ready(function(){\n\t\tpage = new Page;\n\t\tunit = new UnitView({propertyId:\'')
        # SOURCE LINE 4
        __M_writer(escape(c.curPropId))
        __M_writer(u"', unitId:'")
        __M_writer(escape(c.unit.id))
        __M_writer(u'\'});\n\t});\n</script>\n\n<!-- Page -->\n<div class="page" id="unitView">\n\t\n\t<div class="content">\n\t\t<div class="menu">\n\t\t\t<div class="miniProp">\n\t\t\t\t<div class="pic"><div class="thumb"><span class="frame"><img src="')
        # SOURCE LINE 14
        __M_writer(escape(c.property.photo))
        __M_writer(u'" /></span></div></div>\n\t\t\t\t<div class="info">\n\t\t\t\t\t<h3>\n')
        # SOURCE LINE 17
        if c.property.type == 'single':
            # SOURCE LINE 18
            __M_writer(u'\t\t\t\t\t\t\t')
            __M_writer(escape(c.property.name))
            __M_writer(u'\n')
            # SOURCE LINE 19
        else:
            # SOURCE LINE 20
            __M_writer(u'\t\t\t\t\t\t\t<a href="/property/view/')
            __M_writer(escape(c.property.id))
            __M_writer(u'">')
            __M_writer(escape(c.property.name))
            __M_writer(u'</a> #')
            __M_writer(escape(c.unit.label))
            __M_writer(u'\n')
        # SOURCE LINE 22
        __M_writer(u'\t\t\t\t\t</h3>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t')
        # SOURCE LINE 24
        __M_writer(escape(c.property.address))
        __M_writer(u'<br />\n\t\t\t\t\t\t')
        # SOURCE LINE 25
        __M_writer(escape(c.property.city))
        __M_writer(u', ')
        __M_writer(escape(c.property.state))
        __M_writer(u', ')
        __M_writer(escape(c.property.zip))
        __M_writer(u'<br />\n\t\t\t\t\t\t<a href="/property/setup/')
        # SOURCE LINE 26
        __M_writer(escape(c.curPropId))
        __M_writer(u'/')
        __M_writer(escape(c.unit.id))
        __M_writer(u'" class="mini button"><span><img src="/styles/img/ico/building_edit.png" />Property Setup</span></a>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="no tenant" id="noTenants">\n\t\t\t\tThis unit has no tenants right now.\n\t\t\t</div>\n\t\t\t<div class="tenant" id="tenants">\n\t\t\t\t<div class="tenantedit">\n\t\t\t\t\t<div class="moremenu"><div class="wrap">\n\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t<div class="options">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li id="addTenant">Add Tenant</li>\n\t\t\t\t\t\t\t\t<li id="editTenant">Edit Tenant</li>\n\t\t\t\t\t\t\t\t<li id="removeTenant">Remove</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div></div>\n\t\t\t\t</div>\n\t\t\t\t<div id="people"></div>\n\t\t\t\t<div class="list">\n\t\t\t\t\t<ul id="tenantList"></ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<ul class="nav" id="unitViewNav">\n\t\t\t\t<li class="pulsenav on" id="pulseNav">\n\t\t\t\t\t<dl>\n\t\t\t\t\t\t<dt>Pulse</dt>\n\t\t\t\t\t\t<dd>Recent unit activity</dd>\n\t\t\t\t\t</dl>\n\t\t\t\t</li>\n\t\t\t\t<li class="unit" id="unitNav">\n\t\t\t\t\t<dl>\n\t\t\t\t\t\t<dt>Unit Info</dt>\n\t\t\t\t\t</dl>\n\t\t\t\t</li>\n\t\t\t\t<li class="lease" id="leaseNav">\n\t\t\t\t\t<dl>\n\t\t\t\t\t\t<dt>Lease</dt>\n\t\t\t\t\t\t<dd><select id="allLeasesDropdown"></select></dd>\n\t\t\t\t\t</dl>\n\t\t\t\t</li>\n\t\t\t\t<li class="transactions" id="transactionsNav">\n\t\t\t\t\t<dl>\n\t\t\t\t\t\t<dt>Transactions</dt>\n\t\t\t\t\t</dl>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t\n\t\t<div class="right">\n\t\t\t<div class="leaseStatus" id="leaseStatus"></div>\n\t\t\t<div class="display"><div class="wrap">\n\t\t\t\t<div class="module" id="pulseModule"><div class="wrap">\n\t\t\t\t\t\n\t\t\t\t\t<div class="pulse" id="unit-pulse"><div class="wrap">\n\t\t\t\t\t\t<div class="filterList">\n\t\t\t\t\t\t\t<label id="unit-pulse-label">Everything</label>\n\t\t\t\t\t\t\t<div class="options">\n\t\t\t\t\t\t\t\t<ul id="unit-pulse-options">\n\t\t\t\t\t\t\t\t\t<li class="on" rel="all">Everything</li>\n\t\t\t\t\t\t\t\t\t<li rel="lease">Lease</li>\n\t\t\t\t\t\t\t\t\t<li rel="rent">Rent</li>\n\t\t\t\t\t\t\t\t\t<li rel="warning">Warnings</li>\n\t\t\t\t\t\t\t\t\t<li rel="transaction">Transactions</li>\n\t\t\t\t\t\t\t\t\t<li rel="message">Messages</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="container"></div>\n\t\t\t\t\t</div></div>\n\t\t\t\t\t\n\t\t\t\t</div></div>\n\t\t\t\t<div class="module" id="unitModule"><div class="wrap">\n\t\t\t\t\t<div class="unitedit">\n\t\t\t\t\t\t<div class="moremenu"><div class="wrap">\n\t\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t\t<div class="options">\n\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t<li id="edit-floorplan-link">Edit floor plan</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="head">\n')
        # SOURCE LINE 112
        if c.floorplan.photo:
            # SOURCE LINE 113
            __M_writer(u'\t\t\t\t\t\t<div class="floorplan"><span><img src="')
            __M_writer(escape(c.floorplan.photo))
            __M_writer(u'" height="70" id="floorplan-img" /></span></div>\n')
        # SOURCE LINE 115
        __M_writer(u'\t\t\t\t\t\t<div class="info">\n\t\t\t\t\t\t\t<h3>')
        # SOURCE LINE 116
        __M_writer(escape(c.floorplan.label))
        __M_writer(u' floorplan</h3>\n\t\t\t\t\t\t\t<p>')
        # SOURCE LINE 117
        __M_writer(escape(c.floorplan.sqft))
        __M_writer(u' sqft, ')
        __M_writer(escape(c.floorplan.beds))
        __M_writer(u' br, ')
        __M_writer(escape(c.floorplan.baths))
        __M_writer(u' ba</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t<div class="description">\n\t\t\t\t\t\t')
        # SOURCE LINE 123
        __M_writer(escape(c.floorplan.description))
        __M_writer(u'\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<h5>Upload photos</h5>\n\t\t\t\t\t<em>Photos here will be re-used in other places, such as advertising your unit on Craigslist.</em>\n\t\t\t\t\t<div class="picViewer" id="unitPicViewer">\n\t\t\t\t\t\t<div class="droptext">Drop photos here!</div>\n\t\t\t\t\t\t<div class="picDisplay"><span class="frame"></span></div>\n\t\t\t\t\t\t<div class="picBar">\n\t\t\t\t\t\t\t<div class="picEditor">\n\t\t\t\t\t\t\t\t<div class="picOptions">\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li class="add" id="unitPicViewer-upload">Upload more</li>\n\t\t\t\t\t\t\t\t\t\t<li class="delete" id="unitPicViewer-delete">Delete this</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="picNav">\n\t\t\t\t\t\t\t\t<div class="left"><span>Previous</span></div>\n\t\t\t\t\t\t\t\t<div class="center">15 of 20</div>\n\t\t\t\t\t\t\t\t<div class="right"><span>Next</span></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class="description">')
        # SOURCE LINE 148
        __M_writer(escape(c.unit.description))
        __M_writer(u'</div>\n\t\n\t\t\t\t</div></div>\n\t\t\t\t<div class="module" id="leaseModule"><div class="wrap">\n\t\t\t\t\t<div id="leaseDisplayMode" class="view">\n\t\t\t\t\t\t<div class="leaseOpts">\n\t\t\t\t\t\t\t<div class="moremenu"><div class="wrap">\n\t\t\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t\t\t<div class="options">\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li id="createLease">Create New Lease</li>\n\t\t\t\t\t\t\t\t\t\t<li id="editLease">Edit This Lease</li>\n\t\t\t\t\t\t\t\t\t\t<li id="deleteLease">Delete Lease</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h3 id="displayLeaseTitle"></h3>\n\t\t\t\t\t\t<div class="leaseDetails">\n\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t<div class="left">Start</div>\n\t\t\t\t\t\t\t\t<div class="right" id="displayContractStart"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="row" id="showContractEnd">\n\t\t\t\t\t\t\t\t<div class="left">Contract up</div>\n\t\t\t\t\t\t\t\t<div class="right" id="displayContractEnd"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t<div class="left">Move out</div>\n\t\t\t\t\t\t\t\t<div class="right" id="displayMoveout"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t<div class="left">Deposit on hold</div>\n\t\t\t\t\t\t\t\t<div class="right" id="displayDeposit"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t<div class="left">Rent</div>\n\t\t\t\t\t\t\t\t<div class="right" id="displayRentDue"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t<div class="left">Late Rent</div>\n\t\t\t\t\t\t\t\t<div class="right" id="displayLateRule"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="tenants">\n\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t<div class="left">\n\t\t\t\t\t\t\t\t\t<a id="addTenantToLeaseButton" class="mini button">\n\t\t\t\t\t\t\t\t\t<span><img src="/styles/img/ico/user_add.png" />Add Tenant</span></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="right">\n\t\t\t\t\t\t\t\t\t<ul id="leaseTenants" class="lease-tenants"></ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div id="leaseEditMode" class="editMode view">\n\t\t\t\t\t\t<div class="leaseForm">\n\t\t\t\t\t\t\t<div class="row break">\n\t\t\t\t\t\t\t\t<div class="left">Lease type</div>\n\t\t\t\t\t\t\t\t<div class="right">\n\t\t\t\t\t\t\t\t\t<input type="checkbox" id="lease-m2m" />\n\t\t\t\t\t\t\t\t\t<label for="lease-m2m">This lease is month-to-month only.</label>\n\t\t\t\t\t\t\t\t\t<div class="indented">e.g. tenant can end this lease at any time without penalty - provided they give proper notice.</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t<div class="left">Contract start</div>\n\t\t\t\t\t\t\t\t<div class="right" id="startDateWrap"><input type="text" class="date" id="lease-start" /></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div id="contractDates">\n\t\t\t\t\t\t\t\t<div class="row break">\n\t\t\t\t\t\t\t\t\t<div class="left">Contract end</div>\n\t\t\t\t\t\t\t\t\t<div class="right" id="leaseCheckboxWrap"><input type="text" class="date" id="lease-end" />\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="m2mafter" />\n\t\t\t\t\t\t\t\t\t\t\t<label for="m2mafter">month-to-month after</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t<div class="left">Monthly rent</div>\n\t\t\t\t\t\t\t\t<div class="right">\n\t\t\t\t\t\t\t\t\t<input type="text" class="money" id="lease-rent" />\n\t\t\t\t\t\t\t\t\t<span>paid every</span>\n\t\t\t\t\t\t\t\t\t<select id="lease-rent-due">\n\t\t\t\t\t\t\t\t\t\t<option value="1">1st</option>\n\t\t\t\t\t\t\t\t\t\t<option value="2">2nd</option>\n\t\t\t\t\t\t\t\t\t\t<option value="3">3rd</option>\n\t\t\t\t\t\t\t\t\t\t<option value="4">4th</option>\n\t\t\t\t\t\t\t\t\t\t<option value="5">5th</option>\n\t\t\t\t\t\t\t\t\t\t<option value="6">6th</option>\n\t\t\t\t\t\t\t\t\t\t<option value="7">7th</option>\n\t\t\t\t\t\t\t\t\t\t<option value="8">8th</option>\n\t\t\t\t\t\t\t\t\t\t<option value="9">9th</option>\n\t\t\t\t\t\t\t\t\t\t<option value="10">10th</option>\n\t\t\t\t\t\t\t\t\t\t<option value="11">11th</option>\n\t\t\t\t\t\t\t\t\t\t<option value="12">12th</option>\n\t\t\t\t\t\t\t\t\t\t<option value="13">13th</option>\n\t\t\t\t\t\t\t\t\t\t<option value="14">14th</option>\n\t\t\t\t\t\t\t\t\t\t<option value="15">15th</option>\n\t\t\t\t\t\t\t\t\t\t<option value="16">16th</option>\n\t\t\t\t\t\t\t\t\t\t<option value="17">17th</option>\n\t\t\t\t\t\t\t\t\t\t<option value="18">18th</option>\n\t\t\t\t\t\t\t\t\t\t<option value="19">19th</option>\n\t\t\t\t\t\t\t\t\t\t<option value="20">20th</option>\n\t\t\t\t\t\t\t\t\t\t<option value="21">21st</option>\n\t\t\t\t\t\t\t\t\t\t<option value="22">22nd</option>\n\t\t\t\t\t\t\t\t\t\t<option value="23">23rd</option>\n\t\t\t\t\t\t\t\t\t\t<option value="24">24th</option>\n\t\t\t\t\t\t\t\t\t\t<option value="25">25th</option>\n\t\t\t\t\t\t\t\t\t\t<option value="26">26th</option>\n\t\t\t\t\t\t\t\t\t\t<option value="27">27th</option>\n\t\t\t\t\t\t\t\t\t\t<option value="28">28th</option>\n\t\t\t\t\t\t\t\t\t\t<option value="29">29th</option>\n\t\t\t\t\t\t\t\t\t\t<option value="30">30th</option>\n\t\t\t\t\t\t\t\t\t\t<option value="31">31st</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div><input type="checkbox" id="prevPaid" checked="checked" />\n\t\t\t\t\t\t\t\t\t<label for="prevPaid">all previous months paid</label></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class="row break">\n\t\t\t\t\t\t\t\t<div class="left">Deposit</div>\n\t\t\t\t\t\t\t\t<div class="right">\n\t\t\t\t\t\t\t\t\t<input type="text" class="money" id="lease-deposit" />\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="lease-depositPaid" />\n\t\t\t\t\t\t\t\t\t\t<label id="lease-depositPaid">tenant has paid already</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t<div class="left">Late fee</div>\n\t\t\t\t\t\t\t\t<div class="right">\n\t\t\t\t\t\t\t\t\t<input type="text" id="lease-lateFee" class="mini" />\n\t\t\t\t\t\t\t\t\t<select id="lease-lateFee-interval">\n\t\t\t\t\t\t\t\t\t\t<option value="1">each day late</option>\n\t\t\t\t\t\t\t\t\t\t<option value="2">only once</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="row break">\n\t\t\t\t\t\t\t\t<div class="left">Grace period</div>\n\t\t\t\t\t\t\t\t<div class="right">\n\t\t\t\t\t\t\t\t\t<input type="text" class="mini" id="lease-grace" /><span>days</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t<a class="button primary" id="saveLease"><span>Save Lease</span></a>\n\t\t\t\t\t\t\t\t<a class="button cancel" id="cancelLeaseEditor"><span>Cancel</span></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div></div>\n\t\t\t\t<div class="module" id="transactionsModule"><div class="wrap">\n\t\t\t\t\n\t\t\t\t\t<div class="action bill" id="billResidents">\n\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t<div class="left">Bill amount</div>\n\t\t\t\t\t\t\t<div class="right"><input type="text" class="money" /></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t<div class="left">Due date</div>\n\t\t\t\t\t\t\t<div class="right"><input type="text" class="date" id="billDueDate" /></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t<div class="left">Message</div>\n\t\t\t\t\t\t\t<div class="right"><textarea id="billMessage" rows="3"></textarea></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="row break">\n\t\t\t\t\t\t\t<div class="left">What happens?</div>\n\t\t\t\t\t\t\t<div class="right">\n\t\t\t\t\t\t\t\tAll residents will be notified of this bill via email and SMS.\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="submit">\n\t\t\t\t\t\t\t<a class="button primary"><span>Bill Residents</span></a>\n\t\t\t\t\t\t\t<a class="button cancel"><span>Cancel</span></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class="action pay" id="payResidents">\n\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t<div class="left">Pay amount</div>\n\t\t\t\t\t\t\t<div class="right"><input type="text" class="money" /></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t<div class="left">Message</div>\n\t\t\t\t\t\t\t<div class="right"><textarea id="payMessage" rows="3"></textarea></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="row break">\n\t\t\t\t\t\t\t<div class="left">Instructions</div>\n\t\t\t\t\t\t\t<div class="right">\n\t\t\t\t\t\t\t\t<em>Please send the residents a check</em> as our beta mode does not cover online payment.\n\t\t\t\t\t\t\t\tAll residents will be notified of this intended payment via email and SMS.\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="submit">\n\t\t\t\t\t\t\t<a class="button primary"><span>Send intent to pay</span></a>\n\t\t\t\t\t\t\t<a class="button cancel"><span>Cancel</span></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div id="transactionsDisplay">\n\t\t\t\t\t\t<!-- hidden bill residents\n\t\t\t\t\t\t<div class="optButtons" id="optButtons">\n\t\t\t\t\t\t\t<a class="button" id="billResidentsButton"><span>Bill Residents</span></a>\n\t\t\t\t\t\t\t<a class="button" id="payResidentsButton"><span>Pay Residents</span></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t -->\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class="list">\n\t\t\t\t\t\t\t<div class="filterList">\n\t\t\t\t\t\t\t\t<label id="transaction-label">Everything</label>\n\t\t\t\t\t\t\t\t<div class="options">\n\t\t\t\t\t\t\t\t\t<ul id="transaction-options">\n\t\t\t\t\t\t\t\t\t\t<li type="all" class="on">Everything</li>\n\t\t\t\t\t\t\t\t\t\t<li type="Rent">Rent</li>\n\t\t\t\t\t\t\t\t\t\t<li type="Fee">Fees</li>\n\t\t\t\t\t\t\t\t\t\t<li type="Deposit">Deposits</li>\n\t\t\t\t\t\t\t\t\t\t<li type="Deposit Return">Deposit Returns</li>\n\t\t\t\t\t\t\t\t\t\t<li type="Refund">Refunds</li>\n\t\t\t\t\t\t\t\t\t\t<li type="other">Other</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div id="transactionList">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div></div>\n\t\t\t</div></div>\n\t\t\n\t\t</div>\n\t\t\n\t</div>\n\t\n')
        # SOURCE LINE 394
        if c.property.type == 'multi':
            # SOURCE LINE 395
            __M_writer(u'\t<div class="unitnav">\n\t\t<!-- unit scroller (re-usable) -->\n\t\t<div class="unitScroller" id="unitScroller">\n\t\t\t<div class="label">Unit #</div>\n\t\t\t<div class="manualInput">\n\t\t\t\t<input type="text" alt="filter" />\n\t\t\t</div>\n\t\t\t<div class="scrollFrame" id="scrollFrame"><ul></ul></div>\n\t\t\t<div class="controls">\n\t\t\t\t<div class="slider"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- end unit scroller -->\n\t</div>\n')
        # SOURCE LINE 410
        __M_writer(u'</div>\n\n<div id="previewModal">\n\t<div class="close">Close Window</div>\n\t<img />\n</div>\n\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


