$(document).ready(function(){
  $("#addclass").on('click', 'button', function(){
    console.log("button clicked!");
    $("#addclass > p").addClass("red"); 
  })

  $("#slidetoggle").on('click', 'button', function(event){
    console.log("button clicked!");
    $("#imgblock").toggle(300); 
    event.stopPropagation(); 
  })

  $("#append").on('click', 'button', function(){
    console.log("button clicked!");
    var $newp = $("<p>").text("new paragraph!");
    $("#append").append($newp); 
  })

})