function TenantView(data) {
	var self = this;

	page.request({
		url: '/tenant/json/'+data.tenantId,
		async: false,
		request: {
			tenantId: data.tenantId
		},
		success: function(json) {
			self.tenant = json;
			self.init();
		}
	});
	
	return self;
}

TenantView.prototype.init = function() {
	var self = this;
	
	self.refreshData().initForms();
	
	return self;
}

TenantView.prototype.initForms = function() {
	var self = this;
	
	self.bindUpdateDelete();
	
	// emergency contact editing UI binds
	$("#addContact").bind('click',function(){
		self.openEditor("contact", $("#contactButton"), "create");
		$('#contactEditor input').val('');
		page.inputText.reset();
	});
	$("#cancelContact").bind('click',function(){
		self.closeEditor("contact");
	});
	$("#saveContact").bind('click',function(){
		self.saveContact();
	});
	$("#contactEditor input").bind('keypress', function(e){
		var code = e.keyCode || e.which;
		if(code == 13) { 
			$('#saveContact').click();
		}
	});
	
	
	// previous residences editing UI binds
	$("#addResidence").bind('click',function(){
		self.openEditor("residence", $("#residenceButton"), "create");
		$('#residenceEditor input').val('');
		page.inputText.reset();
	});
	$("#cancelResidence").bind('click',function(){
		self.closeEditor("residence");
	});
	$("#saveResidence").bind('click',function(){
		self.saveResidence();
	});
	$("#residenceEditor input").bind('keypress', function(e){
		var code = e.keyCode || e.which;
		if(code == 13) { 
			$('#saveResidence').click();
		}
	});
	
	
	// tenant details editing UI binds
	$("#editTenantInfo").bind('click',function(){
		self.openEditor("tenant", $("#tenantInfoDisplay"));
	});
	$("#cancelTenantInfo").bind('click',function(){
		self.closeEditor("tenant");
	});
	$("#saveTenantInfo").bind('click',function(){
		self.saveTenantInfo();
	});
	$("#tenantInfoEditor input").bind('keypress', function(e){
		var code = e.keyCode || e.which;
		if(code == 13) { 
			$('#saveTenantInfo').click();
		}
	});
	
	new Datepicker('#residenceStart');
	new Datepicker('#residenceEnd');
	
	$("#tenantPhone, #emergencyPhone, #residenceLandlordPhone").mask("(999) 999-9999");
	$("#tenantDOB, #residenceStart, #residenceEnd").mask("99/99/9999");
	$("#tenantSSN").mask("999-99-9999");

	return self;
}

TenantView.prototype.bindUpdateDelete = function() {
	var self = this;
	
	$("#emergencyContacts p.item > img.edit").unbind('click').bind('click',function(){
		self.openEditor("contact", $(this).parent(), "save");
	});
	$("#emergencyContacts .delete").unbind().bind('click',function(){
		var contactId = $(this).parent().attr('id');
		page.fox.confirm({
			message:'Are you sure you want to delete this emergency contact?',
			confirmButtonText: 'Yes, please delete',
			success:function(){
				page.request({
					url: '/tenant/deleteContact',
					request: {
						contactId: contactId,
						tenantId: self.tenant.id
					},
					offset: {x:-270,y:0},
					success: function(json) {
						self.tenant = json;
						self.refreshData();
					}
				});
			}
		});
		
		return false;
	});
	
	$("#previousResidences p.item > img.edit").unbind('click').bind('click',function(){
		self.openEditor("residence", $(this).parent(), "save");
	});
	$("#previousResidences .delete").unbind().bind('click',function(){
		var residenceId = $(this).parent().attr('id');
		page.fox.confirm({
			message:'Are you sure you want to delete this previous residence?',
			confirmButtonText: 'Yes, please delete',
			success:function(){
				page.request({
					url: '/tenant/deleteResidence',
					request: {
						residenceId: residenceId,
						tenantId: self.tenant.id
					},
					offset: {x:-270,y:0},
					success: function(json) {
						self.tenant = json;
						self.refreshData();
					}
				});
			}
		});
		return false;
	});
	
	return self;
}

