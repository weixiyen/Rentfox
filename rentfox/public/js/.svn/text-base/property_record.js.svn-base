function PropertyRecord(data) {
	var self = this;
	
	self.propertyId = false;
	if(data) self.propertyId = data.propertyId;
	
	self.paidButton = '<a class="mini button paid"><span><img src="/styles/img/ico/accept.png" />Rent Received</span></a>';
	self.clickmenu = '<div class="opts"><div class="clickmenu"><div class="wrap"><label></label><div class="options"><ul><li class="late">Charge Late Fee</li><li class="undo">Undo Payment</li></ul></div></div></div></div>'
	self.months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
	self.initVisit = 1;
	var allPropList = '';
	
	function _setDefaults() {
		var curTime = new Date();
		var m = curTime.getMonth();
		var y = curTime.getFullYear()
		
		if (m === 12) {
			m = 1;
			y = y + 1;
		} else {
			m = m + 1;
		}
		
		self.thisMonth = m;
		self.thisYear = y;
		self.curMonth = m;
		self.curYear = y;
		self.curUnit = 'all';
		self.curStatus = 'all';
		self.curPage = 1;
		self.propList = allPropList;
	}
	
	
	function refreshData() {
		page.request({
			url: '/rent/json',
			request: {
				month: self.curMonth,
				year: self.curYear,
				unit: self.curUnit,
				status: self.curStatus,
				page: self.curPage,
				propList: self.propList
			},
			success: function(json) {
				self.json = json;
			}
		});
		
		var html = '';
		$.each(self.json.rent, function(i,val) {
			
			var s = 'th';
			if(val.due=='1') s = 'st';
			if(val.due=='2') s = 'nd';
			if(val.due=='3') s = 'rd';
			val.due = val.due + s;
			
			
			
			var statusHtml = '';
			if (val.statusType === 1) {
				statusHtml += '<div class="opts"><div class="clickmenu"><div class="wrap"><label></label>';
				statusHtml += '<div class="options"><ul><li class="late">Charge Late Fee</li>';
				statusHtml += '<li class="undo">Undo Payment</li></ul></div></div></div></div>';
				statusHtml += '<span>'+val.status+'</span>';
				
				html += '<tr class="ok">';
			} else if (val.statusType === 2) {
				statusHtml += self.paidButton;
				statusHtml += '<span>'+val.status+'</span>';
				html += '<tr class="overdue">';
			} else if (val.statusType === 3) {
				statusHtml += '<div class="opts"><div class="clickmenu"><div class="wrap"><label></label>';
				statusHtml += '<div class="options"><ul><li class="latePaid">Late Pay Received</li>';
				statusHtml += '<li class="undo">Undo Payment</li></ul></div></div></div></div>';
				statusHtml += '<span>'+val.status+'</span>';
				html += '<tr class="warning">';
			} else if (val.statusType === 4) {
				statusHtml += '<div class="opts"><div class="clickmenu"><div class="wrap"><label></label>';
				statusHtml += '<div class="options"><ul><li class="undo">Undo Payment</li></ul>';
				statusHtml += '</div></div></div></div>';
				html += '<tr class="ok">';
				statusHtml += '<span>'+val.status+'</span>';
			} else if (val.statusType === 5 || val.statusType === 6) {
				statusHtml += self.paidButton;
				statusHtml += '<span>'+val.status+'</span>';
				html += '<tr>';
			}
			
			
			html += '<td class="info"><span></span></td>';
			html += '<td class="property"><span>'+val.propertyName+'</span></td>';
			html += '<td class="unit on" id="'+val.unitId+'"><span>'+val.unitLabel+'</span></td>';
			html += '<td class="rent" id="'+val.leaseId+'"><span>'+val.rent.toFixed(2)+'</span></td>';
			html += '<td class="due"><span>'+val.due+'</span></td>';
			html += '<td class="status">'+statusHtml+'</td></tr>';
		});
		
		if (!html) {
			html += '<tr class="norecords"><td colspan="6"><span>No leases found.</span></td></tr>';
		}
		$('#propertyRecord tbody').html(html);
		
		_pagination();
		
	}
	
	function _hashLoad(hash) {
		if (hash) {
			// sort logic
			var pageNum = page.getHashVal('page');	
			var date = page.getHashVal('date');
			var prop = page.getHashVal('property');
			var unitLabel = page.getHashVal('unit');
			var status = page.getHashVal('status');
			
			if (pageNum && self.curPage !== 1) {
				self.curPage = parseInt(pageNum);
			} else {
				self.curPage = 1;
			}
			
			if (date) {
				var dateHash = date.split('+');
				var month = dateHash[0];
				var year = dateHash[1];
				self.curMonth = month;
				self.curYear = year;
			}
			
			if (prop) {
				if (prop === 'all') {
					self.propList = allPropList;
				} else {
					self.propList = prop;
				}
			} else {
				self.propList = allPropList;
			}
			
			if (unitLabel && unitLabel != 'all') {
				self.curUnit = unitLabel;
			}
			
			if (status) {
				self.curStatus = status;
			}
			
		} else {
			_setDefaults()
		}
		_updateDropDowns();
		refreshData();
		
	}
	
	function _updateDropDowns() {
		var date = page.getHashVal('date');
		var status = page.getHashVal('status');
		var prop = page.getHashVal('property');
		
		if (date) {
			var dateList = date.split('+');
			if (self.thisMonth === dateList[0] && self.thisYear === dateList[1]) {
				$('#dateDropDown option:first').next().attr('selected','selected');
			} else {
				$('#dateDropDown option[value='+date+']').attr('selected','selected');
			}
		} else {
			$('#dateDropDown option:first').next().attr('selected','selected');
		} 
	
		if (!prop || prop === 'all') {
			$('#propertyDropDown option:first').attr('selected', 'selected');
		} else {
			var prop = page.getHashVal('property');
			prop = prop.split('+').join(' ');
			$('#propertyDropDown option[value='+prop+']').attr('selected', 'selected');
		}
		
		if (status) {
			$('#statusDropDown option[value='+status+']').attr('selected','selected');
		} else {
			$('#statusDropDown option:first').attr('selected', 'selected');
		}
		
	}
	
	function init() {

		var clickmenu = new ClickMenu;
		
		if (self.initVisit) {
		
			page.request({
				url: '/property/getPropAndLeaseDates',
				success: function(json) {
					self.propNameDate = json;
				}
			});
			
			var dates = [];
			propDateHtml = '';
			
			if (self.propNameDate.dates.length > 0) {
				var nextMonth = self.curMonth + 1;
				var nextYear = self.curMonth == 12 ? self.curYear + 1 : self.curYear;
				propDateHtml += '<option value="'+nextMonth+'+'+nextYear+'">'+self.months[nextMonth - 1]+' '+nextYear+'</option>';
			}	
			
			$.each(self.propNameDate.dates, function(i,val) {
				var date = val.split('+');
				var m = parseInt(date[0]) - 1;
				var y = parseInt(date[1]);
				m = self.months[m]
				
				propDateHtml += '<option value="'+val+'">'+m+' '+y+'</option>';
			});
			if (!propDateHtml) {
				propDateHtml += '<option value="'+self.curMonth+'+'+self.curYear+'">'+self.months[self.curMonth - 1]+' '+self.curYear+'</option>';
			}
			
			$('#dateDropDown').html(propDateHtml);
			
			$('#dateDropDown option:first').next().attr('selected','selected');
			
			var prop = [];
			var propIdList = [];
			$.each(self.propNameDate.properties, function(i,val) {
				prop[val.name] = val.id;
				propIdList.push(val.id);
			});
			allPropList = propIdList.join(',');
			self.propList = allPropList;
			
			propHtml = '<option id="all" value="All Properties">All Properties</option>';
			for (var i in prop) {
				if (prop.hasOwnProperty(i)) {
					propHtml += '<option id="'+prop[i]+'" value="'+i+'">'+i+'</option>';
				}
			}
			$('#propertyDropDown').html(propHtml);
			self.initVisit = 0;
		}
		
		if (location.href.indexOf('#') == -1) {
			refreshData();
		}
		$.historyInit(_hashLoad);
		
		$('.mini.button.paid').live('click', function(){
			var thisRow = $(this).parent().parent();
			_markPaid(thisRow);
		});
		
		$('tbody > tr > .unit').live('click', function(e){
			var unitId = $(this).attr('id');
			var parentTR = $(this).parent();
			var opts = {
				url:"unitContact/"+unitId,
				callback:function(){
					parentTR.addClass('selected');
				},
				close: function() {
					parentTR.removeClass('selected');
				}
			};
			page.fox.center({x:125,y:-100}).display(opts);
		});
		
		$('#unit').bind('keypress', function(e){
			var code = e.keyCode || e.which;
			if(code == 13) {
				var unit = $('#unit').val()
				
				if (!unit.match(/^[a-zA-Z0-9]+$/i) && unit != "") {
					page.fox.message({
						message:'Unit filter only accepts letters and numbers. \
							Please try again.',
						close: function(){
							parentTR.removeClass('selected');
						}
					});
					return false;
				}
				
				self.curUnit = unit;
				self.curStatus = 'all';
				if (unit) {
					if (self.curPage > 1) {
						self.curPage = 1;
						$.historyLoad(page.makeMultipleHash(['unit', unit],['page', 1]));
					} else {
						$.historyLoad(page.makeHash('unit', unit));
					}
				} else {
					$.historyLoad(page.makeHash('unit', 'all'));
				}
			}
		});
		
		$('tbody > tr > .rent').live('click', function(){
			var unitId = $(this).prev().attr('id');
			var parentTR = $(this).parent();
			var payButton = parentTR.find('.paid');
			var amount = $(this).text();
			var rent = $(this);
			
			var opts = {
				url:"updateRent/"+amount,
				callback:function(){
					parentTR.addClass('selected');
					
					$('#changeRent').bind('click', function() {
					
						var newAmount = $('#rentAmount').val();
						
						if (!newAmount.match(/^(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$/i)) {
							var html = '<div class="error"><span><span>Please enter a valid amount</span></span></div>';
    						$('#rentAmount').before(html);
							return false;
						}
						
						rent.html('<span>'+newAmount+'</span>');
						if (payButton.length) {
							payButton.click();
						} else {
							var unitId = parentTR.children('.unit').attr('id');
							page.request({
								url: '/rent/updateTransaction',
								request: {
									amount: newAmount,
									unitId: unitId,
									forMonth: self.curMonth,
									forYear: self.curYear
								},
								success: function(json) {
								}
							});
						}
					})
					
				},
				close: function() {
					parentTR.removeClass('selected');
				}
			};
			page.fox.center({x:0,y:-50}).display(opts);
		});
		
		$('.pagination .first').bind('click', function() {
			if ($(this).hasClass('disabled')) {
				return false;
			}
			self.curPage = 1;
			$.historyLoad(page.makeHash('page', self.curPage));
		});
		$('.pagination .prev').bind('click', function() {
			if ($(this).hasClass('disabled')) {
				return false;
			}
			var curEnd = self.curPage * 20;
			var curStart = curEnd - 19;
			if (curStart != 1) {
				self.curPage = self.curPage - 1;
			}
			$.historyLoad(page.makeHash('page', self.curPage));
		});
		
		$('.pagination .next').bind('click', function() {
			if ($(this).hasClass('disabled')) {
				return false;
			}
			var totalRecords = self.json.totalRecords;
			var curEnd = self.curPage * 20;
			
			if (curEnd < totalRecords) {
				self.curPage = self.curPage + 1;
			}
			$.historyLoad(page.makeHash('page', self.curPage));
		});
		
		$('.pagination .last').bind('click', function() {
			if ($(this).hasClass('disabled')) {
				return false;
			}
			var totalRecords = self.json.totalRecords;
			self.curPage = Math.ceil(totalRecords/20);
			$.historyLoad(page.makeHash('page', self.curPage));
		});
		
		$('#dateDropDown').change(function() {
			var value = $('#dateDropDown option:selected').attr('value');;
			var date = value.split('+');
			var m = date[0];
			var y = date[1];
			
			self.curMonth = m;
			self.curYear = y;
			
			if (self.curPage > 1) {
				self.curPage = 1;
				$.historyLoad(page.makeMultipleHash(['date', value],['page', 1]));
			} else {
				$.historyLoad(page.makeHash('date', value));
			}
		});
		
		$('#propertyDropDown').change(function() {
			var propSelected = $('#propertyDropDown option:selected');
			
			var propId = propSelected.attr('id');
			
			if (self.curPage > 1) {
				self.curPage = 1;
				$.historyLoad(page.makeMultipleHash(['property', propId],['page', 1]));
			} else {
				$.historyLoad(page.makeHash('property', propId));
			}
		});
		
		$('#statusDropDown').change(function() {
			var status = $('#statusDropDown option:selected').attr('value');
			self.curStatus = status;
			if (self.curPage > 1) {
				self.curPage = 1;
				$.historyLoad(page.makeMultipleHash(['status', status],['page', 1]));
			} else {
				$.historyLoad(page.makeHash('status', status));
			}
		});
		
		_setupOptmenuZIndex();
		_setupClickMenuOptions();
	
	}
	
	function _setupOptmenuZIndex() {
		
		var bIndex = 100;
		$('.opts > .clickmenu').each( function(i){
			$(this).css({'z-index':bIndex-i});
		});
		
	}
	
	function _markPaid(tr, lateFeePaid) {
		var rentCell = tr.children('td.rent')
		var leaseId = rentCell.attr('id');
		var amount = rentCell.text();
		var unitid = tr.children('td.unit').attr('id');
		var tempJson;
		var markLatePaid = 0;
		if (lateFeePaid) {markLatePaid = 1;}
		var due = tr.children('td.due').text();
		due = due.match(/^\d+/);
		
		page.request({
			url: '/rent/markPaid',
			request: {
				unitId: unitid,
				leaseId: leaseId,
				amount: amount,
				due: due,
				forMonth: self.curMonth,
				forYear: self.curYear,
				markLatePaid: markLatePaid
			},
			success: function(json) {
				tempJson = json
			}
		});
		
		var button = tr.children('td.status').children('a.paid');
		var status = tr.children('td.status').children('span');
		tr.removeClass('overdue warning').addClass('ok');
		
		if (lateFeePaid) {
			lateChargeButton = tr.children('td.status').children('.opts').children('.clickmenu').children('.wrap').children('.options').children('ul').children('.latePaid');
			status.text('Rent Received, including '+lateFeePaid+' late fee');
			lateChargeButton.remove();
		} else {
			button.replaceWith(self.clickmenu);
			status.text('Rent Received');
		}
		
		_setupOptmenuZIndex();
		
	}
	
	function _markLate(tr, unitId, lateCharge, date) {

		page.request({
			url: '/rent/markLate',
			request: {
				unitId: unitId,
				latefee: lateCharge,
				forMonth: self.curMonth,
				forYear: self.curYear,
				date: date,
				remind: $('#remindTenant').is(':checked')
			},
			success: function() {
			}
		});
		
		var button = tr.children('td.status').children('.opts');
		var status = tr.children('td.status').children('span');
		var lateChargeButton = button.children('.clickmenu').children('.wrap').children('.options').children('ul').children('.late');
		
		lateChargeButton.replaceWith('<li class="latePaid">Late Pay Received</li>');
		tr.removeClass('ok').addClass('warning');
		
		if (!lateCharge.match(/^\$.+$/i)) {
			lateCharge = parseFloat(lateCharge);
			lateCharge = '$'+lateCharge.toFixed(2);
		}
		
		status.text('Rent Received, still owes '+lateCharge+' late fee');
		
	}
	
	function _markUnpaid(tr, unitId, statusText) {
		
		page.request({
			url: '/rent/markUnpaid',
			request: {
				unitId: unitId,
				forMonth: self.curMonth,
				forYear: self.curYear
			},
			success: function() {
			}
		});
		
		var button = tr.children('td.status').children('.opts');
		var status = tr.children('td.status').children('span');
		
		button.replaceWith(self.paidButton);
		tr.removeClass('ok warning');
		status.text(statusText);
		
	}
	
	function _setupClickMenuOptions() {
			
		$('.clickmenu').live('click', function(e){
			
			var opts = null;
			var parentTR = $(e.target).closest('tr');
			switch($(e.target).attr('class')) {
				case 'late':
					var unitId = parentTR.children('.unit').attr('id');
					var transInfo = unitId + '+' + self.curMonth + '+' + self.curYear; 
					$('.error').remove();
					opts = {
						url:"lateRent/"+transInfo,
						callback:function(){
							
							$('#chargeLateFee').bind('click',function(){
								$('.error').remove();
								var returnFalse = 0;
								if ($('#lateFee').is('input')) {
									var amount = $('#lateFee').val();
									if (!amount.match(/^(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$/i)) {
										var html = '<div class="error"><span><span>Please enter a valid amount</span></span></div>';
	            						$('#lateFee').before(html);
										returnFalse = 1;
									} else {
										if(amount.match(/^[0\.]*$/i)) {
											var html = '<div class="error"><span><span>Cannot charge late fee of 0</span></span></div>';
		            						$('#lateFee').before(html);
											returnFalse = 1;
										}
									}
								} else {
									var amount = $('#lateFee').html();
									if(amount == "$0.00") {
										var html = '<div class="error"><span><span>Cannot charge late fee of 0</span></span></div>';
	            						$('#lateFee').before(html);
										returnFalse = 1;
									}
								}
								
								var date = $('#rentReceivedDate').val();
								if (!date.match(/^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/i)) {
									var html = '<div class="error"><span><span>Date format: mm/dd/yyyy</span></span></div>';
            						$('#rentReceivedDate').before(html);
									returnFalse = 1;
								}
								
								if (returnFalse) {
									return false;
								}
								
								var message = 'You have successfully recorded a late payment.'
								
								
								
								if ($('#remindTenant').is(':checked')) {
									message = 'You have billed <strong>'+amount+'</strong> in late fees to unit 503. \
									This unit will be notified by email of the late fee.'
								}
								page.fox.message({
									title: 'Success!',
									message: message
								});
								_markLate(parentTR, unitId, amount, date);
							});
							$('#remindTenant').bind('click', function(){
								if ($(this).is(':checked')) {
									$('#willRemindText').css({display:'block'});
								} else {
									$('#willRemindText').css({display:'none'});
								}
							});
							parentTR.addClass('selected');
							
						},
						close: function() {
							parentTR.removeClass('selected');
						}
					};
					
					
					break;
				case 'undo':
					parentTR.addClass('selected');
					page.fox.confirm({
						message:'Are you sure you want to revert this payment? \
							It will now be considered unpaid.',
						confirmButtonText: 'Yes, please undo',
						success:function(){
							var newClass = '';
							var newStatus = 'Payment Undo';
							var unitId = parentTR.children('.unit').attr('id');
							_markUnpaid(parentTR, unitId, newStatus, newClass);
						},
						close: function(){
							parentTR.removeClass('selected');
						},
						offset: {x:200,y:0}
					});
					break;
				case 'latePaid':
					var amount = parentTR.children('.status').text().match(/\$[^\s]*/);
					_markPaid(parentTR, amount);
					break;
				case 'remind':
					
					opts = {
						url:"remindTenant",
						callback:function(){
							page.inputText.reset();
							parentTR.addClass('selected');
						},
						close: function() {
							parentTR.removeClass('selected');
						}
					}
					break;
				default: break;
			}
			if (opts) { page.fox.center({x:100,y:-100}).display(opts) };
	
		});
		
	}
	
	function _pagination() {
		
		var totalRecords = self.json.totalRecords;
		var totalPages = Math.ceil(totalRecords/20)
		var curEnd = self.curPage * 20;
		var curStart = curEnd - 19;
		if (curStart > totalRecords) curStart = 1;
		if (curEnd > totalRecords) curEnd = totalRecords;
		if (totalRecords === 0) curStart = 0;
		$('.pagination .pages').html(curStart+'-'+curEnd+' of '+totalRecords);
		
		if (curEnd < totalRecords) {
			$('.pagination .next').removeClass('disabled');
			$('.pagination .last').removeClass('disabled');
		}
		
		if (self.curPage == totalPages) {
			$('.pagination .next').addClass('disabled');
			$('.pagination .last').addClass('disabled');
		}
		if (self.curPage == 1) {
			$('.pagination .first').addClass('disabled');
			$('.pagination .prev').addClass('disabled');
		}
		
		if (self.curPage != 1 && self.curPage <= totalPages) {
			$('.pagination .first').removeClass('disabled');
			$('.pagination .prev').removeClass('disabled');
		}
			
	}
	_setDefaults();
	init();
	
	return self;
}
