// author:
//date: 2021/02/9
//License: MIT (for everyone) copywritten by (for myself)


//create a div element that has id="div_1" and text that says "this is annoying"
var new1El = document.getElementById("output");
new1El.innerHTML = "Want know how many challenges we had?";


//console.log that text
console.log(new1El.innerHTML);

//add a button
var new2El = document.createElement("button");
document.body.appendChild(new2El); //keeps the button from disappearing
new2El.innerHTML = "Challenges";

//change the text from this annoying into "this is more annoying than I thought!" when Clicking the button
new2El.onclick = function (){
        new1El.innerHTML = "NONE!"

}




//create a div element that has id="div_1" and text that says "this is annoying"
var new3El = document.getElementById("content");
new3El.innerHTML = "Don't press the button";


//console.log that text
console.log(new3El.innerHTML);

//add a button
var new4El = document.createElement("button");
document.body.appendChild(new4El); //keeps the button from disappearing
new4El.innerHTML = "Problems";

//change the text from this annoying into "this is more annoying than I thought!" when Clicking the button
new4El.onclick = function (){
        new3El.innerHTML = "I got 99 Problems, but JavaScript isn't one."

}


//create a div element that has id="div_1" and text that says "this is annoying"
var new5El = document.getElementById("content2");
new5El.innerHTML = "DONT PRESS THE THIRD BUTTON!";


//console.log that text
console.log(new5El.innerHTML);

//add a button
var new6El = document.createElement("button");
document.body.appendChild(new6El); //keeps the button from disappearing
new6El.innerHTML = "Results";

//change the text from this annoying into "this is more annoying than I thought!" when Clicking the button
new6El.onclick = function (){
        new5El.innerHTML = "Great, you pressed the button..."

}
