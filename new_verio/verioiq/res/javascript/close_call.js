$(document).ready(function() {
  $(".fourpeople").click(function() {
    $(".ninetyfourpercent").show();
    $(this).hide();
  });

  $(".ninetyfourpercent").click(function() {
    $(".fourpeople").show();
    $(this).hide();
  });
});
