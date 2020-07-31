$(document).ready(function () {    
    $("#vnt-slide-home").slick({
        dots: false,
        arrows: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        fade: true
    });
    $('.slideProduct').slick({
            dots: true,
            arrows: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 800000,
            autoplay: true,
            speed: 1000,
            lazyLoad: "progressive",
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    $('.slNews').slick({
            dots: false,
            arrows: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 8000,
            autoplay: true,
            speed: 1000,
            lazyLoad: "progressive",
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [                
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 361,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });   
    $(".slideReview").slick({
        dots: true,
        arrows: false,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 4000
    });
    $('.slideLogo').slick({
            dots: true,
            arrows: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 8000,
            autoplay: true,
            speed: 1000,
            lazyLoad: "progressive",
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [   
              {
                    breakpoint: 980,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },                             
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },                             
                {
                    breakpoint: 380,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
});