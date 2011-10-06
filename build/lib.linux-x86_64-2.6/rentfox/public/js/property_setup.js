/* 
	tasks remaining by Sunday
		- forms error handling
		- upload file event handling
---------------------------------*/

/* 
	PropertySetup Class
	
	Description: 
		The purpose of this class is to handle all the events for the property setup page.
		This page requires that the Rentfox 'Page' object be called on the page and available globally.
	
	Functions:
		- Displays data on properties
		- Saves property data
		- uses unitscroller to navigate units with custom functions to show whether the unit has floorplans or not
		- updates the progress of the units
		- allows floorplans to be created and assigned to units
		- allows deletion of floor plans
	
	This Class:
		- when the class is first called
		
---------------------------------*/
function PropertySetup(data) 
{
	var self = this;
	
	self.propertyId = false;
	self.currentUnitId = false;
	if(data){
		if(data.propertyId) {self.propertyId = data.propertyId;}
		if(data.unitId) {self.currentUnitId = data.unitId;}
	}
	
	self.deletePropertyLink = $('#deletePropertyLink,#propertyOptionsList .delete');
	
	self.propertyName = $('#propertyNameLabel');
	self.propertyStreet = $('#propertyStreetLabel');
	self.propertyCity = $('#propertyCityLabel');
	self.propertyState = $('#propertyStateLabel');
	self.propertyZip = $('#propertyZipLabel');
	self.propertyPhoto = $('#propertyPhotoEdit');
	self.propertyThumbnail = $('#propertyPhotoDisplay');
	
	self.propertyForm = $('#propertyName, #propertyStreet, #propertyZip');
	self.propertyNameInput = $('#propertyName');
	self.propertyStreetInput = $('#propertyStreet');
	self.propertyZipInput = $('#propertyZip');
	self.savePropertyButton = $('#savePropertyButton');
	self.savePropertyCancel = $('#savePropertyCancel');
	self.editPropertyButton = $('#editPropertyButton');
	
	self.unitMakerButton = $('#unitMakerButton');
	self.unitMakerButtonLabel = $('#unitMakerButton > span');
	self.unitMakerInput = $('#unitsInput');
	self.unitMakerShortcuts = $('#unitMakerShortcuts');
	self.textarea = $('#unitInfo textarea');
	self.unitbox = $('#unitbox');
	self.unitInfoEdit = $('#editFloorPlan');
	self.unitInfoDisplay = $('#displayFloorPlan');
	
	self.floorPlan = $('#floorPlan');
	self.floorPlanForm = $('#unitForm');
	self.floorPlanInfo = $('#floorPlanInfo');
	self.floorPlanLabel = $('#floorPlanLabel');
	self.floorPlanPhoto = $('#unitInfo .uploadPlaceHolder');
	self.floorPlanDisplayPhoto = $('#floorPlanDisplayPhoto');
	self.floorPlanList = $('#floorPlanList');
	self.floorPlanListItem = $('#floorPlanList > li');
	self.saveFloorPlanButton = $('#saveFloorPlanButton');
	self.saveFloorPlanCancel = $('#saveFloorPlanCancel');
	self.floorPlanNameInput = $('#floorPlanName');
	self.unitLabel = $('#unitLabel, #unitEditorLabel');
	self.sqftInput = $('#sqft');
	self.bedsInput = $('#beds');
	self.bathsInput = $('#baths');
	self.floorPlanDescriptionInput = $('#floorPlanDescription');
	self.unitPhotosLabel = $('#unitPhotosLabel');
	self.assignFloorPlanStatus = false;
	
	self.progress = $('#progress');
	self.progressBar = $('#progress > .bar > span');
	self.progressLabel = $('#progress > label');
	self.exitSetup = $('#exitSetup');
	self.exitSetupButton = $('#exitSetupButton');
	
	
	self.tempPropertyPhoto = {thumbid:'',photoid:'',thumbpath:''};
	
	if (self.propertyId) {
		self.setPageState(2);
	} else {
		self.setPageState(1);
	}
	
	
}

/* 
	init method
	
	Description: 
		The init function is called when we know what property we are dealing with.
		It then initializes the UnitScroller, as well as makes available the Property object and gets Property Data.
		It also initializes other methods which initialize the page so that things are clickable.
		
		THIS METHOD IS NOT CALLED IF WE ARE CREATING A NEW PROPERTY
		- at least until that property is saved.
		
---------------------------------*/
PropertySetup.prototype.init = function() {
	var self = this;

	self.prop = new Property({propertyId:self.propertyId});
	self.unit = new Unit();
	self.property = self.prop.getProperty();
	self.unitscroller = new UnitScroller({
		property:self.property, 
		clickUnit:function(units, unit){

			units.removeClass('on');
			unit.addClass('on');
			
			self.currentUnitId = unit.attr('id');
			self.loadUnit();
		}
	});
	
	self.picViewer = new PicViewer('#unitPicViewer');
	self.resetScroller().initUnitButtonSetup().initPropertyInfo().initFloorPlanSave().initUnitMaker().initAjaxUpload();
	
	self.textarea.elastic();
	
	if ($('#'+self.currentUnitId).attr('id')) {
		self.unitscroller.scrollToUnit(self.currentUnitId);
		$('#'+self.currentUnitId).click();
	}
	
	if (self.property.type === 'single') {
		$('#unitMaker').hide();
		$('#scrollFrame li:first').trigger('click');
		$('#deleteUnitLink, #renameUnitLink, #unitScroller > .label').remove();
	} else {
		$('#unitMaker').show();
	}
};

