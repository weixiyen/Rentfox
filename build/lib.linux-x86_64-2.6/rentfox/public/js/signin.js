function SignIn() {
    
    function _init() {
        
        _checkRedirect();
        
        var buttons = new Buttons;
        
        $('#username').focus();
        
        $('#signInButton').bind('click',function(){
           $('#signInForm').submit(); 
        });
        
        $('#signInForm input').bind('keypress',function(e){
            var code = e.keyCode || e.which;
            if(code == 13) {
                $('#signInForm').submit();
            } 
        });
        
        $('.forgotEmail').bind('click',function(){
            _showEmailView();
        });
        
        $('.back').bind('click',function(){
            _showDefaultView(); 
        });
        $('#signInAgain').bind('click',function(){
            _showDefaultView('password'); 
        });
        $('#remindMe').bind('click',function(){
            $.ajax({
                url: '/account/recoverPasswordByEmail',
				cache: false,
                data: {
                    email: $('#email').val()
                },
                type: 'POST',
                dataType: 'json',
                beforeSend: function() {
                    $('div#eventStatus').css({display:'block'});
                },
               success: function(json) {
                    $('div#eventStatus').css({display:'none'});
                    if (json.error) {
                        $('#emailError').text(json.error).css({display:'block'});   
                    } else {
                        $('#emailError').css({display:'none'});
                        _showHintView(json.username, json.secret);
                    }
               }
            });
             
        });
        $('#email').bind('keypress',function(e){
            var code = e.keyCode || e.which;
            if(code == 13) {
                $('#remindMe').click();
            } 
        });
    }
    
    function _showEmailView() {
        $('.view').removeClass('on');
        $('.view.emailReminder').addClass('on');
        $('#email').focus();
    }
    
    function _showDefaultView(focus) {
        $('.view').removeClass('on');
        $('.view.default').addClass('on');
        if (focus == 'password') {
            $('#password').focus();
        } else {
            $('#username').focus();
        }
    }
    
    function _showHintView(username, secret) {
        $('#username').val(username);
        $('#passwordSecret').text(secret);
        $('#emailRecoveryDestination').text($('#email').val());
        $('.view').removeClass('on');
        $('.view.hint').addClass('on');
    }
    
    function _checkRedirect() {
    	if (location.hash) {
    		location.href = location.hash.replace(/^.*#/, '');
    	}
    }
    
    _init();
}