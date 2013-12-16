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
		var btn = $(this);
		var page;
		
		if(btn.hasClass('prev'))
			page = "pa_v2.html";
		else
			page = "slide-5.2a.html";
		
		jump(page);			
	});
	
	$('.contentImg').fadeIn();	
		
});
