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
		
		jump("6.8.2.html");			
	});
	
	$('.animationLayer').fadeIn();
	$('.contentLayer').fadeIn();
		
});