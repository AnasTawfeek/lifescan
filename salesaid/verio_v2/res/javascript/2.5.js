$(document).ready(function(){

  $('.prev').live('touchstart click', function(e){
    e.stopPropagation(); e.preventDefault();
    
    jump("slide-2.1.html");			
  });

  $('.next').live('touchstart click', function(e){
    e.stopPropagation(); e.preventDefault();
    $('#stats').addClass("showMe");
    
  });

  
  $('#card').live('touchstart click', function(e){
    e.stopPropagation(); e.preventDefault();
    
    if($(this).hasClass('flip'))
      $(this).removeClass('flip');
    else
      $(this).addClass('flip');
  });
  
  /*$('.click').toggle(function(e){
    e.stopPropagation(); e.preventDefault();
    $(this).addClass('flip');
    },function(e){
    e.stopPropagation(); e.preventDefault();
    $(this).removeClass('flip');
    });*/
  
  $(".fourpeople").click(function() {
    $('#stats').addClass("showMe");     
  });

});


