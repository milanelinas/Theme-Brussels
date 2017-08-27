$(document).ready(function(){



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dotsEach:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



$('.owl-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dotsEach:true,
    autoPlay: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.owl-testimonials').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dotsEach:true,
    autoPlay: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

});
