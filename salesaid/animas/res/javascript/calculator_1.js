$(document).ready(function(){		
			
	var imgpath = "res/images/calculator_1/";
	window.pagePrev = "menu.html";
	window.pageNext = "calculator_2.html";
	
	// init...
	TweenMax.to('.contentLayer', 1, {opacity:1, ease:"Linear.easeNone"});
	TweenMax.to('.animationLayer', 1, { opacity:1,ease:"Linear.easeNone"});

	TweenMax.to('#header2', 0.7, { opacity:1, delay:1.3,ease:"Linear.easeNone"});
});