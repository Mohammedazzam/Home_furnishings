$(document).ready(function(){

    //slider height
    // $('.owl-carousel .item').height($(window).height())
    // $(window).resize(function(){
    //     $('.owl-carousel .item').height($(window).height())
    // })

    //owl carousal
    $('.header .owl-carousel').owlCarousel({
        loop:true,
        items:1,
        autoplay:true,
        animateOut:'fadeOut',
        smartSpeed:450
    })

        //owl carousal
        $('.brands .owl-carousel').owlCarousel({
            loop:true,
            autoplay:true,
            responsive:{0:{items:2}, 768:{items:4}, 992:{items:6}}
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


    //counterup

    const counters = document.querySelectorAll('.about .num')
    const delay = 200;

    counters.forEach(counter => {
        const updateCount= () => {
            const target = counter.getAttribute('data-target')
            const count = +counter.innerText;
            const speed = target /delay;

            if(count < target){
                counter.innerText = Math.floor(count + speed);
                setTimeout(updateCount,1);    
            }
            else{
                counter.textContent = target
            }
            console.log(speed)
            // console.log(target)
        }

        updateCount();
    })

    //count down
    var content = $('.countdown').html()
  $('.countdown').countdown('2021/01/01', function(event) {
    $(this).html(event.strftime(content));
  });


})