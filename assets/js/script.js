$(function() {
    setTimeout(function() {
        $('.slider').maxSlider();
    }, 2000);
});

function init() {
    try {
        window.initGapi();
    } catch (err) {
        alert(err + 'Please reload page');
    }
}
