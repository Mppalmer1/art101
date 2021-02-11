// author: Matthew Palmer
//date: 2021/02/9
//License: MIT (for everyone) copywritten by (for myself)


//create a div element that has id="div_1" and text that says "this is annoying"
var divEl = document.getElementById("div_1");
divEl.innerHTML = "This is annoying";


//console.log that text
console.log(divEl.innerHTML);

//add a button
var buttonEl = document.createElement("button");
document.body.appendChild(buttonEl); //keeps the button from disappearing
buttonEl.innerHTML = "press me";

//change the text from this annoying into "this is more annoying than I thought!" when Clicking the button
buttonEl.onclick = function (){
        divEl.innerHTML = "This is more annoying than I thought!!!!"
        
}
