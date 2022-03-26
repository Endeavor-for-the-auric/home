$(document).ready(function(){
    $(".navbars").hide();
    $(".activator").click(function(){
      $(".intro-content").fadeOut();
      $(".navbars").show();
      $(".navbars").animate({
        top: "300px"
      });
    });
  });