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
            var swiperWidth = winSize.w < 1440 ? 1440 : winSize.w;
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
            });
            return mySwiper;
        },
    };
    Gseven.init();

    $(window).resize(function () {
        Gseven.init();
    });


})($);