$(document).ready(function(){					
	
	var imgpath = "res/images/charts/dose2dose/";
	var $prev = null;
	var animating = false;
	
	function jump(page)
	{
		$('.animationLayer').fadeOut();
		$('.contentLayer').fadeOut( function(){				  					
			document.location = page;			
		});	
	};
	
	$('.nav').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		jump("6.3.b.html");			
	});
	
	function resetState(){					
		if($prev != null)
			$prev.trigger('touchstart');	
	};	
	
	// preload the button tap states...
	var btnImages = [ imgpath+ "btn-1.png", 
							imgpath+ "btn-2.png", 
							imgpath+ "btn-3.png", 
							imgpath+ "btn-1-on.png", 
							imgpath+ "btn-2-on.png", 
							imgpath+ "btn-3-on.png"
							];			

	// button setup...					
	$("#btn-1").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();	
			
		if(!animating)
		{
		var btn = $(this);			
		if(btn.attr('src').indexOf('-on') <= 0)
		{
			resetState();				
			animating=true;
						
			btn.attr("src", btnImages[3] );
			$('#chart-1').fadeIn(function(){					
				move('#chart-1 .plot-us')
					.duration('1s')
					.set('opacity',1)
					.scaleY(1)
					.y(20)
					.then(function(){												
						move('#chart-1 .plot-them')
							.duration('1s')
							.set('opacity',1)
							.scaleY(1)
							.y(20)
							.end(function(){animating=false;});
					})
					.end();						
			});			
			$prev = btn;
		
		 }
		 else
		 {
			btn.attr("src", btnImages[0] );
			$('#chart-1').fadeOut(function(){	
				$('#chart-1 .plot-us').css('-webkit-transform', 'scaleY(0.1)').css('-webkit-opacity', '0');	
				$('#chart-1 .plot-them').css('-webkit-transform', 'scaleY(0.1)').css('-webkit-opacity', '0');				
			});		
			$prev = null;
		 }
		}
	});		
			
	$("#btn-2").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();		
			
		if(!animating)
		{
		var btn = $(this);			
		if(btn.attr('src').indexOf('-on') <= 0)
		{
			resetState();
			animating=true;	
			btn.attr("src", btnImages[4] );
			$('#chart-2').fadeIn(function(){
				move('#chart-2 .plot-us')
					.duration('1s')
					.set('opacity',1)
					.scaleY(1)
					.y(20)
					.then(function(){												
						move('#chart-2 .plot-them')
							.duration('1s')
							.set('opacity',1)
							.scaleY(1)
							.y(20)
							.end(function(){animating=false;});
					})
					.end();						
			});				
			$prev = btn;			
		 }
		 else
		 {
			btn.attr("src", btnImages[1] );
			$('#chart-2').fadeOut(function(){		
				$('#chart-2 .plot-us').css('-webkit-transform', 'scaleY(0.1)').css('-webkit-opacity', '0');	
				$('#chart-2 .plot-them').css('-webkit-transform', 'scaleY(0.1)').css('-webkit-opacity', '0');				
			});
			$prev = null;
		 }
		}
	});	
		
	$("#btn-3").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
			if(!animating)
			{
			var btn = $(this);			
			if(btn.attr('src').indexOf('-on') <= 0)
			{
					resetState();
					animating=true;
							
					btn.attr("src", btnImages[5] );
					$('#chart-3').fadeIn(function(){					
						move('#chart-3 .plot-us')
							.duration('1s')
							.set('opacity',1)
							.scaleY(1)
							.then(function(){												
								move('#chart-3 .plot-them')
									.duration('1s')
									.set('opacity',1)
									.scaleY(1)
									.y(-10)
									.end(function(){animating=false; });
							})
							.end();						
					});			
					$prev = btn;
				
			 }
			 else
			 {
				btn.attr("src", btnImages[2] );		
				$('#chart-3').fadeOut(function(){	
					$('#chart-3 .plot-us').css('-webkit-transform', 'scaleY(0.4)').css('-webkit-opacity', '0');	
					$('#chart-3 .plot-them').css('-webkit-transform', 'scaleY(0.1)').css('-webkit-opacity', '0');				
				});
				$prev = null;
			 }
			}
	});	
	
	$('#btn-ref-1').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();		
		
		$('#ref-1').fadeToggle();	 									
	});
	
	$('#ref-1').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();		
		$(this).fadeOut();								
	});	 
	 
	$('.animationLayer').fadeIn('slow');		
	$('.contentLayer').fadeIn('slow');
			
});