function TenantAdd(data) {
	var self = this;
	self.leaseId = data ? data.leaseId : 0;
	self.init();
	return self;
}

TenantAdd.prototype.init = function() {
	var self = this;
	
	self.initCreateForm();
	
	return self;
}

TenantAdd.prototype.initCreateForm = function() {
	var self = this;
	
	$("#createForm input").bind('keypress', function(e){
		var code = e.keyCode || e.which;
		if(code == 13) { 
			$('#continueCreateTenant').click();
		}
	});
	
	$('#continueCreateTenant').bind('click',function(){
		page.request({
			url: '/tenant/exists',
			request: {
				fname: $('#fname').val(),
				lname: $('#lname').val(),
				email: $('#email').val(),
				phone: $('#phone').val(),
				dob: '',
				ssn: '',
				leaseId: self.leaseId
			},
			offset: {x:-270,y:0},
			success: function(json) {
				if(json.match) {
					self.showMatches(json.tenants);
				} else {
					location.href = '/tenant/view/'+json.id;
				}
			}
		});
	});
	
	$("#phone").mask("(999) 999-9999");
	
	return self;
}

TenantAdd.prototype.showMatches = function(tenants) {
	
	var self = this;
	
	$('#noMatchButton').bind('click',function(){
		page.request({
			url: '/tenant/create',
			request: {
				fname: $('#fname').val(),
				lname: $('#lname').val(),
				email: $('#email').val(),
				phone: '',
				dob: '',
				ssn: '',
				leaseId: self.leaseId
			},
			success: function(json) {
				location.href = '/tenant/view/'+json.id;
			}
		});
	});
	
	$.each(tenants, function(i,tenant){
		var belongsToUnit = "Does not belong to any unit.";
		if (tenant.unit) belongsToUnit = tenant.unit.display;
		
		var html = [];
		html[0] = '<div class="tenant"><a class="button existingTenant" id="' + tenant.id + '"><span>This one</span></a><div class="person"><div class="pic"><div class="thumb"><span class="frame">';
		if (tenant.photo) {
			html[1] = '<img src="' + tenant.photo + '" />';
		}
		html[2] = '</span></div></div><dl><dt>' + tenant.name + '</dt><dd>' + tenant.email + '</dd><dd>' + belongsToUnit + '</dd></dl></div></div>';
		$('#tenantMatchList').append(html.join(''));
		
		page.thumbnail.init();
	});
	
	$('.existingTenant').bind('click',function(){
		var tenantId = $(this).attr('id');
		page.request({
			url: '/tenant/addLease',
			request: {
				tenantId: tenantId,
				leaseId: self.leaseId
			},
			success: function(json) {
				location.href = '/tenant/view/'+json.tenantId;
			}
		});
	});
	
	$("#createForm").css({display:'none'});
	$("#tenantMatches").css({display:'block'});
	
	return self;
}