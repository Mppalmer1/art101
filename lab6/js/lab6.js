/*
 * Author: Matthew Palmer & Michael Cremonini
 * Created: 1 Feburary
 * License: Public Domain
 */

 // Define Variables
 myTransport = ["Dodge Charger", "bike", "rides from friends", "Lime Scooter"
];

 myMainRide = {
       make : "Dodge",
       model : "Charger",
       color : "black",
       year : 2013,
       age : function() {
         return 2021 - age;
   }
}
 // output
 document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
 document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
