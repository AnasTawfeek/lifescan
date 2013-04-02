
$(document).ready(function(){
	
	$('body').bind('touchmove', function (e) {
		e.preventDefault();
		return true; 
	});	
	
	var images = [ 
		"res/images/global/btn-home-on.png", 
		"res/images/global/btn-coverage-on.png", 
		"res/images/global/btn-portfolio-on.png" 
	];		
	
	var img1 = new Image();
	img1.src = images[0];
	var img2 = new Image();
	img2.src = images[1];
	var img3 = new Image();
	img3.src = images[2];

	// button setup...				
	$("#btn-home").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
	   	$(this).attr("src", images[0] );		
	   
	   	$('.animationLayer').fadeOut('fast');	   
	  	$('.contentLayer').fadeOut('fast', function(){
			document.location = "veeva:gotoSlide(ipt-home.zip, IPT_02-2013_POA)";	
		});		
	 });
			  
	 $("#btn-coverage").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
	   	$(this).attr("src", images[1] );		
	   
	   	$('.animationLayer').fadeOut('fast');
	  	$('.contentLayer').fadeOut('fast', function(){
			document.location = "veeva:gotoSlide(ipt-pa.zip, IPT_PayerAccess_02-2013_POA)";	
		});
	 });
	 
	 $("#btn-portfolio").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
	   	$(this).attr("src", images[2] );		
	   
	   $('.animationLayer').fadeOut('fast');
	   $('.contentLayer').fadeOut('fast', function(){
			document.location = "veeva:gotoSlide(ipt-port.zip, IPT_Portfolio_02-2013_POA)";	
		});
	 });
	 
});