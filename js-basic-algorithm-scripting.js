
// REVERSE THE STRING 

// function reverseString(str) {
//   return str
//     .split("")
//     .reverse()
//     .join('')
// }

// reverseString("hello");
// --> olleh

// FACTORIALIZE A NUMBER 

// function factorialize(num) {
//   for (var product = 1; num > 0; num--) {
//     product *= num
//   }
//   return product
// }

// factorialize(5);
// --> 120

// FIND LONGEST WORD IN A STRING 

// function findLongestWordLength(str) {
//   let split = str.split(" ")
//   let longestWord = 0 
//   for (let i = 0; i < split.length; i++) {
//     if(split[i].length > longestWord) {
//       longestWord = split[i].length
//     }
//   }
//   return longestWord
// }

// findLongestWordLength("The quick brown fox jumped over the lazy dog");
//  --> 6 ("jumped")

// RETURN LARGEST NUMBERS IN AN ARRAY 
// Create an array of the largest numbers from each sub array 

// function largestOfFour(arr) {
//   let largestNumbers = []
//   for (let i = 0; i < arr.length; i++){
//     let reOrder = arr[i].sort((a,b) => a-b) //sorts each sub-array numerically
//     largestNumbers.push(reOrder.at(-1))  //pushes the end of each sub-array into our largestNumbers variable, numerically 
//   }
//   return largestNumbers;
// }

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// --> [ 5, 27, 39, 1001 ]