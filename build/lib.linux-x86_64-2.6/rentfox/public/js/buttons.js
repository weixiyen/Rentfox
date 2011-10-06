function Buttons() 
{
	/* define methods
	---------------------------------*/
	var self = this;
	
	/* activate
	---------------------------------*/
	self.activate();
}

Buttons.prototype.activate = function(selector) {
	
	if (!selector) selector = '.button';
	
	$(selector).live('mousedown',function(){
		$(this).addClass("active");
	}).live('mouseup',function(){
		$(this).removeClass("active");
	}).live('mouseout',function(){
		$(this).removeClass("active");
	}).disableTextSelect();
}