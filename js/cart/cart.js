$(document).ready(function(){        
    var $target = $($(".check_login_cart input[type=radio]:checked").attr("data-id"));
    $target.addClass("active");
    $(".check_login_cart input[type=radio]").change(function (e) {
        $target = $($(this).attr("data-id"));
        $(".show_login_id > div").removeClass("active");
        $target.addClass("active");
    });
    $(".box_login .ad_title").click(function (e){
        if($(this).parent().hasClass("active")){
            $(this).parent().removeClass("active");
            $(this).parent().find(".ad_content").stop().slideUp(700);
        }else{
            $(this).parent().addClass("active");
            $(this).parent().find(".ad_content").stop().slideDown(700);
        }
    });
});
