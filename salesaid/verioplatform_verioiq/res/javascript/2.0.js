$(document).ready(function(){		


  var imgpath = "res/images/2.0/";
  
  function jump(page)
  {
    $('.contentLayer').fadeOut( function(){				  					
      document.location = page;			
    });	
  };
  
  $('.nav').live('touchstart click', function(e){
    e.stopPropagation(); e.preventDefault();
    var btn = $(this);
    var page;
    
    if(btn.hasClass('prev'))
      page = "verioplatform_verioiq.html";
    else
      page = "slide-2.1.html";
    
    jump(page);			
  });
  
  function step2(){
    
    //$('#verio').show();
    
    $('.step2').show();
    $('.animationLayer').hide();							
    
    move('#verio')
      .ease('in-out')
      .duration('1s')
      .x(220)
      .end();
    
    $('#step2heading').fadeIn('slow', function(){
      $(this).next().fadeIn('slow');						
    });	
  };
  
  function launchVerio(){
    $('.step1').fadeOut();	
    player.play();						
  };
  
  var player = $("#player").get(0);		
  $('#player').bind("ended", function(){
    step2();
  });
  
  /*
    function launchVerio(){
    $('.contentLayer').fadeOut('fast', function(){
    //document.location = "veeva:gotoSlide(slide-2.1.zip)";	
    document.location = "../verio/slide-2.1.html";	
    });		
    };
  */
  
  function launchMini(){
    $('.contentLayer').fadeOut('fast', function(){
      //document.location = "veeva:gotoSlide(slide-3.0.zip, 002)";	
      document.location = "veeva:gotoSlide(ultramini.zip)";	
    });		
  };

  // local button setup...
  var img1 = new Image();
  img1.src = imgpath +"btn-verio-on.png";				
  var img2 = new Image();
  img2.src = imgpath +"btn-mini-on.png";
  
  $("#btn-verio").live('touchstart click', function(e){
    e.stopPropagation(); e.preventDefault();
    $(this).attr("src",  img1.src );					   
    launchVerio();
  });
  
  $("#img-verio").live('touchstart click', function(e){
    e.stopPropagation(); e.preventDefault();   
    $('#btn-verio').attr("src",  img1.src );					   
    $("#btn-verio").trigger('touchstart');
  });
  
  $("#btn-mini").live('touchstart click', function(e){
    e.stopPropagation(); e.preventDefault();
    $(this).attr("src", img2.src );				   	
    launchMini();
  });
  
  $("#img-mini").live('touchstart click', function(e){
    e.stopPropagation(); e.preventDefault();		   
    $("#btn-mini").trigger('touchstart');
  });
  
  
  
  $('.contentLayer').fadeIn();				
    // tony's change to make veriosync animation load on document load
  $('#btn-verio').attr("src",  img1.src );					   
 
  launchVerio();
  // -----------------------------

});
 
