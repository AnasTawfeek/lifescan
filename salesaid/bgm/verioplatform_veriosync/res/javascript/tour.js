$(document).ready(function(){

  function jump(page)
  {
    $('.animationLayer').fadeOut();
    $('.contentLayer').fadeOut( function(){				  					
      document.location = page;			
    });	
    
  };

  $('.nav').live('touchstart click', function(e){
    e.stopPropagation(); e.preventDefault();
    var btn = $(this);
    var page;
    
    if(btn.hasClass('prev'))
      page = "slide-3.0.html";
    else
      page = "slide-3.0.html";
    
    jump(page);			
  });

  
  var bMoveStrip=false;
  window.moveStrip=function() {
    if(bMoveStrip) return;
    bMoveStrip=true;
    $("#strip").animate({top: -70},1600,"swing",function() {
      $("#section1_1").fadeOut(500);
      $("#section1_2").fadeIn(500,null,window.flashDrop);
      //			, function() {
      //				fadeInSection("#section1_2");
      //				setTimeout(window.fadeInSection, 200, "#section1_2");
      //			});
    });
  }

  window.fadeInSection=function(sSection) {
    $(sSection).fadeIn(600);
  }

  window.showRead=function() {
    $("#section1_2").fadeOut(500);
    $("#sync").fadeIn(500);
    $("#section1_3").fadeIn(500,null,function() {
      window.bFlashDrop=false;
      window.flashSync(); 
    });
    $("#screen").fadeIn(500);
  }

  $('#particle_animation').bind("ended", function() {
    $('#particle_animation').hide();
    setTimeout(window.slidePhone, 500);
  });

  window.showSync=function() {
    window.bFlashSync=false;
    $('#particle_animation').get(0).play()
    $("#section1_3").fadeOut(500);
    $("#section1_4").fadeIn(300);
    $("#phone").animate({left: '752'}, 900);
  }

  window.slidePhone=function() {
    $("#device_holder").fadeOut(300);
    $("#section1_4").fadeOut(500);
    $("#phone").animate({left: '103'}, 2000, function() {
      window.fadeInSection("#section_summary");
    });
  }

  
  window.bFlashDrop=true;
  window.flashDrop=function() {
    $("#apply_blood").fadeIn(700).fadeOut(700, function() { if(window.bFlashDrop) window.flashDrop();});
  }
  
  window.bFlashSync=true;
  window.flashSync=function() {
    $("#sync").fadeOut(700).fadeIn(700,function() {  if(window.bFlashSync) window.flashSync();});
  }



  var lastItem="summary";
  
  window.showPhoneSection=function($sSection) {
    if($sSection==lastItem) return false;
    $("#section_"+lastItem).fadeOut(100);
    $("#section_"+$sSection).fadeIn(100);
    lastItem=$sSection;
    
    return false;
  }

  //	window.moveStrip();

});
