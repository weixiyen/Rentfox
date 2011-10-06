function UnitView(data) {
	var self = this;
	
	self.propertyId = false;
	self.currentTenant = null;
	if(data.propertyId) { self.propertyId = data.propertyId };
	if(data.unitId) { self.unitId = data.unitId };
	
	self.init();
	
	return self;
}

UnitView.prototype.init = function() {
	var self = this;

	page.request({
		url: '/unit/json/'+self.unitId,
		type: 'GET',
		async: false,
		success: function(json) {
			self.unit = json;
		}
	});

	self.prop = new Property({propertyId:self.propertyId});
	self.property = self.prop.getProperty();
	
	if (self.property.type === 'multi') {
		self.unitscroller = new UnitScroller({
			property:self.property, 
			clickUnit:function(units, unit){
				var thisUnitId = unit.attr('id');
				var thisUnitLabel = unit.text();
				var thisUnit = self.getUnit(thisUnitId);
				location.href = thisUnitId;
			}
		});
		self.unitscroller.initListItems({
			eachUnit: function(unit){
				var thisUnit = self.getUnit(unit.attr('id'));
				if (!thisUnit.floorPlan.id) {
					unit.addClass('noFloorPlan');
				} else if (thisUnit.id == self.unitId) {
					unit.addClass('on');
				}
			}
		});
		if (self.unitId) {
			self.unitscroller.scrollToUnit(self.unitId);
		}
	}
	
	
	self.picViewer = new PicViewer('#unitPicViewer');
	
	self.moduleOn("pulse").navSetup().refreshUnit().pulseSetup().unitSetup().tenantSetup().leaseSetup().transactionSetup();
	
	
	
	return self;
}

