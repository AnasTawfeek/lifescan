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
