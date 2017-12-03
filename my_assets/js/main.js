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

    $("#confirmationMsg").hide();
    $("#loadingBtn").hide();

    $("#form-reservation, #form-contact").submit(function(e) {
        e.preventDefault();

        var $form = $(this);
        $("#submitBtn").hide();
        $("#loadingBtn").show();
        $.post("/", $form.serialize()).then(function() {
            $("#loadingBtn").hide();
            $("#confirmationMsg").show();
            $form.trigger("reset");
        });
    });
});

