$(document).ready(function(){		
			
	var imgpath = "res/images/performance_2/";
	window.pagePrev = "menu.html";
	window.pageNext = "calculator_2.html";
	
	var bAllLoaded=false;
	var bTriggerPlay=false;
	function preloadDone() {
		bAllLoaded=true;
		if(bTriggerPlay) {
			playCircleFrame();		
		}
	}

	var aImg=[];
	for(i=0;i<=25;i++) {
		var img = new Image();
		var sIndex=i;
		if(i<10) sIndex="0"+sIndex;
		aImg.push(imgpath+"render_000"+sIndex+".png");
	}
	window.preload_pictures(aImg, preloadDone);

	var iIndex=-1;
	function playCircleFrame() {
		iIndex++;
		if(iIndex<aImg.length) {
			$("#partAnim").attr("src",aImg[iIndex]);
			setTimeout(playAnim, 41);
		}
		else
		{
			nextPoint();
		}
	}
	
	var iPoint=0;
	function nextPoint() {
		iPoint++;
		if(iPoint<=5) {
			$("#point"+iPoint).fadeIn(600, nextPoint);
/*			move("#point"+iPoint)
			.duration('0.7s')
			.set('opacity',1)
			.end(function() {
				nextPoint();
			});
*/		}
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
				playCircleFrame();
			}
		});
});