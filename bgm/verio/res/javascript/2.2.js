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
	
	var stage = new Kinetic.Stage({
		container: 'container',
		width: 884,
		height: 657
	});
	var layer = new Kinetic.Layer();
	
	var rect = new Kinetic.Rect({
		x: 340,
		y: 70,
		width: 200,
		height: 300,
		id:'dropRect'
	});
	
	layer.add(rect);	
	
	var imageObj = new Image();
      imageObj.onload = function() {
        
		// load the strip image
		var strip = new Kinetic.Image({
		  image: imageObj,
		  x:760,
		  y: -100,
		  rotation:20,
		  width: 30,
		  height: 113,
		  offset:{x:15, y:57},
		  draggable: true,
		  id:'stripImg'
		});		
		
		strip.on('mousedown touchstart', function() { 
			var drag = this;
			drag.transitionTo({
					scale:{x:1.5, y:1.5},			
					duration: 0.2,
					easing: 'strong-ease-out'
			});
		});
		
		strip.on('mouseup touchend', function() { 
			var drag = this;
			drag.transitionTo({
					scale:{x:1, y:1},			
					duration: 0.2,
					easing: 'strong-ease-out'
			});
		});
		
		strip.on('dragend', function(e) { 		
			e.stopPropagation(); e.preventDefault();
			
			var drag = this;
			drag.transitionTo({
					x: 430,
					y: 95,	
					scale:{x:1, y:1},		
					duration: 0.2,
					easing: 'strong-ease-out',
					callback: function() {											
						drag.hide();																		
						$('#screens').fadeIn(function(){	
												
							setTimeout(function(){
								$('#screenBlood').fadeIn();
							}, 500);
							
						});
						
					  }	
				  });	
			/*	
			var target = stage.get('#dropRect')[0];  
			var drag = this;        
			
			if( drag.attrs.x >= target.attrs.x
				&& drag.attrs.x <= target.attrs.x + target.attrs.width
				&& drag.attrs.y <= target.attrs.y + target.attrs.height
				&& drag.attrs.y >= target.attrs.y){
			
				//console.log('dropped!')	
				
				drag.transitionTo({
					x: 430,
					y: 95,	
					scale:{x:1, y:1},		
					duration: 0.2,
					easing: 'strong-ease-out',
					callback: function() {											
						drag.hide();																		
						$('#screens').fadeIn(function(){	
												
							setTimeout(function(){
								$('#screenBlood').fadeIn();
							}, 500);
							
						});
						
					  }	
				  });	
			}
			else
			{
				this.transitionTo({
					x:685,
		  			y: 526,			
					scale:{x:1, y:1},	
					duration: 0.3,
					easing: 'strong-ease-out'
				  });
			}	
			
			*/	  
        });		
		
		layer.add(strip);		
		stage.add(layer);
    };
  	imageObj.src = imgpath +'strip.png';
	
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