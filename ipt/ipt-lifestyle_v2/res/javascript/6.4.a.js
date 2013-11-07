$(document).ready(function(){					
	
	var imgpath = "res/images/6.4/";
	var $prev = null;
	
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
			page = "6.3.a.html";
		else
			page = "6.5.a.html";
		
		jump(page);			
	});
	
	function resetState(){					
		if($prev != null)
			$prev.trigger('touchstart');					
	};	
	
	// preload the button tap states...
	var btnImages = [ imgpath+ "btn-1.png", 
							imgpath+ "btn-2.png", 
							imgpath+ "btn-3.png", 
							imgpath+ "btn-4.png", 
							imgpath+ "btn-1-on.png", 
							imgpath+ "btn-2-on.png", 
							imgpath+ "btn-3-on.png", 
							imgpath+ "btn-4-on.png"
							];			

	// button setup...					
	$("#btn-1").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		var btn = $(this);
		
		if(btn.attr('src').indexOf('-on') <= 0)
		{
			resetState();			
			btn.attr("src", btnImages[4] );
			$('#call-1').fadeIn();				
			$prev = btn;
		 }
		 else
		 {
			btn.attr("src", btnImages[0] );
			$('#call-1').fadeOut();			
			$prev = null;
		 }
	});			
	
	$("#btn-2").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		var btn = $(this);
		
		if(btn.attr('src').indexOf('-on') <= 0)
		{
			resetState();			
			btn.attr("src", btnImages[5] );
			$('#call-2').fadeIn();				
			$prev = btn;
		 }
		 else
		 {
			btn.attr("src", btnImages[1] );
			$('#call-2').fadeOut();
			$prev = null;
		 }
	});	
		
	$("#btn-3").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		var btn = $(this);
		
		if(btn.attr('src').indexOf('-on') <= 0)
		{
			resetState();			
			btn.attr("src", btnImages[6] );
			$('#call-3').fadeIn();	
			$('#call-3').live('touchstart click', function(e){
				e.stopPropagation(); e.preventDefault();
				$('#call-3-ref').addClass('on-top');
				$('#call-3-ref').fadeIn();
				$('#call-3-ref').live('touchstart click', function(e){
					e.stopPropagation(); e.preventDefault();
					$(this).fadeOut(function(){
						$(this).removeClass('on-top');
						$(this).unbind();
					});	
				});						
			});					
			$prev = btn;
		 }
		 else
		 {
			btn.attr("src", btnImages[2] );
			$('#call-3-ref').unbind();
			$('#call-3-ref').fadeOut();
			$('#call-3').unbind();
			$('#call-3').fadeOut();
			$prev = null;
		 }
	});		
	 
	$("#btn-4").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		var btn = $(this);
		
		if(btn.attr('src').indexOf('-on') <= 0)
		{
			resetState();			
			btn.attr("src", btnImages[7] );
			$('#call-4').fadeIn();
			$prev = btn;
		 }
		 else
		 {
			btn.attr("src", btnImages[3] );
			$('#call-4').fadeOut();
			$prev = null;
		 }
	});			 
	 
	$('.animationLayer').fadeIn();
	$('.contentLayer').fadeIn(function(){
		
		/*
		move('#ping-flower')		
			.duration('0s')		
		  	.scale(.5)
			.rotate(-90)
			.then()
				.duration('.5s')
				.set('opacity',1)
				.rotate(90)
				.scale(2)
				.then(function(){
						$('.buttons').fadeIn();
					})
					.pop()  
		  	.end();		
		*/  
		
	});
			
});