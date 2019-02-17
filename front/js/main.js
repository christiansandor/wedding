// SCSS
require('../styles/styles.scss');

// JS
require('./inv');

var $window = $(window);
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
