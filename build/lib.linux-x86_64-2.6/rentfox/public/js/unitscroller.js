/* =Unit Scroller Object attribues
	
	Takes following parameters:
	
	*required
		(string) property 
			- the ID of the property
	
	*optional
		(function) clickUnit 
			- a function that determine what happens on a click
	
----------------------------------------------- */

function UnitScroller(data) 
{	
	var self = this;
	/* =Unit Scroller Object attribues
	----------------------------------------------- */
	self.container = $('#unitScroller > .scrollFrame');
	self.list = $('#unitScroller > .scrollFrame > ul');
	self.listH = $('#unitScroller > .scrollFrame > ul > li').length * 30;
	self.filterBox = $('#unitScroller > .manualInput > input');
	self.unitSlider = $('#unitScroller > .controls > .slider');
	self.clickable = true;
	self.property = data.property;
	self.clickUnit = data.clickUnit;
	self.stopTop = 0; // fixes bug flickit calls this
	self.init();
}

UnitScroller.prototype.init = function() {
	var self = this;
	
	
	/* =unit scroller container frame has dynamic height
	----------------------------------------------- */
	self.initListItems().loadUnits().setFrameHeight().flickIt();
	
	$(window).bind('resize',function(){
		self.setFrameHeight();
	})
	
	/* =filterBox
	----------------------------------------------- */
	self.filterBox.bind('keyup',function() {
		self.filterUnits();
	});
	
	self.list.disableTextSelect();
	
	return self;
}

UnitScroller.prototype.initSlider = function() {
	var self = this;
	
	
	self.unitSlider.slider('destroy').slider({
		orientation: 'vertical',
		min: self.frameH,
		max: self.listH,
		value: self.listH,
		animate: true,
		stop: function(event, ui) {
			self.scroll = 0 - (self.listH - $(this).slider('value'));
			self.list.animate({top: self.scroll});
		}
	})
	
	if (self.listH <= self.frameH) {
		self.unitSlider.css({'display':'none'});
	} else {
		self.unitSlider.css({'display':'block'});
	}

	return self;
}

UnitScroller.prototype.filterUnits = function() {
	var self = this;
	self.listH = 0;
	
	if (self.filterBox.attr('value') != '') {
		self.listItems.css({display:'none'});
		self.listItems.each(function(i,val){
			if ($(this).text().toUpperCase().match(self.filterBox.attr('value').toUpperCase())) {
				$(this).css({display:'block'});
				self.listH += 30;
			}
		});
	} else {
		self.listItems.css({display:'block'});
		self.listH = self.listItems.size() * 30;
	}
	self.list.animate({top: 0});
	self.initUnitDrag().initSlider();
	
	return self;
}

UnitScroller.prototype.initUnitDrag = function() {
	var self = this;
	
	self.list.unbind().draggable({
		axis: 'y',
		distance: 5,
		start: function(event,ui) {
			
			self.timestamp = new Date();
			self.startTime = self.timestamp.getTime();
			self.clickable = false;
			self.startTop = $(this).position().top;
			
		},
		stop: function(event,ui) {
		
			
			self.timestamp = new Date();
			self.stopTime = self.timestamp.getTime();
			self.timeDiff = (self.stopTime - self.startTime) / 1000;

			self.stopTop = $(this).position().top;
			self.dragDistance = self.stopTop - self.startTop;
			if (self.dragDistance < 0) {
				self.dragDistance *= -1;
				self.dragDirection = 'up';
			} else {
				self.dragDirection = 'down';
			}

			self.scrollRate = self.dragDistance / self.timeDiff;
			

			self.flickIt();
			
		}
	});
	
	return self;
}

