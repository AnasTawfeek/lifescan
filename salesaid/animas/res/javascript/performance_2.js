$(document).ready(function(){		
			
	var imgpath = "res/images/performance_2/";
	window.pagePrev = "performance_1.html";
	window.pageNext = "last_page.html";
	
	// Image sequence params
	var frameCount=25;
	var frameNames="render_000";
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
			for(var i=1;i<=5;i++)
				TweenMax.to("#point"+i, 0.7, {opacity:1, delay:(i-1)*0.8, ease:"Linear.easeNone"});
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