/* 
	resetUnit method
	
	Description: 
		hides unit from view
		
---------------------------------*/
PropertySetup.prototype.resetUnit = function() {
	var self = this;
	self.unitInfoDisplay.css({display:"none"});
	self.unitInfoEdit.css({display:"none"});
	self.unitbox.css({display:"none"});
	return self;
};

/* 
	pageButtonSetup method
	
	Description: 
		binds certain buttons to actions on this page
		
---------------------------------*/
PropertySetup.prototype.initUnitButtonSetup = function() {
	var self = this;
	self.exitSetupButton.bind('click',function(){
		location.href='/property/view/'+self.propertyId;
	});
	
	$('#editFloorPlanLink').bind('click',function(){
		self.exitAssignFloorPlanMode();
		self.showUnitEditor({action:'edit'});
	});
	
	$('#deleteUnitLink').bind('click',function(){
		page.fox.center().display({
			url:"deleteUnitConfirm.html",
			callback:function(){
				$('#deleteUnitButton').bind('click',function(){
					self.unit.deleteUnit({
						request: {
							unitId: self.currentUnit.id,
							propertyId: self.propertyId
						},
						success: function(json) {
							page.errors.clear();
							if (json.errors) {
								page.errors.prompt({
									errors: json.errors, 
									offset: {x:0,y:0}
								});
							} else {
								self.property = json;
								self.resetUnit().resetScroller();
								page.fox.dock();
							}
						}
					});
					
				});
			}
		});
	});
	
	$('#renameUnitLink').bind('click',function(){
		var unitLabel = self.currentUnit.label;
		$('#unitLabel').css({display:'none'});
		$('#unitLabelRenamer').css({display:'block'});
		$('#unitLabelInput').val(unitLabel).focus().select();
	});
	
	$('#unitRenameCancel').bind('click',function(){
		$('#unitLabelRenamer').css({display:'none'});
		$('#unitLabel').css({display:'block'});
	});
	
	$('#unitRenameButton').bind('click',function(){
		var unitLabel = $('#unitLabelInput').val();
		self.unit.rename({
			request: {
				unitId: self.currentUnit.id,
				unitLabel: unitLabel,
				currentLabel: self.currentUnit.label,
				propertyId: self.propertyId
			},
			success: function(json) {
				page.errors.clear();
				if (json.errors) {
					page.errors.prompt({
						errors: json.errors, 
						offset: {x:-200,y:0}
					});
				} else {
					self.property = json;
					self.loadUnit().resetScroller();
					page.fox.dock();
				}
			}
		});
	});
	
	return self;
};

/* 
	loadUnit method
	
	Description: 
		Once a person clicks on a unit on the UnitScroller, this method displays the unit and all it's information.
		In addition, this method initializes the form to edit the unit as well.
		This unit also initializes ability to manage floorplans for the unit.
		
---------------------------------*/
PropertySetup.prototype.loadUnit = function() {
	var self = this, 
		html = [],
		unitid = self.currentUnitId;
	
	self.unitbox.css({display:"block"});
	$('#unitLabelRenamer').css({display:'none'});
	$('#unitLabel').css({display:'block'});
	
	$('#unitTooltip').hide();
	
	self.currentUnit = self.getUnit(unitid);
	var type = self.property.type,
		label = type === 'single' ? self.currentUnit.label : 'Unit #' + self.currentUnit.label;
		
	self.unitLabel.text(label).unbind().bind('click',function(){
		location.href = '/unit/view/'+unitid;
	});
	self.unitPhotosLabel.text('Upload photos for ' + label);
	self.loadFloorPlanList();
		
	if (self.currentUnit.floorPlan) {
		var currentFloorplan = self.getFloorplan( self.currentUnit.floorPlan.id );
		self.floorPlanUploader.setData({
			floorplanId: self.currentUnit.floorPlan.id
		});
		html[0] = '<p>' + self.currentUnit.floorPlan.sqft + ' sqft<br />' + self.currentUnit.floorPlan.beds + ' br / '  + self.currentUnit.floorPlan.baths + ' ba</p>';
		if (self.currentUnit.floorPlan.description) {html[1] = '<p>' + self.currentUnit.floorPlan.description + '</p>';}
		html[2] = '<div class="assign"><a class="button" id="assignFloorPlanToOtherUnits"><span>&laquo; Assign floor plan to other units</span></a></div>';
		self.floorPlanDisplayPhoto.css({display:'block'});
		self.floorPlan.html(html.join('')).css({display:'block'});
		self.floorPlanLabel.text(self.currentUnit.floorPlan.label);
		
		if (type === 'single') $('#assignFloorPlanToOtherUnits').remove();
		
		if (currentFloorplan.thumb) {
			self.floorPlanPhoto.addClass('photo').children('img').attr({src: currentFloorplan.thumb});
		} else {
			self.floorPlanPhoto.removeClass('photo');
		}
		
		self.setupUploader();
		
		self.showUnit();
		$('#assignFloorPlanToOtherUnits').bind('click',function(){
			self.assignFloorPlanMode();
		});
		$("#editFloorPlanLink").css({display:"block"});
		
		$("#unitPicViewer").css({display:"block"});
		
		// unit photo uploader
		self.unitUploader.setData({
			unitid: self.currentUnit.id
		});
		page.request({
			url: '/unit/photos',
			type: 'GET',
			request: {
				unitid: self.currentUnit.id
			},
			success: function(json) {
				self.picViewer.setup( json );
			}
		});
		
	} else {
		$("#unitPicViewer").css({display:"none"});
		$("#editFloorPlanLink").css({display:"none"});
		if (self.property.floorPlans) {
			self.floorPlanDisplayPhoto.css({display:'none'});
			self.floorPlan.css({display:'none'});
			self.floorPlanLabel.text('Choose floor plan');
			self.showUnit();
		} else {
			self.showUnitEditor({action:'new'});
		}
	}
	
	return self;
};

