$(function () {
    $("a.btn-block").click(function () {
        // 修正 Opera 問題
        // 利用 .offset() 的方式來取得指定元素的 top 及 left 值，然後再讓捲軸移到該位置上。
        // 做法 by 男丁(http://abgne.tw/jquery/apply-jquery/jquery-scroll-to-page-top.html)
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop: $('#one').offset().top
        }, 1200);
    });
});

$(function () {
    $("a.down-1").click(function () {
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop: $('#two').offset().top
        }, 1200);
    });
});

$(function () {
    $("a.down-2").click(function () {
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop: $('#tree').offset().top
        }, 1200);
    });
});

$(function () {
    $("a.down-3").click(function () {
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop: $('#four').offset().top
        }, 1200);
    });
});
