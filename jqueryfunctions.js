$(document).ready(function(){
  $("#addclass").on('click', 'button', function(){
    console.log("button clicked!");
    $("#addclass > p").addClass("red"); 
  })

  $("#slidetoggle").on('click', 'button', function(event){
    console.log("button clicked!");
    // $("#slidetoggle > .imgblock").slideToggle("slow", function(){
    //   console.log("toggle success!");
    // }); 
    $("#imgblock").slideToggle(300); 
    event.stopPropagation(); 
  })

  $("#imgblock").click(function(){
    $("#imgblock").slideToggle(300); 
  })
})