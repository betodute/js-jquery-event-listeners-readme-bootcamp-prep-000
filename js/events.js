  function getIt(){
    $("p").on("click", function(){
    window.alert("Hey!");
    });
  }
  
  function frameIt(){
    $("img").on("load", function(){
      $("img").addClass("tasty");
    });
  }
  
  function pressIt(){
    $("input").on("keydown", function(g){
      if(g.which === 71)
    });
  }

$(document).ready(function(){

});
