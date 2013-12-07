$(document).ready(function(){		
			
	var imgpath = "res/images/animas/";
	window.pagePrev = null;
	window.pageNext = "menu.html";
	
	// init...
	TweenMax.to('.contentLayer', 1, {opacity:1, ease:"Linear.easeNone"});
	TweenMax.to('.animationLayer', 1, { opacity:1,ease:"Linear.easeNone"});

	TweenMax.to('#line1', 0.7, { opacity:1, delay:1.3,ease:"Linear.easeNone"});
	TweenMax.to('#line2', 0.7, { opacity:1, delay:1.3+1,ease:"Linear.easeNone"});
});