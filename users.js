function attach_handlers(){
  console.log("attach_handlers");
  $(".ninja").on('click', 'img', ninjacat);  
}

function ninjacat(){
  console.log("img clicked!");
  console.log($(this).attr("src"));
  console.log($(this).attr("data-alt-src"));
  $(this).attr("src", $(this).attr("data-alt-src"));  
}

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