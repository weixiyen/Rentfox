function ReportsTransactions() {

	var settings = {};
	self.months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	self.income = 0;
	self.expense = 0;
	self.initLoad = 1;
	self.periodClick = 0;
	
	function _setDefaults() {
			
		settings.curMonth = 'all';
		settings.curYear = 'all';
		settings.curType = 'all';
		settings.curSearch = 'all';
		settings.curFilter = 'all';
		settings.curDatePeriod = 'all';
		settings.curPage = 1;
		settings.curProperty = 'all';
		settings.updateBalance = 0;
	}
	
	function _init() {
		$('#incomeDate, #expenseDate').mask('99/99/9999');
		
		// cancel out of add transactions
		$('#sidepanel .panel a.close').bind('click',function(){
			_showPanel('default');
			_clearForm();
		});
		
		// tabs for adding expenses/transactions
		$('#editTransactionPanel .tabs > li:not(.on)').live('click', function(e) {
			$('#editTransactionPanel .tabs > li').removeClass('on');
			$(this).addClass('on');
			$('#editTransactionPanel .form').removeClass('on');
			$('#'+$(this).attr('id').replace('Tab','')).addClass('on');
		});
		
		$('#editIncomeTab').bind('click',function(){
			var is_rent =  $('#incomeType > option:selected').val() === 'Rent';
			$('.income-record-view').hide();
			if (is_rent) {
				$('#record-rent').show();
			} else {
				$('#record-non-rent').show();
			}
		});
		
		// transaction row click
		$('#transactionList tbody > tr:not(.selected):not(.noRecords)').live('click',function(){
			_clearForm();
			var type = $(this).attr('class');
			_showPanel('editTransaction', 'edit', type);
			$(this).addClass('selected');
			self.transToggle = 0;
			self.rentRow = 0;
			self.transId = $(this).attr('id');
			
			$('#reportsTransactions .sidepanel .delete').show();
			
			if (type === 'Income') {
				var incomeType = $(this).children('.type').text();
				if (incomeType === 'Rent') {
					$('#incomeType').hide()
					self.rentRow = 1; 
				} else {
					$('#incomeType').show()
					$('#incomeType option:contains('+incomeType+')').attr('selected','selected');
				}
				
				$('#incomeFrom').val($(this).children('.who').text());
				$('#incomeAmount').val($(this).children('.amount').text().replace('+$',''));
				
				var incomeDate = $(this).children('.date').attr('id');
				incomeDate = incomeDate.split('-')
				var incomeY = incomeDate[0]
				var incomeM = incomeDate[1]
				var incomeD = incomeDate[2]
				if (incomeM.length == 1) incomeM = '0'+incomeM;
				if (incomeD.length == 1) incomeD = '0'+incomeD;
				$('#incomeDate').val(incomeM+'/'+incomeD+'/'+incomeY);
				
			} else {
				var expenseType = $(this).children('.type').text();
				
				$('#expenseType option:contains('+expenseType+')').attr('selected','selected');
				
				$('#expensePay').val($(this).children('.who').text());
				$('#expenseAmount').val($(this).children('.amount').text().replace('-$',''));
				
				var expenseDate = $(this).children('.date').attr('id');
				expenseDate = expenseDate.split('-')
				var expenseY = expenseDate[0]
				var expenseM = expenseDate[1]
				var expenseD = expenseDate[2]
				if (expenseM.length == 1) expenseM = '0'+expenseM;
				if (expenseD.length == 1) expenseD = '0'+expenseD;
				$('#expenseDate').val(expenseM+'/'+expenseD+'/'+expenseY);
			}
		});
		
		$('#reportsTransactions .sidepanel .delete').bind('click', function() {
			page.fox.confirm({
				message:'Are you sure you want to delete this transaction?',
				confirmButtonText: 'Yes, please delete',
				success:function(){
					page.request({
						url: '/reports/delete',
						request: {
							transId: self.transId
						},
						success: function(json) {
							_showPanel('default');
							settings.updateBalance = 1;
							_refreshData();
							_clearForm();
						}
					});
				}
			});
			
		})
		
		$('#expenseTemplate').bind('onchange', function() {
			// change code
		});
		
		page.request({
			url: '/property/getPropAndTransDates',
			success: function(json) {
				self.initInfo = json;
			}
		});
		
		propDateHtml = '';
		propDateHtml += '<option value="all">Month</option>';
		
		$.each(self.initInfo.dates, function(i,val) {
			var date = val.split('+');
			var m = parseInt(date[0]) - 1;
			var y = parseInt(date[1]);
			m = self.months[m]
			
			propDateHtml += '<option value="'+val+'">'+m+' '+y+'</option>';
		});
		
		$('#dateDropDown').html(propDateHtml);
		
		$('#dateDropDown').change(function() {
			var value = $('#dateDropDown option:selected').attr('value');
			
			if (settings.curPage > 1) {
				settings.curPage = 1;
				$.historyLoad(page.makeMultipleHash(['date', value],['page', 1]));
			} else {
				$.historyLoad(page.makeHash('date', value));
			}
		});
		
		var typeHtml = '';
		typeHtml += '<option value="all">Type</option>';
		typeHtml += '<option value="Rent">Rent</option>';
		typeHtml += '<option value="Deposit">Deposit</option>';
		typeHtml += '<option value="Other">Other</option>';
		
		$('#typeDropDown').html(typeHtml);
		
		$('#typeDropDown').change(function() {
			var value = $('#typeDropDown option:selected').attr('value');
			if (settings.curPage > 1) {
				settings.curPage = 1;
				$.historyLoad(page.makeMultipleHash(['type', value],['page', 1]));
			} else {
				$.historyLoad(page.makeHash('type', value));
			}
		})
		
		var filterHtml = '';
		filterHtml += '<option value="all">Filter</option>';
		filterHtml += '<option value="expense">Expense</option>';
		filterHtml += '<option value="income">Income</option>';
		
		$('#filterDropDown').html(filterHtml);
		
		$('#filterDropDown').change(function() {
			var value = $('#filterDropDown option:selected').attr('value');
			if (settings.curPage > 1) {
				settings.curPage = 1;
				$.historyLoad(page.makeMultipleHash(['filter', value],['page', 1]));
			} else {
				$.historyLoad(page.makeHash('filter', value));
			}
		})
		
		var prop = [];
		$.each(self.initInfo.properties, function(i,val) {
			prop[val.name] = val.id;
		});
		
		propHtml = '<option id="all" value="All Properties">All Properties</option>';
		propListHtml = '';
		for (var i in prop) {
			if (prop.hasOwnProperty(i)) {
				propListHtml += '<option id="'+prop[i]+'" value="'+i+'">'+i+'</option>';
			}
		}
		propHtml += propListHtml;
		$('#propertyDropDown').html(propHtml);
		$('#expenseProperty').append(propListHtml);
		$('#incomeProperty').append(propListHtml);
		
		$('#propertyDropDown').change(function() {
			var propSelected = $('#propertyDropDown option:selected');
			
			var propId = propSelected.attr('id');
			
			settings.updateBalance = 1;
			
			if (settings.curPage > 1) {
				settings.curPage = 1;
				$.historyLoad(page.makeMultipleHash(['property', propId],['page', 1]));
			} else {
				$.historyLoad(page.makeHash('property', propId));
			}
			
		});
		
		if (location.href.indexOf('#') == -1) {
			_refreshData();
		}
		$.historyInit(_hashLoad);
		
		$('#who').bind('keypress', function(e){
			var code = e.keyCode || e.which;
			if(code == 13) {
				var who = $('#who').val()
				
				if (!who.match(/^[a-zA-Z0-9]+$/i) && who != "") {
					page.fox.message({
						message:'Search only accepts letters and numbers. \
							Please try again.',
						close: function(){
							parentTR.removeClass('selected');
						}
					});
					return false;
				}
				
				if (who) {
					self.curSearch = who;
					if (settings.curPage > 1) {
						settings.curPage = 1;
						$.historyLoad(page.makeMultipleHash(['search', who],['page', 1]));
					} else {
						$.historyLoad(page.makeHash('search', who));
					}
				} else {
					self.curSearch = 'all';
					$.historyLoad(page.makeHash('search', 'all'));
				}
			}
		});
		
		
		
		$('.pagination .first').bind('click', function() {
			if ($(this).hasClass('disabled')) {
				return false;
			}
			settings.curPage = 1;
			$.historyLoad(page.makeHash('page', settings.curPage));
		});
		$('.pagination .prev').bind('click', function() {
			if ($(this).hasClass('disabled')) {
				return false;
			}
			var curEnd = settings.curPage * 20;
			var curStart = curEnd - 19;
			if (curStart != 1) {
				settings.curPage = settings.curPage - 1;
			}
			$.historyLoad(page.makeHash('page', settings.curPage));
		});
		
		$('.pagination .next').bind('click', function() {
			if ($(this).hasClass('disabled')) {
				return false;
			}
			var totalRecords = self.json.totalRecords;
			var curEnd = settings.curPage * 20;
			
			if (curEnd < totalRecords) {
				settings.curPage = settings.curPage + 1;
			}
			$.historyLoad(page.makeHash('page', settings.curPage));
		});
		
		$('.pagination .last').bind('click', function() {
			if ($(this).hasClass('disabled')) {
				return false;
			}
			var totalRecords = self.json.totalRecords;
			settings.curPage = Math.ceil(totalRecords/20);
			$.historyLoad(page.makeHash('page', settings.curPage));
		});
		
		self.transToggle = 0;
		
		// add transactions button
		$('#addTransaction').bind('click', function() {
			_showPanel('editTransaction', 'add');
			self.transToggle = 1;
			$('#incomeType').show();
		})
		
		// income dropdown
		$('#incomeType').bind('change', function(){
			var is_rent = $(this).find('option:selected').val() === 'Rent';
			$('.income-record-view').hide();
			if (is_rent) {
				$('#record-rent').show();
			} else {
				$('#record-non-rent').show();
			}
		});
		
		$('#saveExpense').bind('click', function() {
			
			var contact = $('#expensePay').parent();
			var contactSelected = contact.hasClass('search');
			var contactTypeClass = contact.removeClass('search field').attr('class')
			contact.addClass('search field');
			
			var url = self.transToggle ? '/reports/addExpense' : '/reports/editExpense';
			var transId = self.transToggle ? '' : self.transId;
			page.request({
				url: url,
				request: {
					type: 'expense',
					action: self.transToggle ? 'create' : 'edit',
					expenseType: $('#expenseType').val(),
					payTo: $('#expensePay').val(),
					expenseAmount: $('#expenseAmount').val(),
					expenseDate:$('#expenseDate').val(),
					transId: transId,
					contactType: contactSelected ? contactTypeClass : '',
					contactId: contactSelected ? contact.attr('id') : ''
				},
				success: function(json) {
					_showPanel('default');
					location.hash = '';
					settings.updateBalance = 1;
					_refreshData();
					_clearForm();
					self.transToggle = 0;
				}
			});
			
			
		})
		
		$('#saveIncome').bind('click', function() {
			var contact = $('#incomeFrom').parent();
			var contactSelected = contact.hasClass('search');
			var contactTypeClass = contact.removeClass('search field').attr('class')
			contact.addClass('search field');
			
			var url = self.transToggle ? '/reports/addIncome' : '/reports/editIncome';
			var transId = self.transToggle ? '' : self.transId;
			page.request({
				url: url,
				request: {
					type: 'income',
					action: self.transToggle ? 'create' : 'edit',
					incomeType: self.rentRow ? 'Rent' : $('#incomeType').val(),
					incomeFrom: $('#incomeFrom').val(),
					incomeAmount: $('#incomeAmount').val(),
					incomeDate:$('#incomeDate').val(),
					transId: transId,
					contactType: contactSelected ? contactTypeClass : '',
					contactId: contactSelected ? contact.attr('id') : ''
				},
				success: function(json) {
					_showPanel('default');
					location.hash = '';
					settings.updateBalance = 1;
					_refreshData();
					_clearForm();
					self.transToggle = 0;
				}
			});
		})
		
		$('#period > li > a').bind('click', function() {
			$('#period > li > a').removeClass('on');
			$(this).addClass('on');
			
			var selection = $(this).attr('id')
			settings.curDatePeriod = selection;
			
			self.periodClick = 1;
			settings.curPage = 1;
			if (selection == 'thisMonth') {
				var curTime = new Date();
				var curM = curTime.getMonth() + 1;
				var curY = curTime.getFullYear();
				var thisMonth = curM + '+' + curY;
				
				var el = $('#dateDropDown option[value='+thisMonth+']');
				if (el.length) {
					el.attr('selected','selected');
				} else {
					$('#dateDropDown option:first').attr('selected','selected');
				}
				
				$.historyLoad(page.makeMultipleHash(['period', selection],['date', thisMonth],['page', 1]));
			} else if (selection == 'lastMonth') {
				var curTime = new Date();
				var curM = curTime.getMonth() + 1;
				var curY = curTime.getFullYear();
				if (curM == 1) {
					curM = 12;
					curY = curY - 1;
				} else {
					curM = curM - 1;
				}
				var lastMonth = curM + '+' + curY;
				var el = $('#dateDropDown option[value='+lastMonth+']');
				
				if (el.length) {
					el.attr('selected','selected');
				} else {
					$('#dateDropDown option:first').attr('selected','selected');
				}
				$.historyLoad(page.makeMultipleHash(['period', selection],['date', lastMonth],['page', 1]));
			} else {
				$('#dateDropDown option:first').attr('selected','selected');
				$.historyLoad(page.makeMultipleHash(['period', selection],['date', 'all'],['page', 1]));
			}
		});
	}
	
	function _refreshData() {
		page.request({
			url: '/reports/json',
			request: {
				month: settings.curMonth,
				year: settings.curYear,
				type: settings.curType,
				search: settings.curSearch,
				filter: settings.curFilter,
				datePeriod: settings.curDatePeriod,
				property: settings.curProperty,
				page: settings.curPage,
				initLoad: self.initLoad,
				periodClick: self.periodClick,
				updateBalance: settings.updateBalance
			},
			success: function(json) {
				self.json = json;
			}
		});
		
		self.income = 0;
		self.expense = 0;
		
		var html = '';
		$.each(self.json.transactions, function(i, val) {
			var row = '';
			var transDate = val.transDate;
			transDate = transDate.split('-');
			m = transDate[1];
			d = transDate[2];
			m = self.months[m-1];
			if (val.transIncome == '1') {
				self.income += val.transAmount;
				var balance = self.income - self.expense;
				if (balance < 0) {
					balance = balance * -1;
					balance = '-$'+balance.toFixed(2);
				} else {
					balance = '$'+balance.toFixed(2);
				} 
				
				row += '<tr class="Income" id="'+val.transId+'"><td class="date" id="'+val.transDate+'"><span>'+m+' '+d+'</span></td>';
				row += '<td class="type"><span>'+val.transType+'</span></td>';
				row += '<td class="who" id="'+val.transPropertyId+'"><span>'+val.transContact+'</span></td>';
				row += '<td class="amount income"><span>+$'+val.transAmount.toFixed(2)+'</em></span></td>';
				row += '<td class="balance on"><span>'+balance+'</span></td></tr>';
			} else {
				self.expense += val.transAmount;
				var balance = self.income - self.expense;
				if (balance < 0) {
					balance = balance * -1;
					balance = '-$'+balance.toFixed(2);
				} else {
					balance = '$'+balance.toFixed(2);
				}

				row += '<tr class="Expense" id="'+val.transId+'"><td class="date" id="'+val.transDate+'"><span>'+m+' '+d+'</span></td>';
				row += '<td class="type"><span>'+val.transType+'</span></td>';
				row += '<td class="who" id="'+val.transPropertyId+'"><span>'+val.transContact+'</span></td>';
				row += '<td class="amount income"><span>-$'+val.transAmount.toFixed(2)+'</em></span></td>';
				row += '<td class="balance on"><span>'+balance+'</span></td></tr>';
				
			}
			html = row + html;
			
		})
		if (!html) {
			html += '<tr class="noRecords"><td colspan="5"><span>No transaction records</span></td></tr>';
			
		}
		$('#transactionList tbody').html(html);
		
		if (self.initLoad || settings.updateBalance) {
			var incomeTotal = parseFloat(self.json.incomeTotal);
			var expenseTotal = parseFloat(self.json.expenseTotal);
			$('#incomeCell').html('$'+incomeTotal.toFixed(2));
			$('#expenseCell').html('-$'+expenseTotal.toFixed(2));
			
			if (incomeTotal >= expenseTotal) {
				var totalBalance = incomeTotal - expenseTotal;
				totalBalance = totalBalance.toFixed(2);
				$('#totalCell').html('$'+totalBalance);
			} else {
				var totalBalance = expenseTotal - incomeTotal;
				totalBalance = totalBalance.toFixed(2);
				$('#totalCell').html('-$'+totalBalance);
			}
			
			self.initIncome = $('#incomeCell').text();
			self.initExpense = $('#expenseCell').text();
			self.initTotal = $('#totalCell').text();
			self.initLoad = 0;
			settings.updateBalance = 0;
		}
		if (self.periodClick) {
			if (settings.curDatePeriod == 'all') {
				$('#incomeCell').html(self.initIncome);
				$('#expenseCell').html(self.initExpense);
				$('#totalCell').html(self.initTotal);
			} else {
				var incomeTotal = parseFloat(self.json.incomeTotal);
				var expenseTotal = parseFloat(self.json.expenseTotal);
				$('#incomeCell').html('$'+incomeTotal.toFixed(2));
				$('#expenseCell').html('-$'+expenseTotal.toFixed(2));
			}
			self.periodClick = 0;
		}
		
		
		
		_pagination();
	}
	
	function _hashLoad(hash) {
		if (hash) {
			// sort logic
			var pageNum = page.getHashVal('page');	
			var date = page.getHashVal('date');
			var prop = page.getHashVal('property');
			var type = page.getHashVal('type');
			var filter = page.getHashVal('filter');
			var search = page.getHashVal('search');
			var period = page.getHashVal('period');
			
			if (pageNum && settings.curPage !== 1) {
				settings.curPage = parseInt(pageNum);
			} else {
				settings.curPage = 1;
			}
			
			if (date) {
				var dateHash = date.split('+');
				settings.curMonth = dateHash[0];
				settings.curYear = dateHash[1];
			} else {
				settings.curMonth = 'all';
				settings.curYear = 'all';
			}
			
			if (prop) {
				settings.curProperty = prop;
			} else {
				settings.curProperty = 'all';
			}
			
			type ? settings.curType = type : settings.curType = 'all';
			
			filter ? settings.curFilter = filter : settings.curFilter = 'all';
			
			search ? settings.curSearch = search : settings.curSearch = 'all'
			
			period ? self.periodClick = 1 : self.periodClick = 0;
			
		} else {
			_setDefaults()
		}
		_updateDropDowns();
		_refreshData();
	}
	
	function _updateDropDowns() {
		if (settings.curMonth === 'all') {
			$('#dateDropDown option:first').attr('selected','selected');
		} else {
			$('#dateDropDown option[value='+settings.curMonth+'+'+settings.curYear+']').attr('selected','selected');
		}
		
		$('#typeDropDown option[value='+settings.curType+']').attr('selected', 'selected');
		
		$('#filterDropDown option[value='+settings.curFilter+']').attr('selected', 'selected');
		
		var prop = page.getHashVal('property');
		
		if (!prop || prop === 'all') {
			$('#propertyDropDown option:first').attr('selected', 'selected');
		} else {
			var prop = page.getHashVal('property');
			prop = prop.split('+').join(' ');
			$('#propertyDropDown option[value='+prop+']').attr('selected', 'selected');
		}
		
	}
	
	// _showPanel(default/editTransaction, add/edit, Expense/Income)
	function _showPanel(panel, mode, type) {
		$('#sidepanel .panel, #editTransactionPanel .tabs > li, #editTransactionPanel .form').removeClass('on');
		$('#transactionList tbody > tr').removeClass('selected');
		$('#'+panel+'Panel').addClass('on');

		if (type) {
			$('#edit'+type+'Tab').addClass('on');
			$('#edit'+type).addClass('on');
		} else {
			$('#editExpenseTab').addClass('on');
			$('#editExpense').addClass('on');
		}
		
		if (!mode || mode == 'add') {
			$('#addExpenseTabs').css({display:'block'});
		} else {
			$('#addExpenseTabs').css({display:'none'});
		}
		
	}
	
	function _clearForm() {
		$('#editExpense input').removeClass('error');
		$('#editExpense input').val('');
		$('#editExpense #expenseProperty option:first').attr('selected','selected');
		$('#editExpense #expenseType option:first').attr('selected','selected');
		$('#editIncome input').removeClass('error');
		$('#editIncome input').val('');
		$('#editIncome #incomeProperty option:first').attr('selected','selected');
		$('#editIncome #incomeType option:first').attr('selected','selected');
		$('#reportsTransactions .sidepanel .delete').hide();
	}
	
	function _pagination() {
		
		var totalRecords = self.json.totalRecords;
		var totalPages = Math.ceil(totalRecords/20)
		var curEnd = settings.curPage * 20;
		var curStart = curEnd - 19;
		if (curStart > totalRecords) curStart = 1;
		if (curEnd > totalRecords) curEnd = totalRecords;
		
		if (totalRecords === 0) curStart = 0;
		$('.pagination .pages').html(curStart+'-'+curEnd+' of '+totalRecords);
		
		
		if (curEnd < totalRecords) {
			$('.pagination .next').removeClass('disabled');
			$('.pagination .last').removeClass('disabled');
		}
		
		if (settings.curPage == totalPages) {
			$('.pagination .next').addClass('disabled');
			$('.pagination .last').addClass('disabled');
		}
		if (settings.curPage == 1) {
			$('.pagination .first').addClass('disabled');
			$('.pagination .prev').addClass('disabled');
		}
		
		if (settings.curPage != 1 && settings.curPage <= totalPages) {
			$('.pagination .first').removeClass('disabled');
			$('.pagination .prev').removeClass('disabled');
		}
			
	}
	
	_setDefaults();
	_init();
}