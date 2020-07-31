$(document).ready(function(){
    // ANIMATION LOADING PAGE
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 400,
        outDuration: 400,
        linkElement: '.animsition-link',
        timeout: true,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'body',
    });
    $(".animsition").on('animsition.inStart', function(){
        __ = $(this);
        __.addClass("begin-load-start");
        $("html").addClass("openmenu");
        $("#vnt-loading .background").append("<span></span>");
        // var hor = 8;
        // var ver = 6;
        // var cell_width=$(window).innerWidth() / hor;
        // var cell_height=$(window).innerHeight() / ver;
        // for (var i = (hor*ver) - 1; i >= 0; i--) {
        //     time = Math.random();
        //     // time=(time>0.5)?time-=0.3:time;
        //     time=0;
        //     $("#vnt-loading .background").append("<span></span>");
        //     $("#vnt-loading .background span:last-child").css({
        //         "transition-delay":time+"s",
        //         "width" : cell_width+"px",
        //         "height": cell_height+"px",
        //     });
        // }
    });
    $(".animsition").on('animsition.inEnd', function(){
        __ = $(this);
        setTimeout(function(){
            $("html").removeClass("openmenu");
            __.addClass("end-load-start");            
        },2000);
        setTimeout(function(){
            $("body").removeClass("compensate-for-scrollbar");
            $("#form-popup").fancybox({
             toolbar  : false,
             smallBtn : true
            }).trigger('click');
        },2000);        
    });
});