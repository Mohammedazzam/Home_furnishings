$(document).ready(function(){

    //slider height
    $('.owl-carousel .item').height($(window).height())
    $(window).resize(function(){
        $('.owl-carousel .item').height($(window).height())
    })

    //owl carousal
    $('.owl-carousel').owlCarousel({
        loop:true,
        items:1,
        autoplay:true,
        animateOut:'fadeOut',
        smartSpeed:450
    })
})