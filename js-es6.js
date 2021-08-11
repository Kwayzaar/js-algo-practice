// let vs var \\
//when using var to declar variable, the variable is global, or local if declared in a function. If global it may be accessed and updated anywhere 
//when let is declared in a block, statement or expression it's scope is limited to that area 

// const \\
// same features as let, but const variables are read-only. Constant value for variable identifier
// values in const are still mutable 
//Ex: 
// const s = [5, 6, 7];
// s = [1, 2, 3];
// s[2] = 45; --> mutates array 
// console.log(s) --> s = [5, 6, 45] 

// common practice with const variable: use UPPERCASE letters 
// mutable values (let, var): use camelCase 

// Object.freeze \\
//prevents data mutation 
// Object.freeze(obj)

// Arrow Functions \\

// Inline function that allows us to not have to name a function
// used especially if we are passing that function as an arugment to another funtion 
// Example

// const myFunc = function() {
//   const myVar = "value";
//   return myVar;
// }

// --turns to--

// const myFunc = () => {
//   const myVAr = "value"
//   return myVar
// }

// -- may also omit return keyword above when only a return value --

// const myFunc = () => "value"

//1 more example
// var magic = function() {
//   return new Date();
// };
//turns to 
// const magic = () => new Date()

// Arrow functions with parameters
// Can pass arguments into arrow function just like regular functions
// If only 1 parameter, parantheses that enclose may be omitted 
// Example 

// var myConcat = function(arr1, arr2) {
//   return arr1.concat(arr2);
// };
// to 
// const myConcat = (arr1, arr2) => arr1.concat(arr2)
// myConcat([1,2], [3,4,5]) --> [1,2,3,4,5]

//Arrow functions with default parameters 
// Used when no argument is specified 
//Ex:
//add 1 to number when value is not specified 
//const increment = (number, value = 1) => number + value 
//increment(2) --> 3

// Rest Parameter \\
// allows a function to take a variable number of arguments 
// allows us to appy map(), filter(), and reduce() to parameters 
//Ex: 
// const sum = (x, y, z) => {
//   const args = [x, y, z];
//   return args.reduce((a, b) => a + b, 0);
// }

// rest parameter ...args allows us to remove the constant args and just input the arugments we want
// const sum = (...args) => {
//   return args.reduce((a,b) => a + b, 0)
// }
// sum(1,2,3,4) --> 10

// Spread Operator \\
// "Expands" an array and can be used where multiple params/elements are expected 
// only works in place, like in an arugment or array literal (const spread = ...arr will not work)
//Ex:
// Copy contents of arr1 into arr2 
// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// const arr2 = [...arr1, 'JUNE'];
// console.log(arr2) --> ['JAN' - 'MAY', 'JUNE']

// Destructuring \\
// neatly assign values taken from an object to a new variable 
//Ex:
// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80
// };

// const { today, tomorrow } = HIGH_TEMPERATURES
//console.log(today) --> 77
//console.log(tomorrow) --> 80

// may also assign new variable name but inserting name after colon when assigning the value 
// const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES

// destructuring from nested objects 
//Ex:
// const LOCAL_FORECAST = {
//   yesterday: { low: 61, high: 75 },
//   today: { low: 64, high: 77 },
//   tomorrow: { low: 68, high: 80 }
// };
// const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST

// destructure to assign variable from array 
// since a spread operator unpacks contents of array into a comma-separated list, we cannot pick a specific element to assign to variable
// destructuring allows us to do that 
//ex: 
// const [a, b] = [1, 2, 3, 4, 5, 6];
//console.log(a, b) --> a = 1, b = 2
// ex:
// let a = 8, b = 6;
// [a,b] = [b,a]

// destructure to reassign array elements 
// remove the first two elements from the source array and return the rest of the array 
// const source = [1,2,3,4,5,6,7,8,9,10];
// function removeFirstTwo(list) {
//   const [a, b, ...arr] = list 
//   return arr
// }
// const arr = removeFirstTwo(source); --> [3 - 10]

// destructure to pass an object as a function parameter 
// use max and min values and find halfway point between two 
// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85
// };
  // destructure for max and min values 
// const half = ({ max, min }) => (max + min) / 2.0; 

// Literals \\ 

// template literals
// Allows string interpolation ${variable} and creation of multi-line strings 
// uses backticks to start string, instead of quotes
// does not require \n to create new lines 

// Use template literals to create an array of li strings, populated by the failure property from the results object 
// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"]
// };
// function makeList(arr) {
//   const failureItems = [];
    //use a for loop to iterate through the array that is passed in 
//    for (let i = 0; i < arr.length; i++) {
//     failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
//   }
//   return failureItems;
// }
// const failuresList = makeList(result.failure);

// object literal - object property shorthand 
// when passing in argument, if variable name is same as data being passed in, we only need to write it once 
// ex: 
// const createPerson = (name, age, gender) => {
//   return {
//     name: name,
//     age: age,
//     gender: gender
// };
// We do not need to state name as the variable, since the parameter is already called name 
// const createPerson = (name, age, gender) => ({ name, age, gender });
