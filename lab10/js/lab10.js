// Lab 10- sort or scamble a name
// Author:Michael Cremonini
// Created: Febuary 15
// License: Public Domain




// find the button element
buttonEl = document.getElementById("submit-button");
console.log("button element:",buttonEl);

// add an event listener to button
buttonEl.addEventListener("click", function(){
//find the name element
nameEl = document.getElementById("name");
//get value from the name element
var userName = nameEl.value;
//get the name element
userName = userName.toLowerCase().split('').sort().reverse().join('');
//this will shuffle

  console.log("user name:", userName)
  //find the title element
  titleEl = document.getElementById("title");
  //change that element
  titleEl.innerText = userName;

});
