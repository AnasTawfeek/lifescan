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
			page = "6.3.b.html";
		
		jump(page);			
	});
	
	
	function animateImages()
	{
		move('#ping-1')
			.x(-244)
			.set('opacity', 1)
			.then()
				.delay('.7s')
				.ease('in-out')
				.x(-420)
				.y(-40)
				.duration(670)
				.pop()							
			.end();
			
		move('#ping-2')
			.x(278)
			.set('opacity', 1)
			.then()
				.delay('.45s')
				.ease('in-out')
				.x(470)
				.y(-40)
				.duration(1000)
				.pop()							
			.end();
	}
	
	
	// init...
	$('.contentLayer').fadeIn(function(){
				
		animateImages();
		
		$('#heading1').fadeIn();	
		
		setTimeout(function(){
			$('#heading2').fadeIn();	
		
			move('.headings-b')
				.y(135)
				.end();
		}, 1200);
	});				
	
});