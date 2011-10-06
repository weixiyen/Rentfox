function Unit() 
{	
	var self = this;
}
Unit.prototype.getUnit = function(input) {
	var self = this;
	var json = false;
	$.ajax({
		async: false,
		dataType: 'json',
		type: 'POST',
		url: '/unit/json/'+input.unitId,
		cache: false,
		success: function(data) {
			json = data;
		}
	});
	return json;
}


Unit.prototype.addFloorPlanToUnit = function(data) {
	var self = this;
	var json = false;
	
	var request = {
		unitid: data.unitId,
		propertyid: data.propertyId
		}
	
	$.ajax({
		async: true,
		dataType: 'json',
		type: 'POST',
		data: request,
		url: '/floorplan/assign/'+data.floorplanId,
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

Unit.prototype.deleteUnit = function(data) {
	var self = this;
	var json = false;
	$.ajax({
		async: true,
		type: 'POST',
		dataType: 'json',
		url: '/unit/delete',
		cache: false,
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

Unit.prototype.rename = function(data) {
	var self = this;
	var json = false;
	$.ajax({
		async: true,
		type: 'POST',
		dataType: 'json',
		url: '/unit/rename',
		cache: false,
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