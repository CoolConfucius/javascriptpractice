$(document).ready(function(){
  $("#restore").on('click', '.ninja', function(){
    console.log("button clicked!");
    // $("#addclass > p").addClass("red"); 
    $(this).children("img").toggle(300);
  })

  // $("#slidetoggle").on('click', 'button', function(event){
  //   console.log("button clicked!");
  //   $("#imgblock").toggle(300); 
  //   event.stopPropagation(); 
  // })

  // $("#append").on('click', 'button', function(){
  //   console.log("button clicked!");
  //   var $newp = $("<p>").text("new paragraph!");
  //   $("#append").append($newp); 
  // })

})