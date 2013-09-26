$(document).ready(function(){

  $('.nav').live('touchstart click', function(e){
    e.stopPropagation(); e.preventDefault();
    var btn = $(this);
    var page;

    if(btn.hasClass('prev'))
      page = "veeva:gotoSlide(iphoneint, veriosync)";
    else
      page = "veeva:gotoSlide(closescreen.zip, veriosync)";

    
    jump(page);			
  });
});
