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
        pageName:['开始','种植站','生产站','包装站','专卖店'],
        init: function () {
            this.setSwiper();
            this.setCloseTrigger();
            this.storyOpenTrigger();
        },
        setCloseTrigger:function(){
            $('.close-btn').on('click', function(event) {
                var bw = $('.intro-modal').width();
                $(this).closest('.intro-modal').animate({
                    right: -bw
                }, 300);
                $(this).closest('.intro-modal').removeClass('open').addClass('close');
            });
        },
        storyOpenTrigger:function(){
            var _this=this;
            $('.story').on('click', function(event) {
                var index = Number($(this).attr('index'));
                $('.intro-main').html(_this.getIntro(index));
                $('.intro-modal').animate({
                    right: 0
                }, 300);
                $('.intro-modal').removeClass('close').addClass('open');
            });
        },
        storyList:[
            {
                name:'杨海林',
                title:'提取部提取岗位员工',
                age:'工作年限9年',
                word:'“在高温之下，始终坚持将每一个流程进行人工复核<br>只为了极致的标准。”',
                img:'images/page3/yhl.jpg',
                content:'100%的极致<br>杨海林每天的任务，除了在总控制室操作提取浓缩的各个工序，还要在高温的提取浓缩部进行检核的工作。无限极引进国内领先的提取浓缩自动化技术，增健药液的浓缩指标为1300公斤，当达到指标时机器会自动监测停止。尽管已实现机器自动化，但为了精益求精，提取、浓缩、冷却、灌装，每一个流程，杨海林还会进行人工复核，查看是否达到真正这个标准。'
            },
            {
                name:'潘守俊',
                title:'口服液现场质检工程师',
                age:'工作年限10年',
                word:'“质检是至关重要的质量把控环节，<br>因此我所负责的每一项检验都要‘锱铢必较’”',
                img:'images/page4/psj.jpg',
                content:'100％的严谨<br>潘守俊对产品质量的严格要求，体现在其对生产线的各项指标的精确检验，十年来始终如一。从生产前产品所有原材料的质量是否符合标准，生产中配置的液料取样是否达标，到成品的相对密度、固体物、微生物、PH值、多糖含量等各项数值指标，潘守俊的质检工作都一步不落，严谨而有序地进行，每一项检测都严格把控，即使只是一丝一毫的误差，都绝不放过。'
            },
            {
                name:'成为优惠顾客',
                title:null,
                age:null,
                word:null,
                img:null,
                content:'在无限极大家庭里，您只要申请成为优惠消费者，就可以得到贴心的服务与支持。祝您有一个愉快的购物体验。<br>一、我通过哪些渠道可以申请成为优惠消费者？<br>通过e帆网在线办理，或者前往全国任何一家服务中心、专卖店都可申请成为优惠消费者。<br>二、我想成为优惠消费者，应该如何办理呢？<br>1、一次性按统一零售价购货达到公司规定金额； <br>2、提交相关资料（有效的身份证原件、复印件）； <br>3、核对《优惠消费者申请单》； <br>4、签名确认； <br>5、提货、验货。 <br>三、成为优惠消费者后，我可以享受哪些权益？<br>1、享有按公司优惠价购货的权利；<br>2、享有享受公司消费者回馈计划的权利；<br>3、享有参与公司促销推广等活动的权利；<br>4、享有按公司规定办理退换货的权利。<br>温馨提醒：<br>欲了解更多详情，请向各地服务中心、专卖店或拨打客服热线（400-800-1188）咨询。'
            }
        ],
        getIntro(index){
            var person=this.storyList[index];
            var html='<div>';
            if(person.name) html+='<div class="name">'+person.name+'</div>';
            if(person.title)html+='<div class="title">'+person.title+'</div>';
            if(person.age)html+='<div class="age">'+person.age+'</div>';
            if(person.img) html += '<img src="' + person.img + '" class="avatar">';
            if(person.word) html+='<div class="word">'+person.word+'</div>';
            if(person.content)html+='<div class="content">'+person.content+'</div>';
            html+='</div>';
            return html;
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
                },
                onTransitionEnd:function(sw){
                   if(sw.activeIndex==4){
                       $('.pc5-tip').addClass('active');
                       $('.pc5-guide').addClass('active');
                   }else{
                       $('.pc5-tip').removeClass('active');
                       $('.pc5-guide').removeClass('active');
                   }
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
