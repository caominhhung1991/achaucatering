$(document).ready(() => {
//     // Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    // parallax scene
    var parallaxTl = new TimelineMax();
    parallaxTl
        .from('.content-wrapper', 1, {autoAlpha: 0, ease: Power0.easeNone})
        .from('.bcg', 1, {y: '-35%', ease: Power0.easeNone}, 0);

    var slideParallaxScene = new ScrollMagic.Scene({
        triggerElement: '.bcg-parallax',
        triggerHook: 1,
        duration: '60%'
    })
    .setTween(parallaxTl)
    .addTo(controller);

});