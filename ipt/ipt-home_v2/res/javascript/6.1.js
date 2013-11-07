$(document).ready(function(){

	function jump(page)
	{
		$('.animationLayer').fadeOut();
		$('.contentLayer').fadeOut( function(){				  					
			document.location = page;			
		});	
	};
	
	$('#girl').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		$('#girl .back').live('touchstart click', function(e){
			e.stopPropagation(); e.preventDefault();
			
			//console.log('goto Ping A');
			jump("veeva:gotoSlide(ipt-lifestyle_v2.zip, IPT_02-2013_POA_v2)");					
		});
		
		$('#man').removeClass('flip');
		$('#girl').addClass('flip');			
	});
	
	$('#man').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		$('#man .back').live('touchstart click', function(e){
			e.stopPropagation(); e.preventDefault();
			
			//console.log('goto Ping B');
			jump("veeva:gotoSlide(ipt-clinical_v2.zip, IPT_02-2013_POA_v2)");						
		});
		
		$('#girl').removeClass('flip');
		$('#man').addClass('flip');			
	});
	
	// fade in the content...
	
	$('.contentLayer').fadeIn(function(){
		$('.animationLayer').fadeIn('slow');
	});
	
});
