$(function () {
    $("a.btn_header").click(function () {
        jQuery("html,body").animate({
            scrollTop: $('#btn_destination').offset().top
        }, 1000);
    });
});
