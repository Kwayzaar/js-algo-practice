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


//Accessing nested arrays with bracket notation\\
// var myPlants = [
//   {
//     type: "flowers",
//     list: [
//       "rose",
//       "tulip",
//       "dandelion"
//     ]
//   },
//   {
//     type: "trees",
//     list: [
//       "fir",
//       "pine",
//       "birch"
//     ]
//   }
// ];

// var secondTree = myPlants[1].list[1]; //--> returns "pine"

//Record collection exercise\\
// var recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// function updateRecords(records, id, prop, value) {
//    //updates all other props besides tracks
//   if(prop !== "tracks" && value !== "" ) {
//     records[id][prop] = value 
//   } //2 creates tracks if none exist 
//    else if (prop === "tracks" && records[id].hasOwnProperty("tracks") == false) {
//      records[id][prop] = [value]
//   } //3 pushes new value into tracks prop  
//     else if (prop === "tracks" && value !== "") {
//      records[id][prop].push(value)
//   } //4 remove prop when value is null 
//     else if (value == "") {
//       delete records[id][prop]
//   }
//   return records;
// }

//While loops\\
//Runs as long as parameter is true --> i <= 5 --> run when we don't exactly know how many iterations we will need 
//myArray should have 5 - 0 in descending order 
// var myArray = []
// var i = 0 
// while(i <= 5) {
//   myArray.unshift(i)
//   i++
// }

//For loops\\
//will rerun in a loop a certain number of times -> use when we know how many iterations we will need 
//for(a; b; c) -> 
//a: initialization statement -> executed once before loop start
//b: condition statement -> continues loop as long as statement is true
//c: final expression -> evaluated after every loop before next loop starts
//push 1 - 5 into an array using for loop
//var myArray = []
//for (var = i; i <= 5; i++) {
// myArray.push(i)
// }

//Iterate every other number with a for loop\\
//push odd numbers from 1-9 into array 
// var myArray = []
// for (var i = 1; i <= 9; i += 2) {
//   myArray.push(i)
// }

//Count backwards with For loop\\
// var myArray = [];
// for (var  i = 9; i > 0; i -= 2) {
//   myArray.push(i)
// }

//Iterate through array with a for loop\\
// using for loop, sum values in myArr and store in new variable
// var myArray = [2,3,4,5,6]
// var total = 0
// for (var i = 0; i < myArray.length; i++) {
//   total += myArr[i]
// }

//Nesting for loops\\
// var myArr = [
//   [1,2],[3,4],[5,6,7]
// ]

// function multiplyAll(arr) {
// var product = 1;
// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr[i].length; j++) {
//     product *= arr[i][j]
//   }
// }
// return product;
// }
// multiplyAll(myArr);

//Do...While loops\\
// ensures the code will run at least once, but may also continue running as long as the while statement evaluates to true
// var myArray = [];
// var i = 10;
// do {
//   myArray.push(i);
//   i++;
// }
// while (i < 5) 
// console.log(myArray)

//Recursion\\
//Recursive functions are expressed in terms of themselves 
// function sum(arr, n) {
//   if (n <= 0) {
//     return 0;
//   } else {
//     return sum(arr, n - 1) + arr[n - 1]
        // sum first (n -1) elements of array add to value at index arr[n-1]
//   }
// }

// sum([2, 3, 4], 1) --> 2
  //sum(arr, n - 1) + arr[n - 1]
  //sum(arr, 1 - 1) + arr[1 - 1]
  //0 + 2 --> 2 

// sum([2, 3, 4], 2) --> 5
  //sum(arr, 2 - 1) + arr[2 - 1]
  //sum value of first element of array and add to value at index 1
  //2 + (index 1) 3 --> 5
