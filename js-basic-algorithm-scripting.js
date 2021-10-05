
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