UnitView.prototype.refreshUnit = function() {
	var self = this;
	
	$('#leaseModule .view, #cancelLeaseEditor, #leaseStatus, #tenants, #noTenants').css({display:'none'});
	$('#leaseStatus').removeClass('red,orange');
	if (self.unit.lease) {
		
		$("#leaseDisplayMode,#cancelLeaseEditor").css({display:'block'});
		
		// display lease info
		$('#displayLeaseTitle').text(self.unit.lease.status);
		$('#displayContractStart').text(self.unit.lease.start);
		$('#displayContractEnd').text(self.unit.lease.up);
		$('#displayMoveout').html('<a id="setMoveOutDate" class="link">'+self.unit.lease.out+'</a>');
		$('#displayRentDue').html('$' + self.unit.lease.rent + ' due every ' + dayStemmer(self.unit.lease.due.toString()));
		
		if ( parseInt(self.unit.lease.due) > 28 ) {
			$('#displayRentDue').append('<div>Months with less than ' + self.unit.lease.due + ' days will have a due date on the last day of the month.</div>');
		}
		var lateRecurrence = parseInt(self.unit.lease.interval) === 1 ? 'each day late' : 'only once';
		$('#displayLateRule').html('$' + self.unit.lease.lateCharge + ' charged ' + lateRecurrence + ' <span>' + self.unit.lease.gracePeriod + ' days grace period</span>');
		
		var depositOnHold = self.unit.lease.depositPaid ? self.unit.lease.deposit : '0 <span>$' + self.unit.lease.deposit + ' owed.</span>';
		$('#displayDeposit').html('$'+depositOnHold);
		
		
		
		// fill editor
		if ( self.unit.lease.up === 'No date set' ) {
			$('#lease-m2m').attr('checked', true);
			$('#contractDates').hide();
		} else {
			$('#lease-m2m').attr('checked', false);
			$('#contractDates').show();
		}
		$('#lease-start').val(self.unit.lease.editStart);
		$('#lease-end').val(self.unit.lease.editUp);
		self.unit.lease.out == 'No date set' ? $('#m2mafter').attr('checked', 'checked') : $('#m2mafter').removeAttr('checked');
		$('#lease-rent').val(self.unit.lease.rent);
		$('#lease-rent-due option[value="' + self.unit.lease.due + '"]').attr('selected', 'selected');
		$('#lease-deposit').val(self.unit.lease.deposit);
		$('#lease-depositPaid').attr('checked', self.unit.lease.depositPaid);
		$('#lease-lateFee').val(self.unit.lease.lateCharge);
		$('#lease-lateFee-interval option[value="' + self.unit.lease.interval + '"]').attr('selected', 'selected');
		$('#lease-grace').val(self.unit.lease.gracePeriod);
		
		
		var html = [],
			tenants = self.unit.lease.tenants ? self.unit.lease.tenants : [],
			len = tenants.length;

		for (var i=0; i<len; i++){
			var id=tenants[i].id;
			html.push( ['<li id="',id,'"><a class="link" href="/tenant/view/', id,'">', tenants[i].name, '</a> <img src="/styles/img/ico/x.png" alt="Remove tenant from lease" />','</li>'].join('') );	
		}
		
		
		$('#leaseTenants').html( html.join('') );
		
	} else {
		$('#leaseEditMode').css({display:'block'});
	}
	
	if (!self.unit.currentLease) {		
		$('#leaseStatus').addClass('red').css({display:'block'}).html('<a class="mini button" id="createLeaseButton"><span><img src="/styles/img/ico/lease_add.png" />Create new lease</span></a>Vacant Unit');
		$('#noTenants').css({display:'block'});
	} else {
		if (self.unit.tenants) {
			self.renderTenants();
		} else {
			$('#noTenants').css({display:'block'});
			$('#leaseStatus').addClass('orange').css({display:'block'}).html('<a class="mini button" id="addTenantButton"><span><img src="/styles/img/ico/user_add.png" />Add Tenant</span></a>There are no tenants currently in the unit.');
		}
	}
	
	var html = [ '<option id="resetUnit">Select leases</option>' ],
		leases = self.unit.leases,
		len = leases.length;
	for (i=0; i<len; i++) {
		var id = leases[i].id,
			display = leases[i].display;
		if (self.unit.lease && id === self.unit.lease.id) {
			display = self.unit.lease.start + ' - ' + self.unit.lease.out;
		} 
		html.push( ['<option id="',id,'">',display,'</option>'].join('') );
	}
	$('#allLeasesDropdown').html( html.join() )
		.children('option[id="'+self.unit.lease.id+'"]').attr('selected','selected');
	
	$('#allLeasesDropdown').unbind('change').bind('change', function(){
		var leaseid = $('#allLeasesDropdown option:selected').attr('id');
		if (leaseid === 'resetUnit') {
			page.request({
				url: '/unit/json/'+self.unitId,
				type: 'GET',
				async: false,
				success: function(json) {
					self.unit = json;
					self.refreshUnit();
					self.clearForm();
				}
			});
		} else {
			page.request({
				url: '/lease/json/'+leaseid,
				type: 'GET',
				async: false,
				success: function(json) {
					self.unit.lease = json;
					self.refreshUnit();
				}
			});
		}
	});
	
	return self;
}

UnitView.prototype.renderTenants = function() {
	var self = this;
	var json = self.unit.tenants;
	var html = '';
	var tenantList = '';
	for (var i = 0; i < json.length ;i++) {
		html += '<div class="person" id="'+json[i].id+'">\
			<div class="pic">\
				<div class="thumb user"><span class="frame"><img src="" /></span></div>\
			</div>\
			<dl>\
				<dt><a href="/tenant/view/'+json[i].id+'">'+json[i].name+'</a></dt>\
				<dd>'+json[i].email+'</dd>\
				<dd>'+json[i].phone+'</dd>\
			</dl>\
		</div>';
		tenantList += '<li alt="'+json[i].id+'">'+json[i].name+'</li>';
	}
	$('#people').html(html);
	$('#tenantList').html(tenantList);
	$('#tenants').css({display:'block'});
	self.tenantOn($('#tenantList li:first').addClass('on').attr('alt'));
		
}

UnitView.prototype.getUnit = function(unitId) {
	var self = this;
	
	for (var i in self.property.units) {
		if (self.property.units[i].id == unitId) {
			return self.property.units[i];
		}
	}
	return false;
}

UnitView.prototype.navSetup = function() {
	var self = this;
	
	$("#pulseNav").bind("click",function(){
		self.moduleOn("pulse");
	});
	$("#unitNav").bind("click",function(){
		self.moduleOn("unit");
	});
	$("#leaseNav").bind("click",function(){
		self.moduleOn("lease");
	});
	$("#transactionsNav").bind("click",function(){
		self.moduleOn("transactions");
	});
	
	return self;
}

