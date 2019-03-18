var days = Math.floor((new Date('2019-05-18') - new Date()) / 1000 / 60 / 60 / 24);
$('#days').text(days);

var $window = $('.wrapper').first();
var $header = $('header').eq(0);

var activeClassName = 'active';
var area = 100;
var isActive = false;

$window.scroll(_ => {
    var height = $window.height();
    var top = $window.scrollTop();
    var shouldBeActive = top >= height - area;

    if (shouldBeActive && !isActive) {
        $header.addClass(activeClassName);
        isActive = true;
    } else if (!shouldBeActive && isActive) {
        $header.removeClass(activeClassName);
        isActive = false;
    }
});

if (window.innerWidth >= 768 && navigator.userAgent.indexOf('Chrome') !== -1) {
    $('.background').css('transform', 'translateZ(-1px) scale(2)');
    $('.background-1').css('transform', 'translateZ(-1.7px) scale(2.7)');
    $('.background-2').css('transform', 'translateZ(-2px) scale(3)');
}