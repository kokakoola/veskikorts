

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
        pause: 2
    });
    
});



