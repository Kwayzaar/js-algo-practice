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

