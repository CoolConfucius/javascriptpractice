$(document).ready(function(){
  $(".ninja").on('click', 'img', function(){
    console.log("img clicked!");
    $(this).toggle(300);
  })

  $("#restore").click(function(){
    console.log("restore!");
    $(".ninja > img").show();
  })

})