// HackerRank Practice

// DAY 1 \\

// 1
// arr = [-4, 3, -9, 0, 4, 1]

// function plusMinus(arr) {
//   const negative = []
//   const positive = []
//   const zero = []
  
//   for(let i = 0;i < arr.length; i++) {
//     if(1 / arr[i] < 0) {
//       negative.push(arr[i])
//     } else if (arr[i] / 1 == 0 ) {
//       zero.push(arr[i])
//       // return (arr.length / zero.length).toFixed(6)
//     } else {
//       positive.push(arr[i])
//       // return (arr.length / positive.length).toFixed(6)
//     }
//   }
//   console.log((positive.length / arr.length).toFixed(6))
//   console.log((negative.length / arr.length).toFixed(6))
//   console.log((zero.length / arr.length).toFixed(6))
  
// }

// plusMinus(arr)

// 2
// const arr = [1,3,5,7,9]

// function miniMaxSum(arr) {
//   const reducer = (a,b) => a + b

//   arr.sort()

//   let max = arr.slice(0, arr.length - 1).reduce(reducer)
//   let min = arr.slice(1).reduce(reducer)

//   console.log(max, min)
// }

// miniMaxSum(arr)

// 3 Time: Standard to Military 
// const string = "04:05:45AM"

// function timeConversion(s) {
//   let hour = s.substring(0,2) * 1
//   let timeFormat = s.substring(2,8)
//   // midnight
//   if(s.endsWith("AM") && hour ===12) {
//     return ("00" + timeFormat)
//   } 
//     // noon
//     else if(s.endsWith("PM") && hour === 12) {
//     return hour + timeFormat
//   } 
//     // PM times  
//     else if(s.endsWith("PM")) {
//     return hour + 12 +timeFormat
//   } 
//     // all other times in AM
//     else {
//       if(hour < 10 && s.endsWith("AM")) {
//         return "0" + hour +timeFormat
//       }
//     return hour + timeFormat
//   }
// }

// timeConversion(string)

// Test: find the Median

// arr = [5,3,1,2,4]

// function findMedian(arr) {
//   const sortArr = arr.sort((a, b) => a - b)
//   const mid = Math.ceil(sortArr.length / 2)
  
//   const median = sortArr.length % 2 == 0 ? (sortArr[mid] + sortArr[mid - 1] / 2) : sortArr[mid - 1]
  
//   return median
// }

// findMedian(arr)

// Day 2 \\
const a = [1,2,3,4,3,2,1]

const lonelyInteger = () => {
  const alreadySeen = []
  const soloInt = []

  a.forEach(function(str) {
    if(alreadySeen[str]) {
      console.log(str)
    } else if(!alreadySeen[str]) {
        soloInt.push()
    } else {
      alreadySeen[str] = true 
    }
  })
}

lonelyInteger(a)
