$(document).ready(function(){
	
	var hotspots = $('.hotspot');				
			
	hotspots.live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
							
		var hotspot = $(this);
		var callout = hotspot.parent();
		var lineend = hotspot.next();	
		var calloutId = callout.attr('id');
		
		hotspot.hide();	
		lineend.show();		
		
		var msgSelector = "#"+ calloutId +" .msg";
		var hs = $( msgSelector ).css("margin-left");
		var h = hs.substring(0, hs.length -2);
		
		var sub1 = callout.find('.subhead3');
		
		move( move.select( msgSelector ) )
			.x(-h)
			.then( function(){						
					sub1.fadeIn( 'fast');
					
					// trigger special ui...
					if(calloutId == 'callout3')
					{
						$('#footnote').fadeIn('fast');
					}	
							
				})
			.end();	
		
		$( msgSelector ).live('touchstart click', function(e){
			e.stopPropagation(); e.preventDefault();
			
			if(calloutId == 'callout3')
			{
				$('#footnote').fadeOut('fast');
			}	
					
			sub1.fadeOut('fast');
			
			move( move.select( msgSelector ) )
				.x(0)
				.delay('.1')
				.then( function(){	
						hotspot.show();									
						lineend.hide();
					})
				.end();
				
			$(this).unbind();
			
		});		
			
	});
	
});