function PicViewer(selector) 
{
	var self = this;
	self.selector = selector;
	self.photos = [];
	self.photoLen = 0;
	self.photoIndex = 0;
	self.defaultBg = '/styles/img/picviewer_frame_placeholder.png';
	self.init();
}

PicViewer.prototype.init = function() {
	var self = this;
	self.setupArrows().setupMenu();
	$(self.selector + ' .picViewer .center').disableTextSelect();
	return self;
}

PicViewer.prototype.setup = function(photos) {
	var self = this;
	
	self.photos = photos;
	self.photoLen = photos.length;
	self.photoIndex = 0;
	
	self.showPhoto( self.photoIndex );
}

PicViewer.prototype.showDropzone = function() {
	var self = this,
		display = $(self.selector + " .picDisplay");
	$(self.selector + ' .droptext').addClass('hover');
	display.css("background","url('" + self.defaultBg + "') no-repeat center center");
}

PicViewer.prototype.hideDropzone = function() {
	var self = this;
	self.deactivateDropzone();
	$(self.selector + ' .droptext').removeClass('hover');
	self.showPhoto( self.photoIndex );
}

PicViewer.prototype.activateDropzone = function() {
	var self = this,
		display = $(self.selector + " .picDisplay");
	$(self.selector + ' .droptext').addClass('on');
	display.css("background","url('" + self.defaultBg + "') no-repeat center center");
}

PicViewer.prototype.deactivateDropzone = function() {
	var self = this;
	$(self.selector + ' .droptext').removeClass('on');
}

PicViewer.prototype.showPhoto = function(index) {
	var self = this,
		display = $(self.selector + " .picDisplay"),
		counter = $(self.selector + " .center"),
		len = self.photoLen,
		pic_num = len ? self.photoIndex + 1 : 0;
	
	// show the photo
	if (self.photos[index]) {
		display.css("background","#232323 url('" + self.photos[index].photo + "') no-repeat center center");
	} else {
		display.css("background","url('" + self.defaultBg + "') no-repeat center center");
	}
	
	// calculate the count
	counter.text(pic_num + ' of ' + len);
}

PicViewer.prototype.removePhoto = function() {
	var self = this,
		part1 = self.photos.slice( 0, self.photoIndex ),
		part2 = self.photos.slice( self.photoIndex + 1 );

	self.photos = part1.concat(part2);	
	self.photoLen -= 1;
	self.photoIndex -= 1;
	if (self.photoIndex < 0) self.photoIndex = 0;
	self.showPhoto( self.photoIndex );
}

PicViewer.prototype.addPhoto = function(photo){
	var self = this;
	self.photos = self.photos.concat(photo);
	self.photoIndex = self.photoLen;
	self.photoLen += 1;
	self.showPhoto( self.photoIndex );
}

PicViewer.prototype.setupArrows = function(){
	var self = this;

	$(self.selector + ' .picNav .left,' + self.selector + ' .picNav .right').bind('mousedown',function(){
		$(this).addClass('active');	
	}).bind('mouseup',function(){
		$(this).removeClass('active');
	}).bind('click',function(){		
		if ( $(this).hasClass('left') ) {
			self.prevPhoto();
		} else {
			self.nextPhoto();
		}
	});
	
	$(self.selector + ' .picDisplay').bind('click',function(){
		self.nextPhoto();
	});
	
	return self;
}

PicViewer.prototype.setupMenu = function(){
	var self = this;
	$(self.selector + ' .picBar .picEditor').bind('click',function(e){
		if ( $(this).hasClass('on') ) {
			$(this).removeClass('on');
		} else {
			$(this).addClass('on');
		}
		e.stopPropagation();
	});
	
	$(document).bind('click',function(){
		$(self.selector + ' .picBar .picEditor').removeClass('on');
	});
	return self;
}

PicViewer.prototype.nextPhoto = function() {
	this.photoIndex += 1;
	if (this.photoIndex === this.photoLen) this.photoIndex = 0;
	this.showPhoto( this.photoIndex );
}

PicViewer.prototype.prevPhoto = function() {
	this.photoIndex -= 1;
	if (this.photoIndex < 0) this.photoIndex = this.photoLen - 1;
	this.showPhoto( this.photoIndex );
}