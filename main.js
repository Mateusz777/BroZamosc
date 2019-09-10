$('.menu-toggler').on('click', function () {
    $(this).toggleClass('active');
    $('.overlay').toggleClass('menu-open')
});

$('.nav a').on('click', function () {
    $('.menu-toggler').removeClass('active');
    $('.overlay').removeClass('menu-open');
})