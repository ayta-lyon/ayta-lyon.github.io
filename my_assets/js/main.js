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

    $("#confirmationMsg").toggleClass("hidden");
    $("#loadingBtn").toggleClass("hidden");

    $("#form-reservation, #form-contact").submit(function(e) {
        e.preventDefault();

        var $form = $(this);
        $("#submitBtn").toggleClass("hidden");
        $("#loadingBtn").toggleClass("hidden");
        $.post("/", $form.serialize()).then(function() {
            $("#loadingBtn").toggleClass("hidden");
            $("#confirmationMsg").toggleClass("hidden");
            $form.trigger("reset");
        });
    });
});

