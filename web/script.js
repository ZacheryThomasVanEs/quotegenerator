
// Onclick of the button 
document.querySelector("button").onclick = function () {   
    // Call python's function 
    eel.get_quote()(function(quote){                       
      // Update the quote
      document.querySelector(".quote").innerHTML = quote; 
    }) 
  }
  