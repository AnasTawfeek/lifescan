
$(document).ready(function(){
  
  $('body').bind('touchmove', function (e) {
    e.preventDefault();
    return true; 
  });

	$(".prescribe, .prescribe_hot").click(function() {
		window.jump("last_page.html");	
	});	
  
  window.preload_pictures = function(picture_urls, aImg, callback)
  {
    var loaded  = 0;

    for(var i = 0, j = picture_urls.length; i < j; i++)
    {
      var img = new Image();
      img.onload  = function()
      {                               
	if(++loaded == picture_urls.length && callback)
	{
	  callback();
	}
      }
      img.src = picture_urls[i];
      aImg.push(img);
    }
  };

  window.jump = function(page)
  {
    move('.contentLayer')
      .duration('0.6s')
      .set('opacity',0)
      .end();
    
    move('.animationLayer')
      .duration('0.6s')
      .set('opacity',0)
      .end(function(){
	document.location = page;			
      });
  };

  
  var images = [ 
    "res/images/global/btn-home-on.png" 
  ];		
  
  var img1 = new Image();
  img1.src = images[0];
  //	var img2 = new Image();
  //	img2.src = images[1];
  //	var img3 = new Image();
  //	img3.src = images[2];

  // button setup...				
  $("#btn-home").live('touchstart click', function(e){
    e.stopPropagation(); e.preventDefault();
    $(this).attr("src", images[0] );		
    window.jump("menu.html");
  });
  
  $('.nav').live('touchstart click', function(e){
    e.stopPropagation(); e.preventDefault();
    var btn = $(this);
    var page;
    
    if(btn.hasClass('prev'))
      page = window.pagePrev;
    else
      page = window.pageNext;
    
    window.jump(page);			
  });
});
