function random_color()
{
   var rgb = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
   color = '#'  //this is what we'll return!
   for(var i = 0; i < 6; i++) 
   {
      x = Math.floor((Math.random()*16))
      color += rgb[x]; 
   }
   return color;
}
$(document).ready(function(){
   $('#large_box').click(function(){
      alert('you clicked the big box!');  
//comment this out when you have figured out what event.stopPropagation is used for
   })
   $('.side_box').click(function(event){
      event.stopPropagation();
   })
   $('.middle_box').click(function(event){
      event.stopPropagation();
   })
});

// function attach_handlers(){
//   console.log("attach_handlers");
//   $("#hardsubmit").click(hardsubmit);  
// }

// function hardsubmit(){
//   console.log("Hard");
//   $("#form").submit(); 
// }


// $(document).ready(function(){
//   attach_handlers(); 
//   $('#h1').click(function(){
//     console.log("click");
//     var $newbutton = $("<button>");
//     $newbutton.attr("id", "hardsubmit");
//     $newbutton.text("Hard Submit!");
//     $('#form').after($newbutton);
//     attach_handlers();
//   })

//   $('#form').submit(function(){
//     console.log("Submit!")
//     var $newrow = $("<tr>");
//     var serial = $(this).serialize();
//     var $first = $("<td>").text($("#first").val()); 
//     var $last = $("<td>").text($("#last").val()); 
//     var $email = $("<td>").text($("#email").val()); 
//     var $contact = $("<td>").text($("#contact").val()); 
//     $newrow.append($first).append($last).append($email).append($contact);
//     console.log(serial);
//     $newrow.text();
//     $('#table').append($newrow);
//     return false;
//   });
// })