function PropertyUnits() {
	var self = this;
	
	// private vars
	var sortOptions = ['unit',
			   'rent', 'rent.reverse',
			   'due', 'due.reverse',
			   'late', 'late.reverse'],
		lastSortBy = null,
		initVisit = 1,
		rentSort = 0,
		dueSort = 0,
		lateSort = 0,
		propName = 0
	
	// create object
	var settings = {}
	
	// constructor
	function _init() {
		defaultSettings();
		
		if (initVisit) {
			page.request({
				url: '/property/getPropertyList',
				success: function(json) {
					self.propNameList = json;
				}
			});
			var prop = [];
			
			$.each(self.propNameList.properties, function(i,val) {
				prop[val.name] = val.id
			});
			
			propHtml = '<option id="all" value="All Properties">All Properties</option>';
			for (var i in prop) {
				if (prop.hasOwnProperty(i)) {
					propHtml += '<option id="'+prop[i]+'" value="'+i+'">'+i+'</option>';
				}
			}
			$('#propertyDropDown').html(propHtml);
			initVisit = 0;
		}
		
		if (location.href.indexOf('#') == -1) {
			refreshData();
		}
		$.historyInit(_hashLoad);
	};
	
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
			
			highlightUnitCol();
			settings.sort = 0;
			settings.unit = unit;
			settings.status = 'all';
			if (unit) {
				if (settings.curPage > 1) {
					settings.curPage = 1;
					$.historyLoad(page.makeMultipleHash(['unit', unit],['page', 1]));
				} else {
					$.historyLoad(page.makeHash('unit', unit));
				}
			} else {
				$.historyLoad(page.makeHash('unit', 'all'));
			}
		}
	});
	
	function displayContact() {
		$('tbody > tr > .unit').bind('click', function(e){
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
			page.fox.center({x:0,y:-100}).display(opts);
		});
	};
	
	// set defaults
	function defaultSettings() {
		settings.propertyId = 'all';
		settings.unit = 0;
		settings.status = 'all';
		settings.curPage = 1;
		settings.sort = 0;
		settings.sortOrder = 0;
		propName = 0;
	}
	
	$('#propertyDropDown').change(function() {
		var prop = $('#propertyDropDown option:selected').attr('id');
		
		if (settings.curPage > 1) {
			settings.curPage = 1;
			$.historyLoad(page.makeMultipleHash(['property', prop],['page', 1]));
		} else {
			$.historyLoad(page.makeHash('property', prop));
		}
	});
	
	$('#statusDropDown').change(function() {
		var status = $('#statusDropDown option:selected').attr('id');
		
		if (settings.curPage > 1) {
			settings.curPage = 1;
			$.historyLoad(page.makeMultipleHash(['status', status],['page', 1]));
		} else {
			$.historyLoad(page.makeHash('status', status));
		}
	});
	
	$('#rent').bind('click', function() {
		if (rentSort === 0 || rentSort === 'desc') {
			settings.sort = $(this).attr('id');
			settings.sortOrder = 'asc';
			rentSort = 'asc';
			dueSort = 0;
			lateSort = 0;
		} else {
			settings.sort = $(this).attr('id');
			settings.sortOrder = 'desc';
			rentSort = 'desc';
		}
		if (settings.curPage != 1) settings.curPage = 1;
		sort('rent');
	});
	
	$('#due').bind('click', function() {
		if (dueSort === 0 || dueSort === 'desc') {
			settings.sort = $(this).attr('id');
			settings.sortOrder = 'asc';
			dueSort = 'asc';
			rentSort = 0;
			lateSort = 0;
		} else {
			settings.sort = $(this).attr('id');
			settings.sortOrder = 'desc';
			dueSort = 'desc';
		}
		if (settings.curPage != 1) settings.curPage = 1;
		sort('due');
	});
	
	$('#late').bind('click', function() {
		if (lateSort === 0 || lateSort === 'desc') {
			settings.sort = $(this).attr('id');
			settings.sortOrder = 'asc';
			lateSort = 'asc';
			rentSort = 0;
			dueSort = 0;
		} else {
			settings.sort = $(this).attr('id');
			settings.sortOrder = 'desc';
			lateSort = 'desc';
		}
		if (settings.curPage != 1) settings.curPage = 1;
		sort('late');
	});
	
	function refreshData() {
		page.request({
			url: '/unitDisplay/json',
			request: {
				propertyId: settings.propertyId,
				unit: settings.unit,
				sort: settings.sort,
				sortOrder: settings.sortOrder,
				status: settings.status,
				curPage: settings.curPage,
				initVisit: initVisit
			},
			success: function(json) {
				self.json = json;
			}
		});
		
		var html = '';
		
		$.each(self.json.unit, function(i,val) {
			
			if (val.rent !== '-') val.rent = '$'+val.rent;
			if (val.due !== '-') {
				var s = 'th';
				if(val.due=='1') s = 'st';
				if(val.due=='2') s = 'nd';
				if(val.due=='3') s = 'rd';
				val.due = val.due + s;
			}
			
			html += '<tr><td class="property"><span>'+val.propertyName+'</span></td>';
			html += '<td class="unit" id="'+val.unitId+'"><span>'+val.label+'</span></td>';
			html += '<td class="rent"><span>'+val.rent+'</span></td>';
			html += '<td class="due"><span>'+val.due+'</span></td>';
			html += '<td class="late"><span>'+val.latepay+'</span></td>';
			html += '<td class="status"><span>'+val.status+'</span></td></tr>';
		});
		$('#propertyUnits tbody').html(html);
		
		statusHtml = ''
		statusHtml += '<option id="all">Status</option>';
		statusHtml += '<option id="m2m">Month-to-month ('+self.json.m2m+')</option>';
		statusHtml += '<option id="underContract">Under Contract ('+self.json.underContract+')</option>';
		statusHtml += '<option id="vacant">Vacant ('+self.json.vacant+')</option>';
		statusHtml += '<option id="movingOut">Moving Out ('+self.json.movingOut+')</option>';
		statusHtml += '<option id="movingIn">Moving In ('+self.json.movingIn+')</option>';
		$('#statusDropDown').html(statusHtml);
		$('#statusDropDown option[id="'+settings.status+'"]').attr('selected','selected');
		
		if (self.json["unit"].length === 0) {
			html += '<tr><td colspan="6" class="property"><span>No records</span></td></tr>';
			$('#propertyUnits tbody').html(html);
		}
		
		if (settings.propertyId != 'all') {
			$('#propertyDropDown option[value="'+propName+'"]').attr('selected', 'selected');
		} else {
			$('#propertyDropDown option[value="All Properties"]').attr('selected', 'selected');
		}
		
		if (settings.sort == 0) {
			highlightUnitCol();
		} else {
			$('#propertyUnits th, #propertyUnits td').removeClass('on');
			$('.'+settings.sort).addClass('on');
		}
		
		pagination();
		displayContact();
	}
	
	function pagination() {
		var totalRecords = self.json.totalStatusRecords;
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
		var totalRecords = self.json.totalStatusRecords;
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
		var totalRecords = self.json.totalStatusRecords;
		settings.curPage = Math.ceil(totalRecords/20);
		$.historyLoad(page.makeHash('page', settings.curPage));
	});
	
	function sort(id) {
		var sortBy = _translateSortBy(id);
		$.historyLoad(page.makeHash('sort', sortBy));
	}
	
	function highlightUnitCol() {
		$('#propertyUnits th, #propertyUnits td').removeClass('on');
		$('#propertyUnits .unit').addClass('on');
		$('.sortImg').css({display:'none'});
	}
	
	// private function highlight column
	function _highlightCol(column) {
		
		// is it a valid column?
		if (0 > $.inArray(column, sortOptions)) {return false;}
		
		// set default sort = up
		var sort = 'up';
		var sortImg = $('#sortUp');
		
		// hide all other sort imgs
		$('.sortImg').css({display:'none'});
		
		// if reverse, then sort down
		if (column.match('.reverse')) {
			column = column.replace('.reverse','');
			sort = 'down';
			sortImg = $('#sortDown');
		}
		
		// unhighlight everything and re-highlight only this thing
		$('th, td').removeClass('on up down');
		$('.' + column).addClass('on');
		
		// append the sort arrow in the column after the header text
		var control = $('th.' + column).addClass(sort).children('span');
		if(column != 'unit') {
			control.append(sortImg.css({display:'inline'}));
		}
		return true;
	};
	
	function _translateSortBy(sortBy){	
		var reverse = (sortBy == lastSortBy);		
		if(reverse){
			sortBy = sortBy + '.reverse';		
		}
		return sortBy;
	}
	
	function _hashLoad(hash) {
		if (hash) {
			// sort logic
			var sortOrder = page.getHashVal('sort');
			var pageNum = page.getHashVal('page');	
			var unitLabel = page.getHashVal('unit');
			var prop = page.getHashVal('property');
			var status = page.getHashVal('status');
			
			if (sortOrder) {
				var sortType = sortOrder.split('.');
				settings.sort = sortType[0];
				settings.sortOrder = sortType[1] ? 'desc' : 'asc';
			} else {
				settings.sort = 0;
			}
			
			if (pageNum && settings.curPage !== 1) {
				settings.curPage = parseInt(pageNum);
			} else {
				settings.curPage = 1;
			}
			
			if (prop) {
				settings.propertyId = prop;
			} else {
				settings.propertyId = 'all';
			}
			
			if (unitLabel && unitLabel != 'all') {
				settings.unit = unitLabel;
			} else {
				settings.unit = 0;
			}
			
			if (status) {
				settings.status = status;
			} else {
				settings.status = 'all';
			}
			
			lastSortBy = sortOrder;
			_highlightCol(sortOrder);

			// ajax to loadpage
			
		} else {
			defaultSettings();
			propName = 'All Properties';
		}
		
		refreshData();
	}
	
	// call constructor
	_init();
	
	return self;
}
