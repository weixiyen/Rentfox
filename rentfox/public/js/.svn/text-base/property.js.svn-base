function Property(data) 
{	
	var self = this;
	if (data) self.propertyId = data.propertyId;
}

Property.prototype.getProperty = function() {
	var self = this;
	var json = false;
	$.ajax({
		async: false,
		dataType: 'json',
		type: 'GET',
		url: '/property/json/'+self.propertyId,
		cache: false,
		success: function(data) {
			json = data;
		}
	});
	return json;
}

Property.prototype.create = function(data) {
	var self = this;
	var json = false;
	
	$.ajax({
		async: true,
		dataType: 'json',
		type: 'POST',
		url: '/property/create',
		data: data.request,
		beforeSend: function() {
			page.ajaxStart();
		},
		success: function(json) {
			page.ajaxStop();
			data.success(json);
		}
	});
}

Property.prototype.deleteProperty = function(data) {
	var self = this;
	var json = false;
	
	
	
	var request = {
		propertyId: data.propertyId
		}
	
	$.ajax({
		async: true,
		dataType: 'json',
		type: 'POST',
		data: request,
		url: '/property/delete',
		beforeSend: function() {
			page.ajaxStart();
		},
		success: function(json) {
			page.ajaxStop();
			data.success(json);
		}
	});
}

Property.prototype.save = function(data) {
	var self = this;
	var json = false;
	$.ajax({
		async: true,
		dataType: 'json',
		type: 'POST',
		data: data.request,
		url: '/property/save',
		cache: false,
		beforeSend: function() {
			page.ajaxStart();
		},
		success: function(json) {
			page.ajaxStop();
			data.success(json);
		}
	});
}

Property.prototype.createFloorPlan = function(data) {
	var self = this;
	var json = false;
	var request = {
		propertyid: data.propertyId,
		unitid: data.unitId,
		name: data.input.name,
		sqft: data.input.sqft,
		beds: data.input.beds,
		baths: data.input.baths,
		description: data.input.description
		}
	
	$.ajax({
		async: true,
		dataType: 'json',
		type: 'POST',
		data: request,
		url: '/floorplan/create',
		cache: false,
		beforeSend: function() {
			page.ajaxStart();
		},
		success: function(json) {
			page.ajaxStop();
			data.success(json);
		}
	});
}

Property.prototype.saveFloorPlan = function(data) {
	var self = this;
	var json = false;
	var request = {
		name: data.input.name,
		sqft: data.input.sqft,
		beds: data.input.beds,
		baths: data.input.baths,
		description: data.input.description
		}
	
	$.ajax({
		async: true,
		dataType: 'json',
		type: 'POST',
		data: request,
		url: '/floorplan/save/'+data.floorplanId,
		cache: false,
		beforeSend: function() {
			page.ajaxStart();
		},
		success: function(json) {
			page.ajaxStop();
			data.success(json);
		}
	});
}


Property.prototype.deleteFloorPlan = function(data) {
	var self = this;
	var json = false;
	
	var request = {
		propertyId: data.propertyId,
		floorPlanId: data.floorPlanId
		}
	
	$.ajax({
		async: true,
		dataType: 'json',
		type: 'POST',
		data: request,
		url: '/floorplan/delete',
		cache: false,
		beforeSend: function() {
			page.ajaxStart();
		},
		success: function(json) {
			page.ajaxStop();
			data.success(json);
		}
	});
}

Property.prototype.assignFloorPlansToUnits = function(data) {
	var self = this;
	var json = false;
	var request = {
		units: data.units,
		propertyid: data.propertyId
		}
	
	$.ajax({
		async: true,
		dataType: 'json',
		type: 'POST',
		data: request,
		url: '/floorplan/assignMultiple/'+data.floorplanId,
		cache: false,
		beforeSend: function() {
			page.ajaxStart();
		},
		success: function(json) {
			page.ajaxStop();
			data.success(json);
		}
	});
}

Property.prototype.addUnits = function(data) {
	var self = this;
	var json = false;
	var request = {
		propertyId: self.propertyId,
		units: data.input
		}
	$.ajax({
		async: true,
		type: 'POST',
		dataType: 'json',
		url: '/unit/create',
		cache: false,
		data: request,
		beforeSend: function() {
			page.ajaxStart();
		},
		success: function(json) {
			page.ajaxStop();
			data.success(json);
		}
	});
}