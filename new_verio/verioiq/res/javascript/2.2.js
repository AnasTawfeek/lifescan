$(document).ready(function(){					

	var imgpath = "res/images/2.2/";
	var overTarget = false;
	
	$('.contentImg').fadeIn();
	
	function jump(page)
	{
		$('.contentImg').fadeOut();
		$('.contentLayer').fadeOut( function(){				  					
			document.location = page;			
		});	
	};
	
	$('.nav').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		var btn = $(this);
		var page;
		
		if(btn.hasClass('prev'))
			page = "verio.html";
		else
			page = "slide-2.3.html";
		
		jump(page);			
	});
	
	setTimeout(function(){
		$('.headings').fadeIn(function(){
			setTimeout(function(){
				$('.headings span').fadeOut();
				$('.headings p:nth-child(2)').fadeOut(function(){
					
					$('#vial').fadeIn();
					
					$('.headings p:nth-child(3)').fadeIn();
					
					var dragImg = stage.get('#stripImg')[0];  
					dragImg.transitionTo({
						x:685,
		  				y: 526,			
						rotation: 0,		
						duration: 1.5,
						easing: 'ease-out'
					  });
				  
				});				
			}, 1000);
		});
	}, 500);
	
});
