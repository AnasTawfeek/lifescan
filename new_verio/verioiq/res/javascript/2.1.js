$(document).ready(function(){					
	
	var imgpath = "res/images/2.1/";
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
			page = "veeva:gotoSlide(home.zip)";
		else
			page = "slide-2.5.html";
		
		jump(page);			
	});
	
	function resetState(){					
		if($prev != null)
			$prev.trigger('touchstart');					
	};	
	
	// preload the button tap states...
	var images = [ imgpath+ "btn-test-on.png", 
							imgpath+ "btn-easy-on.png", 
							imgpath+ "btn-perf-on.png", 
							imgpath+ "btn-illum-on.png", 
							imgpath+ "btn-tour-arrow-on.png",
							imgpath+ "btn-test-dark.png", 
							imgpath+ "btn-easy-dark.png", 
							imgpath+ "btn-perf-dark.png", 
							];		

	var btn1 = new Image();
	btn1.src = images[0];				
	var btn2 = new Image();
	btn2.src = images[1];				
	var btn3 = new Image();
	btn3.src = images[2];				
	var btn4 = new Image();
	btn4.src = images[3];				
	var btn5 = new Image();
	btn5.src = images[4];
	var btn6 = new Image();
	btn6.src = images[5];
	var btn7 = new Image();
	btn7.src = images[6];
	var btn8 = new Image();
	btn8.src = images[7];
	
	function showDark(){				
		$('#callout-illum-dark').fadeIn();	
		$('.head4:first').removeClass('purple').addClass('white');
		$('#btn-test').attr("src", btn6.src );
		$('#btn-easy').attr("src", btn7.src );
		$('#btn-perf').attr("src", btn8.src );
		$('footer img').attr("src", "res/images/global/footer-logo-white.png");
	};
	
	function hideDark(){
		$('#callout-illum-dark').fadeOut();
		$('.head4:first').removeClass('white').addClass('purple');
		$('#btn-test').attr("src", imgpath+ "btn-test.png" );
		$('#btn-easy').attr("src", imgpath+ "btn-easy.png" );
		$('#btn-perf').attr("src", imgpath+ "btn-perf.png" );
		$('footer img').attr("src", "res/images/global/footer-logo.png");
	};				

	// button setup...					
	$("#btn-test").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		var btn = $(this);
		
		if(btn.attr('src').indexOf('-on') <= 0)
		{
			resetState();			
			btn.attr("src", btn1.src );
			$('#callout-test').fadeIn();	
			$('#callout-test').live('touchstart click', function(e){
				e.stopPropagation(); e.preventDefault();
				$('#overlay').fadeIn();
				$('#overlay').live('touchstart click', function(e){
					e.stopPropagation(); e.preventDefault();
					$(this).fadeOut('slow', function(){
						$(this).unbind();
					});	
				});						
			});					
			$prev = btn;
		 }
		 else
		 {
			btn.attr("src", imgpath+ "btn-test.png" );
			$('#callout-test').unbind();
			$('#callout-test').fadeOut();
			$prev = null;
		 }
	});			
	
	
	 
	 $("#btn-easy").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		var btn = $(this);
		
		if(btn.attr('src').indexOf('-on') <= 0)
		{
			resetState();					
			btn.attr("src", btn2.src );
			$('#callout-easy').fadeIn();	
			$prev = btn;
		}
		else
		{
			btn.attr("src", imgpath+ "btn-easy.png" );
			$('#callout-easy').fadeOut();
			$prev = null;
		}
	});
	 
	 $("#btn-perf").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		var btn = $(this);
		
		if(btn.attr('src').indexOf('-on') <= 0)
		{
			resetState();					
			btn.attr("src", btn3.src );
			$('#callout-perf').fadeIn();	
			$prev = btn;
		}
		else
		{
			btn.attr("src", imgpath+ "btn-perf.png" );
			$('#callout-perf').fadeOut();
			$prev = null;
		}
	});
	 
	 $("#btn-illum").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		var btn = $(this);
		
		if(btn.attr('src').indexOf('-on') <= 0)
		{	
			resetState();				
			btn.attr("src", btn4.src );
			showDark();			
			$prev = btn;		
		}
		else
		{
			btn.attr("src", imgpath+ "btn-illum.png" );					
			hideDark();		
			$prev = null;
		}
	});
	 
	 $("#btn-tour").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();	
							   
		$('#arrow').attr("src", btn5.src );
		$('#btn-tour div').removeClass('light-blue').addClass('purple');
					
		move('#icon')
			.scale(1.2)
			.then(function(){
				// jump to tour slide...
				jump('slide-2.2.html');				
				})
			.end();
	 });
	 
	$('.contentImg').fadeIn();
	$('.contentLayer').fadeIn(function(){
	
		$('.headings p:last-child').fadeIn('slow');
		
	});
			
});