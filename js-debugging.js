                  // DEBUGGING \\
// 3 common errors:
  // syntax errors
  // runtime errors
  // logical errors 

// TYPE OF \\
// use typeOf in a console log to check the data structure of a variable 
// ex:
// console.log(typeof 0)
// --> returns number 

// JAVASCRIPT DATA TYPES \\
// Immutable:
// BOOLEAN
// NULL
// UNDEFINED
// NUMBER
// STRING
// SYMBOL

// Mutable
// OBJECT
  // ARRAYS are technically a type of object 

// REFERENCE ERRORS \\
// usually a spelling error or a mis-capitalization

// OFF BY ONE ERRORS (OBOE)
// usually occur when trying to target a specific index of a string or when looping over indices of them 
// indexing starts at zero, so last index is always one less than the length of the item 
// ex:
// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let len = alphabet.length;
// for (let i = 0; i <= len; i++) {
//   console.log(alphabet[i]);
// }
// for (let j = 1; j < len; j++) {
//   console.log(alphabet[j]);
// }
// for (let k = 0; k < len; k++) {
//   console.log(alphabet[k]);
// }
// --> the first example will loop one too many times since i stops when it is equal to alphabet.length. 
// --> The second loops one too few times since the loop starts at 1 
// --> The third example is correct 

// PREVENTING INFINITE LOOPS \\
// we use terminal conditions to prevent infinite loops 