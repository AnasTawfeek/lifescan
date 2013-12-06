$(document).ready(function(){		
			
	var imgpath = "res/images/patented_3/";
	window.pagePrev = "patented_2.html";
	window.pageNext = "patented_4.html";
	
	var frameCount=24;
	var frameNames="Animas_gears_v001.00";
	var playSpeed=50; // ms between frames
	
	var bAllLoaded=false;
	var bTriggerPlay=false;
	function preloadDone() {
		bAllLoaded=true;
		if(bTriggerPlay) {
			playAnim();	
		}
	}

	var aImg=[];

	for(i=1;i<=frameCount;i++) {
		var img = new Image();
		var sIndex=i;
		if(i<10) sIndex="0"+sIndex;
		aImg.push(imgpath+frameNames+sIndex+".png");
	}
	window.preload_pictures(aImg, preloadDone);

	var iIndex=-1;
	function playAnim() {
		iIndex++;
		if(iIndex<aImg.length) {
			$("#partAnim").attr("src",aImg[iIndex]);
			setTimeout(playAnim, playSpeed);
		}
		else
		{
			
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
				playAnim();
			}
		});
});