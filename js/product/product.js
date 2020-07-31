$(document).ready(function(){ 
    $('#vnt-thumbnail-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          autoplay: false,
          asNavFor: '#vnt-thumbnail-nav',
          fade: true
        });
    if ($('#vnt-thumbnail-nav').find(".item").length <= 1) {
      $('#vnt-thumbnail-nav').hide();
    }
    $("#vnt-thumbnail-nav").slick({
        slidesToShow:3,
        slidesToScroll:1,
        asNavFor:"#vnt-thumbnail-for",
        focusOnSelect: true,
        arrows:true,  
        speed: 1000     
    });        
    var numSlides = $('.slVideo').children().length;
    console.log(numSlides);
    numSlides > 3 ? numSlides = 3 : numSlides--;
    $('.slVideo').slick({
        slidesToShow : numSlides,
        centerMode:true,
        centerPadding: "0px",
        autoplay:true,
        variableWidth: true,        
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    variableWidth: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 360,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.slideProduct').slick({
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
    // FIXED HEADER
    var header = $("#vnt-header"),
        tab = $('#contentScroll'),
        foo = $('.otherItems');   
    $(window).on("scroll",function(){      
      if (tab.length) {var tab_top = tab.offset().top;}
      if (foo.length) {var foo_top = foo.offset().top;}
      if($(window).scrollTop()>=tab_top&&$(window).scrollTop()<foo_top){
        $(".menuFix").addClass("fixed");
        header.addClass("andi");              
      } else {
        $(".menuFix").removeClass("fixed");
        header.removeClass("andi");
        if($(window).scrollTop()<tab_top&&$(window).scrollTop()>header_top){
           $("#vnt-header .mainHead").addClass("fixed"); 
        } else {
          if($(window).scrollTop()>foo_top){
            $(".menuFix").removeClass("fixed");
            $("#vnt-header .mainHead").addClass("fixed");             
          } 
        }
      }       
    });   
    $(window).scroll(function(){
      var $winOffset=$(window).scrollTop();
      $(".boxProContent .boxSection").each(function(){
        var $ih = $(this).innerHeight();
        var $io = $(this).offset().top;
        var $ihref = $(this).attr("id");
        var $iho = $ih + $io;
        var $ahref = ".menuFix a[href='#"+ $ihref +"']";
        if(($io - 60) < $winOffset  && ($iho - 40) > $winOffset){
          $(".menuFix li").removeClass("current");
          $($ahref).parents("li").addClass("current");
        }
      });
    });        
    $(".anchorlink").click(function(){
      if($(this).parents(".boxMenu").hasClass("active")){
        $(this).parents(".boxMenu").removeClass("active");
      }
    });
});