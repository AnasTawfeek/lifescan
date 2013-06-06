$(document).ready(function(){

	function jump(page)
	{
		$('.animationLayer').fadeOut();
		$('.contentLayer').fadeOut( function(){				  					
			document.location = page;			
		});	
		
	};
	
	window.moveStrip=function() {
		console.log("XXX");
		$("#strip").animate({top: 290},2000,"swing",function() {});
	}
	
	window.moveStrip();

});