UnitScroller.prototype.flickIt = function() {
	
	var self = this;
	
	self.fromTop = -self.listH + self.frameH;
	
	/* =if it's too far down
	----------------------------------------------- */
	if (self.stopTop > 0 || self.listH <= self.frameH) {
		self.list.animate({top: 0});
		self.unitSlider.slider('value', self.listH);
		return;
	}
	
	/* =if it's too far up
	----------------------------------------------- */
	if (self.stopTop < self.fromTop) {
		self.list.animate({top: self.fromTop});
		self.unitSlider.slider('value', self.frameH);
		return;
	}
	
	/* =know when to flick
		~ 500 units it's under the 0.2 range
		~ 1000 units it's right above the 0.3 range
		~ 1500 units it's right above the 0.4
		- 2000 units it's around the 0.5 range
	----------------------------------------------- */
	
	if (self.timeDiff < (.1 + self.listItems.size()/5000)) {
		/* =smart compensation for close range dragging
		----------------------------------------------- */
		if (self.timeDiff > .1)
		{
			if (self.dragDistance < 100) {
				self.unitSlider.slider('value', self.listH + self.stopTop);
				return;
			}
		}
		
		/* =scroll distance and direction, can be + or -
		----------------------------------------------- */
		if (self.dragDirection == 'up')
		{
			//self.scroll = self.stopTop - self.scrollRate;
			self.scroll = self.stopTop - self.listH * .2;
		}
		else
		{
			//self.scroll = self.stopTop + self.scrollRate;
			self.scroll = self.stopTop + self.listH * .2;
		}
		
		/* =bring back if too far down
		----------------------------------------------- */
		if (self.scroll > 0) {
			self.list.animate({top: self.scroll / 13});
			self.list.animate({top: 0});
			self.unitSlider.slider('value', self.listH);
			return;
		}
		
		/* =bring back if too far up
		----------------------------------------------- */
		if (self.scroll < self.fromTop) {
			self.list.animate({top: self.fromTop + (self.scroll/13)});
			self.list.animate({top: self.fromTop});
			self.unitSlider.slider('value', self.frameH);
			return;
		}
		
		/* =flicked!
		----------------------------------------------- */
		self.list.animate({top: self.scroll});
		self.unitSlider.slider('value', self.listH + self.scroll);
		
	} else {
		/* =drag with no flicks
		----------------------------------------------- */
		self.unitSlider.slider('value', self.listH + self.stopTop); 
		
	}
	return self;
}

UnitScroller.prototype.setFrameHeight = function() {
	var self = this;
	self.frameH = $(window).height() - 230;
	self.unitSlider.css('height',self.frameH - 10);
	self.container.css('height',self.frameH);
	self.initUnitDrag().initSlider();
	if (self.listH < self.frameH && self.filterBox.attr('value')=='filter') {
		self.filterBox.css({display:'none'});
	} else {
		self.filterBox.css({display:'block'});
	}
	
	return self;
}

UnitScroller.prototype.loadUnits = function(data) {
	var self = this;
	var html = new Array();
	
	self.listItems.remove();
	
	for (var i in self.property.units) {
		if(data){	
			if (data.currentUnit == self.property.units[i].id) {
				html[i] = '<li class="on" id=' + self.property.units[i].id + '>' + self.property.units[i].label + '</li>';
			} else {
				html[i] = '<li id=' + self.property.units[i].id + '>' + self.property.units[i].label + '</li>';
			}
		} else {
			html[i] = '<li id=' + self.property.units[i].id + '>' + self.property.units[i].label + '</li>';
		}
	}
	
	self.list.html(html.join(''));
	self.listH = html.length * 30;
	if (self.listH < self.frameH) {
		self.filterBox.css({display:'none'});
	} else {
		self.filterBox.css({display:'block'});
	}
	self.initUnitDrag().initSlider();
	self.listItems = $('#unitScroller > .scrollFrame > ul > li');
	
	return self;
}

UnitScroller.prototype.initListItems = function(data) {
	var self = this;
	
	self.listItems = $('#unitScroller > .scrollFrame > ul > li');
	if (self.clickUnit) {
		self.listItems.unbind().bind('click',function() {
			if (self.clickable) {
				self.clickUnit(self.listItems, $(this));
			}
			self.clickable = true;
		})
	}
	
	if(data) {
		if (data.eachUnit) {
			self.listItems.each(function(){
				data.eachUnit($(this));
			});
		}
		if (data.allUnits) {
			data.allUnits(self.listItems);
		}
	}
	
	
	return self;
}

UnitScroller.prototype.scrollToUnit = function(unit) {
	var self = this;
	
	var fromTop = $('#'+unit).position().top - self.frameH/2 + 30;
	var margin = self.listH - fromTop;
	if (self.frameH > margin) {
		self.list.css({top:(self.listH - self.frameH)*-1});
		self.unitSlider.slider('value', self.frameH);
	} else if (fromTop > self.frameH) {
		self.list.css({top:fromTop*-1})
		self.unitSlider.slider('value', self.listH - fromTop);
	}
	
	
	return self;
}