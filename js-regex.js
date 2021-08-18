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
// Find both cases of "twinkle" in the string 
// let twinkleStar = "Twinkle, twinkle, little star";
  // flags can be combined, below uses i and g flag
// let starRegex = /twinkle/ig
// let result = twinkleStar.match(starRegex)

// WildCard Period \\

// using "." character allows us to search for patterns without knowing all the patterns 
// wildcard character will match any one character 
// ex:
// make regex that matches below string, but not "there is a bug in my code"
// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /un./
// let result = unRegex.test(exampleStr);

// Character Classes \\
// this is a balance between matching literal patterns, and the wildcard period that matches everything 
// allows you to define a group of characters you want to match by placing them in brackets 
// ex: 
// Find all the vowels in the string 
// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/ig
// let result = quoteSample.match(vowelRegex);

// Matching range of characters 
// use the hyphen to define a range of characters, like in the alphabet 
// ex:
// Match all letters in the string 
// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/ig
// let result = quoteSample.match(alphabetRegex)
// --> returns all letters 
  // can fit the range inbetween letters to define a word 
// let alphabetRegex = /q[a-z]ick/ig
// --> will return quick


