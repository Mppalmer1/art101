// Lab 10- sort or scamble a name
// Author:Matthew Palmer
// Created: Febuary 15
// License: Public Domain




// find the button element
buttonEl = document.getElementById("submit-button");
console.log("button element:", buttonEl)
// add an event listener to button
buttonEl.addEventListener("click", function(){

nameEl = document.getElementById("name");

var userName = nameEl.value;
userName = userName.toLowerCase().split('').sort().reverse().join('');
  console.log("user name:", userName)
  titleEl = document.getElementById("title");

  titleEl.innerText = userName
});


function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

function sortUserName(userName) {

    return userName.toLowerCase().split("").sort().join("");
}

function randomizeName(userName) {
    // convert userName string to an array
    var nameArray = userName.toLowerCase().split("");
    console.log("nameArray =", nameArray);
    // shuffle array with our shuffle function
    var shuffledArray = shuffleArray(nameArray);
    console.log("shuffledArray =", shuffledArray);
    var shuffledString = shuffledArray.join("");
    // shift to Title Case (like a name)
    var newName = toTitleCase(shuffledString);
    // return array to a string
    return newName;
}

function main() {

    document.writeln("<style>:root {--textlen: " + userName.length + ";}</style>");
    var sortedName = sortUserName(userName);
    document.writeln("IP RANDOMIZER: " + sortedName + "</br></br>");
    var randomName = randomizeName(userName);
    document.writeln("...<br>");
    document.writeln("<div class='name'>" + randomName + "</div>")
}

main();
