$(document).ready(function(){   
    $('#vnt-thumbnail-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: false,
          asNavFor: '#vnt-thumbnail-nav',
          fade: true
        });
    if ($('#vnt-thumbnail-nav').find(".item").length <= 1) {
      $('#vnt-thumbnail-nav').hide();
    }
    $("#vnt-thumbnail-nav").slick({
        slidesToShow:5,
        slidesToScroll:1,
        asNavFor:"#vnt-thumbnail-for",
        focusOnSelect: true,
        arrows:false,  
        speed: 1000,
        responsive: [                                
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 321,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
            ]     
    });    
    $('.slideProj').slick({
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
                    breakpoint: 840,
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
});