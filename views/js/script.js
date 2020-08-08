$(document).ready(function() {
    $('.loader').delay(400).fadeOut("slow");
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