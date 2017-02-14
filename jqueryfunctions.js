$(document).ready(function(){
  $("#addclass").on('click', 'button', function(){
    console.log("button clicked!");
    $("#addclass > p").addClass("red"); 
  })
})