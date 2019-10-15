var scroll_pos = 0;
$(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 1) {
        $(".navbar").css('background-color', 'black');
        $(".navbar-expand-lg .navbar-nav .nav-link").css('color', 'white');

    } else {
        $(".navbar").css('background-color', 'transparent');
        $(".navbar-expand-lg .navbar-nav .nav-link").css('color', 'white');
        $(".hamburger-box").addClass('hamburg-white');
    }
});

