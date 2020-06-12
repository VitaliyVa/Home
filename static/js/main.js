
$(document).ready(function(){

    console.log($('.header_slider__block'));
    
    $('.header_slider__block').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    });

    var wow_1 = new WOW(
        {
          boxClass:     'absolute_block',      // animated element css class (default is wow)
          animateClass: 'absolute_style', // animation css class (default is animated)
          offset:       85,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true, 
        }
      );
      wow_1.init();

      var wow_2 = new WOW(
        {
          boxClass:     'bounce_block',      // animated element css class (default is wow)
          animateClass: 'bounceInUp', // animation css class (default is animated)
          offset:       85,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true, 
        }
      );
      wow_2.init();
      
      var wow_3 = new WOW(
        {
          boxClass:     'left_block',      // animated element css class (default is wow)
          animateClass: 'bounceInLeft', // animation css class (default is animated)
          offset:       85,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true, 
        }
      );
      wow_3.init();
      
      var wow_4 = new WOW(
        {
          boxClass:     'rubber_block',      // animated element css class (default is wow)
          animateClass: 'rubberBand', // animation css class (default is animated)
          offset:       85,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true, 
        }
      );
      wow_4.init();
      var wow_5 = new WOW(
        {
          boxClass:     'flip_block',      // animated element css class (default is wow)
          animateClass: 'bounceInRight', // animation css class (default is animated)
          offset:       85,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true, 
        }
      );
      wow_5.init();
      var wow_6 = new WOW(
        {
          boxClass:     'bounceD_block',      // animated element css class (default is wow)
          animateClass: 'bounceInDown', // animation css class (default is animated)
          offset:       85,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true, 
        }
      );
      wow_6.init();
      

        $('.open_modal').on('click', function() {
            $.fancybox.open({
                src: '#modal-form',
           });   
        });

        var inputHasFocus = $('.input_focus');
        inputHasFocus.on('focus', function() {
        let focusFinder = $(this).parents('.inp-vak-wrap').find('.label__style');
        focusFinder.addClass('label__style_active');
        });

        inputHasFocus.on('blur', function() {
        if ($(this).val().length < 1 || $(this).val() == '+38(___) __ __ ___') {
            let blurFinder =$(this).parents('.inp-vak-wrap').find('.label__style');
            blurFinder.removeClass('label__style_active');
        }
        
        });

        $(".scroll_all").on('click', function () {
          var elementClick = $(this).attr("href");
          // // console.log(elementClick);
          var destination = $(elementClick).offset().top;
          var destContacts = (destination - 600)
          $('html, body').animate({ scrollTop: destination }, 600);
          // console.log(destContacts);
          return false;
      });

  });