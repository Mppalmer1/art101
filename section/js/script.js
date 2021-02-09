console.log("javascript loaded");
var nameVar = "Matt";
var numVar = 5;

numVar = 25;


function myfirstFunction (){
    console.log("this is my first function!!!");
}
//myfirstFunction();

function comparingNumbers(firstNum, secondNum){
    console.log("First Number: "+firstNum+" second Number: "+ secondNum);
    console.log("First Number is greater than second number " + (firstNum>secondNum));
    numVar=numVar+3;
}
comparingNumbers(1,2);
numVar = numVar + 40;//65
comparingNumbers(12,18);
console.log(numVar);
//console.log(firstNum);


//
function userInfo(firstName,lastName){
  console.log ("my first name is " + firstName
  + " and my last name is "+lastName);
}


function userInfo(firstName, lastName){
  return ("my first name is "+matt+" and my last name is "+ Palmer);
  console.log(userName("Matt","Palmer"));
}
