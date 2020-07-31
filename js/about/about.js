$(document).ready(function($) {
	// FIXED HEADER
    var header = $("#vnt-header"),
        tab = $('#contentScroll'),
        foo = $('#vnt-footer');   
    $(window).on("scroll",function(){      
      if (header.length) {var header_top = header.offset().top;}
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
      $(".vnt-about .boxSection").each(function(){
        var $ih = $(this).innerHeight();
        var $io = $(this).offset().top;
        var $ihref = $(this).attr("id");
        var $iho = $ih + $io;
        var $ahref = ".menuFix a[href='#"+ $ihref +"']";
        if(($io - 60) < $winOffset  && ($iho - 40) > $winOffset){
          $(".menuFix li").removeClass("active");
          $($ahref).parents("li").addClass("active");
        }
      });
    });        
    $(".menuClick a[href^='#'],.select-j a[href^='#']").click(function(){
          if($(this).parents(".menuClick").hasClass("active")){
              $(this).parents(".menuClick").removeClass("active");
          }          
          var op=$(this).attr("href");
          var opOffset=$(op).offset().top - 59;
          $('html,body').animate({scrollTop: opOffset},500);
          return false;
      });
});	