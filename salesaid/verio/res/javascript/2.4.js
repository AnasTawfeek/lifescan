$(document).ready(function(){					
	
	var imgpath = "res/images/2.4/";	
	var $prevSubheading = null;
	
	var activeButtonId = '';
	var videoPlaying = false;
	
	$('.nav').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		var btn = $(this);
		var page;
		
		if(btn.hasClass('prev'))
			page = "slide-2.1.html";
		else
			page = "slide-2.5.html";
		
		jump(page);			
	});
	
	function showHeading(which){			
			
		$prevSubheading.fadeOut('fast',function(){			
				
			$prevSubheading = $('.headings p:nth-child('+ which +')');
			$prevSubheading.fadeIn('slow', function(){
				if(which == 5)
					$('.headings p:nth-child(1)').removeClass('purple').addClass('white');
				else
					$('.headings p:nth-child(1)').removeClass('white').addClass('purple');	
			});
		});		
	};	
	
	// preload the button tap states...
	var images = [ imgpath+ "btn-top.png", 
							imgpath+ "btn-front.png", 
							imgpath+ "btn-illum.png",
							imgpath+ "btn-top-on.png", 
							imgpath+ "btn-front-on.png", 
							imgpath+ "btn-illum-on.png"
							];				
			
	var p1 = $("#player1").get(0);
	var p2 = $("#player2").get(0);
	var p3 = $("#player3").get(0);		
	
	$('#player1').bind("ended", function(){
		resetState();
	});
	$('#player2').bind("ended", function(){
		resetState();
	});
	$('#player3').bind("ended", function(){
		resetState();
	});
	
	function resetState()
	{
		switch(activeButtonId)
		{
			case 'btn-top':
				$('#'+activeButtonId).attr("src", images[0] );
				break;
			case 'btn-front':
				$('#'+activeButtonId).attr("src", images[1] );
				break;
			case 'btn-illum':
				$('#'+activeButtonId).attr("src", images[2] );
				break;
		}
		videoPlaying = false;
	}

	// button setup...					
	$("#btn-top").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		if(!videoPlaying)
		{		
			showHeading(3);
		    $('footer img').attr("src", "res/images/global/footer-logo.png");
			videoPlaying = true;		
			$(this).attr("src", images[3] );
			activeButtonId = $(this).attr('id');
			
			$('#player3').css('z-index', '1');
			$('#player2').css('z-index', '2');
			$('#player1').css('z-index', '3');
			
			p1.play();	
		}
	});			
	
	$("#btn-front").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		if(!videoPlaying)
		{	
			showHeading(4);
		    $('footer img').attr("src", "res/images/global/footer-logo.png");
			videoPlaying = true;	
			$(this).attr("src", images[4] );
			activeButtonId = $(this).attr('id');
			
			$('#player3').css('z-index', '2');
			$('#player2').css('z-index', '3');
			$('#player1').css('z-index', '1');
		
			p2.play();	
		}
	});	
	
	$("#btn-illum").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		if(!videoPlaying)
		{			
			showHeading(5);
			$('footer img').attr("src", "res/images/global/footer-logo-white.png");
			videoPlaying = true;	
			$(this).attr("src", images[5] );
			activeButtonId = $(this).attr('id');
			
			
			$('#player3').css('z-index', '3');
			$('#player2').css('z-index', '2');
			$('#player1').css('z-index', '1');
			
			p3.play();	
		}
	});	
});

function onFadeInComplete() {
	$prevSubheading = $('.headings p:nth-child(2)');
	$prevSubheading.fadeIn('fast');
}