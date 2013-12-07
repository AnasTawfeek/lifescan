$(document).ready(function(){		
			
	var imgpath = "res/images/last_page/";
	window.pagePrev = "animas.html";
	window.pageNext = "patented_1.html";
	
	// init...
	move('.contentLayer')
		.duration('1s')
		.set('opacity',1)
		.end();

	move('.animationLayer')
		.duration('1s')
		.set('opacity',1)
		.end(function(){
			TweenMax.to("#menu",0.5, {opacity:1,ease:"Linear.easeNone"});
		});
	
	var menu=[];
	var pp=new Image();
	pp.src="res/images/last_page/menu_1_on.png";
	menu.push(pp);
	var pp=new Image();
	pp.src="res/images/last_page/menu_2_on.png";
	menu.push(pp);
	var pp=new Image();
	pp.src="res/images/last_page/menu_3_on.png";
	menu.push(pp);
	var pp=new Image();
	pp.src="res/images/last_page/menu_4_on.png";
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