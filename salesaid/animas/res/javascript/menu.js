$(document).ready(function(){		
			
	var imgpath = "res/images/menu/";
	window.pagePrev = "animas.html";
	window.pageNext = "patented_1.html";
	
	// Image sequence params
	var frameCount=3;
	var frameNames="anim_";
	var framesPerSecond=3;
	var bLoop=true;
	
	
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
//		if(bTriggerPlay) 
		playAnim();		
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
			if(bLoop) {
				iIndex=-1;
				playAnim();
			}
			else
			{
				// custom stuff once the image sequence has finished
			}
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
	
	var menu=[];
	var pp=new Image();
	pp.src="res/images/menu/menu_1_on.png";
	menu.push(pp);
	var pp=new Image();
	pp.src="res/images/menu/menu_2_on.png";
	menu.push(pp);
	var pp=new Image();
	pp.src="res/images/menu/menu_3_on.png";
	menu.push(pp);
	var pp=new Image();
	pp.src="res/images/menu/menu_4_on.png";
	menu.push(pp);
	
	$("#menu_1").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
	   	$(this).attr("src", menu[0].src );		
	    setTimeout(function() {window.jump("patented_1.html")}, 300);
	 });

	$("#menu_2").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
	   	$(this).attr("src", menu[1].src );		
	    setTimeout(function() {window.jump("calculator_1.html")}, 300);
	 });

	$("#menu_3").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
	   	$(this).attr("src", menu[2].src );		
	    setTimeout(function() {window.jump("best_in_class_1.html")}, 300);
	 });

	$("#menu_4").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
	   	$(this).attr("src", menu[3].src );		
	    setTimeout(function() {window.jump("performance_1.html")}, 300);
	 });

});