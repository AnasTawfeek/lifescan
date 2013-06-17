$(document).ready(function(){

  $('#contentLayer').fadeIn(600);			  					


  window.jump=function(page)
  {
    $('.animationLayer').fadeOut();
    $('#contentLayer').fadeOut( function(){				  					
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
  $('#rightside').click(function(e) {
    $('#stats').addClass("showMe");     
  });

  $(".showlegal").click(function() {
    $(".legal").toggle();
    return false;
  });

  ;})
