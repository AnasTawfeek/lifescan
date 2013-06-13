$(document).ready(function(){

  function jump(page)
  {
    $('.contentImg').fadeOut();
    $('.contentLayer').fadeOut( function(){				  					
      document.location = page;			
    });	
  };
  
  $('.nav').live('touchstart click', function(e){
    e.stopPropagation(); e.preventDefault();
    
    jump("verioiq.html");			
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
  
  
  $('.contentImg').fadeIn();

  $('.contentLayer').fadeIn();
  
  $(".fourpeople").click(function() {
    $(".ninetyfourpercent").show();
    $(this).hide();
  });

  $(".ninetyfourpercent").click(function() {
    $(".fourpeople").show();
    $(this).hide();
  });
});


