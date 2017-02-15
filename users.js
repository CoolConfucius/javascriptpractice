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
    var $newbutton = $("<button>").attr("id")="hardsubmit".text("Hard Submit!");
    $('#form').after()
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