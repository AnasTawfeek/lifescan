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
			page = "slide-2.1.html";
		else
			page = "slide-2.4.html";
		
		jump(page);			
	});
	
	
	$('.contentImg').fadeIn();
	$('.contentLayer').fadeIn(function(){
		
		$('.headings p:last-child').fadeIn('slow');
		
	});
		
});