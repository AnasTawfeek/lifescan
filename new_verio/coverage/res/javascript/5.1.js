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
			page = "pa.html";
		else
			page = "slide-5.2.html";
		
		jump(page);			
	});
	
	$('.contentImg').fadeIn();	
		
});