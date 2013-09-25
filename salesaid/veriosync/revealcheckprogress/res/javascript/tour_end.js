$(document).ready(function(){

  $('.nav').live('touchstart click', function(e){
    e.stopPropagation(); e.preventDefault();
    var btn = $(this);
    var page;

    if(btn.hasClass('prev'))
      page = "veeva:gotoSlide(iphoneint, BGM_01-2012_POA)";
    else
      page = "veeva:gotoSlide(closescreen.zip, BGM_01-2012_POA)";

    
    jump(page);			
  });
});
