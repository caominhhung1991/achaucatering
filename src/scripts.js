$(document).ready(() => {
    $(window).scroll(() => {
        if($(window).scrollTop() == $(document).height() - $(window).height()) {
            console.log("đã tới cuối trang!!");
        }
    })
    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();

// Header - header1 - nav1
    // Hiệu ứng cuộn chuột khi tới #cantin thì giữ lại kéo thằng
    // ở dưới lên, lên tới 30% thì kéo lên trên luôn
    var headerScene = new ScrollMagic.Scene({
        triggerElement: '#header-cantin',
        triggerHook: 0,
        duration: '60%'
    })
    .setPin('#header-cantin', { pushFollowers: false })
    .addTo(controller);

// giới thiệu 1 - gioi-thieu1 - 
    $('.scene-fadein').each(function() {
        var scene = new ScrollMagic.Scene({
            triggerElement: this.children[0],
            triggerHook: 0.6, // 
            reverse: true // false: chi xay ra 1 lan, true: xay ra lap lai
        })
        .setClassToggle(this, 'fade-in') // add class to id trigger1
        // .addIndicators({
        //     name: 'trigger fade in',
        //     colorTrigger: 'black',
        //     colorStart: '#75C695',
        //     colorEnd: 'pink'
        // })
        .addTo(controller);
    });

// Giới thiệu 2 - gioi-thieu2
    
    
    // parallax scene
    var parallaxTl = new TimelineMax();
    parallaxTl
        .from('.content-wrapper', 1, {autoAlpha: 0, ease: Power0.easeNone})
        .from('.bcg', 1, {y: '-45%', ease: Power0.easeNone}, 0);

    var slideParallaxScene = new ScrollMagic.Scene({
        triggerElement: '.bcg-parallax',
        triggerHook: 1,
        duration: '60%'
    })
    .setTween(parallaxTl)
    .addTo(controller);

    // var headerScene = new ScrollMagic.Scene({
    //     triggerElement: '#gioithieu3-duration',
    //     triggerHook: 0,
    //     duration: '20%'
    // })
    // .setPin('#gioithieu3-duration', { pushFollowers: false })
    // .addTo(controller);

// Function to add class of animate.css
    // $.fn.extend({
    //     animateCss: function (animationName, callback) {
    //         var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    //         this.addClass('animated ' + animationName).one(animationEnd, function() {
    //             $(this).removeClass('animated ' + animationName);
    //             if (callback) {
    //               callback();
    //             }
    //         });
    //         return this;
    //     }
    // });

});



