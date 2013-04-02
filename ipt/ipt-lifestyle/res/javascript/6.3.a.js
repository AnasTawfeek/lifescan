$(document).ready(function(){					
	
	var imgpath = "res/images/6.3.a/";
	var $prev = null;
	
	function jump(page)
	{
		$('.contentLayer').fadeOut( function(){				  					
			document.location = page;			
		});	
	};
	
	$('.nav').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		var btn = $(this);
		var page;
		
		if(btn.hasClass('prev'))
			page = "ipt-lifestyle.html";
		else
			page = "6.4.a.html";
		
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
							imgpath+ "btn-5.png",
							imgpath+ "btn-1-on.png", 
							imgpath+ "btn-2-on.png", 
							imgpath+ "btn-3-on.png", 
							imgpath+ "btn-4-on.png", 
							imgpath+ "btn-5-on.png"
							];			

	// button setup...					
	$("#btn-1").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		var btn = $(this);
		
		if(btn.attr('src').indexOf('-on') <= 0)
		{
			resetState();			
			btn.attr("src", btnImages[5] );
			$('#callout-1').fadeIn();	
			$('#callout-1').live('touchstart click', function(e){
				e.stopPropagation(); e.preventDefault();
				$('#ref-1').addClass('on-top');
				$('#ref-1').fadeIn();
				$('#ref-1').live('touchstart click', function(e){
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
			btn.attr("src", btnImages[0] );
			$('#ref-1').unbind();
			$('#ref-1').fadeOut();
			$('#callout-1').unbind();
			$('#callout-1').fadeOut();			
			$prev = null;
		 }
	});			
	
	$("#btn-2").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		var btn = $(this);
		
		if(btn.attr('src').indexOf('-on') <= 0)
		{
			resetState();			
			btn.attr("src", btnImages[6] );
			$('#callout-2').fadeIn();	
			$('#callout-2').live('touchstart click', function(e){
				e.stopPropagation(); e.preventDefault();
				$('#ref-2').addClass('on-top');
				$('#ref-2').fadeIn();
				$('#ref-2').live('touchstart click', function(e){
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
			btn.attr("src", btnImages[1] );
			$('#ref-2').unbind();
			$('#ref-2').fadeOut();
			$('#callout-2').unbind();
			$('#callout-2').fadeOut();
			$prev = null;
		 }
	});	
		
	$("#btn-3").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		var btn = $(this);
		
		if(btn.attr('src').indexOf('-on') <= 0)
		{
			resetState();			
			btn.attr("src", btnImages[7] );
			$('#callout-3').fadeIn();	
			$('#callout-3').live('touchstart click', function(e){
				e.stopPropagation(); e.preventDefault();
				$('#ref-3').addClass('on-top');
				$('#ref-3').fadeIn();
				$('#ref-3').live('touchstart click', function(e){
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
			$('#ref-3').unbind();
			$('#ref-3').fadeOut();
			$('#callout-3').unbind();
			$('#callout-3').fadeOut();
			$prev = null;
		 }
	});		
	 
	$("#btn-4").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		var btn = $(this);
		
		if(btn.attr('src').indexOf('-on') <= 0)
		{
			resetState();			
			btn.attr("src", btnImages[8] );
			$('#callout-4').fadeIn();
			$prev = btn;
		 }
		 else
		 {
			btn.attr("src", btnImages[3] );
			$('#callout-4').fadeOut();
			$prev = null;
		 }
	});		
	
	$("#btn-5").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		var btn = $(this);
		
		if(btn.attr('src').indexOf('-on') <= 0)
		{
			resetState();			
			btn.attr("src", btnImages[9] );
			$('#callout-5').fadeIn();					
			$prev = btn;
		 }
		 else
		 {
			btn.attr("src", btnImages[4] );
			$('#callout-5').fadeOut();
			$prev = null;
		 }
	});		
	 
	 
	$('.contentLayer').fadeIn(function(){
		
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
	});
			
});