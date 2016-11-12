/*图片加载*/
var images   = ["yihua.png", "askidea-logo.png", "close.svg", "cloud1.svg", "cloud2.svg", "grass.svg", "ground.svg", "page-1/logo.png", "page-1/title-4.png", "page-2/bg.png", "page-2/bottle.svg", "page-2/build.svg", "page-2/clay.svg", "page-2/clickblock.svg", "page-2/fragment.svg", "page-2/ground-2.png", "page-2/ground-md.png", "page-2/ground-lg.png", "page-2/hand-1.svg", "page-2/hand-2.svg", "page-2/hand-3.svg", "page-2/hand-4.svg", "page-2/hand-5.svg", "page-2/hand-6.svg", "page-2/idea-2.svg", "page-2/idea.svg", "page-2/leaf-1.svg", "page-2/leaf-lg.svg", "page-2/leaf-sm.svg", "page-2/plan-2.svg", "page-2/plan.svg", "page-2/kidstarter-logo.png", "page-2/support.svg", "page-3/bg.svg", "page-3/logo.svg", "page-3/clickblock.svg", "page-3/bubble-1.png", "page-3/bubble-2.png", "page-3/bubble-3.png", "page-3/bubble-4.png", "page-3/bubble-5.png", "page-3/trees.png", "page-4/airship-r.svg", "page-4/airship.svg", "page-4/bg.svg", "page-4/bear.png", "page-4/coconut.svg", "page-4/lens.png", "page-4/main-house.png", "page-4/ribbon-1.png", "page-4/ribbon-2.png", "page-4/robot.png", "page-4/ship.png", "page-4/toy.png", "page-5/bg.png", "page-5/clickblock.svg", "page-5/house.png", "page-5/ipad.png", "page-5/main.png", "page-5/note.svg", "page-5/tree.png", "page-6/bg.svg", "page-6/clickblock.png", "page-6/main.png", "page-6/star.svg", "page-6/tower.svg", "page-6/ufo-r.svg", "page-6/ufo.svg", "page-7/bg.svg", "page-7/clickblock.png", "page-7/main.png", "page-7/womeng.svg", "page-8/balloon-1.svg", "page-8/balloon-2.svg", "page-8/bg.png", "page-8/clickblock.svg", "page-8/main.png", "page-9/bg-1.svg", "page-9/bg.png", "page-9/clickblock.svg", "page-9/logo.png", "page-9/main.png", "page-9/plane.svg", "page-9/plant.png"];
imgCount     = 0;
loadedImages = 0;
$(document).ready(function () {
    imgCount = images.length;
    loadImage();
});
function loadImage() {
    if (loadedImages < imgCount) {
        var img      = new Image();
        var filename = images.pop();
        img.src      = 'img/' + filename;
        if (img.complete) {
            imageLoaded(filename, img.src);
            return
        }
        $(img).load(function () {
            imageLoaded(filename, img.src)
        }).error(function () {
            console.log("can't find" + img.src);
            loadImage()
        })
    }
}
function imageLoaded(filename, src) {
    loadedImages++;
    $('.loading p').text(Math.floor(loadedImages / imgCount * 100) + "%");
    if (loadedImages == imgCount) {
        $('.loading').fadeOut();
        loadAll();
    } else {
        loadImage();
    }
}

