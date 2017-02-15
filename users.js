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
    var $newrow = $("<tr>");
    $newrow.text($(this).serialize());
    $('#table').append($newrow);
    return false;
  });
})