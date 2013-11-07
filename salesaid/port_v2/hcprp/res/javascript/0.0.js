$(document).ready(function(){
					
	// preload some images into UIWebView cache..
	var img1 = new Image();
	img1.src = "res/images/global/page-bg-anim.jpg";	

	move('#logo')
		.ease('out')
		.scale(1.5)
		.set('opacity',1)
		.duration('2s')
		.then()
			.duration('.5s')
			.set('opacity', 0)
			.then( function(){				  							 	
				//document.location = "veeva:gotoSlide(slide-1.0.zip)";						
				document.location = "slide-1.0.html";						
			})
			.pop()
		.end();			
});