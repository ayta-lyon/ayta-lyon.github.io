$(function() {
    function arrowsAnimation(arrows) {
        var topScroll = $(window).scrollTop();
        if(topScroll >= 5) {
            arrows.fadeOut(100);
        } else {
            arrows.fadeIn(100);
        }
    }

    $(window).scroll(function() {
        arrowsAnimation($(".m__home__arrows"));
    });

    $.support.transition = false;
});