TenantView.prototype.openEditor = function(type, hideObj, operation) {
	var self = this;
	self.currentOperation = operation;
	if (type == "contact") {
		var showObj = $("#contactEditor");
		if (self.currentContactItem) self.currentContactItem.css({display:"block"});
		self.currentContactItem = hideObj;
		if (operation == 'save') self.populateContactEditor();
	} else if (type == "residence") {
		var showObj = $("#residenceEditor");
		if (self.currentResidenceItem) self.currentResidenceItem.css({display:"block"});
		self.currentResidenceItem = hideObj;
		if (operation == 'save') self.populateResidenceEditor();
	} else {
		var showObj = $("#tenantInfoEditor");
		self.populateTenantEditor();
	}
	showObj.insertAfter(hideObj).css({display:'block'});
	hideObj.css({display:'none'});
	
	
	return self;
}

TenantView.prototype.closeEditor = function(type) {
	var self = this;
	
	if (type == "contact") {
		var hideObj = $("#contactEditor");
		var showObj = self.currentContactItem;
		self.currentContactItem = 0;
	} else if (type == "residence") {
		var hideObj = $("#residenceEditor");
		var showObj = self.currentResidenceItem;
		self.currentResidenceItem = 0;
	} else {
		var hideObj = $("#tenantInfoEditor");
		var showObj = $("#tenantInfoDisplay");
	}
	hideObj.css({display:"none"});
	showObj.css({display:"block"});
	
	return self;
}

TenantView.prototype.saveTenantInfo = function() {
	var self = this;
	
	page.inputText.clear();
	
	page.request({
		url: '/tenant/updateTenant',
		request: {
			tenantId: self.tenant.id,
			fname: $('#tenantFname').val(),
			lname: $('#tenantLname').val(),
			phone: $('#tenantPhone').val(),
			email:$('#tenantEmail').val(),
			dob: $('#tenantDOB').val(),
			ssn: $('#tenantSSN').val()
		},
		offset: {x:0,y:0},
		success: function(json) {
			self.tenant = json;
			self.closeEditor("tenant").refreshData();
		}
	});
	
	page.inputText.reset();
	
	return self;
}

TenantView.prototype.saveContact = function() {
	var self = this;
	var contactId = 0;
	
	if (self.currentOperation == 'save') contactId = self.currentContactItem.attr('id'); 
	
	page.inputText.clear();
	
	page.request({
		url: '/tenant/saveContact',
		offset: {x:250,y:0},
		request: {
			contactId: contactId,
			tenantId: self.tenant.id,
			name: $('#emergencyName').val(),
			phone: $('#emergencyPhone').val(),
			relationship: $('#emergencyRelationship').val()
		},
		success: function(json) {
			self.tenant = json;
			self.closeEditor("contact").refreshData();
		}
	});
	
	page.inputText.reset();

	
	return self;
}

TenantView.prototype.saveResidence = function() {
	var self = this;
	var residenceId = 0;
	
	if (self.currentOperation == 'save') residenceId = self.currentResidenceItem.attr('id');
	
	page.inputText.clear();
	
	page.request({
		url: '/tenant/saveResidence',
		request: {
			residenceId: residenceId,
			tenantId: self.tenant.id,
			startdate: $('#residenceStart').val(),
			enddate: $('#residenceEnd').val(),
			street: $('#residenceStreet').val(),
			city: $('#residenceCity').val(),
			state: $('#residenceState').val(),
			landlordname: $('#residenceLandlord').val(),
			landlordphone: $('#residenceLandlordPhone').val(),
			landlordemail: $('#residenceLandlordEmail').val(),
			reason: $('#residenceReasonLeaving').val()				
		},
		offset: {x:-100,y:-50},
		success: function(json) {
			self.tenant = json;
			self.closeEditor("residence").refreshData();
		}
	});
	
	page.inputText.reset();
	
	return self;
}

