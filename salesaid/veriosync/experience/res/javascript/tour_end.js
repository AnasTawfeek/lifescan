$(document).ready(function(){

  $('.nav').live('touchstart click', function(e){
    e.stopPropagation(); e.preventDefault();
    var btn = $(this);
    var page;
    
    if(btn.hasClass('prev'))
      page = "veeva:gotoSlide(share.zip, VerioSync_09-2013_POA)";
    else
      page = "veeva:gotoSlide(closescreen.zip, VerioSync_09-2013_POA)";
    
    
    jump(page);			
  });
});
