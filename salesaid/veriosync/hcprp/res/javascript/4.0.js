$(document).ready(function() {
  
  $('.fourpeople').click(function() {
    $('.fourpeople').hide();
    $('.overlay').fadeIn('slow');
  });
  $('.overlay').click(function () {
    $('.fourpeople').fadeIn('slow');
    $('.overlay').hide();
  });

  $(".showlegal").click(function() {
    $(".legal").toggle();
    return false;
  });

});
