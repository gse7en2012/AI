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
        pageName:['开始','种植站','生产站','包装站','商店'],
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
                freeMode: false,
                freeModeMomentum: false,
                freeModeMomentumBounceRatio: 5,
                pagination : '.wxj-pagination',
                paginationClickable :true,
                paginationBulletRender: function (index, className) {
                    return '<span class="' + className + '"><span>' + Gseven.pageName[index] + '</span></span>';
                },
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
                    'transform':'scale(1.1)',
                    'transformOrigin':'bottom'
                });
            }
            if(winSize.w>=1920){
                $('.swiper-slide,.gray').css({
                    'transform':'scale(1.2)',
                    'transformOrigin':'bottom'
                });
            }
            return mySwiper;
        }
    };
    Gseven.init();

    $(window).resize(function () {
        Gseven.init();
    });

    $(function() {
       // new Opentip(".bottle", "Optional content", "Optional title")
    });

})($);