/* 
	assignFloorPlanMode method
	
	Description: 
		Turns the UnitScroller into checkboxes so that the user can select which units to apply the current floorplan to.
		In addition this method has form processing for when the save button is clicked.
		This method will provide buttons to cancel out of the mode or save&exit the mode.
		
---------------------------------*/
PropertySetup.prototype.assignFloorPlanMode = function() {
	var self = this;
	
	var floorPlanId = self.currentUnit.floorPlan.id;
	
	self.assignFloorPlanStatus = true;
		
	$('#assignFloorPlanToOtherUnits span').text('I\'m done, save!').parent().addClass('primary').unbind().bind('click',function(){
		
		var units = '';
		$('#scrollFrame li input:checked').each(function() {
			units += $(this).parent().attr('id') + ',';
		});
		
		self.prop.assignFloorPlansToUnits({
			floorplanId: floorPlanId,
			units: units.slice(0, -1),
			propertyId: self.propertyId,
			success: function(json) {
				page.errors.clear();
				if (json.errors) {
					page.errors.prompt({
						errors: json.errors, 
						offset: {x:-270,y:0}
					});
				} else {
					self.property = json;
					self.exitAssignFloorPlanMode();
					page.fox.dock();
				}
			}
		});


		
	}).after('<a id="assignFloorPlanToOtherUnitsCancel" class="button"><span>Cancel</span></a>');
	
	$('#assignFloorPlanToOtherUnitsCancel').bind('click',function(){
		self.exitAssignFloorPlanMode();
	});
		
	self.unitscroller.property = self.property;
	self.unitscroller.loadUnits({currentUnit: self.currentUnit.id}).initListItems({
		eachUnit: function(unit){
			var html = '<input type="checkbox" id="ck_' + unit.attr('id') + '" />';
			var thisFloorPlanId = self.getUnit(unit.attr('id')).floorPlan.id;
			if (thisFloorPlanId) {
				unit.addClass('inuse');
			}
			if (thisFloorPlanId == floorPlanId) {
				html = '<input type="checkbox" id="ck_' + unit.attr('id') + '" checked="checked" />';
				unit.addClass('highlight');
			}
			unit.prepend(html);
		},
		allUnits: function(units) {
			units.unbind('click');
			$('#scrollFrame > ul > li').unbind().bind('click',function(){
				if(self.unitscroller.clickable && !$(this).children('input').attr('disabled')) {
					if ($(this).hasClass('highlight')) {
						$(this).removeClass('highlight').children('input').attr({checked:''});
					} else {
						$(this).addClass('highlight').children('input').attr({checked:'checked'});
					}
				}
				self.unitscroller.clickable = true;
			});
		}
	});
	
	return self;
};

/* 
	exitAssignFloorPlanMode method
	
	Description: 
		Exits the assign floor plan to unit mode and gets rid of the checkboxes by reloading the unitscroller to its original default.
		
---------------------------------*/
PropertySetup.prototype.exitAssignFloorPlanMode = function() {
	var self = this;
	
	if (self.assignFloorPlanStatus) {
		self.resetScroller().loadUnit();
	} else {
		self.assignFloorPlanStatus = false;
	}
	
	return self;
};

