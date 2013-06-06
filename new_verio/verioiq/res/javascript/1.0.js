$(document).ready(function(){
  
	function jump(page)
	{
	  $('.animationLayer').fadeOut();
	  $('.contentLayer').fadeOut( function(){				  					
	    document.location = page;			
	  });	
	};
	
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
          return false;
        });
});
