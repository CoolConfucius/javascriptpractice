function attach_handlers(){
  console.log("attach_handlers");
  $('.clickfordescription').click(toggledescription);
}

function toggledescription(){
  console.log("toggle");
  var $parent = $(this).parent(); 
  if ($parent.hasClass("front")) {
    $parent.removeClass("front"); 
    $parent.addClass("back"); 
    $parent.children(".name, .clickfordescription").hide(); 
    $parent.children(".description").show(); 
  };
}


$(document).ready(function(){
  $('#form').submit(function(){
    console.log("Submit!")
    var $newcard = $("<li>").addClass("card").addClass("front");
    var serial = $(this).serialize();
    var $name = $("<h2>").addClass("name").text($("#first").val() + " " + $("#last").val()); 
    var $click = $("<p>").addClass("clickfordescription").text("click for description"); 
    var description = $("#description").val();
    var $description = $("<p>").addClass("description").text(description).hide(); 
    $newcard.append($name).append($click).append($description);
    $newcard.data("description", description); 
    console.log(serial);
    $newcard.text();
    $('#cards').append($newcard);
    attach_handlers();
    return false;
  });
})