function loadAll() {
    $('.close-btn').on('click', function (event) {
        var bw = $('.intro-modal').width();
        $(this).closest('.intro-modal').animate({
            right: -bw
        }, 300);
        $(this).closest('.intro-modal').removeClass('open').addClass('close');
    });
    $('.open-intro').on('click', function (event) {
        var index = Number($(this).attr('index'));
        $('.intro-main').html(getIntro(index));
        $('.intro-modal').animate({
            right: 0
        }, 300);
        $('.intro-modal').removeClass('close').addClass('open');
    });
    //介绍按钮以及文字
    function getIntro(index) {
        var introText = introPic = introBtn = introStyle = "";
        switch (index) {
            case 2:
                introBtn  = "www.kidstarter.com.cn";
                introPic  = "img/kidstarter.png";
                introText = "Kidstarter奇思能达·创业孵化办公空间是全国首家儿童产业垂直孵化办公平台，由中国儿童产业一批优秀青年企业家与粤商高科、盛门资本共同打造，前卫的空间设计与办公模式，结合强大的资本后盾，让你体验一场说走就走的创业！<br><br>Kidstarter·奇思能达，寓意儿童创意产业项目从这里萌芽，成长。以“Seeding The Future——扶植•创新•未来”为宗旨，为从事儿童教育、科技、文化等产业的创业人员、团队以及科技型中小企业提供从企业筹建、项目研发、投资对接到产业化的全方位孵化服务。"
                break;
            case 3:
                introBtn  = "www.aiyap.com";
                introPic  = "img/aiya.png";
                introText = "艾芽网是广东艾芽信息技术有限公司旗下专门针对幼教行业的深度垂直招聘网，一个有情感有温度的网站，像熟人介绍工作般设身处地为您着想，免费帮您进行职业规划，让您明确自己职业生涯的方向，通过多维度动态的人才测评，为您量身订造培训方案，全面增强您的职业竞争力，（在艾芽网上您还可以认识同行业的良师益友，分享您的案例和经验，）让您在最短的时间内达到目标岗位的要求，从而提高您的薪酬待遇，实现您在幼教行业的梦想！<br>（注：括号中所表述部分，是预留以后可能会根据用户培训学习情况，进行“好学排行榜”，学员之间可以互加好友进行交流，进行案例和经验分享，用户也可以与平台进行案例和经验分享互动，共同生成内容。）"
                break;
            case 4:
                introBtn  = "";
                introPic  = "img/wanzuhao.png";
                introText = "玩聚号，是中国首个专注于儿童创新养育产品和评测内容，通过口碑传播和圈层营销引导消费的产品精选平台。<br><br>玩聚号以提升0-12岁儿童思维及创新能力为宗旨，帮父母发现最前沿的儿童科技产品，里面不但搜集了一大批新奇的养育科技、儿童玩具、教具，更有达人及新鲜玩法，为广大父母和幼师提供最优质的养育建议和创新儿童科技产品，让孩子获得更优质的养育环境。"
                break;
            case 5:
                introBtn   = "www.shinecode.net";
                introStyle = "style='font-size:12px'";
                introPic   = "img/billibear.png";
                introText  = "广州轩科智能科技有限公司成立于2015年5月，是一家专注于将动漫、高科技和儿童早期教育融合的科技企业。<br><br>公司的战略方向是立足于高科技玩具产业，逐步扩展到其他相关领域，并最终形成一套完善的品牌形象及服务体系，力争以全方位竞争优势，成长为业界领先的高科技儿童娱乐产品供应商。我们的愿景是通过AR技术产品实现线下实体产品和线上APP的连接，进而通过数据积累扩展到儿童教育的其他领域。企业专注领域：学龄前儿童、互动学习、启蒙早教……<br><br>科技给童年增添更多精彩<br><br>公司重点打造品牌：Billi  bear<br><br>AR早教卡是基于先进的增强现实技术，让体验者能感受增强现实甚至是超越现实的感官体验。<br><br>使用Billi Bear  APP，开启AR功能，扫描卡片，屏幕上即可呈现真实立体实物了！点击物体即可任意角度旋转观察，配以标准中文+美式英文读音，让幼儿接受权威教学的同时，培养对空间和几何的认知感受能力，学习日常难以形象地体验到的知识。这种新颖有趣的互动方式对于小朋友来说，简直就是像变魔法那样神奇！让学习变得非常有趣！"
                break;
            case 6:
                introBtn  = "www.funmetas.com";
                introPic  = "img/metas.png";
                introText = "广州迈巧思教育科技有限公司旗下（METAS）是中国领先的青少年创客教育品牌；产品涉及智能硬件、IOT软件、STEAM教育体系，专注培养3-16岁新一代儿童青少年的STEAM素质。METAS是Maths，Engineering，Technology，Arts和Science的缩写，以“探索、尝试、创新” 为教育核心，通过主推物联网智能科普工具游戏化学习社区，为青少年提供全面的创客教育服务。<br><br>2014年月11月中国两大投资巨头:乐博资本、英诺基金联手投资METAS，打造全球第一个青少年创新教育学习社区，培养青少年知识复合运用及实践素养，启发他们的M.E.T.A.S.思维。"
                break;
            case 7:
                introBtn  = "www.wemoooo.com";
                introPic  = "img/wemo.png";
                introText = "我萌科技致力于打造全球首个DTU(Designer To User)平台，这个平台的使命是实现设计师与消费者的直接连接。<br><br>通过我萌，设计师的作品能通过遍布各类型主流休闲消费场所的自助终端在第一时间到达消费者的手中，而在这些大量交互的过程中挖掘出有价值的IP进行二次商业价值运作，最终实现优质内容的生态价值，造福设计师及消费者。<br><br>我萌的第一款主打产品已经上市，接下来，我萌将会有更多的产品相继推出，敬请期待。<br><br>我萌全国渠道代理正在火热招募中，如果您有兴趣进一步了解，快联系我萌吧。"
                break;
            case 8:
                introBtn   = "www.dllyey.com";
                introStyle = "style='font-size:12px'";
                introPic   = "img/donglinglong.png";
                introText  = "广州市东伶珑教育投资有限公司成立于2010年6月，由东伶珑董事会成员投资创办，是一个致力于学龄前儿童教育发展研究与服务幼儿教育的集团公司。<br><br>目前公司旗下已拥有25所幼儿园，其中直营的幼儿园有：广州市番禺区尚东幼儿园（市一级）、安安幼儿园（市一级）、城市花园幼儿园（市一级）、坑头幼儿园（区一级）、山西幼儿园（区一级）、钟一幼儿园（区一级）、尚珑幼儿园（区一级）、康裕幼儿园、东城珑恩育晟幼儿园、道滘珑恩育晟幼儿园、珑恩豪景苑幼儿园、珑恩幸福里幼儿园、番禺星尚幼儿园；<br><br>加盟的幼儿园有：怡乐艺术幼儿园、群星幼儿园、新安幼儿园、百兴幼儿园、俊园幼儿园、华南新城幼儿园、康体幼儿园、小牛津幼儿园、华林幼儿园、智升幼儿园、佳佳幼儿园、丽雅苑幼儿园。"
                break;
            case 9:
                introBtn  = "www.kaoala.com";
                introPic  = "img/kaoala.png";
                introText = "“考A啦”APP及相关产品隶属于北京创图未来科技有限公司，是依托于中国地图出版集团在60年教育出版过程中积累的教材、教学辅助材料等内容资源，通过资源整合、数据挖掘和技术创新，以信息技术、三维可视化与虚拟现实技术、智能大数据分析系统等为支撑，构建的多维、动态、可交互的地理教育行业前沿高端产品。"
                break;
        }
        var btn, pic;


        if (introBtn !== "") {
            btn = '<button class="intro-link"><a href="http://' + introBtn + '" target="_blank" class="web">' + introBtn + '</a></button>';
            pic = '<div class="intro-logo"><a href="http://' + introBtn + '" target="_blank" class="web"><img src="' + introPic + '"></img></a></div>'
        } else {
            btn = "";
            pic = '<div class="intro-logo"><img src="' + introPic + '"></img></div>'
        }
        var introMain = pic + '<div class="intro-body" ' + introStyle + ' >' + introText + '</div>' + btn;

        return introMain
    }

    //整体函数
    (function () {
        var Main;
        var win      = function () {
            var data = {};
            data.w   = $(window).width();
            data.h   = $(window).height();
            return data
        }
        var mainSwiper;
        var activeIndex, direction;
        var initLeft = $('.swiper-wrapper').offset().left;
        //配置数据
        var pageName = ["开始探索", "Metas", "创图考A啦", "我萌", "billibear", "艾芽", "玩聚号", "东玲珑", "奇思能达"];

        //****初始化*****//
        Main = (function () {
            function Main() {
                mainSwiper = this.initMap();
                this.initCloudAndGrass();
                this.initMouseWheel();
                this.initDetail();
                this.litsenResize();
            }

            Main.prototype.initMap = function () {
                var data = win(), swiperWidth;
                data.w < 1440 ? swiperWidth = 1440 : swiperWidth = data.w;
                var mouseSense = Main.prototype.myBrowser() == "FF" ? 15 : 1;
                data.w < 1200 || data.h < 768 ? $('.single-page').height(data.h - 60) : $('.single-page').height(data.h - 88);
                var mySwiper = new Swiper('.main-body', {
                    loop: true,
                    speed: 2000,
                    width: swiperWidth,
                    freeMode: true,
                    freeModeMomentum: false,
                    freeModeMomentumBounceRatio: 5,
                    keyboardControl: true,
                    mousewheelControl: true,
                    mousewheelSensitivity: mouseSense,
                    pagination: '.ask-pagination',
                    paginationClickable: true,
                    onInit: function () {
                        $('.open-intro').on('click', function (event) {
                            var index = Number($(this).attr('index'));
                            $('.intro-main').html(getIntro(index));
                            $('.intro-modal').animate({
                                right: 0
                            }, 300);
                            $('.intro-modal').removeClass('close').addClass('open');
                        });
                    },
                    paginationBulletRender: function (index, className) {
                        return '<span class="' + className + '"><span>' + pageName[index] + '</span></span>';
                    },
                    slideActiveClass: 'active',
                    slideNextClass: 'active-next',
                    slidePrevClass: 'active-prev',
                    onTransitionStart: function () {
                        Main.prototype.carMove()
                    },
                    onTransitionEnd: function () {
                        $('.car').removeClass('car-active').removeClass('.car-r-active');
                    },
                    onSlideNextStart: function (swiper) {
                        Main.prototype.carMove(false)
                    },
                    onSlidePrevStart: function (swiper) {
                        Main.prototype.carMove(true)
                    },
                    onSliderMove: function () {
                        Main.prototype.carMove();
                    }

                })

                for (var i = 0; i < 9; i++) {
                    this.initCloudAndGrass(i, 3);
                }
                return mySwiper
            };

            Main.prototype.initCloudAndGrass = function (index, count) {
                for (var i = 0; i < count; i++) {
                    $('.page-' + index + '').append('<div class="grass" style="left:' + this.random(win().w) + 'px;"></div>');
                }
            };

            Main.prototype.initMouseWheel = function () {
                $(".main-body").on("mousewheel", function (event) {
                    Main.prototype.carMove(!(event.deltaY < 0));
                });
            };

            Main.prototype.initDetail = function () {
                //music
                $('#music').on("click", function () {
                    audio = document.getElementById('musicObject');
                    if (audio.paused) {
                        audio.play();
                        $('#music').attr('src', 'img/music.png')
                    } else {
                        audio.pause();
                        $('#music').attr('src', 'img/musicoff.png')
                    }
                })
                document.getElementById('musicObject').play();
                //page-1
                $(".page-1-title").mouseover(function () {
                    $(this).addClass("logo-active");
                    setTimeout(function () {$(".page-1-title").removeClass("logo-active")}, 1200);
                });

            };

            Main.prototype.activeIndex = function (y) {
                return mainSwiper.activeIndex
            };

            Main.prototype.litsenResize = function () {
                $(window).resize(function () {
                    $('.grass').remove();
                    Main.prototype.initMap()
                    //alert('更新成功')
                });
            };

            Main.prototype.getDirection = function () {
                var thisLeft = $('.swiper-wrapper').offset().left;
                thisLeft - initLeft > 0 ? direction = true : direction = false;
                initLeft = thisLeft;
                return direction
            };

            Main.prototype.carMove = function (dire) {
                var dir = typeof dire == "undefined" ? Main.prototype.getDirection() : dire;
                if (dir) {
                    $('.car').removeClass('car-active').addClass('car-r-active');
                } else {
                    $('.car').removeClass('car-r-active').addClass('car-active');
                }
            };

            Main.prototype.animate = function () {
                requestAnimationFrame(this.animate);
                return TWEEN.update();
            };

            Main.prototype.random = function (index) {
                return Math.random() * index
            };

            Main.prototype.isIE = function () {
                var msie, rv, rvNum, trident, ua, undef;
                if (this.isIECache) {
                    return this.isIECache;
                }
                undef   = void 0;
                rv      = -1;
                ua      = window.navigator.userAgent;
                msie    = ua.indexOf("MSIE ");
                trident = ua.indexOf("Trident/");
                if (msie > 0) {
                    rv = parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
                } else if (trident > 0) {
                    rvNum = ua.indexOf("rv:");
                    rv    = parseInt(ua.substring(rvNum + 3, ua.indexOf(".", rvNum)), 10);
                }
                this.isIECache = (rv > -1 ? rv : undef);
                return this.isIECache;
            };

            Main.prototype.myBrowser = function () {
                var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
                var isOpera = userAgent.indexOf("Opera") > -1;
                if (isOpera) {
                    return "Opera"
                }
                ; //判断是否Opera浏览器
                if (userAgent.indexOf("Firefox") > -1) {
                    return "FF";
                } //判断是否Firefox浏览器
                if (userAgent.indexOf("Chrome") > -1) {
                    return "Chrome";
                }
                if (userAgent.indexOf("Safari") > -1) {
                    return "Safari";
                } //判断是否Safari浏览器
                if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
                    return "IE";
                }
                ; //判断是否IE浏览器
            }

            Main.prototype.bind = function (func, context) {
                var bindArgs, wrapper;
                wrapper  = function () {
                    var args, unshiftArgs;
                    args        = Array.prototype.slice.call(arguments);
                    unshiftArgs = bindArgs.concat(args);
                    return func.apply(context, unshiftArgs);
                };
                bindArgs = Array.prototype.slice.call(arguments, 2);
                return wrapper;
            };

            return Main;

        })();

        new Main;

    }).call(this);
}

 