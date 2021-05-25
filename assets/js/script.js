(function ($) {

    function responsiveNav() {
        $(".toggle-navbar").click(function () {
            $(this).toggleClass("toggle");
            $('.navbar').toggleClass("open");
            $('body').toggleClass('overflow-hidden');
        });
        if ($(window).width() >= 880) {
            $('.toggle-navbar').removeClass("toggle");
            $('.navbar').removeClass("open");
            $('body').removeClass('overflow-hidden');
        }
    }

    function slickSlider() {
        $('.slick-slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: $('.slick-left'),
            nextArrow: $('.slick-right'),
            dots: true,
            customPaging: function (slider, i) {
                var thumb = jQuery(slider.$slides[i]).data();
                return '<a>0' + (i + 1) + '</a>';
            },
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 720,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: false,
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    }

    var doAnimations = function() {

        // Calc current offset and get all animatables
        var offset = $(window).scrollTop() + $(window).height(),
            $animatables = $('.animation-scroll');

        // Unbind scroll handler if we have no animatables
        if ($animatables.length == 0) {
            $(window).off('scroll', doAnimations);
        }

        // Check all animatables and animate them if necessary
        $animatables.each(function(i) {
            var $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                $animatable.removeClass('animatable').addClass('animated');
            }
        });

    };

    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');

    $(document).ready(function () {
        responsiveNav();
        slickSlider();

    });

    $(window).resize(function () {
        responsiveNav();
    });

    $(window).scroll(function() {
    });

})(jQuery);