# -*- encoding:utf-8 -*-
from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 6
_modified_time = 1318784452.606465
_template_filename='/root/rentfox/rentfox/templates/help.html'
_template_uri='/help.html'
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
        __M_writer = context.writer()
        # SOURCE LINE 1
        __M_writer(u'<script type="text/javascript">\n\t$(document).ready(function(){\n\t\tpage = new Page;\n\t\thelp = new Help();\n\t});\n</script>\n<div class="page" id="help">\n\t<div class="left"><div class="wrap">\n\t\t\n\t\t<h1>FAQs</h1>\n\t\t\n\t\t<ul class="questions">\n\t\t\t<li><a href="#faq-0">How do I get the most out of Rentfox?</a></li>\n\t\t\t<li><a href="#faq-1">How can I add leases?</a></li>\n\t\t\t<li><a href="#faq-2">How can I add tenants?</a></li>\n\t\t\t<li><a href="#faq-3">Where can I find my tenants?</a></li>\n\t\t\t<li><a href="#faq-4">How do I collect Rent online?</a></li>\n\t\t\t<li><a href="#faq-5">How do I advertise my vacancies?</a></li>\n\t\t</ul>\n\t\t\n\t\t<ul class="answers">\n\t\t\t<li id="faq-0">\n\t\t\t\t<h5>How do I make the most out of Rentfox?</h5>\n\t\t\t\t<p>\n\t\t\t\t\tRentfox is currently in Beta.  We have finished\n\t\t\t\t\tcreating the absolute foundation of our rental management software \n\t\t\t\t\tand we are rapidly adding new features every week to make\n\t\t\t\t\tRentfox more valuable to your business.\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\tTo use Rentfox effectively, you should enter as much data\n\t\t\t\t\tin Rentfox as you can, as this data will be useful\n\t\t\t\t\tin upcoming features.\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\tFor example, adding photos to your units\n\t\t\t\t\tmay not seem important now, but once we release the listing \n\t\t\t\t\tmanager this October, your personal web site \n\t\t\t\t\tcontaining all your active listings will be ready to go immediately\n\t\t\t\t\twith no extra work on your part.\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\tHere are some things you should do to make the most of Rentfox:\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Create all your rental properties.</li>\n\t\t\t\t\t\t<li>Add all units to each property.</li>\n\t\t\t\t\t\t<li>Create leases for each active unit.</li>\n\t\t\t\t\t\t<li>Add tenants to leases</li>\n\t\t\t\t\t\t<li>Upload photos & floorplans.</li>\n\t\t\t\t\t\t<li>Record all rental related expenses in Rentfox.</li>\n\t\t\t\t\t</ol>\n\t\t\t\t</p>\n\t\t\t</li>\n\t\t\t<li id="faq-1">\n\t\t\t\t<h5>How can I add leases?</h5>\n\t\t\t\t<p>\n\t\t\t\t\tIf you have added units numbers to your property, you can create leases.\n\t\t\t\t\tYou should create leases because it automates the rent collection process\n\t\t\t\t\tso that you can collect rent by clicking one button. With leases, you will also be able\n\t\t\t\t\tsee upcoming vacancies, auto-remind remind tenants to pay via SMS, track\n\t\t\t\t\toccupancy rates, auto-calculate late fee charges, and much more!\n\t\t\t\t</p>\n\t\t\t\t<p>Here\'s one way to add a lease:</p>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Select your property from the properties menu.</li>\n\t\t\t\t\t\t<li>Select a unit from the right hand column.</li>\n\t\t\t\t\t\t<li>From the unit page, click on the giant "leases" tab on the left.</li>\n\t\t\t\t\t\t<li>Hover over the mini cog icon on the top right corner.</li>\n\t\t\t\t\t\t<li>Select "Create Lease" from the menu.</li>\n\t\t\t\t\t</ol>\n\t\t\t\t</p>\n\t\t\t</li>\n\t\t\t<li id="faq-2">\n\t\t\t\t<h5>How can I add tenants?</h5>\n\t\t\t\t<p>\n\t\t\t\t\tTenants can only be added to leases.  \n\t\t\t\t\tHere\'s one way to add a tenant:\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Select your property from the properties menu.</li>\n\t\t\t\t\t\t<li>Select a unit from the right hand column.</li>\n\t\t\t\t\t\t<li>From the unit page, click on the giant "leases" tab on the left.</li>\n\t\t\t\t\t\t<li>Select the lease you want from the giant "leases" tab.</li>\n\t\t\t\t\t\t<li>Click on the "add tenant" link at the bottom of the lease.</li>\n\t\t\t\t\t</ol>\n\t\t\t\t</p>\n\t\t\t</li>\n\t\t\t<li id="faq-3">\n\t\t\t\t<h5>Where can I find my tenants?</h5>\n\t\t\t\t<p>\n\t\t\t\t\tCurrently Rentfox does not support listing of tenants in table format.\n\t\t\t\t\tHowever, you will be able to search for tenants using the \n\t\t\t\t\tsearch box on the upper left.  Tenants can also be found on current\n\t\t\t\t\tor past leases on unit pages.  Unit pages can be found by clicking\n\t\t\t\t\ton a property, then clicking on the unit number on the right.\n\t\t\t\t</p>\n\t\t\t</li>\n\t\t\t<li id="faq-4">\n\t\t\t\t<h5>How do I collect Rent online?</h5>\n\t\t\t\t<p>\n\t\t\t\t\tRentfox developers are currently working on a Resident Portal\n\t\t\t\t\tthat will allow landlords to collect rent online from tenants automatically.\n\t\t\t\t\tTransaction fees will be kept as low as possible.\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\tThis feature will be released in December of 2010.\n\t\t\t\t</p>\n\t\t\t</li>\n\t\t\t<li id="faq-5">\n\t\t\t\t<h5>How do I advertise my vacancies?</h5>\n\t\t\t\t<p>\n\t\t\t\t\tRentfox developers are currently working on a Listing Management\n\t\t\t\t\tsystem.  Features include a killer listings website, Craigslist posting,\n\t\t\t\t\tautomatic online listing posting, prospective tenant scheduling,\n\t\t\t\t\tonline rental applications &amp; rental application processing.\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\tThis feature will be released in October of 2010.\n\t\t\t\t</p>\n\t\t\t</li>\n\t\t\t\n\t\t\t\n\t\t</ul>\n\t\t\n\t</div></div>\n\t<div class="right">\n\t\t<div class="sect">\n\t\t\t<h3>Contact Support</h3>\n\t\t\t<p>\n\t\t\t\t<a href="mailto:support@rentfox.net">support@rentfox.net</a>\n\t\t\t</p>\n\t\t</div>\n\t\t<div class="sect last">\n\t\t\t<h3>Support Details</h3>\n\t\t\t<p>\n\t\t\t\tSupport Priority: VIP<br />\n\t\t\t\tResponse Time: Between 30min - 2hours.\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\tWe monitor emails actively during the day but foxes also need sleep.  \n\t\t\t\tYou\'ll hear back from us within 24 hours.\n\t\t\t</p>\n\t\t</div>\n\t</div>\n</div>\n\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