/* 
	loadFloorPlanList method
	
	Description: 
		This is called from the loadUnit function.
		This loads the floorplan dropdown selection based on the floorplans available on the property JSON.
		A button is also offered for creating new floor plans.
		
---------------------------------*/
PropertySetup.prototype.loadFloorPlanList = function() {
	var self = this;
	var html = [];
	
	for (var i in self.property.floorPlans) {
		if (self.currentUnit.floorPlanid && self.currentUnit.floorPlan.id == self.property.floorPlans[i].id) {
			html[i] = '<li class="on" id="' + self.property.floorPlans[i].id + '"><span class="delete"></span><span class="label" title="' + self.property.floorPlans[i].label + '">' + self.property.floorPlans[i].label + '</span></li>';
		} else {
			html[i] = '<li id="' + self.property.floorPlans[i].id + '"><span class="delete"></span><span class="label" title="' + self.property.floorPlans[i].label + '">' + self.property.floorPlans[i].label + '</span></li>';
		}
	}
	self.floorPlanList.html(html.join('')).prepend('<li class="new">Create new floor plan</li>');
		
	$('#floorPlanList > li').unbind().bind('click',function(e){
		var thisFloorPlanId = $(this).attr('id');
		var createNew = $(this).hasClass('new');
		var isSameFloorPlan = thisFloorPlanId == self.currentUnit.floorPlan.id;
		
		self.exitAssignFloorPlanMode();
		
		if ($(e.target).hasClass('delete')) {
			var targetedFloorPlanId = $(e.target).parent().attr('id');
			page.fox.center().display({
				url:"deleteFloorPlanConfirm.html",
				callback:function(){
					$('#deleteFloorPlanButton').bind('click',function(){
						self.prop.deleteFloorPlan({
							propertyId: self.propertyId,
							floorPlanId: targetedFloorPlanId,
							success: function(json) {
								page.errors.clear();
								if (json.errors) {
									page.errors.prompt({
										errors: json.errors, 
										offset: {x:0,y:0}
									});
								} else {
									self.property = json;
									self.loadUnit().resetScroller();
									page.fox.dock();
								}
							}
						});
						
					});
				}
			});
		} else {
			if (createNew) {
				self.showUnitEditor({action:'new'});
			} else if (!isSameFloorPlan) {
				self.unit.addFloorPlanToUnit({
					floorplanId: thisFloorPlanId,
					unitId: self.currentUnit.id,
					propertyId: self.propertyId,
					success: function(json) {
						page.errors.clear();
						if (json.errors) {
							page.errors.prompt({
								errors: json.errors, 
								offset: {x:0,y:0}
							});
						} else {
							self.property = json;
							self.loadUnit().resetScroller();
							page.fox.dock();
							self.loadUnit();
						}
					}
				});
				
			}
		}
	});
	
	return self;
};

/* 
	showUnitEditor method
	
	Description: 
		This is actually more of a floorplan editor than a unit editor.
		It switches from the unit mode to editing the unit floorplan mode.
		Changes to one floorplan affect all units with the same floorplan.
		
---------------------------------*/
PropertySetup.prototype.showUnitEditor = function(data) {
	var self = this;
	
	self.saveFloorPlanAction = data.action;
	if (data.action == 'edit') {
		self.floorPlanNameInput.attr({value:self.currentUnit.floorPlan.label}).addClass('active');
		self.sqftInput.attr({value:self.currentUnit.floorPlan.sqft}).addClass('active');
		self.bedsInput.attr({value:self.currentUnit.floorPlan.beds}).addClass('active');
		self.bathsInput.attr({value:self.currentUnit.floorPlan.baths}).addClass('active');
		self.floorPlanDescriptionInput.val(self.currentUnit.floorPlan.description);
	} else {
		self.floorPlanNameInput.attr({value:self.floorPlanNameInput.attr('alt')}).removeClass('active');
		self.sqftInput.attr({value:self.sqftInput.attr('alt')}).removeClass('active');
		self.bedsInput.attr({value:self.bedsInput.attr('alt')}).removeClass('active');
		self.bathsInput.attr({value:self.bathsInput.attr('alt')}).removeClass('active');
		self.floorPlanDescriptionInput.val('');
	}
	
	if (!self.property.floorPlans){
		self.saveFloorPlanCancel.css({display:'none'});
	} else {
		self.saveFloorPlanCancel.css({display:'block'});
	}
	self.unitInfoDisplay.css({display:'none'});
	self.unitInfoEdit.css({display:'block'});
	
	return self;
};

/* 
	showUnit method
	
	Description: 
		This is used to display the unit, as opposed to the unit editor
		
---------------------------------*/
PropertySetup.prototype.showUnit = function() {
	var self = this;
	
	self.unitInfoDisplay.css({display:'block'});
	self.unitInfoEdit.css({display:'none'});
		
	return self;
};

