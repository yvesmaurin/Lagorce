$( document ).ready(function() {
    $(window).bind('scroll', function() {
        var scrollTop = $(window).scrollTop();
        var elementOffset = $('section#jardin').offset().top;
        var currentElementOffset = (elementOffset - scrollTop);

        if (currentElementOffset <= 300) {
            $('nav ul li').removeClass();
            $('nav ul li#ljardin').addClass("active");
        } else {
            $('nav ul li').removeClass();
            $('nav ul li#lmaison').addClass("active");
        }
    });
});