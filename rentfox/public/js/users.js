function Users(data) {
    var self = this;
    
    self.propertyId = false;
    page.nav.hideSubmenu();
    if(data && data.propertyId) {
    	self.propertyId = data.propertyId;
    	page.nav.showSubmenu();
    }
    
    self.init();
        
    return self;
}

Users.prototype.init = function() {
    var self = this;
    
    var url = self.propertyId ? '/user/json/'+self.propertyId : '/user/json';
    page.request({
		url: url,
		type: 'GET',
		async: false,
		offset: {x:0,y:0},
		success: function(json) {
			self.json = json;
			if (self.json.users.length === 1) {
				page.fox.message({
					title: "What's this page for?",
					message: 'Give access to other users \
							so that they can help \
							you manage your properties on Rentfox.\
							<br /><br />\
							<em>Note: This page is not for storing tenant information. \
							If you are looking for tenants, use the search box or add tenants to leases.</em>'
				});
			}
		}
	});
    self.initUserCreate().initUserList().initUserEdit();
    
    $('#activation-link').live('click',function(){
    	this.select();
    });
    
    return self;
};

Users.prototype.initUserCreate = function() {
    var self = this;
    
    $("#create-phone").mask("(999) 999-9999");
    
    var displayCSS = self.json.me.type == 'admin' ? 'block' : 'none';
	$('#createUserRoleSection,#updateUserRoleSection').css({display:displayCSS});
    $('#createNewUser').unbind().bind('click',function(){
		page.fox.dock();
		$('.userbox').css({display:'none'});
		$('#createBox input').val('');
		$('#create-admin').attr('checked',false);
		$('#createBox').css({display:'block'});
		$('#userList li').removeClass('on');
		$('#create-fname').focus();

    });
    
    $('#closeCreateBox, #cancelCreateBox').unbind().bind('click',function(){
        $('.userbox').css({display:'none'});
    });
    
    $('#createUserButton').unbind().bind('click',function(){
    	var isAdmin = $('#create-admin').attr('checked') ? 1 : 0;
    	page.request({
			url: '/user/create',
			request: {
				propertyId: self.propertyId,
				fname: $('#create-fname').val(),
				lname: $('#create-lname').val(),
				email: $('#create-email').val(),
				phone: $('#create-phone').val(),
				created_by: self.json.me.id,
				admin: isAdmin
			},
			offset: {x:200,y:0},
			success: function(json) {
				self.currentUserId = json.currentUserId;
				self.displayUser().init();
				if (!isAdmin) {
					$('#addProperties').click();
				}
			}
		});
        
    });
    
    $('#createBox input').unbind().bind('keypress',function(e){
    	var code = e.keyCode || e.which;
		if(code == 13) { 
			$('#createUserButton').click();
		}
    });
    
    return self;
};