/* 
	getUnit method
	
	Description: 
		This method takes a unitId, and returns a unit with all its properties.
		This is one by inspecting the property object, rather than a unit object.
		
---------------------------------*/
PropertySetup.prototype.getUnit = function(unitId) {
	var self = this;
	
	for (var i in self.property.units) {
		if (self.property.units[i].id == unitId) {
			return self.property.units[i];
		}
	}
	return false;
};

PropertySetup.prototype.getFloorplan = function(floorplanId) {
	var self = this;
	
	for (var i in self.property.floorPlans) {
		if (self.property.floorPlans[i].id == floorplanId) {
			return self.property.floorPlans[i];
		}
	}
	return false;
};


/* 
	setPageState method
	
	Description: 
		There are 2 possible states, 1 and 2.
		1 - this is called if no propertyId is called to the PropertySetup Class, which means we are creating a new unit.
		2 - this is called if we are editing a current existing property, or had just saved a property.
		The main function here is to hide UI if there is no property yet (state==1) and present the user with a form to create a property.
		It then creates a property and sets the state==2, which allows all other UI to show.
		
---------------------------------*/
PropertySetup.prototype.setPageState = function(state) {
	var self = this;
	switch (state) 
	{
		case 1:
			
			self.setupUploader();
			var newPropertyUpload = new AjaxUpload('#uploadPropertyPhoto', {
				action: '/property/uploadTempPhoto',
				onSubmit: function(file, extension){
					page.ajaxStart();
				},
				responseType:'json',
				onComplete: function(file, response) {
					page.ajaxStop();
					if (response.errors) {
						page.errors.prompt(response);
					} else {
						self.tempPropertyPhoto = response; 
						self.propertyPhoto.addClass('photo').children('img').attr({src:response.thumbpath});
						self.setupUploader();
					}
				}
			});
			
			$('#propertyInfo').css({display:'block'});
			self.pageState = 1;
			page.nav.hideSubmenu();
			self.savePropertyCancel.css({display:'none'});
			self.editPropertyInfo();
			self.progress.css({display: 'none'});
			
			self.savePropertyButton.bind("click",function(){
				var prop = new Property(),
					property_type = $('#propertyType > option:selected').attr('value');
				var json = prop.create({
					request: {
						name: self.propertyNameInput.attr('value'),
						type: property_type,
						street: self.propertyStreetInput.attr('value'),
						zip: self.propertyZipInput.attr('value'),
						state: $('#propertyState').val(),
						city: $('#propertyCity').val(),
						thumbid: self.tempPropertyPhoto.thumbid,
						photoid: self.tempPropertyPhoto.photoid
					},
					success: function(json) {
						page.errors.clear();
						if (json.errors) {
							page.errors.prompt({
								errors: json.errors, 
								offset: {x:0,y:-40}
							});
						} else {
							
							if (property_type === 'single') {
								self.createUnitForProperty( json.id, 'Unit' );
							} else {
								location.href = '/property/setup/' + json.id;
							}
							
						}
					}
				});
			});
			
			self.propertyForm.bind('keypress', function(e){
				var code = e.keyCode || e.which;
				if(code == 13) { 
					self.savePropertyButton.click();
				}
			});
			$('#propertyName').focus();
			
			break;
		case 2:
			$('#propertyInfo, #unitMaker, #unitList, #unitInfo').css({display:'block'});
			self.init();
			self.pageState = 2;
			page.nav.showSubmenu();
			self.showPropertyInfo();
			self.progress.css({display: 'block'});
			self.unitMakerInput.focus();
			break;
		default:
			break;
	}
	
	return self;
};

PropertySetup.prototype.createUnitForProperty = function ( property_id, unit_label ) {
	var request = {
		propertyId: property_id,
		units: unit_label,
		unitCount: 1
	};
	page.request({
		url: '/unit/create',
		request: request,
		success: function(json) {
			location.href = '/property/setup/' + json.id;
		}
	});
};

/* 
	showPropertyInfo method
	
	Description: 
		This method hides the property info editor and shows the property info.
		In addition, each time this is called, the method to update the property info based on the property object is also called.
		
---------------------------------*/
PropertySetup.prototype.showPropertyInfo = function() {
	var self = this;
	$('#propertyInfoEdit').css({display:'none'});
	$('#propertyInfoDisplay').css({display:'block'});
	self.updatePropertyInfo();
	return self;
};

/* 
	editPropertyInfo method
	
	Description: 
		This method hides the property info and shows the property info editor.
		Each time this is called, the cursor focus will be on the property Name input.
		
---------------------------------*/
PropertySetup.prototype.editPropertyInfo = function() {
	var self = this;
	self.propertyNameInput.focus();
	$('#propertyInfoDisplay').css({display:'none'});
	$('#propertyInfoEdit').css({display:'block'});
	return self;
};

