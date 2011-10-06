function SetInputText() 
{
	var self = this;
	
	self.reset();
	
	return self;
};

SetInputText.prototype.reset = function() {
	
	var self = this;
	
	$("input:text,input:password").unbind('focus').unbind('blur').addClass('active').each(function(i,val){

		if ($(this).hasAttr('alt')) {
			
			var thisText = $(this).attr('alt');
			if ($(this).val() == '' || $(this).val() == thisText) $(this).val(thisText).removeClass('active');

			$(this).bind('focus',function() {
				if ( $(this).val() == thisText )
				{
					$(this).val('');
				}
				$(this).addClass('active');
			}).bind('blur',function() {
				if ( $(this).val() == '' )
				{
					$(this).val(thisText).removeClass('active');
				}
				$(this).addClass('inactive');
			});
			
		}

	});
	
	return self;
}

SetInputText.prototype.clear = function(selector) {
	var self = this;
	
	$("input:text").each(function(i,val){
		var isSampleInput = $(this).attr('value') == $(this).attr('alt');
		if (isSampleInput) {
			$(this).attr({value:''});
		}
	});
	
	return self;
}