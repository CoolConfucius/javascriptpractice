
// function attach_handlers(){
//   console.log("attach_handlers");
//   // $(".pokemon").click(showweather);  
//   $(".pokemon").click(showweather);  
// }

// function showweather(e){
//   e.stopPropagation(); 
//   console.log("Pokemon");
//   var id = $(this).attr("id")
//   console.log("Id: ", id);
//   var number = id.substr(1, id.length);
//   console.log(number);
//   $.get("http://pokeapi.co/api/v1/pokemon/"+number+"/", function(res) {
//       console.log(res);
//   }, "json");

  
// }

$(document).ready(function(){
  $('form').submit(function() {
    http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a26a6174d852cdf17527befce1015a88

      var head = "http://api.openweathermap.org/data/2.5/weather?q=";
      var api = "a26a6174d852cdf17527befce1015a88";
      var tail = "&appid="+api;
      var serialize = $(this).serialize();
      // your code here (build up your url)
      // $.get(url, function(res) {
          // your code here
      // }, 'json');
      // don't forget to return false so the page doesn't refresh
      return false;
  });
})