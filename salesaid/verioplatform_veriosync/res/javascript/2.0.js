$(document).ready(function(){

	window.jump=function(page)
	{
		console.log(page);
		$('.animationLayer').fadeOut();
		$('.contentLayer').fadeOut( function(){				  					
			document.location = page;			
		});	
	};
	
	$('#videoThumb img').live('touchstart click', function(e){
		$("#videoThumb").hide();
		$("#video").get(0).play();
	});
	
    var video = document.getElementsByTagName('video')[0];
	video.addEventListener("ended", function () {
		$("#videoThumb").show();
		$("#video").hide();
      $("#copy").fadeTo(2000,1);
	}, false);
});