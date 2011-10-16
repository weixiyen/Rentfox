# -*- encoding:utf-8 -*-
from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 6
_modified_time = 1318760455.68198
_template_filename='/root/rentfox/rentfox/templates/property_setup.html'
_template_uri='/property_setup.html'
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
        __M_writer(u'<script type="text/javascript">\n\t$(document).ready(function(){\n\t\tpage = new Page;\n')
        # SOURCE LINE 4
        if (c.curPropId):
            # SOURCE LINE 5
            __M_writer(u"\t\tproperty = new PropertySetup({propertyId:'")
            __M_writer(escape(c.curPropId))
            __M_writer(u"',unitId:'")
            __M_writer(escape(c.unitId))
            __M_writer(u"'});\n")
            # SOURCE LINE 6
        else:
            # SOURCE LINE 7
            __M_writer(u'        property = new PropertySetup;\n')
            pass
        # SOURCE LINE 9
        __M_writer(u'\t});\n</script>\n\n<!-- Page -->\n<div class="page" id="propertySetup">\n\n\t<div class="editMode">\n\t\t<a class="mini button" href="/property/view/')
        # SOURCE LINE 16
        __M_writer(escape(c.curPropId))
        __M_writer(u'" id="property-preview"><span><img src="/styles/img/ico/building.png" />View Property</span></a>\n\t\t<h1 id="edit-mode-text">You are in <strong>"property setup mode"</strong></h1>\n\t</div>\n\t\n\t<div class="leftColumn">\n\t\t\n\t\t<!-- Property Info -->\n\t\t<div class="propertyInfo pane" id="propertyInfo">\n\t\t\t\n\t\t\t<!-- edit -->\n\t\t\t<div class="edit pane" id="propertyInfoEdit">\n\t\t\t\t<div id="saveProperty" class="save">\n\t\t\t\t\t<div class="inputs">\n\t\t\t\t\t\t<label for="propertyName">Property Name<input type="text" name="name" id="propertyName" /></label>\n\t\t\t\t\t\t<label for="propertyStreet">Street<input type="text" name="street" id="propertyStreet" /></label>\n\t\t\t\t\t\t<label for="propertyCity">City<input type="text" name="city" id="propertyCity" /></label>\n\t\t\t\t\t\t<label for="propertyState" class="state">State<input type="text" name="state" id="propertyState" maxlength="2" /></label>\n\t\t\t\t\t\t<label for="propertyZip" class="zip">Zip<input type="text" name="zip" id="propertyZip" maxlength="10" /></label>\n\t\t\t\t\t\t<label for="propertyType" class="clear">\n\t\t\t\t\t\t\t<select id="propertyType">\n\t\t\t\t\t\t\t\t<option value="single">Single unit</option>\n\t\t\t\t\t\t\t\t<option value="multi">Multi unit</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="uploadPlaceHolder" id="propertyPhotoEdit"><span id="uploadPropertyPhoto"></span><img src="" /></div>\n\t\t\t\t\t<div class="action">\n\t\t\t\t\t\t<a class="primary button" id="savePropertyButton"><span>Create Property</span></a>\n\t\t\t\t\t\t<a class="button fixedLength" id="savePropertyCancel"><span>Cancel</span></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<!-- display -->\n\t\t\t<div class="display pane" id="propertyInfoDisplay">\n\t\t\t\t<div class="pic"><div class="thumb"><span class="frame"><img id="propertyPhotoDisplay" /></span></div></div>\n\t\t\t\t<div class="info">\n\t\t\t\t\t<h3 id="propertyNameLabel"></h3>\n\t\t\t\t\t<p><span id="propertyStreetLabel"></span><br /><span id="propertyCityLabel"></span>, <span id="propertyStateLabel"></span>, <span id="propertyZipLabel"></span></p>\n\t\t\t\t\t<div class="action">\n\t\t\t\t\t\t<a id="editPropertyButton" class="mini button"><span><img src="/styles/img/ico/building_edit.png" />Edit</span></a>\n\t\t\t\t\t\t<a id="deletePropertyLink" class="mini button"><span><img src="/styles/img/ico/delete.png" />Delete</span></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t\t\n\t\t<!-- Unit Maker -->\n\t\t<div class="unitMaker pane" id="unitMaker">\n\t\t\t\n\t\t\t<div class="input"><input type="text" alt="unit #s" id="unitsInput" /></div>\n\t\t\t<div class="action">\n\t\t\t\t<a class="button" id="unitMakerButton"><span>Add unit numbers</span></a>\n\t\t\t</div>\n\t\t\t<ul class="tips" id="unitMakerShortcuts">\n\t\t\t\t<div class="tooltipArrow"></div>\n\t\t\t\t<li class="header">Example Commands (samples)</li>\n\t\t\t\t<li><label>5, 15, 25</label>- adds units 5, 15 and 25</li>\n\t\t\t\t<li><label>101-150</label>- adds units from 101-150</li>\n\t\t\t\t<li><label>x 5, 15, 25</label>- deletes unit 5, 15, and 25</li>\n\t\t\t\t<li><label>x 101-150</label>- deletes units from 101-150</li>\n\t\t\t</ul>\n\t\t</div>\n\n\t</div>\n\n\t<div class="rightColumn">\n\t\n\t\t\n\t\t<!-- vertical unit list -->\n\t\t<div class="unit tooltip" id="unitTooltip">\n\t\t\t<div class="arrow"></div>\n\t\t\t<h5>Click on a Unit</h5>\n\t\t\t<p>You can click units to edit floorplans and upload unit photos.</p>\n\t\t</div>\n\t\t<div class="unitList pane" id="unitList">\n\t\t\t<!-- unit scroller (re-usable) -->\n\t\t\t<div class="unitScroller" id="unitScroller">\n\t\t\t\t<div class="label">Unit #</div>\n\t\t\t\t<div class="manualInput">\n\t\t\t\t\t<input type="text" alt="filter" />\n\t\t\t\t</div>\n\t\t\t\t<div class="scrollFrame" id="scrollFrame"><ul></ul></div>\n\t\t\t\t<div class="controls">\n\t\t\t\t\t<div class="slider"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- end unit scroller -->\n\n\t\t</div>\n\t\t<!-- unit info -->\n\t\t<div class="unitInfo pane" id="unitInfo">\n\t\t\t<div class="progress" id="progress">\n\t\t\t\t<div class="exitSetup" id="exitSetup">\n\t\t\t\t\t<a class="primary button" id="exitSetupButton"><span>Exit Setup</span></a>\n\t\t\t\t</div>\n\t\t\t\t<div class="bar"><span></span></div>\n\t\t\t\t<label></label>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class="unitbox" id="unitbox"><div class="wrap"><div class="wrap">\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t<div class="edit" id="editFloorPlan">\n\t\t\t\t\t<h1 id="unitEditorLabel">Unit 101</h1>\n\t\t\t\t\t<div id="saveFloorPlan" class="save">\n\t\t\t\t\t\t<div class="inputs">\n\t\t\t\t\t\t\t<label for="floorPlanName">Floor Plan Name<input type="text" name="name" id="floorPlanName" alt="e.g. Fanciful" /></label>\n\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t<label for="sqft">Sqft<input type="text" name="sqft" id="sqft" /></label>\n\t\t\t\t\t\t\t\t<label for="beds">Br<input type="text" name="beds" id="beds" alt="e.g 2" /></label>\n\t\t\t\t\t\t\t\t<label for="baths">Ba<input type="text" name="baths" id="baths" alt="e.g. 2.5" /></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<label for="floorPlanDescription">Floorplan Promotional Copy\n\t\t\t\t\t\t\t<em>Information here will be re-used in other places, such as advertising your unit on Craigslist.</em>\n\t\t\t\t\t\t\t<textarea name="description" cols="35" rows="5" id="floorPlanDescription"></textarea></label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="action">\n\t\t\t\t\t\t\t<a class="primary button fixedLength" id="saveFloorPlanButton"><span>Save</span></a>\n\t\t\t\t\t\t\t<a class="button fixedLength" id="saveFloorPlanCancel"><span>Cancel</span></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class="display" id="displayFloorPlan">\n\t\t\t\t\t\n\t\t\t\t\t<div class="unitedit">\n\t\t\t\t\t\t<div class="moremenu"><div class="wrap">\n\t\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t\t<div class="options">\n\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t<li id="editFloorPlanLink">Edit floor plan</li>\n\t\t\t\t\t\t\t\t\t<li id="renameUnitLink">Rename unit</li>\n\t\t\t\t\t\t\t\t\t<li id="deleteUnitLink">Delete unit</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<h1 id="unitLabel"></h1>\n\t\t\t\t\t<div class="unitLabelInput" id="unitLabelRenamer">\n\t\t\t\t\t\t<input type="text" id="unitLabelInput" />\n\t\t\t\t\t\t<a class="button primary" id="unitRenameButton"><span>Save</span></a>\n\t\t\t\t\t\t<a class="button" id="unitRenameCancel"><span>Cancel</span></a>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class="filter">\n\t\t\t\t\t\t<div class="options"><div class="wrap"><ul id="floorPlanList"></ul></div></div>\n\t\t\t\t\t\t<div><label class="floorPlanLabel" id="floorPlanLabel"></label></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class="floorPlanInfo" id="floorPlanInfo">\n\t\t\t\t\t\t<div class="uploadPlaceHolder" id="floorPlanDisplayPhoto"><span id="uploadFloorPlanOnDisplay"></span><img src="" /></div>\n\t\t\t\t\t\t<div class="floorplan" id="floorPlan"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t<div class="picViewer" id="unitPicViewer">\n\t\t\t\t\t\t<h3 id="unitPhotosLabel"></h3>\n\t\t\t\t\t\t<em>Photos here will be re-used in other places, such as advertising your unit on Craigslist.</em>\n\t\t\t\t\t\t<div class="droptext">Drop photos here!</div>\n\t\t\t\t\t\t<div class="picDisplay"><span class="frame"></span></div>\n\t\t\t\t\t\t<div class="picBar">\n\t\t\t\t\t\t\t<div class="picEditor">\n\t\t\t\t\t\t\t\t<div class="picOptions">\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li class="add" id="unitPicViewer-upload">Upload more</li>\n\t\t\t\t\t\t\t\t\t\t<li class="delete" id="unitPicViewer-delete">Delete this</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="picNav">\n\t\t\t\t\t\t\t\t<div class="left"><span>Previous</span></div>\n\t\t\t\t\t\t\t\t<div class="center">0 of 0</div>\n\t\t\t\t\t\t\t\t<div class="right"><span>Next</span></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div></div></div>\n\t\t\t\n\t\t\t\n\t\t</div>\n\t\t\n\t\t\n\t</div>\n\n</div>\n\n<div id="previewModal">\n\t<div class="close">Close Window</div>\n\t<img />\n</div>\n\n')
        # SOURCE LINE 213
        __M_writer(u'\n\n\n\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


