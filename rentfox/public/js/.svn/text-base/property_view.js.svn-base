function PropertyView(data) {
	var self = this;
	
	self.propertyId = false;
	if(data) self.propertyId = data.propertyId;
	
	self.init();
	
	return self;
}

PropertyView.prototype.init = function() {
	var self = this;
	
	self.prop = new Property({propertyId:self.propertyId});
	self.property = self.prop.getProperty();
	self.unitscroller = new UnitScroller({
		property:self.property, 
		clickUnit:function(units, unit){
			var thisUnitId = unit.attr('id');
			var thisUnitLabel = unit.text();
			var thisUnit = self.getUnit(thisUnitId);
			location.href = '/unit/view/' + thisUnitId;
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
		
	if (self.property.photo) $('#propertyPhotoDisplay').attr({src:self.property.photo});
	
	// pulse 
	var optlist = $('#property-pulse-options > li'),
		propertyid = self.propertyId;
	
	self.pulse = new Pulse('#property-pulse');
	
	page.request({
		url: '/pulse/get',
		request: {
			propertyid: propertyid
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
				propertyid: propertyid
			},
			success: function(json) {
				$('#property-pulse-label').text(label);
				self.pulse.refresh(json);
			}
		});
		
	});
	
	$('#rent-progress').bind('click',function(){
		location.href='/property/record#property='+self.propertyId;
	});
	
	self.renderCharts();
	
};

PropertyView.prototype.renderCharts = function() {
	var self = this;

	page.request({
		url: '/chart/monthlyOccupancy',
		request: {
			propertyid: self.propertyId
		},
		success: function(json){
			var occupancy_chart = new Highcharts.Chart({
				chart: {
					renderTo: 'monthly-occupancy-chart', 
					defaultSeriesType: 'area'
				},
				title: {
					text: 'Monthly Occupancy Chart'
				},
				xAxis: {
					categories: json.xAxis,
					title: {
						text: 'Month'
					}
				},
				yAxis: {
					title: {
						text: 'Occupancy %'
					},
					labels: {
						formatter: function() {
							return this.value + '%';
						}
					},
					max: 100
				},
				tooltip: {
					formatter: function() {
						return Highcharts.numberFormat(this.y, 0, null, ' ') + "% " + this.series.name + " in " + this.x;
					}
				},
				series: json.series
			});
			
			
		}
	});

};

PropertyView.prototype.getUnit = function(unitId) {
	var self = this;
	
	for (var i in self.property.units) {
		if (self.property.units[i].id == unitId) {
			return self.property.units[i];
		}
	}
	return false;
}
