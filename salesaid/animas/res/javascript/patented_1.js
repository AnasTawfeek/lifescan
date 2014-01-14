var spinState = false; // has spun yet?

$(document).ready(function(){		
			
	var imgpath = "res/images/animas/";
	window.pagePrev = "menu.html";
	window.pageNext = "patented_2.html";
	
	// init...
	$('.contentLayer').fadeIn(function(){
				
	});

	$(".contentLayer").click(function() {
		if (!spinState) {
		  animateSpin();
		  spinState = true;			
		}
	});
	
});

function animateSpin() {
	var imgpath = "res/animations/animation2/";
	// Animas_back_v009.00
 	// hackity hack hack
	// Image sequence params
	var frameCount=24;
	var frameNames="re_Animas_back_v009.00";
	var framesPerSecond=30;
	
	
	var playSpeed=Math.round(1000/framesPerSecond);
	var bAllLoaded=false;
	var bTriggerPlay=false;
	
	var aImgSrc=[];
	var aImg=[];
	var iWidth=$("#myCanvas").attr("width");
	var iHeight=$("#myCanvas").attr("height");
	var context = $("#myCanvas")[0].getContext('2d');

	for(i=1;i<=frameCount;i++) {
		var img = new Image();
		var sIndex=i;
		if(i<10) sIndex="0"+sIndex;
		aImgSrc.push(imgpath+frameNames+sIndex+".png");
	}
	
	window.preload_pictures(aImgSrc, aImg, preloadDone);

	function preloadDone() {
		bAllLoaded=true;
		if(bTriggerPlay) playAnim();		
	}

	var iIndex=-1;
	function playAnim() {
		iIndex++;
		if(iIndex<aImgSrc.length) {
			context.clearRect ( 0 , 0 , iWidth , iHeight);
			context.drawImage(aImg[iIndex], 0, 0);
			setTimeout(playAnim, playSpeed);
		}
		else
		{
			// custom stuff once the image sequence has finished
		}
	}
	
	// init...
	move('.contentLayer')
		.duration('1s')
		.set('opacity',1)
		.end();

	move('.animationLayer')
		.duration('1s')
		.set('opacity',1)
		.end(function(){
			bTriggerPlay=true;
			if(bAllLoaded) {
				// little delay to prevent stutter
				setTimeout(playAnim, 100);
			}
		});
}

$(document).ready(function(){		
			
	var imgpath = "res/animations/animation1/";
	window.pagePrev = "menu.html";
	window.pageNext = "patented_2.html";
	
	// Image sequence params
	var frameCount=24;
	var frameNames="re_Animas_360_v009.00";
	var framesPerSecond=30;
	
	
	var playSpeed=Math.round(1000/framesPerSecond);
	var bAllLoaded=false;
	var bTriggerPlay=false;
	
	var aImgSrc=[];
	var aImg=[];
	var iWidth=$("#myCanvas").attr("width");
	var iHeight=$("#myCanvas").attr("height");
	var context = $("#myCanvas")[0].getContext('2d');

	for(i=1;i<=frameCount;i++) {
		var img = new Image();
		var sIndex=i;
		if(i<10) sIndex="0"+sIndex;
		aImgSrc.push(imgpath+frameNames+sIndex+".png");
	}
	
	window.preload_pictures(aImgSrc, aImg, preloadDone);

	function preloadDone() {
		bAllLoaded=true;
		if(bTriggerPlay) playAnim();		
	}

	var iIndex=-1;
	function playAnim() {
		iIndex++;
		if(iIndex<aImgSrc.length) {
			context.clearRect ( 0 , 0 , iWidth , iHeight);
			context.drawImage(aImg[iIndex], 0, 0);
			setTimeout(playAnim, playSpeed);
		}
		else
		{
			// custom stuff once the image sequence has finished
		}
	}
	
	// init...
	move('.contentLayer')
		.duration('1s')
		.set('opacity',1)
		.end();

	move('.animationLayer')
		.duration('1s')
		.set('opacity',1)
		.end(function(){
			bTriggerPlay=true;
			if(bAllLoaded) {
				// little delay to prevent stutter
				setTimeout(playAnim, 100);
			}
		});
});
