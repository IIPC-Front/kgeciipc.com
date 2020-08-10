$(document).ready(function() {
    $('.loader').delay(600).fadeOut("slow");
});

var Top = 100; 

$('body').scroll(function() {  
    var currentScroll = $('body').scrollTop();
    if (currentScroll >= Top) {
        $('nav').css({       
            position: 'fixed',
            top: '0',
            left: '0'
        });
    } else {                                   
        $('nav').css({                      
            position: 'relative'
        });
    }

});

$('.menu-btn').click(function() {
    $('nav').delay(200).fadeIn("slow")
});

$('.menu-close').click(function() {
    $('nav').delay(200).fadeOut("slow");
});