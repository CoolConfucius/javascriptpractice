
function attach_handlers(){
  console.log("attach_handlers");
  // $(".pokemon").click(showpokedex);  
  $(".pokemon").click(showpokedex);  
}

function showpokedex(e){
  e.stopPropagation(); 
  console.log("Pokemon");
  var id = $(this).attr("id")
  console.log("Id: ", id);
  var number = id.substr(1, id.length);
  console.log(number);
  $.get("http://pokeapi.co/api/v1/pokemon/"+number+"/", function(res) {
      console.log(res);
  }, "json");

  
}

$(document).ready(function(){

  for (var i = 1; i < 5; i++) {
    var head = "http://pokeapi.co/media/img/";
    var tail = ".png";
    var string = head + i.toString() + tail; 
    var $img = $('<img>').addClass("pokemon").attr('src', string).attr('id', "p"+i); 
    $("body").append($img); 
  };
  attach_handlers(); 
})