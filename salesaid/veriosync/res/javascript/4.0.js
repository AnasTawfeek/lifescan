$(document).ready(function() {
  
  window.jump=function(page)
  {
    $('.animationLayer').fadeOut();
    $('.contentLayer').fadeOut( function(){				  					
      document.location = page;			
    });	
    
  };
  
  $('.fourpeople').click(function() {
    $('.fourpeople').hide();
    $('.overlay').show();
  });
  $('.overlay').click(function () {
    $('.fourpeople').show();
    $('.overlay').hide();
  });

  $(".showlegal").click(function() {
    $(".legal").toggle();
    return false;
  });

});
