$(document).ready(function(){

	window.jump=function(page)
	{
		console.log(page);
		$('.animationLayer').fadeOut();
		$('.contentLayer').fadeOut( function(){				  					
			document.location = page;			
		});	
	};
	
    var video = document.getElementsByTagName('video')[0];
	video.addEventListener("ended", function () {
      $("#copy").fadeIn(2000);
	}, false);
});