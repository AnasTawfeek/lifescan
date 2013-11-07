$(document).ready(function(){

	function jump(page)
	{
		$('.animationLayer').fadeOut();
		$('.contentLayer').fadeOut( function(){				  					
			document.location = page;			
		});	
	};
	
	$('.nav').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		var btn = $(this);
		
		jump("6.5.b.html");			
	});
	
	$('#card').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		if($(this).hasClass('flip'))
			$(this).removeClass('flip');
		else
			$(this).addClass('flip');
		
		$('.animationLayer').fadeIn('slow');			
	});
	
	// fade in the content...
	
	$('.contentLayer').fadeIn('slow');
	
});