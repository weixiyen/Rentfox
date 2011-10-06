function PreviewModal() {
	
	var self = this;
	this.modal = $('#previewModal');
	this.img = $('#previewModal img');
	
	$('#previewModal .close').bind('click', function() {
		self.modal.hide();
	});
}

PreviewModal.prototype.show = function( src ) {
	var self = this;
	this.modal.show();
	this.img.show().attr('src', src);
}

PreviewModal.prototype.hide = function() {
	this.modal.hide();
	this.img.hide().attr('src', '');
}