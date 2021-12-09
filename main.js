$(document).ready(function(){

    type="text/javascript">
     $('#slider .owl-carousel').owlCarousel({
    items:1,
    loop:true,
    nav:true,
    dots:true,
    autoplay:true,
    autoplaySpeed:1000,
    smartSpeed:1500,
    autoplayHoverPause:true,

});

});


$(document).ready(function(){

    type="text/javascript">
$('.sumu1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
});

$(document).ready(function(){

    type="text/javascript">
$('#slider4').owlCarousel({
    loop:true,
    margin:10,
    nav:false,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
});
