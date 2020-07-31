$(document).ready(function(){      
    //Arcordion          
    $(".panel-heading").on("click", function() {
                        $(this).parents(".panel").toggleClass("active");
                      });
    var h_content = $('.over_hidden').outerHeight();
    if (h_content <= 60) {
        $('.button_show_hidden').hide();
        $('.content_show_hidden').css('height',h_content);
    }
    else {
        $('.button_show_hidden').show();
    }
    $(".button_show_hidden a").click(function (e) {
        if(!$(this).parent().hasClass("active_hidden")){
            $(this).parent().addClass("active_hidden");
            $(this).html("<span>" + $(this).data("hidden") + "</span>");
            var get_height = $(this).parents(".w_content_show_hidden").find(".content_show_hidden .over_hidden").innerHeight();
            $(this).parents(".w_content_show_hidden").find(".content_show_hidden").addClass("active_show").css('height','auto');
        }else{
            $(this).parent().removeClass("active_hidden");
            $(this).html("<span>" + $(this).data("show") + "</span>");
            $(this).parents(".w_content_show_hidden").find(".content_show_hidden").removeClass("active_show").stop().animate({
                height: "60px"
            },50);
            // jQuery('html,body').animate({scrollTop: ($(this).parents(".w_content_show_hidden").offset().top - 70)},50);
        }
    });     
});