
$(document).ready(function(){
	
	$('body').bind('touchmove', function (e) {
		e.preventDefault();
		return true; 
	});	
	
	var images = [ 
		"res/images/global/btn-home-on.png" 
	];		
	
	var img1 = new Image();
	img1.src = images[0];
//	var img2 = new Image();
//	img2.src = images[1];
//	var img3 = new Image();
//	img3.src = images[2];

	// button setup...				
	$("#btn-home").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
	   	$(this).attr("src", images[0] );		
	   
	   	$('.animationLayer').fadeOut('fast');	   
	  	$('.contentLayer').fadeOut('fast', function(){
			document.location = "menu.html";	
		});		
	 });
	 
	function jump(page)
	{
		$('.animationLayer').fadeOut();
		$('.contentLayer').fadeOut( function(){				  					
			document.location = page;			
		});	
	};
	
	$('.nav').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		var btn = $(this);
		var page;
		
		if(btn.hasClass('prev'))
			page = window.pagePrev;
		else
			page = window.pageNext;
		
		jump(page);			
	});
});