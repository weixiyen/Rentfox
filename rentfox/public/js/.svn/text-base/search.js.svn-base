function Search(q) {
	
	var self = this;
	self.q = q;
	self.filter = 'all';
	self.limit = 10;
	self.page = 1;
	self.last_page = 1;
		
	self.find(q, 1, 'all');
	_setup();
	
	function _setup() {
		// search
		$('#search-box').bind('keypress',function(e){
			var code = e.keyCode || e.which;;
			if(code == 13) { 
				self.find( $(this).val(), 1, self.filter );
			}
		});
		
		// filter
		$('.filter:not(.on)').live('click',function(e){
			$('.filter').removeClass('on');
			$(this).addClass('on');
			
			var filter = this.id.replace('filter-','');
			self.find(self.q, 1, filter);
		});
		
		// pagination
		$('#pagination .first:not(.disabled)').live('click',function(){
			self.find(self.q, 1, self.filter);
		});
		$('#pagination .next:not(.disabled)').live('click',function(){
			self.find(self.q, self.page + 1, self.filter);
		});
		$('#pagination .prev:not(.disabled)').live('click',function(){
			self.find(self.q, self.page - 1, self.filter);
		});
		$('#pagination .last:not(.disabled)').live('click',function(){
			self.find(self.q, self.last_page, self.filter);
		});
	}
}

Search.prototype.find = function(q, pg, filter) {	
	var self = this;
	
	self.q = q;
	self.filter = filter;
	self.page = pg;
	
	$('#search-results').hide();
	
	page.request({
		url: '/search/find',
		type: 'GET',
		request: {
			q: q,
			page: pg,
			limit: self.limit,
			filter: filter
		},
		success: function(json) {
			self.displayResults(json);
		}
	});
}

Search.prototype.displayResults = function(matches) {
	var self = this,
		results = matches.results,
		len = results.length,
		html = [],
		pg = matches.page,
		total = matches.total,
		start = total ? matches.start : total,
		end = matches.end > total ? total : matches.end,
		search_results = $('#search-results').show(),
		limit = self.limit;
		
	self.last_page = Math.ceil(total / limit);
	$('#pagination-info').text(start + '-' + end + ' of ' + total);
	
	if (total == 0) {
		search_results.html( '<div class="nothing">Sorry, but I was unable to find anything &gt;_&lt;</div>' );
		return;
	}
	
	for (var i=0; i < len; i++) {
		var result = results[i],
			title = result.link ? '<a href="' + result.link + '">' + result.title + '</a>' : '<h5>' + result.title + '</h5>',
			description = '<p>' + result.description + '</p>';
		html.push(title + description);
	}
	search_results.html( html.join('') );
	
	
	$('#pagination > .control').addClass('disabled');
	
	if (pg > 1) {
		$('#pagination .first').removeClass('disabled');
		$('#pagination .prev').removeClass('disabled');
	}
	
	if ( pg * limit <= total ) {
		$('#pagination .next').removeClass('disabled');
		$('#pagination .last').removeClass('disabled');
	}
	
}