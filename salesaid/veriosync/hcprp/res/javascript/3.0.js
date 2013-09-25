$(document).ready(function(){

  var _iMenu=0;
  var lastItem=$("#phone_none");
  
  window.showMenu=function(iMenu) {
    // deal with that stupid logo in the bottom right
    if (iMenu === 3){
      $("footer").hide();
    }
    else {
      $("footer").show();
    }
    
    if(iMenu==_iMenu) return false;
    _iMenu=iMenu;
    
    
    for(var i=1;i<=3;i++)
      if(i==_iMenu)
	$("#menu"+i).show();
    else
      $("#menu"+i).hide();
    
    if(lastItem) 
      $(lastItem).fadeOut(600);
    
    lastItem=$("#phone_"+_iMenu);
    $(lastItem).fadeIn(600);
    
    
    return false;
  }
});
