$(document).ready(function(){

  $('.nav').live('touchstart click', function(e){
    e.stopPropagation(); e.preventDefault();
    var btn = $(this);
    var page;
    
    if(btn.hasClass('prev'))
      page = "veeva:gotoSlide(iphoneint, BGM_01-2012_POA)";
    else
      page = "veeva:gotoSlide(experience.zip, BGM_01-2012_POA)";
    
    
    jump(page);			
  });

  window.fadeInSection=function(sSection) {
    $(sSection).fadeIn(600);
  }

  window.showPhoneSection=function($sSection) {
//    if($sSection==lastItem) return false;
    $(".copy_phone").fadeOut(100,null,function() {window.location="tour_section_"+$sSection+".html"});
//    $("#section_"+$sSection).fadeIn(100);
 //   lastItem=$sSection;
    
    return false;
  }

    $(".copy_phone").fadeIn(400);

});
