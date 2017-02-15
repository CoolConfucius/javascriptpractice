function ninjacat(){
  console.log("img clicked!");
  console.log($(this).attr("src"));
  console.log($(this).attr("data-alt-src"));
  $(this).attr("src", $(this).attr("data-alt-src"));  
}

$(document).ready(function(){
  $(".ninja").on('click', 'img', ninjacat);
})