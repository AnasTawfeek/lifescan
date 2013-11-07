$(document).ready(function(){
  
  
  $('.nav').live('touchstart click', function(e){
    e.stopPropagation(); e.preventDefault();
    var btn = $(this);
    var page;
    
    if(btn.hasClass('prev'))
      page = "verioiq.html";
    else
      page = "slide-2.1.html";
    
    jump(page);			
  });
  
  	window.closeStatistics=function() {
	    $('#stats').removeClass("showMe");
	}

  
  $('#face1').live('touchstart click', animateFace);
  $('#face2').live('touchstart click', animateFace);
  $('#face3').live('touchstart click', animateFace);
  $('#face4').live('touchstart click', animateFace);
  $('#face5').live('touchstart click', animateFace);
  $('#face6').live('touchstart click', animateFace);

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
		var pieOptions = {
			segmentShowStroke : true,
			segmentStrokeColor : "#2aaff8",
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
					value: 94,
					color:"#555083"
				},
				{
					value : 6,
					color : "#b1b1b1"
				}
			];

			var myPie = new Chart(document.getElementById("chart").getContext("2d")).Pie(pieData, pieOptions);

	}

  
  // fade in the content...
  $('.popup_btn').click(function() {
	$("#chart").remove();
	$("#stats").append('<canvas id="chart" height="244" width="244"></canvas>');
	$('#stats').addClass("showMe");
	setTimeout(showChart,700);
/*
	move("#legal").
	delay("0.5s").
	duration("1s").
	set("opacity",1).
	end(function() {
		showChart();
	});
*/	
    return false;
  });
  
  $(".showlegal").click(function() {
    $("#legal").toggle();
    return false;
  });

//  $('.contentLayer').fadeIn();

});
