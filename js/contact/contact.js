$(document).ready(function () {
    $('.view-map-contact a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            $(this).tab('show');
            var target = $(this).attr("href");
            $(".list-tab li").each(function () {
                $(this).removeClass("active");
                if ($(this).find("a").attr("href") == target) {
                    $(this).addClass("active");
                    $(".mc-menu-tab").text($(this).text());
                }
            });
            $("html,body").animate({
                scrollTop: $(".map-contact").offset().top - 70
            }, 1000);
        }
    });
    $('.list-tab li a').click(function () {
        $(this).parents(".menuTab-contact").removeClass("active");
        $(".mc-menu-tab").text($(this).text());
    });
    function removeLocationHash() {
        var noHashURL = window.location.href.replace(/#.*$/, '');
        window.history.replaceState('', document.title, noHashURL)
    }

    window.addEventListener("popstate", function (event) {
        removeLocationHash();
    });
    window.addEventListener("hashchange", function (event) {
        event.preventDefault();
        removeLocationHash();
    });
    window.addEventListener("load", function () {
        removeLocationHash();
    });
    $(".map-contact .list-tab li").click(function () {
        get_hh();
    });
    function get_hh() {
        var t = $(".list-tab li.active a").text();
        $(".map-contact .mc-tab").text(t);
    }

    get_hh();
    $(".map-contact .mc-menu-tab").click(function () {
        if (!$(this).parents(".menuTab-contact").hasClass("active")) {
            $(this).parents(".menuTab-contact").addClass("active");
        }
        else {
            $(this).parents(".menuTab-contact").removeClass("active");
        }
    });
    $(window).click(function (e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("menuTab-contact")) {
            $(".menuTab-contact").removeClass("active");
        }
    });
});