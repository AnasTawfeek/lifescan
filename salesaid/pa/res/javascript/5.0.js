$(document).ready(function(){
			
	function jump(page)
	{
		$('.contentImg').fadeOut();
		$('body, .contentLayer').fadeOut( function(){				  					
			document.location = page;			
		});	
	};
	
	$('.nav').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		jump("slide-5.1.html");			
	});
	
	$('.contentImg').fadeIn();
		
});
