function AccountManage() {

	var self = this;
	
	
	var htmlDict = {
		editName: '<a class="mini button cancel" id="cancelName"><span>Cancel</span></a>\
			<a class="mini button save" id="saveName"><span>Save</span></a>\
			<input type="text" class="small" id="update-fname">\
			<input type="text" class="small" id="update-lname">',
		editEmail: '<a class="mini button cancel" id="cancelEmail"><span>Cancel</span></a>\
			<a class="mini button save" id="saveEmail"><span>Save</span></a>\
			<input type="text" id="update-email">',
		editPhone: '<a class="mini button cancel" id="cancelPhone"><span>Cancel</span></a>\
			<a class="mini button save" id="savePhone"><span>Save</span></a>\
			<input type="text" id="update-phone">'
	}
	
	function _init(){
		page.request({
			url: '/account/getLoggedInUser',
			type: 'GET',
			async: false,
			success: function(json) {
				self.me = json;
				self.refreshUser();
			}
		});
		$('#displayUsername').text(self.me.username);
		$('.item > span').live('click',function(){
			var thisId = this.id;
			$(this).parent().html(htmlDict[thisId]);
			$('#update-fname').val(self.me.first_name);
			$('#update-lname').val(self.me.last_name);
			$('#update-email').val(self.me.email);
			$('#update-phone').val(self.me.phone);
			$("#update-phone").mask("(999) 999-9999");
		});
		$('a.cancel').live('click',function(){
			var newId = this.id.replace('cancel','edit');
			var display = this.id.replace('cancel','');
			var label = self.me[display.toLowerCase()] || '[enter '+display.toLowerCase()+']';
			var html = '<span id="' + newId + '">' + label + '</span>';
			$(this).parent().html(html);
		});
		$('.mini.button.save').live('click',function(){
			self.saveUser(this.id);
		});
		$('#pwLink').bind('click',function(){
			page.fox.center().display({
	            url:"resetPassword",
	            callback:function(){
	            	
	                $('#resetPasswordButton').bind('click',function(){
	                    page.request({
							url: '/account/resetPassword',
							request: {
								username: self.me.username,
								old_password: $('#oldPassword').val(),
								new_password: $('#newPassword').val(),
								password_secret: $('#passwordSecret').val()
							},
							success: function(json) {
								page.fox.center().message({
									title: 'Success!',
									message: 'You have reset your password.'
								});
							}
						});
	                });
	                $('#oldPassword').focus();
	                $('#oldPassword, #newPassword').bind('keypress', function(e){
						var code = e.keyCode || e.which;
						if(code == 13) { 
							$('#resetPasswordButton').click();
						}
					});
	            }
	        });
		});
		
		$('#deleteAccount').bind('click',function(){
		
			if (self.me.created_by == 'rentfox') {
				page.fox.center().message({
					title: "NOOOooOOoooooo...!",
					message: 'Dear '+self.me.first_name+',<br /><br />\
						We are sorry to hear that you want to delete your account.<br /><br /> \
						Since you are the superuser and owner of this account, \
						you must either give superuser access to another person within your company\
						or delete the company account.<br /><br />\
						You may do so from the <a href="/company">company page</a>.'
				});
			} else {
				_promptDelete();
			}
			
		});
	}
	
	function _promptDelete() {
		page.fox.confirm({
			message:'We are very sorry to hear that you want to delete your account. \
				Are you absolutely sure you want to do this?',
			confirmButtonText: 'Yes, please delete',
			success:function(){
			
				page.fox.center().display({
		            url:"deleteUser",
		            callback:function(){
		            	$('#password').focus();
		            	$('#password').bind('keypress', function(e){
							var code = e.keyCode || e.which;
							if(code == 13) { 
								$('#deleteUserButton').click();
							}
						});
		                $('#deleteUserButton').bind('click',function(){
		                    page.request({
								url: '/account/delete',
								request: {
									password: $('#password').val()
								},
								success: function(json) {
									location.href = '/signout';
								}
							});
		                });
		            }
		        });
		        
			}
		});
	}
	
	_init();
}

AccountManage.prototype.saveUser = function(what) {
	var self = this,	
		fname = self.me.first_name,
		lname = self.me.last_name,
		email = self.me.email,
		phone = self.me.phone !== null ? self.me.phone : '';
	
	switch(what) {
		case 'saveName':
			fname = $('#update-fname').val(); 
			lname = $('#update-lname').val(); 
			break;
		case 'saveEmail':
			email = $('#update-email').val();
			break;
		case 'savePhone':
			phone = $('#update-phone').val();
			break;
	}

	page.request({
		url: '/account/save',
		request: {
			userId: self.me.id,
			fname: fname,
			lname: lname,
			email: email,
			phone: phone
		},
		success: function(json) {
			self.me = json;

			var newId = what.replace('save','edit');
			var display = what.replace('save','');
			var label = self.me[display.toLowerCase()] || '[enter '+display.toLowerCase()+']';
			var html = '<span id="' + newId + '">' + label + '</span>';
			$('#'+what).parent().html(html);

			self.refreshUser();
		}
	});
	
	return self;
}

AccountManage.prototype.refreshUser = function() {
	var self = this;
	
	var hasName = self.me.name.replace(' ','');
	var firstName = self.me.first_name || self.me.last_name || 'No-Name';
	
	$('#editName').text(hasName ? self.me.name : '[enter name]');
	$('#editEmail').text(self.me.email || '[enter email]');
	$('#editPhone').text(self.me.phone || '[enter phone]');
	$('#managerFirstName').text(firstName);
	
	if (self.me.type == 'admin') {
		$('#manages').text(firstName + ' has access to all properties.');
	} else {
		if (self.me.properties.length) {
			var html = '';
			$.each(self.me.properties,function(i,property){
				html += '<a href="/property/view/'+ property.id +'">'+property.name+'</a>';
			});
			$('#myProperties').html(html);
			$('#manages').text(firstName + ' manages:');
		} else {
			$('#manages').text(firstName + ' has no access to any properties.');
		}
	}
	
	
	return self;
}