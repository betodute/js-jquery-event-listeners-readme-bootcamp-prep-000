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
      if(g.which === 71){
        window.alert("Hey homie you pressed G");
      }
    });
  }

$(document).ready(function(){

});
