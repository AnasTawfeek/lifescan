$(document).ready(function() {
    $('.fourpeople').click(function() {
        $('.fourpeople').hide();
        $('.overlay').show();
    });
    $('.overlay').click(function () {
        $('.fourpeople').show();
        $('.overlay').hide();
    });
});
