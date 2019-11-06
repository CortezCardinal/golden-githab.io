$(window).scroll(function(){
//  --(Active Menu)--
$('div[id], h2[id],header[id]').each(function(){
    var id = $(this).attr('id');
    if($(this).offset().top-100 < $(window).scrollTop())
    {
        $('a[href="#'+id+'"]').addClass('menu__link_active').siblings().removeClass('menu__link_active');
    }
}); 
//  --(Active Menu)--
});
$(document).ready(function () 
{
//     $(".menu__btn").click(function() {
//     $('.menu__active').toggle();
// });

    //  --(Scroll Top)--
    const buttonUP = $('.btn__up');
    $('body').append('<button class="btn__up" />');
    buttonUP.click(function(){
    $('body, html').animate({'scrollTop':0}, 1000);  
    });
    $(window).scroll(function(){
    if($(window).scrollTop() > 100)
    {
       buttonUP.addClass('btn__up-active');
    }
    else
    {
        buttonUP.removeClass('btn__up-active');
    }

   }); 
    function hideShow()
    {
        var scrollTop = $(document).scrollTop();
        if(scrollTop > 200 && !buttonUP.hasClass("btn__up-active"))
        {
            buttonUP.addClass("btn__up-active");
        }
        else
        {
            if(scrollTop < 200 && buttonUP.hasClass("btn__up-active"))
               {
                   buttonUP.removeClass("btn__up-active");
               }
        }
    }
    $(document).scroll(function(){
    hideShow();
    });
    hideShow();
    //  --(Scroll Top)--
    //  --(Burger Menu)--
     $(document).on('click', function(e) {
  if (!$(e.target).closest(".header__menu").length) {
    $('.menu__btn').removeClass('menu__btn_active');
    $('.menu').removeClass('menu__active'); 
    //если не попадаешь по menu оно закрывается
  } 
});
    $('.menu__btn').on('click', function(e) 
    {e.preventDefault();
    $('.menu').toggleClass('menu__active'); 
    });
    $('.menu__btn').on('click', function(e) {
    e.preventDefault;
        $(this).toggleClass('menu__btn_active');
    });
    $('a[href^="#"]').click(function () {
    //Сохраняем значение атрибута href в переменной:
    var target = $(this).attr('href');
     $('html, body').animate({  
    scrollTop: $(target).offset().top - 50//можно вычесть высоту меню
    }, 500);
  // return false;
});
   //  --(Burger Menu)--
    
}); 
$(document).ready(function(){
    const portfolio__carousel = $('#portfolio__carousel');
    const portfolioSliderLeft = $('#portfolioSliderLeft');
    const portfolioSliderRight = $('#portfolioSliderRight');
    const owl = $('.owl-carousel');

portfolioSliderLeft.click(function(){
    portfolio__carousel.trigger('prev.owl.carousel');
})

portfolioSliderRight.click(function(){
portfolio__carousel.trigger('next.owl.carousel');
})

owl.owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,

    responsive:{
        0:{
            items:1,
           
        },
        480:{
            items:2,
           
        },
        611:{
            items:2,
          
        },
        620:{
            items:3,
            
        },
        1000:{
            items:4,
            
            loop:true
        }
    }
})

});
 
// --(Preloader)--
    setInterval(()=>{
    let p = $('.preloader');
    p.css('opacity', 0);
    setInterval(()=> 
    p.remove() * 1100
    );
}, 1100);
//  --(Preloader)--
 
