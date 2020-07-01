$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 200){
      $('#btnScrollToTop').fadeIn();
    } else{
      $('#btnScrollToTop').fadeOut();
    }
  });

  $("#btnScrollToTop").click(function(){
    $('html , body').animate({scrollTop : 0},200);
  });
});

$("check").click( function (){
  $(".icon").toggleClass("close");
});
