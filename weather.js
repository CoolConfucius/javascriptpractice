

$(document).ready(function(){
  $('#form').submit(function() {
      var head = "http://api.openweathermap.org/data/2.5/weather?q=";
      var api = "a26a6174d852cdf17527befce1015a88";
      var tail = "&appid="+api;
      var serialize = $(this).serialize();
      // console.log(serialize);
      var city = $("#input").val(); 
      console.log(city);
      var url = head + city + tail; 
      
      $.get(url, function(res) {
          console.log(res);
          var $div = $("<div>"); 
          var $h1 = $("<h1>").text(res.name); 
          var temp = " ";
          if (res.main && res.main.temp) {
            temp = res.main.temp; 
          };
          var $p = $("<p>").text("Temperature: " + temp); 
          $div.append($h1); 
          $div.append($p);
          $("body").append($div);
      }, 'json');
      
      return false;
  });
})