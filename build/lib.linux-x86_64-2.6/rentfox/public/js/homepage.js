function Homepage() {
    
    var current_pane = 1,
    	total_panes = $('#tourContent > .pane').size();
    
    function _init() {
        
        if (location.hash == '#signup') {
            _showSignUpFox();
        }
        
        $('#slideNav > li').bind('click',function(){
            _viewSlide($(this).attr('id'));
        });
        $('#slideViewer').bind('click',function(){
            _showNextSlide();
        });
        
        $('#tour-button').bind('click',function(){
        	_openTour();
        });
        $('#tour-close').bind('click',function(){
        	_closeTour();
        });
        $('.next-pane').bind('click',function(){
        	_showPane(current_pane + 1);
        });
        
        page.fox.foxDefaultMessage = 'signup';
        page.buttons.activate('a.login');
        
        _showPane(current_pane);
        _initButtons();
    }
   
    function _viewSlide(slideId) {
        $('#slideViewer').css({background: 'no-repeat url("/styles/img/'+slideId+'.png")'});
        $('#slideNav > li').removeClass('on');
        $('#'+slideId).addClass('on');
    }
    
    function _showNextSlide() {
        var listItem = $('#slideNav > li.on');
        var lastSlide = ($('#slideNav > li').length == $('#slideNav > li').index(listItem) + 1);

        if (lastSlide) {
            _viewSlide('slide_1');
        } else {
            _viewSlide(listItem.next().attr('id'));
        }
    }
    
    function _initButtons() {
        $('#signUpButton, #tour-signup-button').bind('click',function(){
            _showSignUpFox();
        });
        $('#signInButton').bind('click',function(){
            $('#signInForm').submit();
        });
        $('#signInForm input').bind('keypress',function(e){
            var code = e.keyCode || e.which;
            if(code == 13) {
                $('#signInForm').submit();
            } 
        });
        $('#termsLink').bind('click',function(){
        	_showTerms();
        });
        $('#privacyLink').bind('click',function(){
        	_showPrivacy();
        });
        $('#aboutLink').bind('click',function(){
        	_showAbout();
        });
        $('#supportLink').bind('click',function(){
        	_showSupport();
        });
        $('#contactLink').bind('click',function(){
        	_showContact();
        });
        
        $('#leads-button').bind('click',function(){
        	_showLeadsForm();
        });
    }

	function _showLeadsForm() {
        var opts = {
                url:"leads.html",
                callback:_leadsLogic
        };
        page.fox.center({x:100, y:-100}).display(opts);
    }
    
    function _leadsLogic() {
		$('#send-lead').bind('click',function(){
			$.ajax({
				url: '/marketing/sendLead',
				cache: false,
				data: {
				    name: $('#lead-name').val(),
				    email: $('#lead-email').val(),
				    phone: $('#lead-phone').val(),
				    message: $('#lead-message').val()
				},
				type: 'POST',
				dataType: 'json',
				beforeSend: function() {
				    page.ajaxStart();
				},
				success: function(json) {
					page.ajaxStop();
					if (json.errors.length) {
					    _displayErrors(json.errors);    
					} else {
						$('.error').remove();
						$('#lead-form').hide();
						$('#lead-thanks').show();
						$('#lead-name-thanks').text($('#lead-name').val());
					}
				}
	        });
		});
    	$('#lead-form input').bind('keypress',function(e){
            var code = e.keyCode || e.which;
            if(code == 13) {
                $('#send-lead').trigger('click');
            } 
        });
        $('#lead-phone').mask("(999) 999-9999");
    }
    
    function _showSignUpFox() {
        var opts = {
                url:"signup",
                callback:_signUpLogic
        };
        page.fox.center({x:100, y:-100}).display(opts);
    }
    
    function _signUpLogic() {
    	
        $('#step1 input').bind('keypress',function(e){
            var code = e.keyCode || e.which;
            if(code == 13) {
                _checkBasicInfo();
            } 
        });
        $('#step2 input').bind('keypress',function(e){
            var code = e.keyCode || e.which;
            if(code == 13) {
                _checkAuthInfo();
            } 
        });
         
        $('#foxhelper .button').bind('click',function(){
            label = $(this).attr('rel').length ? $(this).attr('rel') : $(this).attr('id');
            switch(label) {
                case 'step1':
                    _signUpShowStep(label);
                    break;
                case 'step2':
                    _signUpShowStep(label);
                    break;
                case 'checkBasicInfo':
                    _checkBasicInfo();
                    break;
                case 'checkLoginInfo':
                    _checkAuthInfo();
                    break;
                case 'signUpNow':
                    _signUpNow();
                    break;
                case 'agreeWithTerms':
                	_agreeWithTerms();
                	break;
            }
        });
        _signUpShowStep('step0');
        
        
        $('#recaptcha_response_field').live('keypress',function(e){
            var code = e.keyCode || e.which;
            if(code == 13) {
                _signUpNow();
            } 
        });
        Recaptcha.create("6LclDgwAAAAAAMjA9r5epZYJW_ZXXmqRcBq9vfeE",
            "captcha", {
           theme: "custom"
        });
        $('#signupPhone').mask('(999) 999-9999');
    }
    
    function _displayErrors(errors) {
        $('.error').remove();
        $.each(errors, function(i,val){
            var html = '<div class="error"><span><span>'+val.message+'</span></span></div>';
            $(val.selector).before(html);
        });
    }
    
    function _agreeWithTerms() {
    	_signUpShowStep('step1');
        $('#signupFName').focus();
    }
    
    function _signUpShowStep(step) {
        var stepNum = parseInt(step.replace('step',''));
        var barWidth = (stepNum - 1) * 100 / 3 + '%';
        
        if (parseInt(stepNum) === 0) {
        	$('.progress, #progressInfo').hide();
        } else {
        	$('.progress, #progressInfo').show();
        	$('#foxhelper .step').removeClass('on');
	        $('#'+step).addClass('on');
	        
	        $('#progressBar').animate({width:barWidth});
	        $('#progressInfo').text('Step '+stepNum+' of 3');
        }
        
    }
    
    function _checkBasicInfo() {
        $.ajax({
            url: '/account/signUpBasicInfoCheck',
			cache: false,
            data: {
                company: $('#signupCompany').val(),
                fname: $('#signupFName').val(),
                lname: $('#signupLName').val(),
                email: $('#signupEmail').val(),
                phone: $('#signupPhone').val()
            },
            type: 'POST',
            dataType: 'json',
            beforeSend: function() {
                page.ajaxStart();
            },
           success: function(json) {
                page.ajaxStop();
                if (json.errors.length) {
                    _displayErrors(json.errors);    
                } else {
                    $('.error').remove();
                    _signUpShowStep('step2');
                    $('#signupUsername').focus();
                }
           }
        });
    }
    
    function _checkAuthInfo() {
        $.ajax({
            url: '/account/signUpAuthInfoCheck',
			cache: false,
            data: {
                username: $('#signupUsername').val(),
                password: $('#signupPassword').val(),
                secret: $('#signupSecret').val()
            },
            type: 'POST',
            dataType: 'json',
            beforeSend: function() {
                page.ajaxStart();
            },
           success: function(json) {
                page.ajaxStop();
                if (json.errors.length) {
                    _displayErrors(json.errors);    
                } else {
                    $('.error').remove();
                    _signUpShowStep('step3');
                    $('#recaptcha_response_field').focus();
                }
           }
        });
    }
    
    function _signUpNow() {
        $.ajax({
            url: '/account/createNewClient',
			cache: false,
            data: {
                company: $('#signupCompany').val(),
                fname: $('#signupFName').val(),
                lname: $('#signupLName').val(),
                email: $('#signupEmail').val(),
                phone: $('#signupPhone').val(),
                username: $('#signupUsername').val(),
                password: $('#signupPassword').val(),
                secret: $('#signupSecret').val(),
                captchaChallenge: Recaptcha.get_challenge(),
                captchaResponse: Recaptcha.get_response()
            },
            type: 'POST',
            dataType: 'json',
            beforeSend: function() {
                $('#progressBar').css({width:'100%'});
                page.ajaxStart();
            },
           success: function(json) {
                page.ajaxStop();
                if (json.errors.length) {
                    _displayErrors(json.errors);
                    $('#recaptcha_image').hide('fast');
                    Recaptcha.reload();
                    Recaptcha.focus_response_field();
                    $('#recaptcha_image').show('fast');
                } else {
                    page.fox.dock();
                    _autoAuthorization();
                }
           }
        });
    }
    
    function _autoAuthorization() {
        $('#username').val($('#signupUsername').val());
        $('#password').val($('#signupPassword').val());
        $('#signInForm').submit();
    }
    
    function _openTour() {
    	$('#tour').fadeIn('fast', function(){
    		$('#tourContent').fadeIn(function(){
    			
    			$(document).bind('keydown',function(e){
    				var code = e.keyCode || e.which;
	                if (code == 37) { 
	                	if (current_pane > 1) _showPane(current_pane - 1);
	                    e.preventDefault();
	                } else if (code == 39) {
	                    if (current_pane < total_panes) _showPane(current_pane + 1);
	                    e.preventDefault();
	                } else if (code == 27) {
	                	_closeTour();
	                }
	            });
	            
    		});
    	});
    }
    function _closeTour() {
    	$('#tourContent').fadeOut('fast', function(){
    		$('#tour').fadeOut(function(){
    			$(document).unbind('keydown');
    		});
    	})
    }
    
    function _showPane(num) {
    	var exists = $('#tourpane-' + num).size();
    	current_pane = exists > 0 ? num : 1;
    	$('#tourContent > .pane').hide();
    	setTimeout(function(){
    		$('#tourpane-' + current_pane).show();
    	}, 1);
    }
    
    function _showTerms() {
        var opts = {
                url:"terms.html"
        };
        page.fox.center({x:0, y:-100}).display(opts);
    }
    
    function _showPrivacy() {
        var opts = {
                url:"privacy.html"
        };
        page.fox.center({x:0, y:-100}).display(opts);
    }
    
    function _showAbout() {
        var opts = {
                url:"about.html"
        };
        page.fox.center({x:0, y:-100}).display(opts);
    }
    
    function _showSupport() {
        var opts = {
                url:"support.html"
        };
        page.fox.center({x:0, y:-100}).display(opts);
    }
    
    function _showContact() {
        var opts = {
                url:"contact.html"
        };
        page.fox.center({x:0, y:-100}).display(opts);
    }
    
    
    
    _init();
}