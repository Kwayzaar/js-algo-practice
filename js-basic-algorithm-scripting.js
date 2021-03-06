
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

// CONFIRM THE END OF A STRING
// function confirmEnding(str, target) {
//   if(str.substring(str.length - target.length) === target){
//     return true
//   } else {
//     return false
//   }
// }

// confirmEnding("Bastian", "n")
//  --> returns true 

// REPEAT A STRING 
// function repeatStringNumTimes(str, num) {
//   let string = ""
//   while(num > 0){
//     string += str
//     num--
//   }
//   return string
// }

// repeatStringNumTimes("abc", 3)
// --> returns "abcabc"

// TRUNCATE A STRING 
// function truncateString(str, num) {
//   let string = str
//   if(str.length > num) {
//     string = str.substring(0, num) + "..."
//   }
//   return string
// }

// truncateString("A-tisket a-tasket A green and yellow basket", 8)
// --> "A-tisket..."

// FIND FIRST ELEMENT THAT PASSES TEST 
// function findElement(arr, func) {
//   let num = 0;
//   for(let i = 0; i < arr.length; i++){
//     num = arr[i]
//     if(func(num)){
//       return num
//     }
//   }
//   return undefined
// }

// findElement([1, 2, 3, 4], num => num % 2 === 0)
// --> returns 2

// CHECK VALUE FOR BOOLEAN PRIMITIVE 
// function booWho(bool) {
//   if(bool === true || bool === false){
//     return true 
//   } else {
//     return false 
//   } 
// }

// booWho([1,2,3])
// --> returns false 

// CAPITALIZE THE FIRST LETTER OF EVERY WORD 
// function titleCase(str) {
//   let splitStr = str.split(" ")
//   for(let i = 0;i < splitStr.length; i++) {
//        splitStr[i] = splitStr[i][0].toUpperCase() + splitStr[i].substr(1).toLowerCase()
//   }
//   return splitStr.join(" ")
// }

// titleCase("I'm a little tea pot")
// --> returns "I'm A Little Teapot"

// SLICE AND SPLICE
// function frankenSplice(arr1, arr2, n) {
//   let extracted = arr2.slice(0)
//   for(let i = 0; i < arr1.length; i++){
//     extracted.splice(n, 0, arr1[i])
//     n++
//   }
//   return extracted
// }
// frankenSplice([1, 2, 3], [4, 5, 6], 1)
// --> [4,1,2,3,5,6]

// REMOVE FALSY VALUES FROM AN ARRAY 
// function bouncer(arr) {
//   let newArr = []
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i]) {
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }

// bouncer([7, "ate", "", false, 9])
// --> returns [7, "ate", 9]

// FIND THE INDEX OF A NUMBER
// Also, insert the number into an array first, then sort the array
// function getIndexToIns(arr, num) {
//   let localArr = arr
//   localArr.unshift(num) 
//   let sortArr = localArr.sort((a,b) => a - b)

//   return sortArr.findIndex((element) => element === num);
// }
// getIndexToIns([40, 60], 50)
// --> returns 1

// COMPARE A STRING TO ANOTHER STRING
// see if the second item in the array exists in the first item 
// function mutation(arr) {
//   let checker = arr[1].toLowerCase()
//   let str = arr[0].toLowerCase()
//   for(let i = 0; i < checker.length; i++){
//     if(str.indexOf(checker[i]) < 0){
//       return false
//     }
//   }
//   return true 
// }

// mutation(["hello", "hey"])
// --> false

// CHUNK AN ARRAY BY SIZE
// function chunkArrayInGroups(arr, size) {
//   let newArr = []
//   for(let i = 0; i < arr.length; i+= size){
//     newArr.push(arr.slice(i,i + size)) 
//   }
//   return newArr
// }
 
// chunkArrayInGroups(["a", "b", "c", "d"], 2)
// --> returns [[a,b], [c,d]]