/* 
	updatePropertyInfo method
	
	Description: 
		this updates the property info and photos based on current property JSON object
		
---------------------------------*/
PropertySetup.prototype.updatePropertyInfo = function() {
	var self = this;
	
	self.propertyName.text(self.property.name);
	self.propertyStreet.text(self.property.street);
	self.propertyCity.text(self.property.city);
	self.propertyState.text(self.property.state);
	self.propertyZip.text(self.property.zip);
	$("#propertyType option[value='"+ self.property.type +"']").attr('selected','selected');
	if (self.property.photo) {
		self.propertyPhoto.addClass('photo').children('img').attr({src:self.property.photo});
		self.propertyThumbnail.attr({src:self.property.photo});
	} else {
		self.propertyPhoto.removeClass('photo');
		self.propertyThumbnail.attr({src:''});
	}
	page.thumbnail.init();
	
	return self;
};

/* 
	initPropertyInfo method
	
	Description: 
		This is called from the 'init' method for organizational purposes.
		it enables buttons to be clicked and actions attached.
		Including:
		- save property button now updates property info and unbinds from "create new property"
		- cancel property button 
		- edit property button
		- delete property button
		- delete property link from MENU bar
		
---------------------------------*/
PropertySetup.prototype.initPropertyInfo = function() {
	var self = this;
	
	self.savePropertyButton.unbind().bind("click",function(){
		
		var property_type = $('#propertyType > option:selected').attr('value'),
			units_len = self.property.units.length;
		
		if (property_type === 'single' && self.property.type === 'multi' && units_len > 0) {
			page.errors.prompt({
				errors: [{'selector':'#propertyType', 
						'message':'It seems you are trying to switch to a single unit property. Please delete all your current units first.'}], 
				offset: {x:0,y:0}
			});
			return;
		}
		
		self.exitAssignFloorPlanMode();
		self.prop.save({
			request: {
				id: self.propertyId,
				type: property_type,
				name: self.propertyNameInput.attr('value'),
				street: self.propertyStreetInput.attr('value'),
				zip: self.propertyZipInput.attr('value'),
				state: $('#propertyState').val(),
				city: $('#propertyCity').val()
			},
			success: function(json) {
				page.errors.clear();
				if (json.errors) {
					page.errors.prompt({
						errors: json.errors, 
						offset: {x:0,y:-40}
					});
				} else {
					if (units_len === 0 && json.type=='single') self.createUnitForProperty(self.propertyId, 'Unit');
					if (property_type !== self.property.type) location.href = '/property/setup/'+self.propertyId;
					self.propertyId = json.id;
					self.property = json;
					self.showPropertyInfo();
					page.fox.dock();
				}
			}
		});

	}).addClass('fixedLength').children('span').text('Save');
	
	self.savePropertyCancel.bind('click',function(){
		self.exitAssignFloorPlanMode();
		self.showPropertyInfo();
	});
	
	self.editPropertyButton.bind("click",function(){
		self.exitAssignFloorPlanMode().setupUploader();
		self.savePropertyCancel.css({display:'block'});
		self.propertyNameInput.attr({value:self.property.name}).addClass('active');
		self.propertyStreetInput.attr({value:self.property.street}).addClass('active');
		self.propertyZipInput.attr({value:self.property.zip}).addClass('active');
		$('#propertyCity').val(self.property.city).addClass('active');
		$('#propertyState').val(self.property.state).addClass('active');
		self.editPropertyInfo();
	});
	
	self.deletePropertyLink.bind('click',function(){
		page.fox.center().display({
			url:"deletePropertyConfirm.html",
			callback:function(){
				$('#deletePropertyButton').bind('click',function(){
					self.prop.deleteProperty({
						propertyId: self.propertyId,
						success: function(json) {
							page.errors.clear();
							if (json.errors) {
								page.errors.prompt({
									errors: json.errors, 
									offset: {x:0,y:0}
								});
							} else {
								location.href='/dashboard';
							}
						}
					});
					
				});
			}
		});
	});
	
	self.propertyName.bind('click',function(){
		location.href = '/property/view/'+self.propertyId;
	});
		
	return self;
};

/* 
	initFloorPlanSave method
	
	Description: 
		This initializes the floor plan save and cancel buttons used from the floor plan editor (aka unit edit mode)
		
---------------------------------*/
PropertySetup.prototype.initFloorPlanSave = function(){
	var self = this;
	self.saveFloorPlanButton.bind('click',function(){
		if (self.saveFloorPlanAction == 'edit') {
			page.inputText.clear();
			self.prop.saveFloorPlan({
				input: {
					name: self.floorPlanNameInput.attr('value'),
					sqft: self.sqftInput.attr('value'),
					beds: self.bedsInput.attr('value'),
					baths: self.bathsInput.attr('value'),
					description: self.floorPlanDescriptionInput.attr('value')
				},
				floorplanId: self.currentUnit.floorPlan.id,
				success: function(json) {
					page.errors.clear();
					if (json.errors) {
						page.errors.prompt({
							errors: json.errors, 
							offset: {x:-190,y:-40}
						});
					} else {
						self.property = json;
						self.loadUnit().resetScroller();
						page.fox.dock();
					}
				}
			});
			page.inputText.reset();
		} else {
			page.inputText.clear();
			self.prop.createFloorPlan({
				input: {
					name: self.floorPlanNameInput.attr('value'),
					sqft: self.sqftInput.attr('value'),
					beds: self.bedsInput.attr('value'),
					baths: self.bathsInput.attr('value'),
					description: self.floorPlanDescriptionInput.attr('value')
				},
				unitId: self.currentUnit.id,
				propertyId: self.propertyId,
				success: function(json) {
					page.errors.clear();
					if (json.errors) {
						page.errors.prompt({
							errors: json.errors, 
							offset: {x:-190,y:-40}
						});
					} else {
						self.property = json;
						self.loadUnit().resetScroller();
						page.fox.dock();
					}
				}
			});
			page.inputText.reset();
		}
	});
	self.saveFloorPlanCancel.bind('click',function(){
		self.showUnit();
	});
	return self;
};

