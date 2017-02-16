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
    var $newcard = $("<li>").addClass("card");
    var serial = $(this).serialize();
    var $name = $("<h2>").text($("#first").val() + " " + $("#last").val()); 
    var $click = $("<p>").text("click for description"); 
    var description = $("#description").val();
    var $description = $("<p>").text(description); 
    $newcard.append($name).append($click);
    $newcard.data("description", description); 
    console.log(serial);
    $newcard.text();
    $('#cards').append($newcard);
    return false;
  });
})