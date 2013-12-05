$(document).ready(function(){		
			
	var imgpath = "res/images/animas/";
	window.pagePrev = "menu.html";
	window.pageNext = "calculator_2.html";
	
	// init...
	move('.contentLayer')
		.duration('1s')
		.set('opacity',1)
		.end();

	move('.animationLayer')
		.duration('1s')
		.set('opacity',1)
		.end(function(){ 
			move('#header2')
			.duration('1s')
			.set('opacity',1)
			.end()
		});
});