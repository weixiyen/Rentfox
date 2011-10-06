function Contacts()
{
	
	var self = this;
	
	function _init(){
		var clickmenu = new ClickMenu;
		$('#description').elastic();
		_resizeList();
		$(window).bind('resize',function(){
			_resizeList();
		});
		
		page.request({
			url: '/contacts/json/all',
			type: 'GET',
			async: false,
			success: function(json){
				self.json = json;
				
				
			}
		});
		self.initEditBox();
		
		if (self.json.contacts.length === 0) {
			page.fox.message({
				title: "What's this page for?",
				message: 'Add contacts that your company \
						needs access to, such as handimen, plumbers,\
						utility companies, locksmiths, etc.  \
						<br /><br />\
						I\'ll hide myself after you add a contact.\
						<br /><br />\
						<em>Note: This page is not for storing tenant information. \
						If you are looking for tenants, use the search box or add tenants to leases.</em>'
			});
		}
		
	}
	
	function _resizeList() {
		$('#typeList').height($(window).height()-150);
	}
	
	_init();
}

Contacts.prototype.initEditBox = function() {
	var self = this,
		save_mode = 'create',
		new_category = 0,
		new_category_label = '',
		type_selected = 'allTypes';
	
	refreshData();
	selectType();
	
	// bind new contact button
	$('#createNewContact').bind('click',function(){
		page.fox.dock();
		save_mode = 'create';
		showForm('create');
		clearFields();
	});
	
	$('#contactBox .close').bind('click',function(){
		hideForm();
	});
	
	$('#saveContactButton').bind('click',function(){
		
		var url = save_mode === 'create' ? '/contacts/create' : '/contacts/update';
		if (new_category) {
			new_category_label = $('#new-type-label').val();
		}
		page.request({
			url: url,
			request: {
				contactId: save_mode === 'edit' ? self.contactId : '',
				type: new_category ? $('#new-type-label').val() : $('#type option:selected').val(),
				newtype: new_category,
				label: $('#name').val(),
				address: $('#street').val(),
				city: $('#city').val(),
				state: $('#state').val(),
				zip: $('#zip').val(),
				phone: $('#phone').val(),
				email: $('#email').val(),
				description: $('#description').val()
			},
			success: function(json) {
				self.json = json;
				hideForm();	
				refreshData();
				clearFields();
				selectType();
			}
		});
		
		
	});
	
	$('#open-create-type').bind('click',function(){
		showTypeCreator();
	});
	$('#close-create-type').bind('click',function(){
		hideTypeCreator();
	});
	
	$("#phone").mask("(999) 999-9999");
	
	function refreshData() {
		var html = '';
		$.each(self.json.contacts, function(i,val) {
			
			// address
			var addr = [];
			if (val.city) addr.push(val.city);
			if (val.state) addr.push(val.state);
			if (val.zip) addr.push(val.zip);
			addr = addr.join(', ').replace(' ','');
			if (addr.length > 0) addr += '<br />';
			
			html += '<div class="item" id="'+val.id+'">';
			html += '<img class="delete" src="/styles/img/ico/delete.png" />';
			html += '<img class="edit" src="/styles/img/ico/pencil.png" /><p>';
			html += '<strong>'+val.label+'</strong>';
			if (val.phone.length > 0) html += val.phone+'<br />';
			if (val.email.length > 0) html += val.email+'<br />';
			if (val.street.length > 0) html += val.street+'<br />';
			html += addr;
			if (val.description.length > 0) html += '<div class="contactDesc">'+val.description+'</div>'
			html += '</p></div>';
		});
		$("#contactDisplay").html(html);
		showTypeList();
	}
	
	function showForm(type) {
		$('#formHeader').text(type === 'create' ? 'Create contact' : 'Edit contact');
		
		if (self.json.types.length > 0) {
			hideTypeCreator();
			$('#close-create-type').show();
		} else {
			showTypeCreator();
			$('#close-create-type').hide();
		}
		
		$('#contactDisplay').hide();
		$('#contactBox').show();
	}
	
	function hideForm() {
		$('#contactDisplay').show();
		$('#contactBox').hide();
	}
	
	function showTypeCreator() {
		$('#typeSelect').hide();
		$('#typeCreate').show();
		new_category = 1;
	}
	function hideTypeCreator() {
		$('#typeSelect').show();
		$('#typeCreate').hide();
		new_category = 0;
		showTypeSelection();
	}
	function showTypeSelection() {
		var html = '';
		$.each(self.json.types, function(i,val) {
			html += '<option value="'+val.id+'">'+val.label+'</option>';
		});
		$("#type").html(html);
	}
	function clearFields() {
		$('#contactBox input, #contactBox textarea').val('');
	}
	
	function getContactById(contactId) {
		var obj = self.json.contacts;
		for (var key in obj) {
			if (obj[key].id === contactId) {
				return obj[key];
			}
		}
		return false;
	}
	
	$("#contactDisplay .edit").live('click',function(){
		showForm('edit')
		var contactId = $(this).parent().attr('id');
		self.contactId = contactId;
		var contact = getContactById(contactId);
		save_mode = 'edit';
		
		$("#name").val(contact.label);
		$("#phone").val(contact.phone);
		$("#email").val(contact.email);
		$("#street").val(contact.street);
		$("#city").val(contact.city);
		$("#state").val(contact.state);
		$("#zip").val(contact.zip);
		$("#description").val(contact.description);
		$("#type option[value='"+contact.typeid+"']").attr("selected","selected");
	})
	
	
	
	$("#contactDisplay .delete").live('click',function(){
		var contactId = $(this).parent().attr('id');
		page.fox.confirm({
			message:'Are you sure you want to delete this contact?',
			confirmButtonText: 'Yes, please delete',
			success:function(){
				page.request({
					url: '/contacts/delete',
					request: {
						contactId: contactId
					},
					success: function(json) {
						self.json = json;
						refreshData();
					}
				});
			}
		});
		
	});
	
	function showTypeList() {
		var html = '';
		html += '<li class="typeLabel" id="allTypes">All Contacts</li>';

		$.each(self.json.types, function(i,val) {
			html += '<li class="typeLabel" id="'+val.id+'">'+val.label+'</li>';
		});
		$('#typeWrap').html(html);
	};
	
	$('.typeLabel').live('click', function() {
		page.fox.dock();
		type_selected = $(this).attr('id');
		selectType();
		hideForm();
	});
	
	function selectType() {
		$('#typeList li').removeClass('on');
		
		var htmltype = ''
		htmltype += '<div class="opts"><div class="clickmenu"><div class="wrap">';
		htmltype += '<label></label><div class="options"><ul><li class="rename" id="typeRename">Rename</li>';
		htmltype += '<li class="delete" id="typeDelete">Delete</li></ul></div></div></div></div>';
		
		if (new_category == 1) {
			$.each(self.json.types, function(i,val) {
				if (val.label == new_category_label) {
					type_selected = val.id;
				}
			});
			new_category = 0;
			new_category_label = '';
			selectType();
		} else if(type_selected == 'allTypes') {
			refreshData();
			$('#allTypes').addClass('on');
		} else {
			$('#typeList .opts').hide();
			$('#'+type_selected).addClass('on');
			$('#'+type_selected).prepend(htmltype);
			$('#'+type_selected+' .opts').show();
			
			var html = '';
			$.each(self.json.contacts, function(i,val) {
				if (val.typeid == type_selected) {
					
					// address
					var addr = [];
					if (val.city) addr.push(val.city);
					if (val.state) addr.push(val.state);
					if (val.zip) addr.push(val.zip);
					addr = addr.join(', ').replace(' ','');
					if (addr.length > 0) addr += '<br />';
					
					html += '<div class="item" id="'+val.id+'">';
					html += '<img class="delete" src="/styles/img/ico/delete.png" />';
					html += '<img class="edit" src="/styles/img/ico/pencil.png" /><p>';
					html += '<strong>'+val.label+'</strong>';
					if (val.phone.length > 0) html += val.phone+'<br />';
					if (val.email.length > 0) html += val.email+'<br />';
					if (val.street.length > 0) html += val.street+'<br />';
					html += addr;
					if (val.description.length > 0) html += '<div class="contactDesc">'+val.description+'</div>'
					html += '</p></div>';
				}
			});
			$("#contactDisplay").html(html);
			
		}
	};
	
	$('#typeRename').live('click', function() {
		var type_id = $(this).parent().closest('li').attr('id');
		page.fox.center().display({
	            url:"renameType",
	            callback:function(){
	            	selectType();
	                $('#renameTypeButton').bind('click',function(){
	                    page.request({
							url: '/contacts/renameType',
							request: {
								typeId: type_id,
								typeLabel: $('#newName').val()
							},
							success: function(json) {
								self.json = json;
								refreshData();
								selectType();
							}
						});
	                });
	                $('#newName').focus();
	                $('#newName').bind('keypress', function(e){
						var code = e.keyCode || e.which;
						if(code == 13) { 
							$('#renameTypeButton').click();
						}
					});
	            }
	        });
	});
	
	$('#typeDelete').live('click', function() {
		var type_id = $(this).parent().closest('li').attr('id');
		page.fox.confirm({
			message:'Are you sure you want to delete this category?',
			confirmButtonText: 'Yes, please delete',
			success:function(){
				page.request({
					url: '/contacts/deleteType',
					request: {
						typeId: type_id
					},
					success: function(json) {
						self.json = json;
						type_selected = 'allTypes';
						selectType();
					}
				});
			}
		});
	});


	
	
	return self;
}