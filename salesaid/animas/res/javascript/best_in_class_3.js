var imgpath = "res/images/performance_3/";
window.pagePrev = "best_in_class_2.html";
window.pageNext = "menu.html";


function firstFade() {
  $(".header").fadeIn();
  setTimeout(secondFade, 500);
}

function secondFade() {
  $(".dexcom").fadeIn();
}



$(document).ready(function(){		
  setTimeout(firstFade, 700);

  $(".briefsafety").click(function() {
    $('.popup').toggle();
  });
  
});
