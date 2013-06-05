$(document).ready(function(){

	function jump(page)
	{
		$('.animationLayer').fadeOut();
		$('.contentLayer').fadeOut( function(){				  					
			document.location = page;			
		});	
	};
	

    var video = document.getElementsByTagName('video')[0];
	console.log(video);
	video.addEventListener("ended", function () {
      $("#copy").fadeIn(2000);
	}, false);
});