$(document).ready(function(){
	
	function jump(page)
	{
		$('#grid').fadeOut( function(){				  					
			document.location = page;			
		});	
	};
	
	// generate rando between a range...	
	function randomMinToMax(min, max_v) {
	  var range = max_v - min + 1;
	  return Math.floor(Math.random()*range + min);
	}
	
	function addClassDelayed(jqObj, to) {    
		setTimeout(function() { jqObj.addClass('flip'); }, to);
	}		
	
	function randoArray ( myArray ) {
	  var i = myArray.length, j, tempi, tempj;
	  if ( i == 0 ) return false;
	  while ( --i ) {
		 j = Math.floor( Math.random() * ( i + 1 ) );
		 tempi = myArray[i];
		 tempj = myArray[j];
		 myArray[i] = tempj;
		 myArray[j] = tempi;
	   }
	}

	$("#grid").fadeIn(function(){
		
		move('#logo')
		.ease('out')
		.scale(1.2)
		.set('opacity',1)
		.duration('3s')
		.then()
			//.duration('.5s')
			//.set('opacity', 0)
			.then( function(){				  							 	
				// goto next page...				
				//document.location = "6.1.html";						
			})
			.pop()
		.end();	
		
		/*
		//var pics = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16" ];
		//randoArray(pics);		
		//var delay = 500;		
		$.each(pics, function( key, value ) {			
			addClassDelayed( $("#card"+ value), delay);
			delay += 400;			
		});		
		*/
		
		$(".card.panel").css('background-color', '#dddddd');
		
		// TODO: see if we can get it to work with the loop above instead of this crusty way...
		addClassDelayed($("#card1"), 200);
		addClassDelayed($("#card2"), 1800);
		addClassDelayed($("#card3"), 400);
		addClassDelayed($("#card4"), 2800);
		addClassDelayed($("#card5"), 1600);
		addClassDelayed($("#card6"), 1400);
		addClassDelayed($("#card7"), 2200);
		addClassDelayed($("#card8"), 3000);
		addClassDelayed($("#card9"), 2600);
		addClassDelayed($("#card10"), 600);
		addClassDelayed($("#card11"), 1200);
		addClassDelayed($("#card12"), 2000);
		addClassDelayed($("#card13"), 800);
		addClassDelayed($("#card14"), 2400);
		addClassDelayed($("#card15"), 1000);
		addClassDelayed($("#card16"), 400);		
		
		setTimeout(function() { 
			jump('veeva:gotoSlide(ipt-home_v2.zip)');
		}, 5000);
		
	});
	
});
