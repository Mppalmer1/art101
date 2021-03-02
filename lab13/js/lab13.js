/*
 * Author: Michael Cremonini <mcremoni@ucsc.edu>
 * Created: 24 February
 * License: Public Domain
 */

var oneLongString= ("");

for (var numb=1; numb <= 200; numb++) {
    if (numb % 105 == 0) {
        console.log("fizzbuzzboom!");
        oneLongString += numb + "fizzbuzzboom!<br>";

    } else if (numb %15 == 0) {
        console.log("fizzbuzz!");
        oneLongString += numb + "fizzbuzz!<br>";

    } else if (numb %35 == 0) {
          console.log("buzzboom!");
    oneLongString += numb + "buzzboom!<br>";

  }   else if (numb %21 == 0) {
        console.log("fizzboom!");
  oneLongString += numb + "fizzboom!<br>";

}    else if  (numb % 3 == 0) {
        console.log("fizz");
        oneLongString += numb + "fizz!<br>";

}     else if  (numb % 5 == 0) {
        console.log("buzz");
        oneLongString += numb + "buzz!<br>";

}     else if  (numb % 7 == 0) {
        console.log("boom");
        oneLongString += numb + "boom!<br>";

}else {console.log(numb)
oneLongString +=numb + "<br>";
}

};

$("#output").html(oneLongString);
