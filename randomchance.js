"use strict"; 
  function slotmachine(quarters){
    quarters--; 
    console.log("quarters: ", quarters);
    var win = Math.floor(Math.random()*100); 
    console.log('win: ', win);
    if(win > 50){
      var lottery = Math.floor(Math.random()*50+50); 
      console.log('lottery: ', lottery);
      quarters += lottery; 
      return quarters; 
    } else {
      if(quarters <= 0){
        return 0; 
      } else {
        return slotmachine(quarters);
      }
    }
  }
