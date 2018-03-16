$(window).scroll(function() {
    if ($(this).scrollTop() > 100)
            $('.button_toTop').fadeIn();
        else
            $('.button_toTop').fadeOut();
});

$('.button_toTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
});
