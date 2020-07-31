$(document).ready(function(){
    $('.slide-hotNews').slick({
            dots: true,
            arrows: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 8000,
            autoplay: true,
            lazyLoad: "progressive",
            slidesToShow: 1,
            slidesToScroll: 1  
    });          
});