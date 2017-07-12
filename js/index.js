var indexAni = new TimelineMax();

$(document).ready(function() {


    initTabBox();
    initWork();
    initPro();


    initAni();
    initMenu();
    initVideo();

    if (!ChungTool.isPhone()) {
        initIntro();

        $('.loadPicWrap').waitForImages({
            finished: function() {
                // console.log(123)
                indexAni.play();
            },
            each: function(loaded, count, success) {


            },
            waitForAll: true
        });
    }

})

function initVideo() {


    var vp = $('.videoPop');

    vp.find('.clozBtn').click(function() {
        vp.find('.videoBox').empty();
        simpleHide(vp);
    })




    vp.find('.btn1').click(function(event) {
        vp.find('.videoBox').empty();
        simpleHide(vp);
        $('html,body').animate({
            scrollTop: $(".proBox").offset().top - 120
        }, 'slow');
    });


    vp.find('.btn2').click(function(event) {
        vp.find('.videoBox').empty();
        simpleHide(vp);
        $('html,body').animate({
            scrollTop: $(".wayBox").offset().top - 120
        }, 'slow');
    });

    if (ChungTool.isOnline()) {
        vp.removeClass('hide');
        ChungTool.addYouTube(vp.find('.videoBox'), 'pYxLEQuhUdc');

    }

}

function initMenu() {
    var hd = $('.header');
    $('.header .mBtn').click(function() {
        var t = $(this);
        var next = t.attr('data-href');

        $('html,body').animate({
            scrollTop: $("." + next).offset().top - 120
        }, 'slow');

        hd.toggleClass('phoneHide');
    })

    $('.menuBtn_phone').click(function(event) {
        hd.toggleClass('phoneHide');
    });
}



function initAni() {
    var stop = false;

    setInterval(function() {
        // console.log(123)
        $('.aniTitle').each(function() {
            var t = $(this)
            if (t.visible()) {
                TweenMax.delayedCall(.3, function() {
                    t.addClass('active');
                })
            }
        })

        if (!ChungTool.isPhone()) {
            $('.shareBox .sBox').each(function() {
                var t = $(this)
                if (t.visible(true)) {
                    TweenMax.delayedCall(0.1, function() {
                        t.addClass('active');
                    })
                }
            })
        }

        if ($('.tabBox').visible() && !stop) {
            console.log(123)
            TweenMax.delayedCall(1, function() {
                playTab();
                console.log(456)
            })
            stop = true;
        }

    }, 200)
}
var stopTab=false;
function playTab() {
    var tB = $('.tabBox');

    var id = ChungTool.returnClassNameWithFilter(tB, 'channel_')*1;
    console.log(id)
    if (id < 3&&!stopTab) {
        ChungTool.removeClassWithFilter(tB, 'ch');
        tB.addClass('channel_' + (id + 1));
        simpleShow(tB.find('.subContainer'));
        TweenMax.delayedCall(2, playTab)
    }

}

function initTabBox() {
    var tB = $('.tabBox');
    tB.find('.tabsBox .tab').click(function() {
        var t = $(this);
        var id = ChungTool.returnClassNameWithFilter(t, 't_');
        ChungTool.removeClassWithFilter(tB, 'ch');
        tB.addClass('channel_' + id);
        simpleShow(tB.find('.subContainer'));
        stopTab=true;
    })





}

function initWork() {


    if (ChungTool.isPhone()) {
        var mySwiper = new Swiper('.swiper-container', {
            speed: 400,
            spaceBetween: 15,
            // width: 763, 
            slidesPerView: 2,
            nextButton: '.workWrap .nextBtn',
            prevButton: '.workWrap .prevBtn',

        });
    } else {
        var mySwiper = new Swiper('.swiper-container', {
            speed: 400,
            spaceBetween: 40,
            // width: 763, 
            slidesPerView: 4,
            nextButton: '.workWrap .nextBtn',
            prevButton: '.workWrap .prevBtn',

        });
    }
    var tB = $('.tabBox');
    $('.swiper-slide').click(function() {
        var t = $(this);
        var id = ChungTool.returnClassNameWithFilter(t, 's_');
        if (!tB.hasClass('channel_2')) {
            ChungTool.removeClassWithFilter(tB, 'ch');
            tB.addClass('channel_2');
            simpleShow(tB.find('.subContainer'));
        }
    })

}


function initPro() {
    var tl = new TimelineMax({ repeat: -1 });

    tl.to($('.proBox .pic .pp'), .2, { delay: .4, repeat: 3, yoyo: true, ease: Power2.easeInOut, marginTop: -8, marginLeft: -8 })
}


function initIntro() {
    indexAni.set('.kv .pic', { autoAlpha: 0 })
        .set('.kv .picBox', { rotation: -30 })
        .set('.kv .picBox .p1', { marginTop: -200, marginLeft: -5 })
        .set('.kv .picBox .p2', { marginTop: 80, marginLeft: -220 })
        .set('.kv .picBox .p3', { marginTop: 100, marginLeft: 200 })
        .set('.kv .picBox .p4', { rotation: 30, marginTop: -20, marginLeft: 50 })
        .to('.kv .picBox', 3, { rotation: 0, ease: Power3.easeOut })
        .to('.kv .p1,.kv .p2,.kv .p3', 3, { marginTop: 0, marginLeft: 0, autoAlpha: 1, ease: Power3.easeOut }, 0)
        .to('.kv .p4', 2, { marginTop: 0, marginLeft: 0, rotation: 0, autoAlpha: 1, ease: Power3.easeOut }, 1).pause();

}
