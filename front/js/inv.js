var rsvp = $('#rsvp');
var nev = $('#nev');

var l1 = $('.l-1');

l1.click(function () {
    console.log('clicked');
    rsvp.addClass('stage-1');
});

$('#submit-no').click(function () {
    if (!nev.val()) {
        return nev.focus();
    }
});

$('#submit-yes').click(function () {
    if (!nev.val()) {
        return nev.focus();
    }
});
