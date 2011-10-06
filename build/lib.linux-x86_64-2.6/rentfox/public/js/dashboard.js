function Dashboard() 
{
	var self = this;
	
	self.searchPanel = $("#searchpanel");
	self.searchBox = $("#searchBox");
	self.searchBox.focus();
		
	self.refresh().init();
	$(window).resize(function(){
		self.refresh();
	});
}

Dashboard.prototype.refresh = function() {
	var self = this;
	
	var winW = $(window).width()
	if (winW < 964) winW = 964;
	var searchPanelW = self.searchPanel.width()
	self.searchPanel.css("left",winW/2 - searchPanelW/2);
	
	return self;
}

Dashboard.prototype.init = function() {
	var self = this,
		optlist = $('#dashboard-pulse-options > li');
	
	self.pulse = new Pulse('#dashboard-pulse');
	
	page.request({
		url: '/pulse/get',
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
				type: type
			},
			success: function(json) {
				$('#dashboard-pulse-label').text(label);
				self.pulse.refresh(json);
			}
		});
		
	});
	
	$('#rent-progress').bind('click',function(){
		location.href = '/property/record';
	});
	
	return self;
}