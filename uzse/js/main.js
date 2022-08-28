/*$('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: "<div class=\"slick-prev\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
        "                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.12078 12L15.0779 24L16.8008 22.2723L6.48969 11.9727L16.7735 1.7004L15.0779 0L3.12078 12Z\" fill=\"white\"/>\n" +
        "            </svg></div>",
    nextArrow: "<div class=\"slick-next\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
        "                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n" +
        "                          d=\"M20.8792 12L8.92212 24L7.19922 22.2723L17.5103 11.9727L7.22652 1.7004L8.92212 0L20.8792 12Z\"\n" +
        "                          fill=\"white\"/></svg></div>"
});*/

$(function () {
    // $("#tabs").tabs();
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $(".sticky-md-top").addClass("scrolled");
    } else {
        $(".sticky-md-top").removeClass("scrolled");
    }


});

$('.banner-slider a').on('hover', function (){
    $('.banner-slider .arrow').animate([
        {left: '0'},
        {left: '10px'},
        {left: '0'}
    ],{
        duration: 700,
        iterations: Infinity
    });
})
