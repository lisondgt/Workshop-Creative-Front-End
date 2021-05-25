(function ($) {

    function responsiveNav() {
        $(".toggle-navbar").click(function() {
            $(this).toggleClass("toggle");
            $('.navbar').toggleClass("open");
            $('body').toggleClass('overflow-hidden');
        });
        if($(window).width() >= 880) {
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
            customPaging : function(slider, i) {
                var thumb = jQuery(slider.$slides[i]).data();
                return '<a>0'+(i+1)+'</a>';
            }
        });
    }

    $(document).ready(function(){
        responsiveNav();
        slickSlider();

    });

    $( window ).resize(function() {
        responsiveNav();
    });

})(jQuery);