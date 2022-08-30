$(function () {
    $('.top_close_btn').on('click', function () {
        $('.TopBanner').addClass('on');
        $('.Section01').addClass('on');


        
        // slideUp : 아주 강력한 명령 높이의 변화
        // (transition, overflow:hidden)
    });

    $('.main_slider').slick({
        arrows: false,
    });

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        sct > 0
            ? $('.Header').addClass('on')
            : $('.Header').removeClass('on')
    })
});