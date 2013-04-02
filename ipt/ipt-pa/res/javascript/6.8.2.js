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
		
		var page;		
		($(this).hasClass('prev')) ? page = "ipt-pa.html" : page = "6.8.3.html";
		
		jump(page);			
	});
	
	$('.animationLayer').fadeIn();	
	$('.contentLayer').fadeIn();	
		
});