$(document).ready(function(){
  
  function jump(page)
  {
    $( '.animationLayer').fadeOut();
    $('.contentLayer').fadeOut( function(){				  					
      document.location = page;			
    });	
  };
  
  $('.nav').live('touchstart click', function(e){
    e.stopPropagation(); e.preventDefault();
    var btn = $(this);
    var page;
    
    if(btn.hasClass('prev'))
      page = "verioplatform_verioiq.html";
    else
      page = "slide-2.0.html";
    
    jump(page);			
  });
  
  
  $('#face1').live('touchstart click', animateFace);
  $('#face2').live('touchstart click', animateFace);
  $('#face3').live('touchstart click', animateFace);
  $('#face4').live('touchstart click', animateFace);
  $('#face5').live('touchstart click', animateFace);
  $('#face6').live('touchstart click', animateFace);

  function animateFace(e) {
    e.stopPropagation(); e.preventDefault();
    if($(this).hasClass('flip')) {
      $(this).removeClass('flip');
    }
    else
    {
      $(this).addClass('flip');
    }
  }


  
  // fade in the content...
  //	$('.contentLayer').fadeIn(function(){
  //		$('.animationLayer').fadeIn('slow');
  //	});
  
  // fade in the content...
  $('.popup_btn').click(function() {
    $('#ninetyfourpercent').addClass('showMe');
	move("#legal").
	delay("0.5s").
	duration("1s").
	set("opacity",1).
	end();
	
    return false;
  });

  
});
