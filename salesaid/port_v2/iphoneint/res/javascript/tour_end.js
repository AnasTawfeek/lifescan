$(document).ready(function(){

  $('.nav').live('touchstart click', function(e){
    e.stopPropagation(); e.preventDefault();
    var btn = $(this);
    var page;
    
    if(btn.hasClass('prev'))
      page = "tour.html";
    else
      page = "slide-4.0.html";
    
    jump(page);			
  });
});
