function Page() 
{
	var self = this;

	self.nav = new Foxmenu;
	self.fox = new Foxhelper;
	self.thumbnail = new Thumbnail;
	self.inputText = new SetInputText;
	self.buttons = new Buttons;
	self.previewModal = new PreviewModal;
	self.errors = new Errors;
	
	$('#header .find button').bind('click', function() {
		var search = $('#header .searchbox').val();
		if (!search.match(/^[a-zA-Z0-9]+$/i)) {
			page.fox.message({
				message:'Search only accepts letters and numbers. \
					Please try again.',
				close: function(){
					parentTR.removeClass('selected');
				},
				offset: {x:200,y:0}
			});
			return false;
		}
	})
	
	
	return self;
}

Page.prototype.ajaxStart = function() {
	$('div#eventStatus').css({display:'block'});
}

Page.prototype.ajaxStop = function() {
	var self = this;
	$('div#eventStatus').css({display:'none'});
	return self;
}

Page.prototype.request = function(data) {
	var self = this;
	var async = data.async ? data.async : false;
	var type = data.type ? data.type : 'POST';
	var dataType = data.dataType ? data.dataType : 'json';
	var request = data.request ? data.request : '';
	var url = data.url ? data.url : '';
	var offset = data.offset ? data.offset : {x:0, y:0};
	var errorHandler = data.errorHandler ? data.errorHander : function(errors){
		self.errors.prompt({
			errors: errors, 
			offset: offset
		});
	}
	
	$.ajax({
		async: async,
		dataType: dataType,
		type: type,
		url: url,
		cache: false,
		data: request,
		beforeSend: function() {
			self.ajaxStart();
		},
		error: function(request, status, errorThrown) {
			self.fox.center().display({
				url: 'ajaxerror',
				callback: function() {
					$('#refreshButton').bind('click', function(){
						location.reload(true);
					});
				}
			});
			self.ajaxStop();
		},
		success: function(json) {
			self.ajaxStop().errors.clear();
			if (json.errors) {
				errorHandler(json.errors);
			} else {
				self.fox.dock();
				data.success(json);
			}
		}
	});
}

Page.prototype.makeHash = function(k,v) {
	var kv = k+'='+v;
	var hash = location.hash.replace(/^.*#/, '');
	var hashArr = hash.split(',');
	var bookmark = -1;
	
	var index = ''.indexOf(hashArr);
	if (index>=0) {hashArr.remove(index)}
	
	for ( var i=0; i<hashArr.length; i++ ){
		var val = hashArr[i].split('=');
		if (k == val[0]) {
			var bookmark = i;
			break;
		}
	}
	if (bookmark>=0) { hashArr.remove(bookmark); }

	hashArr.push(kv);
	return hashArr.join(',');
}

Page.prototype.makeMultipleHash = function() {
	var hash = location.hash.replace(/^.*#/, '');
	var hashArr = hash.split(',');
	
	var bookmark = -1;
	
	for (var i = 0, j = arguments.length; i < j; i++) {
		
		var arg = arguments[i];
		var kv = arg[0]+'='+arg[1];
		for ( var k=0; k<hashArr.length; k++ ){
			var val = hashArr[k].split('=');
			if (arg[0] == val[0]) {
				var bookmark = k;
			}
		}
		if (bookmark>=0) { hashArr.remove(bookmark); }
		
		hashArr.push(kv);
		
	}
	hashArr = $.grep(hashArr,function(n,i){
	    return(n);
	});
	return hashArr.join(',');
	
}

Page.prototype.getHashVal = function(k) {
	var hash = location.hash.replace(/^.*#/, '');
	var hashArr = hash.split(',');
	var index = ''.indexOf(hashArr);
	if (index>=0) {hashArr.remove(index)}
	var val = 0;
	$.each(hashArr, function(i, v){
		v = v.split('=');
		if (k == v[0]) {
			val = v[1];
		}
	});
	return val;
}