/* 
	initUnitMaker method
	
	Description: 
		this initializes the unit maker button as well as the Hint billboard hide/show based on input focus for how to use the unit maker.
		
---------------------------------*/
PropertySetup.prototype.initUnitMaker = function(){
	var self = this;
	
	self.unitMakerButton.bind("click",function(){
		self.exitAssignFloorPlanMode();
		self.prop.addUnits({
			input: self.unitMakerInput.attr('value'), 
			success: function(json) {
				page.errors.clear();
				if (json.errors) {
					page.errors.prompt({
						errors: json.errors, 
						offset: {x:-100,y:-40}
					});
				} else {
					page.fox.dock();
					self.property = json;
					self.resetScroller().resetUnit();
					self.unitMakerInput.attr({'value':''});
				}
			}
		});
	});
	
	self.unitMakerInput.bind('keyup',function(e){
		if(e.keyCode == 13) {
			self.unitMakerButton.click();
		}
	});
	
	self.unitMakerInput.bind('focus',function(){
		self.unitMakerShortcuts.css({display:'block'});
	}).bind('blur',function(){
		self.unitMakerShortcuts.css({display:'none'});
	}).bind('keyup', function(){
		if (self.unitMakerInput.attr('value').match('x ')) {
			self.unitMakerButtonLabel.text('Delete unit numbers');
		} else {
			self.unitMakerButtonLabel.text('Add unit numbers');
		}
	});
	
	
	return self;
};

/* 
	resetScroller method
	
	Description: 
		this refreshes the UnitScroller to update to the latest data, including show how many units have floor plans.
		
---------------------------------*/
PropertySetup.prototype.resetScroller = function() {
	var self = this;
	self.unitscroller.property = self.property;
	
	$('#unitTooltip').hide();
	if (self.currentUnit) {
		self.unitscroller.loadUnits({currentUnit: self.currentUnit.id});
	} else {
		self.unitscroller.loadUnits();
		if ($('#scrollFrame > ul > li').size() > 0) $('#unitTooltip').show();
	}
	
	self.unitscroller.initListItems({
		eachUnit: function(unit){
			var thisFloorPlanId = self.getUnit(unit.attr('id')).floorPlan.id;
			unit.addClass('noFloorPlan');
			if (thisFloorPlanId) {
				unit.addClass('hasFloorPlan');
			}
		}
	});
	
	self.updateProgressBar();
	
	return self;
};

/* 
	updateProgressBar method
	
	Description: 
		Updates the progress bar when it is called to display a bar representation of the percentage of units that have floor plans (aka setup completion %).
		
---------------------------------*/
PropertySetup.prototype.updateProgressBar = function() {
	var self = this;
	
	
	var hasFloorPlan = $('#unitScroller li.hasFloorPlan').size();
	var allFloorPlans = $('#unitScroller li').size();
	var percentage = 0;
	if (allFloorPlans) {
		percentage = Math.round(100 * hasFloorPlan / allFloorPlans);
	
		if (percentage && self.pageState == 2) {
			self.progress.css({display:'block'});
		} else {
			self.progress.css({display:'none'});
		}

		self.progressBar.css({width: '' + percentage + '%' }).parent().css({display:'block'});
		self.progressLabel.text('You have associated floorplans for ' + hasFloorPlan + ' of ' + allFloorPlans + ' units (' + percentage + '%)').css({display:'block'});
		
		if (percentage == 100) {
			self.exitSetup.css({display:'block'});
		} else {
			self.exitSetup.css({display:'none'});
		}
	
	} else {
		self.progressBar.parent().css({display:'none'});
		self.progressLabel.css({display:'none'});
		self.exitSetup.css({display:'none'});
	}
	
	return self;
};

