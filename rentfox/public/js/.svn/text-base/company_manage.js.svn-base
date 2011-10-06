function CompanyManage() {

	var self = this;
	
	var htmlDict = {
		editName: '<a class="mini button cancel" id="cancelName"><span>Cancel</span></a>\
			<a class="mini button save" id="saveName"><span>Save</span></a>\
			<input type="text" id="update-name">',
		editStreet: '<a class="mini button cancel" id="cancelStreet"><span>Cancel</span></a>\
			<a class="mini button save" id="saveStreet"><span>Save</span></a>\
			<input type="text"  id="update-street">',
		editLocation: '<a class="mini button cancel" id="cancelLocation"><span>Cancel</span></a>\
			<a class="mini button save" id="saveLocation"><span>Save</span></a>\
			<input type="text" id="update-city">,\
			<input type="text" class="mini" id="update-state">,\
			<input type="text" class="small" id="update-zip">',
		editEmail: '<a class="mini button cancel" id="cancelEmail"><span>Cancel</span></a>\
			<a class="mini button save" id="saveEmail"><span>Save</span></a>\
			<input type="text" id="update-email">',
		editPhone: '<a class="mini button cancel" id="cancelPhone"><span>Cancel</span></a>\
			<a class="mini button save" id="savePhone"><span>Save</span></a>\
			<input type="text" id="update-phone">',
	}
	

	function _init(){
		page.request({
			url: '/company/getInfo',
			type: 'GET',
			async: false,
			success: function(json) {
				self.co = json;
				self.refreshCompany();
				
			}
		});
		$('#companyManage').addClass('superuser');
		$('.item > span').live('click',function(){
			var thisId = this.id;
			$(this).parent().html(htmlDict[thisId]);
			$('#update-name').val(self.co.name);
			$('#update-email').val(self.co.email);
			$('#update-phone').val(self.co.phone);
			$("#update-phone").mask("(999) 999-9999");
			$('#update-street').val(self.co.street);
			$('#update-city').val(self.co.city);
			$('#update-state').val(self.co.state);
			$('#update-zip').val(self.co.zip);
		});
		$('a.cancel').live('click',function(){
			var newId = this.id.replace('cancel','edit');
			var display = this.id.replace('cancel','');
			var label = self.co[display.toLowerCase()] || '[enter '+display.toLowerCase()+']';
			var html = '<span id="' + newId + '">' + label + '</span>';
			$(this).parent().html(html);
		});
		$('.mini.button.save').live('click',function(){
			self.saveCompany(this.id);
		});
		$('#switchSuperuser').bind('click',function(){
			if (!self.companyUsers) {
				_getCompanyUsers();
			}
			if (self.companyUsers.length) {
				self.switchSuperuser();
			} else {
				self.declineSuperuserSwitch();
			}
		});
		$('#deleteAccount').bind('click',function(){
			
			
			page.fox.confirm({
				message:'We are very sorry to hear that you want to delete your company. \
					Are you absolutely sure you want to do this?',
				confirmButtonText: 'Yes, please delete',
				success:function(){
				
				
					page.fox.center().display({
			            url:"deleteCompany",
			            callback:function(){
			            	$('#password').focus();
			            	$('#password').bind('keypress', function(e){
								var code = e.keyCode || e.which;
								if(code == 13) { 
									$('#deleteCompanyButton').click();
								}
							});
			                $('#deleteCompanyButton').bind('click',function(){
			                    page.request({
									url: '/company/delete',
									request: {
										password: $('#password').val()
									},
									success: function(json) {
										location.href = '/signout';
									}
								});
			                });
			            }
			        }); // end password prompt
			        
			        
				}
			}); // end confirm
			
			
		});
		
	}
	
	function _getCompanyUsers(){
		page.request({
			url: '/company/getCompanyActiveUsers',
			type: 'GET',
			async: false,
			success: function(json) {
				self.companyUsers = json;
			}
		});
	}
	
	_init();
}

CompanyManage.prototype.declineSuperuserSwitch = function() {
	page.fox.center().message({
		title: 'Oops!',
		message: 'It appears that you are the only activated user in this company. \
			You cannot give access to somebody else unless there is another activated user.<br /><br /> \
			You may create new users from the <a href="/users">users page</a>.<br /><br />\
			Keep in mind they will need to be activated \
			before you can transfer superuser priviledges.'
	});
}

CompanyManage.prototype.switchSuperuser = function() {
	var self = this;
	page.fox.confirm({
		message:'Once you give away superuser priviledges to someone else, you will no longer have control over this page.<br /><br /> \
			Are you absolutely sure you want to do this?',
		confirmButtonText: 'Yes, continue',
		success:function(){
			
			page.fox.center().display({
	            url:"switchSuperuser",
	            callback:function(){
	            	
	            	var html = [];
	            	$.each(self.companyUsers, function(i,manager){
	            		html[i] = '<option id="'+manager.id+'">'+manager.name+'</option>';	
	            	});
	            	$('#userlist').html(html.join(''));
	            	
	                $('#switchSuperuserButton').bind('click',function(){
	                    page.request({
							url: '/company/switchSuperuser',
							request: {
								managerId: $('#userlist option:selected').attr('id')
							},
							success: function(json) {
								location.href = '/company'
							}
						});
	                });

	            }
	        });
			
		}
	});
}


CompanyManage.prototype.saveCompany = function(what) {
	var self = this,
		name = self.co.name,
		email = self.co.email !== null ? self.co.email : '',
		phone = self.co.phone !== null ? self.co.phone : '',
		street = self.co.street !== null ? self.co.street : '',
		city = self.co.city !== null ? self.co.city : '',
		state = self.co.state !== null ? self.co.state : '',
		zip = self.co.zip !== null ? self.co.zip : '';
	
	switch(what) {
		case 'saveName':
			name = $('#update-name').val();
			break;
		case 'saveEmail':
			email = $('#update-email').val();
			break;
		case 'savePhone':
			phone = $('#update-phone').val();
			break;
		case 'saveStreet':
			street = $('#update-street').val();
			break;
		case 'saveLocation':
			city = $('#update-city').val();
			state = $('#update-state').val();
			zip = $('#update-zip').val();
			break;
	}

	page.request({
		url: '/company/save',
		request: {
			name: name,
			street: street,
			city: city,
			state: state,
			zip: zip,
			email: email,
			phone: phone
		},
		success: function(json) {
			self.co = json;
			var newId = what.replace('save','edit');
			var display = what.replace('save','');
			var label = self.co[display.toLowerCase()] || '[enter '+display.toLowerCase()+']';
			var html = '<span id="' + newId + '">' + label + '</span>';
			$('#'+what).parent().html(html);
			$('#company-name').text(self.co.name);

			self.refreshCompany();
		}
	});
	
	return self;
}

CompanyManage.prototype.refreshCompany = function() {
	var self = this;

	$('#editName').text(self.co.name);
	$('#editEmail').text(self.co.email || '[enter email]');
	$('#editPhone').text(self.co.phone || '[enter phone]');
	$('#editStreet').text(self.co.street || '[enter street]');
	$('#editLocation').text(self.co.location || '[enter city, state, zip]');
	
	return self;
}