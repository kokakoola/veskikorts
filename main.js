$(document).ready(function() {
    $('#flag div').hide();
    $('#flag div').first().show();
    $('#flag ul li').first().addClass('active');
   
    $('#flag ul li a').click(function(){
        $('#flag ul li').removeClass('active');
        $(this).parent().addClass('active');
        var currentDay = $(this).attr('href');
        $('#flag div').hide();
        $(currentDay).fadeIn();
        return false;
    });
    
    $('ul#slides').cycle( {
        fx: 'fade',
        timeout: 5000,
        speed: 2500,
        pause: 3
    });
    
    $('.error').hide();
    $(".button").click(function() {
        $('.error').hide();
            var name = $('input#name').val();
                if (name === '') {
                    $('label#nameerror').show();
                    $('input#name').focus();
                    return false;
                }
            var email = $('input#email').val();
                if (email === '') {
                    $('label#emailerror').show();
                    $('input#email').focus();
                    return false;
                }  
            var letter = $('textarea#letter').val();
                if (letter === '') {
                    $('label#lettererror').show();
                    $('textarea#letter').focus();
                    return false;
                }    
                
            var dataSring = 'name=' + name + '&email=' + email + '&letter=' + letter;
            alert (dataString); return false;
    $.ajax({
        type: 'POST',
        url: 'bin/process.php',
        data: dataString,
        success: function() {
            $('#contact_form').html('<div id="message"></div>');
            $('#message').html('<h6>Kiri saadetud!</h6>')
            .append('<p>Täname kirjutamast. Vastame peatselt.</p>')
            .hide()
            .fadeIn(1500);
        }
    });
    return false;                            
    
    });
    

    
    
});



