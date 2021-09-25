              // BASIC DATA STRUCTURES \\

// ADD ITEMS TO ARRAY \\

// push()
// adds items to the end of an array and returns new length of array 

// unshift() 
// add elements to beginning of an array and returns new length of array 

// REMOVE ITEMS FROM ARRAY \\

// pop() 
// removes last element from array 

// shift() 
// removes first element from array 

// splice() \\
// splice() mutates the original array 

// removing items with splice()
// use first two paramters splice(1,2)
// first param indicates which index in array to start splice at (element here is included in the splice)
// second param indicates the number of elements to delete 

// adding items with splice()
// use 3 parameters splice(1,2,3)
// first two parameters are the same as above 
// third param indicates what to replace the spliced elements with 
// third parameter can take as many elements as necessary splice(1,2,3,4,5,6)

// COPYING ARRAYS\\

// slice()
// copies (extracts) a number of elements from an array, not mutating original array
// two params slice(1,2)
// first param is index at which to begin extraction
// second is index at which to end extraction. item at this index is not included in the slice 

// spread operator [...]
// allows us to copy an entire array, in order, and does not mutate original array 
// ex:
// let thisArray = [true, true, undefined, false, null];
// let thatArray = [...thisArray];
// --> thisArray remains same, thatArray = thisArray 

// Combining arrays with spread operator 
// we can insert an array into another array at any idex using spread syntax
// ex:d
// function spreadOut() {
//   let fragment = ['to', 'code'];
//   let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
//   return sentence;
// }
// --> [ 'learning', 'to', 'code', 'is', 'fun' ]

// CHECKING FOR PRESENCE OF AN ELEMENT \\

// indexOf()
// we can use indexOf() to check for an element in an array
// useful since arrays can be mutated at any time 

// takes an element as parameter, and returns the index of that element in the array being checked
// returns -1 if the element does not exist in the array 
// ex:
// function quickCheck(arr, elem) {
//   return arr.indexOf(elem) 
// }

// console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
// --> -1
// console.log(quickCheck(["onions", "squash", "shallots"], "squash"));
// --> 1