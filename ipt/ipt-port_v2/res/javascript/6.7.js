$(document).ready(function(){
	
	var moving=false;
	var $prevBtn = null;
	var prevButtonId = null;
	
	function jump(page)
	{
		$('.contentLayer').fadeOut( function(){				  					
			document.location = page;			
		});	
	};
	
	function resetState(){					
		if(prevButtonId != null)
		{			
			var co = $('#'+prevButtonId).prev();
			co.hide();	
			move( prevButtonId )
				.scale( 1 )
				.duration('.2s')
				.end();	
				
			$('#'+prevButtonId).removeClass('on');					
			//$prevBtn = null;	
		}
	};					
	
	$('#ping .co').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		jump("veeva:gotoSlide(ipt-home.zip, IPT_02-2013_POA)"); 
	});
	
	$('.button').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();	
		
		var btn = $(this);
		var currentButtonId = btn.attr('id');
		var scaled = btn.data('scaled');
		var co = btn.prev();		
		
		if($prevBtn != null)
		{
			prevButtonId = $prevBtn.attr('id');
			
			if(prevButtonId != currentButtonId)
			{
				var prevCo = $prevBtn.prev().hide();	
				move( prevButtonId )
					.scale( 1 )
					.duration('.2s')
					.end();
					
				$prevBtn.removeClass('on');
			}
		}
		
		if(!btn.hasClass('on'))
		{
			co.fadeIn('fast');
			
			move( currentButtonId )
				.duration('.2s')
				.scale( scaled )		
				.end();	
				
			btn.addClass('on');
		}
		else
		{
			co.hide();				
			move( currentButtonId )
				.scale( 1 )
				.duration('.2s')
				.end();	
				
			btn.removeClass('on');
		}
		
		$prevBtn = btn;
		
	});
	
	
	$('.contentLayer').fadeIn('slow');

});