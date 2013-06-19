
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
	  	$('.contentLayer').fadeOut('fast', function(){
			document.location = "veeva:gotoSlide(start.zip, BGM_01-2012_POA)";	
		});		
	 });
				  
	 $("#btn-coverage").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
	   	$(this).attr("src", btn2.src );		
	   
	   	$('.animationLayer').fadeOut('fast');
	  	$('.contentLayer').fadeOut('fast', function(){
			document.location = "veeva:gotoSlide(pa.zip, PayerAccess_01-2012_POA)";	
		});
	 });
	 
	 $("#btn-portfolio").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
	   	$(this).attr("src", btn3.src );		
	   
	   $('.animationLayer').fadeOut('fast');
	   $('.contentLayer').fadeOut('fast', function(){
			document.location = "veeva:gotoSlide(portfolio.zip, BGM_01-2012_POA)";	
		});
	 });
	 
});
