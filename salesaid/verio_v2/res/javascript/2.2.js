$(document).ready(function(){					

  var imgpath = "res/images/2.2/";
  var overTarget = false;
  
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
      page = "slide-2.1.html";
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
  imageObj.src = imgpath +'strip.png';
  //var imageObj = document.createElement('img');
  
  imageObj.onload = function() {
    
    // load the strip image
    var strip = new Kinetic.Image({
      image: imageObj,                                                                                                   x:760,
      y: -100,
      rotation:20,
      width: 30,
      height: 113,
      offsetX: 15,
      offsetY: 57,
      draggable: true,
      id:'stripImg'
    });		
  
  
    strip.on('mousedown touchstart', function() { 
      var drag = this;
      var tween = new Kinetic.Tween(
        {
          node: drag,
          scale: {x: 1.5, y: 1.5},
          duration: 0.2,
          easing: Kinetic.Easings.EaseOut
        });
      tween.play();
    });
    
    strip.on('mouseup touchend', function() { 
      var drag = this;
      var tween = new Kinetic.Tween(
        {
          node: drag,
          scale: {x: 1.1, y: 1.1},
          duration: 0.2,
          easing: Kinetic.Easings.EaseOut
        });
      tween.play();
    });
    
    strip.on('dragend', function(e) { 		
      e.stopPropagation(); e.preventDefault();
      
      var drag = this;
/*
// DEPRECATED according to http://stackoverflow.com/questions/16648883/uncaught-typeerror-object-object-has-no-method-transitionto
*/
      var tween = new Kinetic.Tween({
        node: drag,
	x: 430,
	y: 95,	
	scale:{x:1, y:1},		
	duration: 0.2,	
        easing: Kinetic.Easings.EaseOut,
	onFinish: function() {											
	  drag.hide();																		
	  $('#screens').fadeIn(function(){	
	    
	    setTimeout(function(){
	      $('#screenBlood').fadeIn();
	    }, 500);
	    
	  });
	  
	}	
      });
      // inverts callback control. neat!
      tween.play();
    });		
    
    layer.add(strip);		
    stage.add(layer);
  };
  //imageObj.src = imgpath +'strip.png';
  
  setTimeout(function(){
    $('.headings').fadeIn(function(){
      setTimeout(function(){
	$('.headings span').fadeOut();
	$('.headings p:nth-child(2)').fadeOut(function(){
	  
	  $('#vial').fadeIn();
	  
	  $('.headings p:nth-child(3)').fadeIn();
	  
	  var dragImg = stage.get('#stripImg')[0];  
	  var tween = new Kinetic.Tween({
	    node: dragImg,
            x: 685,
	    y: 526,			
	    rotation: 0,		
	    duration: 1.5,
	    easing: Kinetic.Easings.EaseOut
	  });
          tween.play();
	  
          
	});				
      }, 1000);
    });
  }, 500);
  
});
