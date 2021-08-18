// regex are patterns that assist with matching, searching, and replacing text 
// they use special characters make complex, flexible matches 

// Test Method \\

// use a regex to look for a word in a string 
//case-sensitive 
// quotes are not needed around string in regex
// ex:
// looking for "Hello" in "Hello, World!"
// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString)

// Matching literal strings with different possibilities
// Can use OR or a pipe operator "|" to separate the strings you are looking for 
// /yes|no/ would look for yes OR no 
// ex:
// search the string for dog, cat, bird, or fish 
// let petString = "James has a pet cat.";
// let petRegex = /dog|cat|bird|fish/; 
// let result = petRegex.test(petString);

// Ignore case while matching 
// Append an i "flag" to regex to match cases 
// ex: 
// let myString = "freeCodeCamp";
// let fccRegex = /freecodecamp/i; 
// let result = fccRegex.test(myString);

// Match Method \\

// .match() can be used to extract any matches in strings that we do find 
// apply to a string and pass redex in as argument 
// ex:
// extract coding from string 
// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/i
// let result = extractStr.match(codingRegex)
// or can pass in the regex as an argument
// let result = extractStr.match(/coding/i)

// use "g" flag to find more than the first match 
// ex:
// let twinkleStar = "Twinkle, twinkle, little star";
  // flags can be combined, below uses i and g flag
// let starRegex = /twinkle/ig
// let result = twinkleStar.match(starRegex)


