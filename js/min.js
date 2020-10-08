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

    //side-menu
    $('.menu').on('click',function(){
        $('.side-menu').toggleClass('open')
    })

    $('.fa-times').on('click',function(){
        $('.side-menu').removeClass('open')
    })


    //toggle nav

    $(window).scroll(function(){
        if($(this).scrollTop()>= 30){
            $('.nav-left').fadeOut(500);
            $('.nav-top').fadeIn(500);
        }
        else{
            $('.nav-left').fadeIn(500);
            $('.nav-top').fadeOut(500);
        }
    })
})