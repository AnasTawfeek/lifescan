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
		$("#video").css("top","0");
		$("#video").get(0).play();
	});
	
    var video = document.getElementsByTagName('video')[0];
	video.addEventListener("ended", function () {
		$("#videoThumb2").show();
		setTimeout(function() {$("#video").hide();}, 500);
		move("#copy").
		duration("2s").
		set("opacity",1).
		end();
	}, false);
});