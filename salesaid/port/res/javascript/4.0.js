$(document).ready(function(){
  
  var moving=false;
  var imgpath = "res/images/2.1/";
  var $prevBtn = null;
  var prevButtonId = null;
  
  function resetState(){					
    if(prevButtonId != null)
    {			
      var co = $('#'+prevButtonId).prev();
      co.hide();	
      move( prevButtonId )
	.scale( 1 )
	.duration('.2s')
	.end();	
      
      $('#'+prevButtonId).removeClass('on');					
      //$prevBtn = null;	
    }
  };					
  
  $('#verio .co').live('touchstart click', function(e){
    e.stopPropagation(); e.preventDefault();
    
    document.location = "veeva:gotoSlide(verio.zip, BGM_01-2012_POA)"; 
  });
  $('#mini .co').live('touchstart click', function(e){
    e.stopPropagation(); e.preventDefault();
    
    document.location = "veeva:gotoSlide(ultramini.zip, BGM_01-2012_POA)"; 
  });

  $(".mini_link").live('touchstart click', function(e) {
    e.stopPropagation(); e.preventDefault();
    document.location = "veeva:gotoSlide(ultramini.zip, BGM_01-2012_POA)";
  });

  $("#veriosync .arrow").live('touchstart click', function(e) {
    e.stopPropagation(); e.preventDefault();
    document.location = "veeva:gotoSlide(yourpatientinsights.zip, VerioSync_09-2013_POA)";
  });
  
  $('.button').live('touchstart click', function(e){
    e.stopPropagation(); e.preventDefault();	
    
    var btn = $(this);
    var currentButtonId = btn.attr('id');
    var scaled = btn.data('scaled');
    var co = btn.prev();		
    
    if($prevBtn != null)
    {
      prevButtonId = $prevBtn.attr('id');
      
      if(prevButtonId != currentButtonId)
      {
	var prevCo = $prevBtn.prev().hide();	
	move( prevButtonId )
	  .scale( 1 )
	  .duration('.2s')
	  .end();
	
	$prevBtn.removeClass('on');
      }
      
      //
      
      //$prevBtn = null;	
    }
    
    if(!btn.hasClass('on'))
    {
      co.fadeIn('fast');
      
      move( currentButtonId )
	.duration('.2s')
	.scale( scaled )		
	.end();	
      
      btn.addClass('on');
    }
    else
    {
      co.hide();				
      move( currentButtonId )
	.scale( 1 )
	.duration('.2s')
	.end();	
      
      btn.removeClass('on');
    }
    
    $prevBtn = btn;
    
    /*if($prevBtn != null)
      {
      prevButtonId = $prevBtn.attr('id');
      var prevCo = $prevBtn.prev().hide();	
      move( prevButtonId )
      .scale( 1 )
      .duration('.2s')
      .end();
      
      $prevBtn = null;	
      }
      
      if(prevButtonId != currentButtonId)
      {					
      var scaled = btn.data('scaled');
      var co = btn.prev();			
      
      co.fadeIn('fast');
      
      move( currentButtonId )
      .duration('.3s')
      .scale( scaled )		
      .end();	
      
      btn.addClass('on');
      
      $prevBtn = btn;
      }*/
    
    
    
    
    
    
    
    /*if( !img.hasClass('on') && !moving )
      {									
      co.fadeIn('fast');
      moving = true;
      move( moveImg )
      .duration('.3s')
      .scale( scaled )		
      .end( function(){ moving=false; });	
      
      img.addClass('on');
      $prevBtn = img;			
      }
      else
      {
      //console.log("off");
      co.hide();				
      move( moveImg )
      .scale( 1 )
      .duration('.2s')
      .end();	
      
      img.removeClass('on');					
      $prevBtn = null;	
      }*/
    
  });

});
