$(document).ready(function(){					
	
	var imgpath = "res/images/6.5.a/";
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
			page = "6.4.a.html";
		else
			page = "6.6.a.html";
		
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
							imgpath+ "btn-4-on.png",
							imgpath+ "btn-chart-bolus-on.png",
							imgpath+ "btn-chart-dose-on.png",
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
			$('#chart-dose').fadeIn();			
		
			$prev = btn;
		 }
		 else
		 {
			btn.attr("src", btnImages[0] );
			$('#call-1').fadeOut();
			$('#call-1-ref').fadeOut();
			$('#chart-dose').fadeOut();			
			
			$prev = null;
		 }
	});			
	
	$('#call-1').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		$('#call-1-ref').addClass('on-top');
		$('#call-1-ref').fadeIn();								
	});		
	$('#call-1-ref').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		$(this).fadeOut(function(){
			$(this).removeClass('on-top');
		});	
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
			$('#chart-bolus').fadeIn();			
		
			$prev = btn;
		 }
		 else
		 {
			btn.attr("src", btnImages[2] );
			$('#call-3-ref').fadeOut();
			$('#call-3').fadeOut();
			$('#chart-bolus').fadeOut();

			$prev = null;
		 }
	});	
	
	$('#call-3').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		$('#call-3-ref').addClass('on-top');
		$('#call-3-ref').fadeIn();								
	});		
	$('#call-3-ref').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		$(this).fadeOut(function(){
			$(this).removeClass('on-top');
		});	
	});	
	 
	$("#btn-4").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		var btn = $(this);
		
		if(btn.attr('src').indexOf('-on') <= 0)
		{
			resetState();			
			btn.attr("src", btnImages[7] );
			
			$('#imgMeters').fadeOut('fast', function(){
				$('#call-4').fadeIn();
			});
			
			$prev = btn;
		 }
		 else
		 {
			btn.attr("src", btnImages[3] );
			
			$('#call-4').fadeOut('fast', function(){
				$('#imgMeters').fadeIn();
			});
			
			$prev = null;
		 }
	});			 
        
	$('#chart-dose').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		$(this).attr("src", btnImages[9] );		
		jump("chart-dose.html");								
	});	 
	
        
        $('#chart-bolus').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		$(this).attr("src", btnImages[8] );
		jump("chart-bolus.html");								
	});

	$('.animationLayer').fadeIn('slow');		
	$('.contentLayer').fadeIn('slow');
			
});