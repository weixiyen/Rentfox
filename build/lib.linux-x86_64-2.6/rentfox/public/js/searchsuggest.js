(function($) {

$.fn.searchsuggest = function(type) {
	var self = this;
	var settings = {};
	settings.type = type;
	settings.total = 0;
	settings.ready = 1;
	var container = $(this).parent();
	var input = container.find('input');
	
	$(input).bind('keyup', function(e) {
		
		if (e.keyCode != 40 && e.keyCode != 38 && e.keyCode != 8 && e.keyCode != 13) {
			var q = $(input).val();
			q = $.trim(q);
			$('.suggestSearch').remove();
			if (q.length && settings.ready) {
				settings.ready = 0;
				$(container).removeClass('search');
				suggest();
			}
		} else {
			actionKey(e.keyCode);
		}
	})
	
	$(input).blur(function() {
		$('.suggestSearch').remove();
	});
	
	function actionKey(keyCode) {
		if (keyCode == 40) {
			// down key
			var el = $('.suggestSearch div:last');
			if (!el.hasClass('on')) {
				$('.suggestSearch div.on').removeClass('on').next().addClass('on');
			} 
			if (!$('.suggestSearch div.on').length) {
				$('.suggestSearch div:first').addClass('on');
			}
		} else if (keyCode == 38) {
			// up key
			var el = $('.suggestSearch div:first');
			if (!el.hasClass('on')) {
				$('.suggestSearch div.on').removeClass('on').prev().addClass('on');
			} else {
				$('.suggestSearch div.on').removeClass('on')
			}
		} else if (keyCode == 8) {
			// delete key
			$('.suggestSearch').remove();
			$(container).removeClass('search');
			var q = $(input).val();
			q = $.trim(q);
			if (settings.ready && q.length) {
				settings.ready = 0;
				suggest();
			} else {
				settings.ready = 1;
			}
		} else if (keyCode == 13) {
			// return key
			var selected = $('.suggestSearch div.on');
			var type = selected.removeClass('on').attr('class');
			var id = selected.attr('id');
			var text = selected.text();
			
			settings.curId = id;
			settings.curType = type;
			
			$(input).val(text);
			$('.suggestSearch').remove();
			container.removeClass().addClass('search field').addClass(type).attr('id', id);
		} 
	};
	
	
	
	$('.suggestSearch div').live('mouseover', function() {
		$('.suggestSearch div').removeClass('on');
		$(this).addClass('on');
	})
	
	var suggest = function() {
		var q = $(input).val();
		q = $.trim(q);
		if (q.length) {
			$.ajax({
				url: '/search/find',
				type: 'GET',
				data: 'q='+q+'&page='+1+'&limit='+6+'&filter='+settings.type,
				dataType: 'json',
				async: true,
				success: function(json) {
					self.json = json;
					settings.ready = 1;
					showDrop();
				}
			});
		}
		
		function showDrop() {
			var html = '';
			$.each(self.json.results, function(i, val) {
				html += '<div id="'+val.id+'" class="'+val.type+'">'+val.title+'</div>';
			});
			if (html) {
				$(container).append('<div class="suggestSearch"></div>');
				$('.suggestSearch').html(html)
				$('.suggestSearch div:first').addClass('on');
				settings.total = $('.suggestSearch div').length;
				
			}
		}
		$('.suggestSearch div').live('mousedown', function() {
		
			var selected = $('.suggestSearch div.on');
			var type = selected.removeClass('on').attr('class');
			var id = selected.attr('id');
			var text = selected.text();
			
			settings.curId = id;
			settings.curType = type;
			$(this).parents().siblings('input').val(text);
			container.removeClass().addClass('search field').addClass(type).attr('id', id);
			$('.suggestSearch').remove();
			return false;
		});
	}
	
	return self;
}

})(jQuery);