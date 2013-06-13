$(document).ready(function(){

	function jump(page)
	{
		$('.contentLayer').fadeOut( function(){				  					
			document.location = page;			
		});	
	};
	
	$('.nav').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		var btn = $(this);
		var page;
		
		if(btn.hasClass('prev'))
			page = "start.html";
		else
			page = "veeva:gotoSlide(home.zip)";
		
		jump(page);			
	});
	
	$('.card').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		$('.button').live('touchstart click', function(e){
			e.stopPropagation(); e.preventDefault();
			
			jump("veeva:gotoSlide(home.zip)");					
		});
		
		$('.click').addClass('flip');
		
		move("#card-container")
			.ease('in-out')
			.duration('1.1s')
			.x(-215)
			.end();					
	});
	
	// fade in the content...
	$('.contentLayer').fadeIn();

});