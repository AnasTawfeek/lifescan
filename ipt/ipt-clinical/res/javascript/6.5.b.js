$(document).ready(function(){					
	
	var imgpath = "res/images/6.5.b/";
	
	// preload the button tap states...
	var buttonImages = [ imgpath+ "btn-bigone.png", imgpath+ "btn-bigone-on.png", imgpath+ "btn-safety.png", imgpath+ "btn-safety-on.png" ];	
	var on1 = new Image();
	on1.src = buttonImages[1];
	var on2 = new Image();
	on2.src = buttonImages[3];	
	
	function jump(page)
	{
		$('.animationLayer').fadeOut();
		$('.contentLayer').fadeOut( function(){				  					
			document.location = page;			
		});	
	};
	
	$('.nav').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();

		var page;		
		($(this).hasClass('prev')) ? page = "6.4.b.html" : page = "6.6.b.html";
		
		jump(page);			
	});		

	// button setup...					
	$("#btn-bigone").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
				
		$(this).attr("src", buttonImages[1] );		
		
		move('#call-1')
			.y(40)
			.set('opacity', 1)
			.end(function(){
				move('#call-2')
					.delay('.5s')
					.y(40)
					.set('opacity', 1)
					.end(function(){
						move('#call-3')
							.delay('1s')
							.y(40)
							.set('opacity', 1)
							.end(function(){
								move('#call-4')
									.delay('1.5s')
									.y(40)
									.set('opacity', 1)
									.end();		
						});				
				});				
		});
		$(this).unbind();			
			
	});	
	
	$("#btn-safety").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		var btn = $(this);
		
		if(btn.attr('src').indexOf('-on') <= 0) // off state
		{		
			btn.attr("src", buttonImages[3] );
			$('#ref-safety').fadeIn();			
		}
		else // on state
		{				
			btn.attr("src", buttonImages[2] );	
			$('#ref-safety').fadeOut();
		}
		
	});	
	
	$('#ref-safety').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();				
		
		$("#btn-safety").trigger('touchstart');
	});	
	
	$('#call-1').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		$('#ref-callout').fadeIn();						
	});
	
	$('#call-2').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		$('#ref-callout').fadeIn();						
	});	
		
	$('#call-4').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		$('#ref-callout').fadeIn();						
	});	
		
	$('#ref-callout').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		$(this).fadeOut();
	});
			
	 
	$('.animationLayer').fadeIn('slow');		
	$('.contentLayer').fadeIn('slow');
			
});