Users.prototype.initUserEdit = function() {
    var self = this;
    
    $('#closeDisplayBox').unbind().bind('click',function(){
        $('.userbox').css({display:'none'});
        $('#userList li').removeClass('on');
    });
    
    $("#update-phone").mask("(999) 999-9999");
    
    $('#editBasicInfo').unbind().bind('click',function(){
		var checked = self.currentUser.type == 'admin' ? true: false;
		$('#update-fname').val(self.currentUser.first_name);
		$('#update-lname').val(self.currentUser.last_name);
		$('#update-email').val(self.currentUser.email);
		$('#update-phone').val(self.currentUser.phone);
		$('#update-admin').attr('checked', checked);
		$('#editorName').text(self.currentUser.first_name + ' ' + self.currentUser.last_name);
		$('.userbox').css({display:'none'});
		$('#editBox').css({display:'block'});
    });

    $('#cancelEditBox').unbind().bind('click',function(){
        $('.userbox').css({display:'none'});
        $('#displayBox').css({display:'block'});
    });

    $('#saveUserButton').unbind().bind('click',function(){
    	var isAdmin = $('#update-admin').attr('checked') ? 1 : 0;
    	page.request({
			url: '/user/save',
			request: {
				userId: self.currentUserId,
				fname: $('#update-fname').val(),
				lname: $('#update-lname').val(),
				email: $('#update-email').val(),
				phone: $('#update-phone').val(),
				propertyId: self.propertyId,
				admin: isAdmin
			},
			offset: {x:200,y:0},
			success: function(json) {
				self.json = json;
				self.generateUserList(json.users).displayUser();
			}
		});
        
    });
    
    $('#editBox input').unbind().bind('keypress',function(e){
    	var code = e.keyCode || e.which;
		if(code == 13) { 
			$('#saveUserButton').click();
		}
    });
    
    $('#propertyList li input').live('click',function(){
        if($(this).is(':checked')) {
            $(this).parent().addClass('on');
        } else {
            $(this).parent().removeClass('on');
        }
    });
    
    $('#resendActivationEmail').unbind().bind('click',function(){
    	page.request({
			url: '/user/resendActivationLink',
			request: {
				userId: self.currentUser.id
			},
			success: function(json) {
				page.fox.center().message({
					title: 'Success!',
					message: 'You have re-sent an activation link to '+self.currentUser.email+'.'
				});
			}
		});
    });
    
    /*
    $('#resetPassword').unbind().bind('click',function(){
    	var person = self.currentUser.first_name+' '+self.currentUser.last_name;
        page.fox.center().display({
            url:"resetPassword",
            callback:function(){
                $('#resetPasswordButton').bind('click',function(){
                    page.request({
						url: '/user/resetPassword',
						request: {
							username: self.currentUser.username,
							password: $('#newPassword').val()
						},
						success: function(json) {
							page.fox.center().message({
								title: 'Success!',
								message: 'You have reset the password for '+person+'.'
							});
						}
					});
                });
            }
        });
    });
    */
    
    $('#deleteUser').unbind().bind('click',function(){
    	var person = self.currentUser.first_name+' '+self.currentUser.last_name;
        page.fox.confirm({
			message:'Are you sure you want to delete '+person+'?',
			confirmButtonText: 'Yes, please delete',
			success:function(){
				page.request({
					url: '/user/delete',
					request: {
						userId: self.currentUserId,
						propertyId: self.propertyId
					},
					success: function(json) {
						$('.userbox').css({display:'none'});
						self.json = json;
						self.generateUserList(json.users);
						page.fox.center().message({
							title: 'Success!',
							message: 'You have deleted '+person+'.'
						});
					}
				});
			}
		});
    });
    
    $('#addProperties').unbind().bind('click',function(){
        page.fox.center({x:0,y:-100}).display({
            url:"addPropertiesToUser.html",
            callback:function(){
                var html = '';
                var total = 0;
                $.each(self.json.properties, function(i,property) {
                	if ($.inArray(property.id, self.currentUserPropertyIds) === -1) {
                		html += '<li><label><input type="checkbox" id="assign_'+property.id+'" /> '+property.name+'</label></li>';
                		total++;
                	}
                });
                $('#assignPropertyList').html(html);
                if (!total) {
                	$('#assignPropertyList').replaceWith('<p>There are currently no properties to add to this user.</p>\
                		<p>There could be a couple reasons for this.  Perhaps you have already added all properties for this user\
                		or you do not have access to the properties you are trying to add.</p>');
                	$('#addPropertiesButton,#addPropertiesCancel').remove();
                }
                
                $('#addPropertiesButton').unbind().bind('click',function(){
                	var propList = [];
                	$('#assignPropertyList input:checked').each(function(){
                		var id = this.id;
                		propList.push(id.replace('assign_',''));
                	});
                    page.request({
                    	url: '/user/assignProperties',
                    	request: {
							userId : self.currentUserId,
							otherUserId : self.currentUser.id,
							propertyId : self.propertyId,
							propList : propList.join(',')
						},
						success: function(json) {
							self.displayUser().generateUserList(json.users);
						}
                    });
                });
                
            }
        });
    });
    
    $('#removeProperties').unbind().bind('click',function(){
        page.fox.center({x:0,y:-100}).display({
            url:"removePropertiesFromUser.html",
            callback:function(){
                var html = '';
                var total = 0;
                if (!self.myPropertyIds) {
	                self.myPropertyIds = [];
	                $.each(self.json.properties, function(i, property) {
	                	self.myPropertyIds.push(property.id);
	                });
                }
                $.each(self.currentUserProperties, function(i,property) {
                	if ($.inArray(property.id, self.myPropertyIds) >= 0) {
	            		html += '<li><label><input type="checkbox" id="unassign_'+property.id+'" /> '+property.name+'</label></li>';
	            		total++;
            		}
                });
                $('#removePropertyList').html(html);
                if (!total) {
                	$('#removePropertyList').replaceWith('<p>There are no properties to remove from this user.</p>\
                		<p>Keep in mind that you may only remove properties that you have access to yourself.');
                	$('#removePropertiesButton,#removePropertiesCancel').remove();
                }
                
                $('#removePropertiesButton').unbind().bind('click',function(){
                	var propList = [];
                	$('#removePropertyList input:checked').each(function(){
                		var id = this.id;
                		propList.push(id.replace('unassign_',''));
                	});
                    page.request({
                    	url: '/user/unassignProperties',
                    	request: {
							userId : self.currentUserId,
							otherUserId : self.currentUser.id,
							propertyId : self.propertyId,
							propList : propList.join(',')
						},
						success: function(json) {
							self.displayUser().generateUserList(json.users);
						}
                    });
                });
            }
        });
    });
    
    return self;
};


