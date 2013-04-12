$(document).ready(function(){		
			
	var imgpath = "res/images/6.2/";
	
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
		var page;
		
		if(btn.hasClass('prev'))
			page = "veeva:gotoSlide(ipt-home.zip, IPT_02-2013_POA)";
			
		else
			page = "6.3.a.html";
		
		jump(page);			
	});
	
	
	function animateImages()
	{
		move('#ping-1')
			.x(-214)			
			.set('opacity', 1)
			.then()
				.delay('.7s')
				.ease('in-out')
				.x(-460)
				.y(-40)
				.duration(800)
				.pop()							
			.end();
			
		move('#ping-2')
			.x(225)
			.set('opacity', 1)
			.then()
				.delay('.5s')
				.ease('in-out')
				.x(510)
				.y(-40)
				.duration(1000)
				.pop()							
			.end();
	}
	
	
	// init...
	$('.contentLayer').fadeIn(function(){
		
		animateImages();
		
		$('#heading1').fadeIn();
		$('#heading2').fadeIn('slow');			
		
		setTimeout(function(){
			$('#heading2').fadeOut('fast', function(){
				$('#heading3').fadeIn();	
			
				move('.headings-a')
					.y(155)
					.end();
			});			
		}, 1200);
	});				
	
});