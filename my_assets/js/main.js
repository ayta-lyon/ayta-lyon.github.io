$(function() {
    function arrowsAnimation(arrows) {
        var topScroll = $(window).scrollTop();
        if(topScroll >= 5) {
            arrows.fadeOut();
        } else {
            arrows.fadeIn();
        }
    }

    $(window).scroll(function() {
        arrowsAnimation($(".m__home__arrows"));
    });
});