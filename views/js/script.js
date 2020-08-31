$(document).ready(function() {
    $('.loader').delay(600).fadeOut("slow");

    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                  $('html,body').animate({
                    scrollTop: (target.offset().top - 100)
                  }, 1000);
                  return false;
                }
             }
       });
    });
    /* Animations */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeInRight');
    }, {
        offset: '70%'
    });
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInLeft');
    }, {
        offset: '70%'
    });
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeInUp');
    }, {
        offset: '70%'
    });
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated fadeInUp');
    }, {
        offset: '70%'
    });
    $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated fadeInUp');
    }, {
        offset: '70%'
    });
    $('.js--wp-6').waypoint(function(direction) {
        $('.js--wp-6').addClass('animated fadeInUp');
    }, {
        offset: '70%'
    });
});

var Top = 100; 

$(window).scroll(function() {  
    var currentScroll = $(window).scrollTop();
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