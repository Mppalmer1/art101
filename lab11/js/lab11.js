// Lab 11
// Author: Matthew Palmer
// Created: Fabruary 18, 2021
// License: Public Domain


//created each button by ID in javascript
$("#challenges").append("<button id='c-button'>Button</button>");
$("#problems").append("<button id='p-button'>Button</button>");
$("#results").append("<button id='r-button'>Button</button>");

// what the button do when clicked
$("#c-button").click(function(){


  //another code for (this). parent
//  $("#challenges").toggleClass("special")

//traversing the DOM to the parent
  $(this).parent().toggleClass("special");
})

$("#p-button").click(function(){
$(this).parent().toggleClass("special");
})

$("#r-button").click(function(){
$(this).parent().toggleClass("special");
})
