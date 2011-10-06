function Foxhelper() 
{
	var self = this;
	self.incPath = "/foxhelper/";
	self.foxDisplayMessage = "index";
	self.foxDefaultMessage = "index";
	self.foxHelper = $("#foxhelper");
	self.theFox = $("#foxhelper .thefox");
	self.foxPanel = $("#foxhelper .foxpanel");
	self.alert = $("#foxhelper .balloon");
	self.foxDisplay = $("#foxhelper .display");
	self.foxDisplayWidth = $("#foxhelper").width()
	self.dockLeft = -35;
	self.dockBottom = 25;
	self.expanded = false;
	self.callback = null;

	self.init();
}
/* init
---------------------------------*/
Foxhelper.prototype.init = function(){
	
	var self = this;
	
	self.dock();
	self.foxHelper.draggable({
		handle:'.thefox',
		stop: function(){
			self._keepInBounds();
			if (self._foxOnMenu())  {
				self.dock();
			} else {
				self.display();
			}
			return self;
		}
	});

	self.theFox.bind("dblclick", function(){
		if (self.foxHelper.css("top") == "auto")
		{
			self.center().display();
		}
		else
		{
			self.dock();
		}
	}).bind("mousedown", function(){
		this.style.cursor='url("/styles/img/closedhand.cur"), move'
	}).bind("mouseup", function(){
		this.style.cursor='url("/styles/img/openhand.cur"), move'
	});

	$(window).resize(function(){
		if (self._foxOnMenu()) 
			self.dock()
		else
			self._keepInBounds()
	});
	
	$(".foxClose").live('click', function(){
		self.dock();
	});
	
	return self;
};

/* dock
---------------------------------*/
Foxhelper.prototype.dock = function(){
	var self = this;
	
	self.foxPanel.hide()
	self.foxHelper.css("left", self.dockLeft).css("bottom", self.dockBottom).css("top", "auto").css({overflow:"auto"});
	self.expanded = false;
	self.foxDisplayMessage = self.foxDefaultMessage;
	if (self.onClose){
		self.onClose();
		self.onClose = null;
		self.callback = null;
	}
	
	return self;
};

/* center
---------------------------------*/
Foxhelper.prototype.center = function(offset){
	var self = this;
	var fromLeft = $(window).width() / 2 - parseInt(self.foxPanel.css("width")) / 2;
	var fromTop = $(window).height() / 6;
	if (offset) {
		fromLeft += offset.x;
		fromTop += offset.y;
	}
	self.foxHelper.css("bottom", 0);
	self.foxHelper.css("left", fromLeft).css("top", fromTop);
	expanded = true;
	return self;
};

/* display message
---------------------------------*/
Foxhelper.prototype.display = function(opts){
	var self = this;
	var optURL = 0;
	
	self.hideAlert();
	if (!self.expanded && self.foxDisplayMessage != self.foxDefaultMessage) {
		self.foxDisplayMessage = self.foxDefaultMessage;
	}
	if(self.onClose && opts && opts.url != 'undefined') {
		self.onClose();
		self.onClose=null;
	}
	if (opts) {
		if (opts.url) {
			self.foxDisplayMessage = opts.url;
			var optURL = 1;
		}
		
		if (opts.callback) self.callback = opts.callback;
		
		if (opts.close) self.onClose = opts.close;
	} 

	self.foxPanel.show();
	
	if (self.foxDisplayMessage != self.lastFoxDisplayMessage || optURL) {
		
		self.foxDisplay.load(self.incPath + self.foxDisplayMessage, '' ,self.callback).show();
		self.lastFoxDisplayMessage = self.foxDisplayMessage;
	}

	self.expanded = true;
	self.foxHelper.css({overflow:"hidden"});
	
	return self
};



/* confirmation modal
---------------------------------*/
Foxhelper.prototype.confirm = function(opts){
	var self = this;
	var dock = true;
	var confirmButtonText = "Confirm";
	var closeFunc = null;
	var offset = opts.offset ? opts.offset : {x:0,y:0} 
	
	
	if (opts.confirmButtonText) { confirmButtonText = opts.confirmButtonText; }
	if (opts.dock != 'undefined') { dock = opts.dock; }
	if (opts.close) { closeFunc = opts.close }
	
	
	self.center(offset).display({
		url: 'confirm',
		callback: function() {
			$('#foxConfirmMessage').html(opts.message);
			$('#foxConfirmYesText').text(confirmButtonText);
			$('#foxConfirmYes').bind('click',function(){
				if (dock != 'undefined') { page.fox.dock(); }
				opts.success();
			});
		},
		close: closeFunc
	});
	
	return self;
};

/* confirmation modal
---------------------------------*/
Foxhelper.prototype.message = function(opts){
	var self = this;
	var closeText = 'Close';
	if (opts.closeText) closeText = opts.closeText;
	
	self.center({x:0,y:0}).display({
		url: 'message',
		callback: function() {
			$('#foxMessage').html(opts.message);
			$('#foxTitle').text(opts.title);
			$('#foxCloseText').text(closeText);
		}
	});
	
	return self;
};

	
/* detects if fox is on menu
---------------------------------*/
Foxhelper.prototype._foxOnMenu = function(){
	var self = this;
	var fromBottom = parseInt($(window).height()) - parseInt(self.foxHelper.css("top"))
	if (fromBottom < 170)
	{
		return true;
	}
	else
	{
		return false;
	}
};

/* checks to see if fox is over boundary
---------------------------------*/
Foxhelper.prototype._keepInBounds = function(){
	var self = this;
	var fromTop = parseInt(self.foxHelper.css("top"));
	var fromLeft = parseInt(self.foxHelper.css("left"));
	var fromRight = $(window).width() - parseInt(self.foxHelper.css("left")) - self.foxDisplayWidth;

	if (self.expanded)
	{
		if (fromTop < 0)
		{
			self.foxHelper.css("top",0)
		}
		if (fromLeft < 0)
		{
			self.foxHelper.css("left",0)
		}
		if (fromRight < 0)
		{
			self.foxHelper.css("left", $(window).width() - self.foxDisplayWidth)
		}
	}

	return self;
};

/* shows balloon
---------------------------------*/
Foxhelper.prototype.showAlert = function() {
	var self = this;
	setTimeout(function(){
		self.theFox.animate({'top':'-10px'}, 100, function(){
			$(this).animate({'top':'0'}, 250, function(){
				self.alert.bind('click',function(){
					self.center().display();
				}).slideDown('fast', function(){
					
					setInterval(function(){
						self.alert.animate({'top':'-10px'}, 200, function(){
							$(this).animate({'top':'0'}, 500);
						});
					},5000);
				});
			});
		});
	},1000);
};

/* hides balloon
---------------------------------*/
Foxhelper.prototype.hideAlert = function() {
	var self = this;
	self.alert.css({display:'none'});
};