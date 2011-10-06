function Errors() 
{
	var self = this;
}

Errors.prototype.prompt = function(data) {
	var self = this;
	var errors = data.errors;
	var offset = data.offset || {x:0, y:0};
	
	self.clear();
	
	page.fox.center({x:offset.x,y:offset.y}).display({
		url:"errors.html",
		callback:function(){
			for (var i=0; i < errors.length; i++) {
				var sel = errors[i].selector;
				var msg = errors[i].message;
				if (sel) {
					$(sel).addClass('error');
				}
				$('#errorList').append('<li>' + msg + '</li>');
			}
		}
	});
	
	return self;
}

Errors.prototype.clear = function() {
	var self = this;
	
	$('.error').removeClass('error');
	
	return self;
}