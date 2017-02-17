
$(document).ready(function(){

  for (var i = 0; i < 5; i++) {
    var head = "http://pokeapi.co/media/img/";
    var tail = ".png";
    var string = head + i.toString() + tail; 
    var $img = $('<img>').attr('src', string); 
    $("body").append($img); 
  };
})