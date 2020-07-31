/*
===============================
============MNFIXED============
===============================
      Version: 1.1
       Author: Hoang Minh Ngoc
Date Publish : 28/09/2017
*/
(function($){
    class mnfixed{
        constructor(ele,opt){
            this.ele = ele;
            this.defaults = {
                limit:'',
                top:0,
                break:0
            };
            this.options = $.extend({},this.defaults,opt);
            this.init();
            this.run();
        }
    }
    mnfixed.prototype.init = function(){
        var _ = this;
        // WRAP ELEMENT TO CLASS
        _.ele.wrap("<div class='mnfixed_self'></div>");
        _.ele.parents(".mnfixed_self").wrap("<div class='mnfixed_wrap'></div>");
        // SET VAR
        _.self  = _.ele.parents(".mnfixed_self");
        _.wrap  = _.ele.parents(".mnfixed_wrap");
        _.limit = $(_.options.limit);
        _.top   = _.options.top;
        _.break = _.options.break;
        // SETUP WIDTH AND POSITION
        _.self.css({
            "width":_.ele.outerWidth(),
            "z-index":"1000"
        });
        _.self.parents(".mnfixed_wrap").css({
            "position":"relative",
            "height": $(_.ele).outerHeight()
        });
    }
    mnfixed.prototype.run = function(){
        var _ = this;
        $(window).bind("scroll", function(){
            _.a = $(window).scrollTop() + _.top;
            _.b = _.wrap.offset().top;
            if(typeof _.limit.offset()=="object"){
                _.c = _.limit.offset().top + _.limit.outerHeight();
                _.d = _.wrap.offset().top + _.wrap.outerHeight() + _.top;
                _.e = $(window).scrollTop() + _.wrap.outerHeight() + _.top;
                if((_.c > _.d) && (_.a>=_.b) && ($(window).innerWidth() > _.break)){
                    if(_.e > _.c){
                        _.C();
                    }
                    else{
                        _.A();
                    }
                }
                else{
                    _.B();
                }  
            }
            else if((_.a>=_.b) && ($(window).innerWidth() > _.break)){
                _.A();
            }
            else{
                _.B();
            }
        });
        $(window).resize(function(){
            _.self.css({
                "width":_.wrap.outerWidth()
            });
            _.wrap.css({
                "position":"relative",
                "height": _.self.outerHeight()
            });
            if($(window).innerWidth() > _.break){
                if(_.ele.hasClass("mnfixed_fixed")){
                    _.A();
                }
                else if(_.ele.hasClass("mnfixed_fixed_fixed")){
                    _.D();
                }
            }
            else{
                _.E();
            }
        });
    }
    mnfixed.prototype.A = function(){
        var _ = this;
        _.ele.addClass("mnfixed_fixed");
        _.self.css({
            "position":"fixed",
            "top":0 + _.options.top,
            "left":_.wrap.offset().left
        });
    }
    mnfixed.prototype.B = function(){
        var _ = this;
        _.ele.removeClass("mnfixed_fixed");
        _.self.css({
            "position":"initial",
            "top":"initial",
            "left":"initial"
        });
    }
    mnfixed.prototype.C = function(){
        var _ = this;
        _.self.removeClass("mnfixed_fixed");
        _.self.addClass("mnfixed_fixed_fixed");
        _.self.css({
            "position":"absolute",
            "top":_.c - _.b - _.self.outerHeight(),
            "left":0,
        });
    }
    mnfixed.prototype.D = function(){
        var _ = this;
        _.self.removeClass("mnfixed_fixed_fixed");
        _.self.addClass("mnfixed_fixed");
    }
    mnfixed.prototype.E = function(){
        var _ = this;
        _.ele.removeClass("mnfixed_fixed");
        _.ele.removeClass("mnfixed_fixed_fixed");
        _.self.removeClass("mnfixed_fixed");
        _.self.removeClass("mnfixed_fixed_fixed");
        _.self.css({
            "position":"initial",
            "left":"initial",
            "width":"initial",
            "top":"initial"
        });
        _.wrap.css({
            "position":"relative",
            "height": "initial"
        });
    }
    $.prototype.mnfixed = function(options) {
        var _ = this;
        if(typeof _.offset() == "object"){
            var opt = arguments[0];
            _ = new mnfixed(_, opt);
        }
        else{
            console.log("No Excertion !!!!!, ["+_+"]");
        }
    }
})(jQuery);