function Thumbnail() 
{
	/* thumbnail manipulation
	---------------------------------*/
	var self = this;
	self.init();
}

Thumbnail.prototype.init = function() {
	var self = this;
	$(".thumb").each(function(i,val){
		if ($(this).children(".frame").children("img").attr("src"))
		{
			$(this).css("background","url('" + $(this).children(".frame").children("img").attr("src") + "') no-repeat center center")
		}
	})
	return self;
}