$(function () {
    $('.top_close_btn').on('click', function () {
        $('.TopBanner').addClass('on')
        // slideUp : 아주 강력한 명령 높이의 변화
        // (transition, overflow:hidden)
    });

    $('.main_slider').slick({
        arrows: false,
    });
});