function attach_handlers(){
  console.log("attach_handlers");
  $("#hardsubmit").click(hardsubmit);  
}

function hardsubmit(){
  console.log("Hard");
  $("#form").submit(); 
}


$(document).ready(function(){
  attach_handlers(); 
  $('#h1').click(function(){
    console.log("click");
    var $newbutton = $("<button>");
    $newbutton.attr("id", "hardsubmit");
    $newbutton.text("Hard Submit!");
    $('#form').after($newbutton);
    attach_handlers();
  })

  $('#form').submit(function(){
    console.log("Submit!")  
    return false;
  });
  // $("#addclass").on('click', 'button', function(){
  //   console.log("button clicked!");
  //   $("#addclass > p").addClass("red"); 
  // })

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