TenantView.prototype.refreshData = function() {
	var self = this;
	
	$('#personalName').text(self.tenant.firstname + " " + self.tenant.lastname);
	$('#personalEmail').text(self.tenant.email);
	$('#personalPhone').text(self.tenant.phone);
	$('#personalDOB').text(self.tenant.dob);
	if (self.tenant.ssn) {
		$('#personalSSN').text('SSN: '+self.tenant.ssn);
	} else {
		$('#personalSSN').text('');
	}
	
	$('#contactEditor').insertAfter($('#contactButton'));
	$('#residenceEditor').insertAfter($('#residenceButton'));
	
	var html = '';
	$.each(self.tenant.contacts, function(i,val) {
		html += '<p class="item" id="'+val.id+'">';
		html += '<img class="delete" src="/styles/img/ico/delete.png" /><img class="edit" src="/styles/img/ico/pencil.png" />';
		html += val.name+'<br />'+val.phone+'<br />'+val.relationship+'</em></p>';
	});
	$("#contactList").html(html);
	
	html = '';
	$.each(self.tenant.residences, function(i,val) {
		html += '<p class="item" id="'+val.id+'">';
		html += '<img class="delete" src="/styles/img/ico/delete.png" /><img class="edit" src="/styles/img/ico/pencil.png" />';
		html += val.started+' - '+val.ended+'<br />';
		html += val.street+'<br />'+val.city+', '+val.state+'<br />';
		if (val.landlord){html += val.landlord+' (landlord)<br />'}
		if (val.landlordPhone){html += val.landlordPhone+'<br />'}
		if (val.landlordEmail){html += val.landlordEmail+'<br />'}
		if (val.reason){html += '<em>"'+val.reason+'"</em></p>';}
	});
	$("#residenceList").html(html);
	
	self.bindUpdateDelete();
	
	return self;
}

TenantView.prototype.populateTenantEditor = function() {
	var self = this;
	
	$('#tenantFname').val(self.tenant.firstname);
	$('#tenantLname').val(self.tenant.lastname);
	$('#tenantEmail').val(self.tenant.email);
	$('#tenantPhone').val(self.tenant.phone);
	$('#tenantDOB').val(self.tenant.dob);
	$('#tenantSSN').val(self.tenant.ssn);

	page.inputText.reset();
	
	return self;
}

TenantView.prototype.populateContactEditor = function() {
	var self = this;
	
	var thisContactId = self.currentContactItem.attr('id');
	var thisContact = self.getContactById(thisContactId);
	
	$('#emergencyName').val(thisContact.name);
	$('#emergencyPhone').val(thisContact.phone);
	$('#emergencyRelationship').val(thisContact.relationship);
		
	page.inputText.reset();
	
	return self;
}

TenantView.prototype.populateResidenceEditor = function() {
	var self = this;

	var thisResidenceId = self.currentResidenceItem.attr('id');
	var thisResidence = self.getResidenceById(thisResidenceId);
	
	$('#residenceStart').val(thisResidence.started);
	$('#residenceEnd').val(thisResidence.ended);
	$('#residenceStreet').val(thisResidence.street);
	$('#residenceCity').val(thisResidence.city);
	$('#residenceState').val(thisResidence.state);
	$('#residenceLandlord').val(thisResidence.landlord);
	$('#residenceLandlordPhone').val(thisResidence.landlordPhone);
	$('#residenceLandlordEmail').val(thisResidence.landlordEmail);
	$('#residenceReasonLeaving').val(thisResidence.reason);
	
	page.inputText.reset();
	
	return self;
}

TenantView.prototype.getContactById = function(contactId) {
	var self = this;
	
	for (var i in self.tenant.contacts) {
		if (self.tenant.contacts[i].id == contactId) {
			return self.tenant.contacts[i];
		}
	}
	return false;
}

TenantView.prototype.getResidenceById = function(residenceId) {
	var self = this;
	
	for (var i in self.tenant.residences) {
		if (self.tenant.residences[i].id == residenceId) {
			return self.tenant.residences[i];
		}
	}
	return false;
}

