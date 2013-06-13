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
		var hs = $( msgSelector ).css("margin-top");
		var h = hs.substring(0, hs.length -2);
		
		var sub1 = callout.find('.subhead1');
		var sub2 = callout.find('.subhead2');
		
		move( move.select( msgSelector ) )
			.y(-h)
			.then( function(){						
						sub1.fadeIn( 'fast', function(){
							sub2.fadeIn();
							
							// trigger special ui...
							if(calloutId == 'callout3')
							{
								$('#footnote').fadeIn('fast');
								$('.screens').cycle('resume');
							}			
														
						})	;
				})
			.end();	
		
		$( msgSelector ).live('touchstart click', function(e){
			e.stopPropagation(); e.preventDefault();
			
			if(calloutId == 'callout3')
			{
				$('#footnote').fadeOut('fast');
			}	
									
			sub1.fadeOut('fast');
			sub2.fadeOut('fast');	
			
			move( move.select( msgSelector ) )
				.y(0)
				.then( function(){	
						hotspot.show();									
						lineend.hide();
					})
				.end();
				
			$(this).unbind();
			
		});		
		
		
			
	});
	
});