Users.prototype.initUserList = function() {
    var self = this;
	
	self.generateUserList(self.json.users).generatePropertyDropDown(self.json.properties);
	
    self.resizeUserList();
    $(window).resize(function(){
        self.resizeUserList();
    });
    
    $('#userList li:not(.on)').live('click',function(){
    	self.currentUserId = this.id;
        $('#userList li').removeClass('on');
        $(this).addClass('on');
        self.displayUser();
    });
    
    $('#propertyList').unbind().bind('change',function(){
    	var pid = $('option:selected', this).attr('id');
    	var isChanged = pid == self.propertyId ? false : true;
    	if (isChanged) {
    		var url = pid ? '/users/'+pid : '/users';
    		location.href = url;
    	} 
    });
    
    return self;
};

Users.prototype.displayUser = function(){
	var self = this;
	
	
	page.request({
		url: '/user/getManager',
		request: {
			userId: self.currentUserId
		},
		offset: {x:0,y:0},
		success: function(json) {
			
			$('.display-name').text(json.first_name + ' ' + json.last_name);
			$('.display-email').text(json.email);
			$('.display-fname').text(json.first_name);
			$('.display-phone').text(json.phone);
			
			if (!json.username) {
				$('#activation').css({display:'block'});
				$('#activation-link').val(json.activation_link);
				$('#activation-last-sent').text(json.activation_sent + ' ago');
			} else {
				$('#activation').css({display:'none'});
			}
			
			self.currentUserProperties = json.properties;
			self.currentUserPropertyIds = [];
			
			if (json.type == 'admin') {
				$('#userPropertyList').text("Admins have access to all properties.");
			} else if (json.properties.length) {
				var propHtml = '<ul>';
				$.each(json.properties,function(i,property){
					propHtml += '<li>' + property.name + '</li>';
					self.currentUserPropertyIds.push(property.id);
				});
				propHtml += '</ul>';
				$('#userPropertyList').html(propHtml);
			} else {
				$('#userPropertyList').text(json.first_name + " has no access to any properties.");
			}
			
			var menuitems = [];
			var isParent = self.json.me.type == 'admin' && json.type == 'manager' || self.json.me.id == json.created_by || self.json.me.created_by == 'rentfox' || self.json.me.id == json.id;
			if (isParent) {
				menuitems.push('editBasicInfo')
				menuitems.push('deleteUser');
				if (json.type == 'manager') {
					menuitems.push('addProperties')
					menuitems.push('removeProperties');
				} 
			}
			self.generateMoremenu(menuitems);

			$('.userbox').css({display:'none'});
		    $('#displayBox').css({display:'block'});
		    self.currentUser = json;
		    
    		var display = self.json.me.id === self.currentUser.id ? 'none' : 'block';
    		$('#updateUserRoleSection').css({display:display});
    		
    		var total_properties = json.properties.length,
    			total_properties_display = total_properties === 1 ? '1 property' : total_properties + ' properties'
			$('#stats-user-total-properties').text(total_properties_display);
			$('#stats-user-created').text(json.created);
		}
	});
	
	
	
    return self;
};

Users.prototype.generateMoremenu = function(items) {
		$('#userMoremenu li').css({display:'none'});
		if (items.length) {
			$('#userMoremenu').css({display:'block'});
			$.each(items,function(i,item){
				$('#'+item).css({display:'block'});
			});
		} else {
			$('#userMoremenu').css({display:'none'});
		}
	}

Users.prototype.resizeUserList = function() {
    var self = this;
    $('#userList').height($(window).height()-150);
    return self;
};

Users.prototype.generateUserList = function(users) {
	var self = this;
	var html=[];
	$.each(users, function(i,user) {
		var name = user.type == 'admin' ? '[A] ' + user.name : user.name;
		var css = user.id == self.currentUserId ? 'on' : '';
		html[i] = '<li id="' + user.id + '" class="'+css+'">' + name + '</li>';
	});
	$('#userList > ul').html(html.join(''));
	return self;
};

Users.prototype.generatePropertyDropDown = function(properties) {
	var self = this;
	
	var html = '<option>All Properties</option>'
	
	if (properties.length) {
		$.each(properties, function(i,property) {
			var selected = property.id == self.propertyId ? 'selected="selected"' : '';
			html += '<option id="' + property.id + '" '+selected+'>' + property.name + '</option>';
		});
	}
	
	$('#propertyList').html(html);
	
	return self;
};