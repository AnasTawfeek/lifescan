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
      page = "verio.html";
    else
      page = "slide-2.1.html";
    
    jump(page);			
  });
  
    move('#verio')
      .ease('in-out')
      .duration('2s')
      .x(-454)
	  .delay("0.4s")
      .end(function() {
		  move('#step2heading1')
		    .duration('1s')
			.set('opacity', 1)
      		.end(function() {
				move('#step2heading2')
		    		.duration('1s')
					.set('opacity', 1)
					.end();
				}
			)
	  		}
	  );
	  
});
 
