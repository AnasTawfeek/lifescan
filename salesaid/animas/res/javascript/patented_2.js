

$(document).ready(function(){		
	var hasAnimated = false;	
	
	animateThingy(1, 38);
	$(".contentLayer").click(function() {
		if (!hasAnimated)		
		{
			animateThingy(39, 119);
			hasAnimated = true;		
		}			
	});		
	
});

function animateThingy(xstart, xend) {
	var imgpath = "res/images/patented_2/";
	window.pagePrev = "patented_1.html";
	window.pageNext = "patented_3.html";
	
	// Image sequence params
	var start = xstart;	
	var frameCount= xend; //119
	var frameNames="re_Animas_motherboard.00";
	var framesPerSecond=30;
	
	
	var playSpeed=Math.round(1000/framesPerSecond);
	var bAllLoaded=false;
	var bTriggerPlay=false;
	
	var aImgSrc=[];
	var aImg=[];
	var iWidth=$("#myCanvas").attr("width");
	var iHeight=$("#myCanvas").attr("height");
	var context = $("#myCanvas")[0].getContext('2d');

	for(i=start;i<=frameCount;i++) {
		var img = new Image();
		var sIndex=i;
		if(i<10) sIndex="00"+sIndex;
		else if (i < 100)
			sIndex = "0" + sIndex;
		else
			sIndex = sIndex;		
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
			$(".targets").fadeIn("slow");			
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
