function Activate(code) {
    
    function _init() {
        $('#cannotActivate').css({display:'none'});
        var buttons = new Buttons;
        $('#username').focus();
        $('#activateButton').bind('click',function(){
        	$.ajax({
				async: true,
				dataType: 'json',
				type: 'POST',
				url: '/account/activateUser',
				data: {
        			username: $('#username').val(),
        			password: $('#password').val(),
        			reminder: $('#reminder').val(),
        			code: code
        		},
				beforeSend: function() {
					$('div#eventStatus').css({display:'block'});
				},
				success: function(json) {
					$('div#eventStatus').css({display:'none'});
					$('#activateError').removeClass('on').text('');
					if (json.errors.length > 0) {
						$('#activateError').addClass('on').text(json.errors[0]);
					} else {
						$('#activationForm').attr('action','/account').submit();
					}
				}
			});
        });
        $('#activationForm input').bind('keypress',function(e){
        	var code = e.keyCode || e.which;
			if(code == 13) { 
				$('#activateButton').click();
			}
        });
    }
    
    function _decline() {
    	$('#activationForm').css({display:'none'});
    }
   	
   	if (code != 'fake') {
    	_init();
    } else {
    	_decline();
    }
}