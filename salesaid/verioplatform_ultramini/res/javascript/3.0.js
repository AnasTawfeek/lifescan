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
			page = "veeva:gotoSlide(home.zip)";
		else
			page = "slide-3.1.html";
		
		jump(page);			
	});
	
	$(".contentLayer").fadeIn();
	
	// local button setup...			
	$("#mini-silver").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();		
		
		// switch out the headings...
		$('.head3.one span:last').fadeOut('slow');
		$('.head3.two').fadeOut('slow', function(){
			$('.head3.three').fadeIn('slow');
		});					
		
		// slide the silver mini out...
		move("#mini-silver")
			.scale(0.5)
			.y(-50)
			.set('opacity', 0)
			//.then( function(){
				//$('#mini-silver').fadeOut();
			//})
			.end();
		  
		// slide the rest in...
		move('#mini-blue')
			.x(-870)
			.y(-200)
			.delay('0.2s')
			.end();				
				
		move('#mini-green')
			.x(-780)
			.y(-170)
			.delay('0.4s')
			.end();
			
		move('#mini-purple')
			.x(-675)
			.y(-135)
			.delay('0.6s')
			.end();
			
		move('#mini-pink')
			.x(-592)
			.y(-102)
			.delay('0.8s')
			.end();
			
	 });	
	 
	 
	// fade in the headings...
	
	
	$('.head3.one').fadeIn('slow', function(){						
		$('.head3.two').fadeIn('slow');							
	});				
	
	 
});