UnitView.prototype.pulseSetup = function() {
	var self = this;
		optlist = $('#unit-pulse-options > li'),
		unitid = self.unitId;
	
	self.pulse = new Pulse('#unit-pulse');
	
	page.request({
		url: '/pulse/get',
		request: {
			unitid: unitid
		},
		success: function(json) {
			self.pulse.refresh(json);
		}
	});
	
	optlist.bind('click',function(){
		var element = $(this),
			type = element.attr('rel'),
			label = element.text();
		
		optlist.removeClass('on');
		element.addClass('on');
		
		page.request({
			url: '/pulse/get',
			request: {
				type: type,
				unitid: unitid
			},
			success: function(json) {
				$('#unit-pulse-label').text(label);
				self.pulse.refresh(json);
			}
		});
		
	});
	
	return self;
}

UnitView.prototype.unitSetup = function(){
	var self = this,
		unitid = self.unitId,
		picViewer = self.picViewer,
		errorlist = {errors:[]},
		floorplanInfo = self.unit.floorplan;
	
	floorplanHtml = '';
	if (floorplanInfo) {
		floorplanHtml += '<dd>'+floorplanInfo.sqft+' sqft, '+floorplanInfo.beds+' bed / '+floorplanInfo.baths+' bath</dd>';
	}
	
	$('#unitNav dl').append(floorplanHtml);
	
	// unit photo uploader
	page.request({
		url: '/unit/photos',
		type: 'GET',
		request: {
			unitid: unitid
		},
		success: function(json) {
			picViewer.setup( json );
		}
	});
	
	$('#unitPicViewer').filedrop({
		url: '/unit/uploadPhoto',
		data: {
			unitid: unitid
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
	
	new AjaxUpload('#unitPicViewer-upload', {
		action: '/unit/uploadPhoto',
		onSubmit: function(file, extension){
			page.ajaxStart();
		},
		data: {
			unitid: unitid
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
	
	$('#edit-floorplan-link').bind('click',function(){
		location.href = '/property/setup/'+self.propertyId+'/'+unitid
	});
	
	$('#floorplan-img').bind('click', function(){
		var img_src = $(this).attr('src').replace('-thumb','');
		page.previewModal.show(img_src);
	});
	
	return self;
}
UnitView.prototype.leaseSetup = function() {
	var self = this;
	
	$('#createLeaseButton').live('click',function(){
		$("#leaseNav").click();
		$('#leaseDisplayMode').hide();
		$('#leaseEditMode').show();
		self.clearForm();
	});
	
	$('#createLease').bind('click',function(){
		var viewing_lease = self.unit.lease;
		$('#leaseDisplayMode').hide();
		$('#leaseEditMode').show();
		self.unit.lease = 0;
		self.clearForm();
		$('#cancelLeaseEditor').bind('mousedown',function(){
			self.unit.lease = viewing_lease;
			self.refreshUnit();
			$('#cancelLeaseEditor').unbind('mousedown').trigger('click');
		});
	});
	
	$('#addTenant,#addTenantButton,#addTenantToLeaseButton').live('click',function(){
		location.href='/tenant/add/'+self.unit.currentLease.id;
	});
	
	$('#editLease').bind('click',function(){
		self.showLeaseEditor();	
	});
	$('#saveLease').bind('click',function(){	
		
		var url = !self.unit.lease ? '/lease/create' : '/lease/save';
		page.request({
			url: url,
			request: {
				unitId: self.unitId,
				leaseId: self.unit.lease.id,
				m2m: $('#lease-m2m').attr('checked'),
				startdate: $('#lease-start').val(),
				enddate: $('#lease-end').val(),
				m2m_after: $('#m2mafter').attr('checked'),
				prev_paid: $('#prevPaid').attr('checked'),
				rent: $('#lease-rent').val(),
				due: $('#lease-rent-due option:selected').val(),
				deposit: $('#lease-deposit').val(),
				deposit_paid: $('#lease-depositPaid').attr('checked'),
				latecharge: $('#lease-lateFee').val(),
				interval: $('#lease-lateFee-interval option:selected').val(),
				graceperiod: $('#lease-grace').val(),
			},
			offset: {x:200,y:0},
			success: function(json) {
				if (self.unit.lease.id) {
					self.unit.lease = json;
				} else {
					self.unit = json;
				}
				self.hideLeaseEditor().refreshUnit();
			}
		});
		
	});
	$('#cancelLeaseEditor').bind('click',function(){
		self.hideLeaseEditor();	
	});
	$('#lease-m2m').bind('click', function(){
		if ($(this).is(':checked')) {
			$('#contractDates').slideUp('fast');
		} else {
			$('#contractDates').slideDown('fast');
		}
	});
	
	$('#setMoveOutDate').live('click',function(){
		page.fox.center().display({
			url: 'endLease',
			callback: function(){
				new Datepicker('#moveOutDateInput', 'days');
				$('#moveOutDateInput').mask('99/99/9999');
				$('#endLeaseButton').bind('click',function(){
					page.request({
						url: '/lease/endLease',
						request: {
							leaseid: self.unit.lease.id,
							unitId: self.unitId,
							moveOutDate: $('#moveOutDateInput').val()
						},
						success: function(json){
							self.unit.lease = json;
							self.refreshUnit();
						}
					})
				});
			}
		});
	});
	
	$('#deleteLease').bind('click',function(){
		page.fox.confirm({
			message:'Are you sure you want to delete this lease?  You will lose access to this lease forever.',
			confirmButtonText: 'Yes, please delete',
			success: function(){
				page.request({
					url: '/lease/delete',
					request: {
						leaseid: self.unit.lease.id,
						unitId: self.unitId
					},
					success: function(json){
						location.reload();
					}
				});
			}
		});
	});
	
	$('#lease-start').blur(function() {
		if (!self.unit.lease) {
			var leaseStart = $('#lease-start').val();
			leaseStart = leaseStart.split('/');
			var m = leaseStart[0];
			var d = leaseStart[1];
			var y = leaseStart[2];
			
			var curDate = new Date();
			var curM = curDate.getMonth() + 1;
			var curY = curDate.getFullYear();
			
			var startDate = new Date(parseInt(y),parseInt(m),parseInt(d));
			var dateDiff = curDate.getTime() - startDate.getTime();
			var one_day = 1000*60*60*24;
			dateDiff = dateDiff/one_day;
			
			$('#prevPaidBox').remove();
			if ((m < curM &&  y == curY) || y <= curY && dateDiff < 400) {
				var prevPaidHtml = '<div id="prevPaidBox"><input type="checkbox" id="prevPaid" checked="yes" />';
				prevPaidHtml += '<label for="prevPaid">all previous months paid</label></div>';
				$('#leaseCheckboxWrap').append(prevPaidHtml);			
			}
		}
	});
	
	$('#leaseTenants > li > img').live('click',function(e){
		
		var prev_lease = self.unit.lease,
			lease_id = $(this).parent().attr('id');
		
		page.fox.confirm({
			message:'Are you sure you want to remove this tenant from the lease?',
			confirmButtonText: 'Yes, please remove',
			success: function(){
				
				page.request({
					url: '/tenant/removeFromLease',
					request: {
						tenantId: lease_id,
						leaseId: self.unit.lease.id,
						unitId: self.unitId
					},
					success: function(json){
						var tenants = json.lease.tenants;
						self.unit = json;
						self.unit.lease = prev_lease;
						self.unit.lease.tenants = tenants;
						self.refreshUnit();
					}
				});
			}
			
		});
		
	});
	
	$('#lease-start, #lease-end').mask('99/99/9999');
	
	return self;
}

UnitView.prototype.transactionSetup = function() {
	var self = this;
	$('#billResidentsButton').bind('click',function(){
		self.showBillResidents();	
	});
	$('#payResidentsButton').bind('click',function(){
		self.showPayResidents();	
	});
	$('#transactionsModule .action .cancel').bind('click',function(){
		self.hideBillPayForms();	
	});
	new Datepicker('#billDueDate');
	var monthList = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	
	if (self.unit.transactions.length) {
	
		var latestTrans = self.unit.transactions[0];
		var latestHtml = '';
		
		latestHtml += '<dd>'+latestTrans.amount;
		latestTrans.income == '1' ? latestHtml += ' paid on ' : latestHtml += ' returned on ';
		latestHtml += monthList[latestTrans.month - 1] + ' ' + latestTrans.day + ', '+latestTrans.year+'</dd>';
		
		$('#transactionsNav dl').append(latestHtml);
	} else {
		$('#transactionsNav dl').append('<dd>No transaction records</dd>');
	}
	
	_updateTransactions(self.unit.transactions);
	
	var transOpt = $('#transaction-options > li');
	transOpt.bind('click', function() {
		var el = $(this),
			type = el.attr('type'),
			label = el.text();
		
		transOpt.removeClass('on');
		el.addClass('on');
		
		page.request({
			url: '/reports/get',
			request: {
				type: type,
				unitId: self.unitId
			},
			success: function(json) {
				$('#transaction-label').text(label);
				_updateTransactions(json);
			}
		});
		
	});
	
	function _updateTransactions(json) {
		var transHtml = '';
		$.each(json, function(i, val) {
			val.income == '1' ? transHtml += '<div class="row plus">' : transHtml += '<div class="row minus">';
			transHtml += '<div class="date">'+monthList[val.month - 1] + ' ' + val.day + ', '+val.year+'</div>';
			transHtml += '<div class="type">'+val.type+'</div>';
			transHtml += '<div class="amount">'+val.amount+'</div></div>';
		});
		if (!transHtml) {
			transHtml += '<div class="nothing">No transaction records</div>';
		}
		$('#transactionsModule #transactionList').html(transHtml);
	}
	
	return self;
}

UnitView.prototype.showBillResidents = function() {
	var self = this;
	$('#transactionsModule .action, #transactionsDisplay').css({display:'none'});
	$('#billResidents').css({display:'block'});
	$('#billMessage').unbind().elastic();
	return self;
}

UnitView.prototype.showPayResidents = function() {
	var self = this;
	$('#transactionsModule .action, #transactionsDisplay').css({display:'none'});
	$('#payResidents').css({display:'block'});
	$('#payMessage').unbind().elastic();
	return self;
}

UnitView.prototype.hideBillPayForms = function() {
	var self = this;
	$('#transactionsModule .action').css({display:'none'});
	$('#transactionsDisplay').css({display:'block'});
	return self;
}

UnitView.prototype.showLeaseEditor = function() {
	var self = this;
	$('#prevPaidBox').remove();
	$("#leaseModule .view").css({display:"none"});
	$('#leaseEditMode').css({display:'block'});
	return self;
}
UnitView.prototype.hideLeaseEditor = function() {
	var self = this;
	$("#leaseModule .view").css({display:"none"});
	$('#leaseDisplayMode').css({display:'block'});
	return self;
}

UnitView.prototype.moduleOn = function(module) {
	var self = this;
	
	$("#unitViewNav > li").removeClass("on");
	$(".module").css({display:"none"});
	
	switch(module){
		case "unit":
			$("#unitNav").addClass("on");
			$("#unitModule").css({display:"block"});
			break;
		case "lease":
			$("#leaseNav").addClass("on");
			$("#leaseModule").css({display:"block"});
			break;
		case "transactions":
			$("#transactionsNav").addClass("on");
			$("#transactionsModule").css({display:"block"});
			break;
		default:
			$("#pulseNav").addClass("on");
			$("#pulseModule").css({display:"block"});
	}
	
	return self;
}


UnitView.prototype.tenantSetup = function() {
	var self = this;
	
	$("#tenantList > li").live("click",function(){
		$("#tenantList > li").removeClass("on");
		$(this).addClass("on");
		
		var person = $(this).attr("alt");
		self.tenantOn(person);
	});
	
	$('#editTenant').bind('click',function(){
		location.href = '/tenant/view/'+self.currentTenant;
	});
	
	$('#removeTenant').bind('click',function(){
		
		page.fox.confirm({
			message:'Are you sure you want to remove this tenant from the lease?',
			confirmButtonText: 'Yes, please remove',
			success: function(){
				
				page.request({
					url: '/tenant/removeFromLease',
					request: {
						tenantId: self.currentTenant,
						leaseId: self.unit.lease.id,
						unitId: self.unitId
					},
					success: function(json){
						self.unit = json;
						self.refreshUnit();
					}
				});
			}
			
		});
		
	});
	
	return self;
}

UnitView.prototype.tenantOn = function(tenant){
	var self = this;
	
	$("#tenants .person").css({display:"none"});
	$("#" + tenant).css({display:"block"});
	self.currentTenant = tenant;
	
	return self;
}

UnitView.prototype.clearForm = function() {
	$('#leaseEditMode input').val('');
}