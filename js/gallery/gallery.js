$(document).ready(function(){
    $(".sl-gallery").slick({
        slidesToShow: 1,
        autoplay: true,
        // pauseOnHover:false,
        // pauseOnFocus:false,
        speed: 1000,
        autoplaySpeed: 12000,
        infinite: false,
        responsive: [                                
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 540,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
    });
    $(".sl-otherVideo").slick({
        slidesToShow: 3,
        autoplay: true,
        // pauseOnHover:false,
        // pauseOnFocus:false,
        speed: 1000,
        autoplaySpeed: 12000,
        infinite: false,
        responsive: [                                
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 421,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
    }); 
});