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