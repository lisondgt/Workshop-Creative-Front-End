(function ($) {

    function responsiveNav() {
        $(".toggle-navbar").click(function () {
            $(this).toggleClass("toggle");
            $('.navbar').toggleClass("open");
            $('body').toggleClass('overflow-hidden');
        });
        $("header nav a").click(function () {
            $(".toggle-navbar").removeClass("toggle");
            $('.navbar').removeClass("open");
            $('body').removeClass('overflow-hidden');
        });
        if ($(window).width() >= 880) {
            $('.toggle-navbar').removeClass("toggle");
            $('.navbar').removeClass("open");
            $('body').removeClass('overflow-hidden');
        }
    }

    function scrollSmooth() {
        $("a.anchor-link").on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();

                var hash = this.hash;


                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){
                    window.location.hash = hash;
                });
            }
        });
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
            ]
        });
    }

    var doAnimations = function() {

        var offset = $(window).scrollTop() + $(window).height(),
            $animatables = $('.section-animate');

        if ($animatables.length == 0) {
            $(window).off('scroll', doAnimations);
        }

        $animatables.each(function(i) {
            var $animatable = $(this);
            if (($animatable.offset().top) < offset) {
                $animatable.addClass('animated');
            }
        });

    };

    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');

    $(document).ready(function () {
        responsiveNav();
        scrollSmooth();
        slickSlider();

    });

    $(window).resize(function () {
        responsiveNav();
    });

    $(window).scroll(function() {
    });

})(jQuery);