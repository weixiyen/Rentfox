function Pulse(selector) {
	this.container = $(selector + ' .container');
}

Pulse.prototype.refresh = function(data) {
	var container = this.container,
		html = this.generateHTML(data);
	container.html( html );
}

Pulse.prototype.generateHTML = function(data) {
	var html_arr = [],
		len = data.length;
	
	if (!len) return '<div class="nothing">No recent activity.</div>';
	
	for (var i=0; i < len; i++) {
		var row = '',
			pulse = data[i],
			id = pulse.id,
			type = pulse.type,
			date = pulse.date,
			html = pulse.html.replace('#Unit',''),
			day = pulse.day,
			prev_date = data[i-1] ? data[i-1].date : null,
			next_date = data[i+1] ? data[i+1].date : null; 
		
		if (date !== prev_date) row += '<dl><dt>'+day+'</dt>';
		
		row += '<dd class="' + type + '">'+ html +'</dd>';
		
		if (date !== next_date) row += '</dl>';
		
		html_arr.push(row);
	}
	
	return html_arr.join('');
}