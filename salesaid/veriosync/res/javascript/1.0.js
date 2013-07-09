$(document).ready(function(){

  $('#face1').live('touchstart click', animateFace);
  $('#face2').live('touchstart click', animateFace);
  $('#face3').live('touchstart click', animateFace);
  $('#face4').live('touchstart click', animateFace);
  $('#face5').live('touchstart click', animateFace);
  $('#face6').live('touchstart click', animateFace);

	window.closeStatistics=function() {
			    $('#stats').removeClass("showMe");
			    $('#stats').css("display","block");
				
				var context=document.getElementById("chart").getContext("2d");
				context.clearRect(0,0,500,500);
//		$("#stats").fadeOut(300,null,function() {
//			setTimeout(function() {
//			    $('#stats').removeClass("showMe");
//			    $('#stats').css("display","block");
//			}, 100)
//	});
	}

  function animateFace(e) {
    e.stopPropagation(); e.preventDefault();
    if($(this).hasClass('flip')) {
      $(this).removeClass('flip');
    }
    else
    {
      $(this).addClass('flip');
    }
  }

	function showChart() {
		console.log("chart");
		var pieOptions = {
			segmentShowStroke : true,
			segmentStrokeColor : "#FFF",
			segmentStrokeWidth : 6,
			animation : true,
			animationSteps : 30,
			animationEasing : "easeInOutSine",
			animateRotate : true,
			animateScale : false,
			onAnimationComplete : null
		};
		
		var pieData = [
				{
					value: 77,
					color:"#8dd8fc"
				},
				{
					value : 23,
					color : "#b1b1b1"
				}
			];

			var myPie = new Chart(document.getElementById("chart").getContext("2d")).Pie(pieData, pieOptions);

	}

  
  // fade in the content...
  //	$('.contentLayer').fadeIn(function(){
  //		$('.animationLayer').fadeIn('slow');
  //	});
  
  // fade in the content...
  $('#rightside').click(function(e) {
    $('#stats').addClass("showMe");
	setTimeout(showChart,700);     
  });

  $(".showlegal").click(function() {
    $(".legal").toggle();
    return false;
  });

  ;})
