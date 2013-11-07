$(document).ready(function(){
        animate_text_appear();
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

       function animate_text_appear() {
           // animates text onto screen one line at a time
           setTimeout(function() { $('.intro1').fadeIn(); }, 1000);
           setTimeout(function() { $('.intro2').fadeIn(); }, 1400);
           setTimeout(function() { $('.intro3').fadeIn(); }, 1800);
           setTimeout(function() { $('.intro4').fadeIn(); }, 2200);
           
       }
    
       $('.popup_btn').click(function() {
           $('.overlay').show();
       });

       $('.overlay').click(function() {
          $('.overlay').hide();
       });



	
	// fade in the content...
//	$('.contentLayer').fadeIn(function(){
//		$('.animationLayer').fadeIn('slow');
//	});
	
	// fade in the content...
	$('#rightside').click(function(e) {
   		$('#stats').addClass("showMe");     
    });

});
