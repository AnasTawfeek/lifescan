
function jump(page)
{
	var sDuration="0.6s";
	// show the content
	if($( '.animationLayer').length) {
		move(".animationLayer").
		duration(sDuration).
		ease('linear').
		set("opacity",0).
		end();
	}

	move(".contentLayer").
	duration(sDuration).
	ease('linear').
	set("opacity",0).
	end(function() {
		document.location = page;	
	});
}


$(document).ready(function(){
	
	$('body').bind('touchmove', function (e) {
		e.preventDefault();
		return true; 
	});	

	var images = [ "res/images/global/btn-home-on.png", "res/images/global/btn-coverage-on.png", "res/images/global/btn-portfolio-on.png" ];		
	
	var btn1 = new Image();
	btn1.src = images[0];
	
	var btn2 = new Image();
	btn2.src = images[1];
	
	var btn3 = new Image();
	btn3.src = images[2];

	// button setup...				
	$("#btn-home").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
	   	$(this).attr("src", btn1.src );		
	   
	   	$('.animationLayer').fadeOut('fast');	   
	  	$('.contentLayer, body').fadeOut('fast', function(){
			document.location = "veeva:gotoSlide(start.zip, BGM_01-2012_POA)";	
		});		
	 });
				  
	 $("#btn-coverage").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
	   	$(this).attr("src", btn2.src );		
	   
	   	$('.animationLayer').fadeOut('fast');
	  	$('.contentLayer, body').fadeOut('fast', function(){
			document.location = "veeva:gotoSlide(pa.zip, PayerAccess_01-2012_POA)";	
		});
	 });
	 
	 $("#btn-portfolio").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
	   	$(this).attr("src", btn3.src );		
	   
	   $('.animationLayer').fadeOut('fast');
	   $('.contentLayer, body').fadeOut('fast', function(){
			document.location = "veeva:gotoSlide(port.zip, Portfolio_01-2012_POA)";	
		});
	 });
	
	// show the content
	if($(".animationLayer").length) {
		move(".animationLayer").
			duration("0.7s").
			set("opacity",1).
			end();
	}

	// show the content
	if($(".contentLayer").length) {
		move(".contentLayer").
			duration("0.7s").
			ease('linear').
			set("opacity",1).
			end(function() {
				if(typeof onFadeInComplete !== 'undefined')
					onFadeInComplete();
			});
	}
});
