
function attach_handlers(){
  console.log("attach_handlers");
  
  $(".house").click(showhousedetails);  
}

function showhousedetails(e){
  e.stopPropagation(); 
  console.log("House");
  var id = $(this).attr("id")
  console.log("Id: ", id);
  var number = "378"
  $.get("http://anapioficeandfire.com/api/houses/"+number, function(res) {
      console.log(res);
      var $div = $("<div>"); 
      $div.append($("<p>").text("House Details")); 
      var $name = $("<p>").text("Name: " + res.name); 
      var $words = $("<p>").text("Words: " + res.words); 
      var titles = ""; 
      for (var i = 0; i < res.titles.length; i++) {
        titles += res.titles[i]; 
        if (i < res.titles.length - 1) {
          titles += ", "; 
        } else {
          titles += ".";
        }
      };
      var $titles = $("<p>").text("Titles: " + titles); 

      
      $div.append($name); 
      $div.append($words);
      $div.append($titles);
      $("body").append($div);
  }, "json");

  
}

$(document).ready(function(){

  attach_handlers(); 
})