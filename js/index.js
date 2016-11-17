/**
 * Created by zhuzhipeng on 2016/11/12.
 */


;(function ($) {
    var Gseven = {
        getWinSize: function () {
            return {
                w: $(window).width(),
                h: $(window).height()
            }
        },
        init: function () {
            this.setSwiper();
        },
        setSwiper: function () {
            var winSize=this.getWinSize();
            var swiperWidth = winSize.w < 1350 ? 1350 : winSize.w;
            $('.page').height(winSize.h);
            var mySwiper    = new Swiper('.swiper-container', {
                // Optional parameters
                direction: 'horizontal',
                //loop: true,
                speed: 2000,
                width: swiperWidth,
                freeMode: true,
                freeModeMomentum: false,
                freeModeMomentumBounceRatio: 5,
                keyboardControl: true,
                mousewheelControl: true,
                slideActiveClass: 'active',
                onSlideChangeEnd:function(sw){
                    //console.log(sw);
                    //$('.animated').addClass('replay-animate').removeClass('animated');
                    //setTimeout(function(){
                    //    $('.replay-animate').addClass('animated').removeClass('replay-animate')
                    //},500)
                }
            });

            if(winSize.w>=1680){
                $('.swiper-slide,.gray').css({
                    'transform':'scale(1.2)',
                    'transformOrigin':'bottom'
                });
            }
            return mySwiper;
        },
    };
    Gseven.init();

    $(window).resize(function () {
        Gseven.init();
    });

    $(function() {
       // new Opentip(".bottle", "Optional content", "Optional title")
    });

})($);
