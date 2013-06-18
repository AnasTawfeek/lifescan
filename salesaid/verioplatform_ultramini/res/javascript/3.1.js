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
			page = "verioplatform_ultramini.html";
		else
			page = "slide-3.2.html";
		
		jump(page);			
	});
	
	$('.screens').cycle({
		autostop: true,
		timeout:1000,
		speed:600
	});	
			
	$('.screens').cycle('pause');
	
	$('.contentImg').fadeIn();
	$('.contentLayer').fadeIn();
	
});
