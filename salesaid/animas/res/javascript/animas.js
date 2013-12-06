$(document).ready(function(){		
			
	var imgpath = "res/images/animas/";
	window.pagePrev = null;
	window.pageNext = "menu.html";
	
	// init...
	TweenMax.to('.contentLayer', 1, { opacity:1});
	TweenMax.to('.animationLayer', 1, { opacity:1});

	TweenMax.to('#line1', 1, { opacity:1, delay:1});
	TweenMax.to('#line2', 1, { opacity:1, delay:2});
});