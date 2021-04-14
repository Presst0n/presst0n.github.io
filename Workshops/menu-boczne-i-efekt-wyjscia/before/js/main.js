$(document).ready(function() {

    $('.hamburger').click(function() {

        $('.main-menu').toggleClass('open');

    })

    $('.main-menu-item a').click(function(e) {
        e.preventDefault();
        $('body').fadeOut(1500, function() {
            window.location.href = $(e.target).attr('href');
        });
    })

})