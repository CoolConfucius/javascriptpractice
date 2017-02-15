function attach_handlers(){
  $(".ninja").on('click', 'img', ninjacat);  
}

function ninjacat(){
  console.log("img clicked! callback");
  console.log($(this).attr("src"));
  console.log($(this).attr("data-alt-src"));
  $(this).attr("src", $(this).attr("data-alt-src"));  
}

$(document).ready(function(){
  attach_handlers(); 
})