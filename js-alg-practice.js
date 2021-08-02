//FREE CODE CAMP - DS A&& ALGORITHMS\\

//CARDCOUNTER\\
// var count = 0;

// function cc(card) {
//   switch(card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count++
//       break;
//     case 10: 
//     case "J":
//     case "Q":
//     case "K":
//     case "A":
//       count--
//       break;
//   }
//   if (count > 0) {
//     return count + " Bet"
//   } else {
//     return count +  " Hold"
//   } 
// }

// cc(2); cc(3); cc(7); cc('K'); cc('A')

//Dot notation\\
// var testObj = {
//   "hat": "ballcap",
//   "shirt": "jersey",
//   "shoes": "cleats"
// };
// //assign value of hat and shirt
// var hatValue = testObj.hat;      
// var shirtValue = testObj.shirt;  

//Bracket notation, should use when spaces in names 
// var testObj = {
//   "an entree": "hamburger",
//   mySide: "veggies",
//   "the drink": "water"
// };

// var entreeValue = testObj["an entree"];   
// //put property in quotations, even if key isn't
// //keys are automatically typecast as strings 
// var drinkValue = testObj["the drink"];

//****************************/
//Access obj prop with variables\\
// var testObj = {
//   12: "Namath",
//   16: "Montana",
//   19: "Unitas"
// };

// var playerNumber = 16;       
// //no quotes in bracket
// var player = testObj[playerNumber];  
/////////////////////////////////////////

//Update/Add/Delete object props using dot or brackets\\
// var myDog = {
//   "name": "Coder",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["freeCodeCamp Campers"]
// };

// myDog.name = "Happy Coder";
// myDog["legs"] = 5
// mydog.bark = "woof"
// myDog["eats"] = "everything"
// delete myDog.tails || delete myDog["tails"]

// console.log(myDog["name"])
// console.log(myDog.name) // -> Happy Camper
// console.log(myDog.legs) // -> 5
//

//Using objects for lookups\\
//function takes value, uses it to access props(key) in object lookup
// function phoneticLookup(val) {
//   var result = "";

//   var lookup = {
//     alpha: "Adams",
//     bravo: "Boston",
//     charlie: "Chicago",
//     delta: "Denver",
//     echo: "Easy",
//     foxtrot: "Frank"
//   };
//   result = lookup[val]

//   return result;
// }

// phoneticLookup("charlie") -> Chicago

