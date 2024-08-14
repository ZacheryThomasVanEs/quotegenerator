
// Onclick of the button 
document.querySelector("button").onclick = function () {   
    // Call python's random_python function 
    eel.get_quote()(function(quote){                       
      // Update the div with a random number returned by python 
      document.querySelector(".get_quote").innerHTML = quote; 
    }) 
  }
  