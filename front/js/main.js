// SCSS
require('../styles/styles.scss');

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
