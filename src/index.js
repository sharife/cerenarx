// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
// console.log("🦊 Hello! Edit me in src/index.js");




$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + ($(this).outerHeight() * .5);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1', 'padding-top': '-10px'},350);
            }
        });
    });
});



$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        }//,
        // 600:{
        //     items:1
        // },
        // 1000:{
        //     items:1
        // }
    }
  })
});