/* 
	initAjaxUpload method
	
	Description: 
		This is called from the init method and essentially allows uploading of files.
		
---------------------------------*/
PropertySetup.prototype.initAjaxUpload = function() {
	var self = this,
		picViewer = self.picViewer,
		errorlist = {errors:[]};

	self.setupUploader();

	var propertyUploader = new AjaxUpload('#uploadPropertyPhoto', {
		action: '/property/uploadPhoto',
		data: {
			propertyId: self.propertyId
		},
		onSubmit: function(file, extension){
			page.ajaxStart();
		},
		responseType: 'json',
		onComplete: function(file, response) {
			page.ajaxStop();
			if (response.errors) {
				page.errors.prompt(response);
			} else {
				self.property.photo = response.thumbpath;
				self.updatePropertyInfo().setupUploader();
			}
		}
	});
	
	self.floorPlanUploader = new AjaxUpload('#uploadFloorPlanOnDisplay', {
		action: '/floorplan/uploadPhoto',
		onSubmit: function(file, extension){
			page.ajaxStart();
		},
		responseType: 'json',
		onComplete: function(file, response) {
			page.ajaxStop();
			if (response.errors) {
				page.errors.prompt(response);
			} else {
				self.property = self.prop.getProperty();
				self.loadUnit();
			}
		}
	});
	
	self.unitUploader = new AjaxUpload('#unitPicViewer-upload', {
		action: '/unit/uploadPhoto',
		onSubmit: function(file, extension){
			page.ajaxStart();
		},
		responseType: 'json',
		onComplete: function(file, response) {
			page.ajaxStop();
			if (response.errors) {
				page.errors.prompt(response);
			} else {
				picViewer.addPhoto( response );
			}
		}
	});
	
	$('#unitPicViewer-delete').bind('click',function(){
		var photo = picViewer.photos[ picViewer.photoIndex ],
			photoid = photo ? photo.id : false;
		
		if (photoid) {
			page.fox.confirm({
				message:'Are you sure you want to delete this photo?',
				confirmButtonText: 'Delete photo',
				success:function(){
					page.request({
						url: '/unit/removePhoto',
						request: {
							photoid: photoid
						},
						success: function(json) {
							picViewer.removePhoto()
						}
					});
				}
			});
			
		} else {
			page.fox.message({
				title:"Oops!",
				message:"The photo you are trying to delete does not exist."
			});
		}
	});
	
	
	$('#unitPicViewer').filedrop({
		url: '/unit/uploadPhoto',
		data: {
			unitid: function(){
				return self.currentUnit.id
			}
		},
		error: function(err, file) {
			switch(err) {
				case 'BrowserNotSupported':
					errorlist.errors.push({selector:'',
						message:'Your browser does not support drag and drop uploading.  Currently only Firefox 3.6+ supports this feature. Please use the upload button instead.'});
					page.errors.prompt(errorlist);
					break;
				case 'TooManyFiles':
					errorlist.errors.push({selector:'',
						message:'Too many files. You can only upload 25 files at a time.'});
					page.errors.prompt(errorlist);
					break;
				case 'FileTooLarge':
					errorlist.errors.push({selector:'',
						message:file.name + ' is too large. Please keep each photo under 20MB.'});
					page.errors.prompt(errorlist);
					break;
				default:
					break;
			}
		},
		maxfilesize: 20,
		dragOver: function() {
			picViewer.activateDropzone();
		},
		dragLeave: function() {
			picViewer.deactivateDropzone();
		},
		docOver: function() {
			picViewer.showDropzone();
		},
		docLeave: function() {
			picViewer.hideDropzone();
		},
		drop: function() {
			picViewer.hideDropzone();
			errorlist.errors = [];
		},
		uploadStarted: function(i, file, len){
			page.ajaxStart();
		},
		uploadFinished: function(i, file, response, time) {
			page.ajaxStop();
			if (response[0].errors) {
				errorlist.errors.push({selector:'', 
					message: file.name + ' failed to upload. ' + response[0].errors[0].message});
				page.errors.prompt(errorlist);
				return false;
			} else {
				picViewer.addPhoto( response[0] );
			}
		}
	});
	
	return self;
};

/* 
	setupUploader method
	
	Description: 
		Either displays upload image or uploaded image depending on if there are images or not.
		This applies to:
		- property thumbnail
		- floorplan image
		
---------------------------------*/
PropertySetup.prototype.setupUploader = function() {
	var self = this;
	
	$('.uploadPlaceHolder').unbind().each(function(){
		if ($(this).hasClass('photo')) {
			$(this).css({'background': 'url(' + $(this).children('img').attr('src') + ') center center no-repeat' }).children('span').text('Replace Image');
		} else {
			var text = '';
			if ($(this).parent().attr('id') == 'saveProperty') {
				text = 'Upload photo';
			} else {
				text = 'Upload floor plan';
			}
			$(this).css({'background': 'url("/styles/img/upload_photo_bg.png")' }).children('span').text(text);
		}
	}).bind('click',function(){
		if ($(this).hasClass('photo')) {
			var img_src = $(this).find('img').attr('src').replace('-thumb','');
			page.previewModal.show(img_src);
		}
	});
	
	return self;
};
