
// regex are patterns that assist with matching, searching, and replacing text 
// they use special characters make complex, flexible matches 

// Test Method \\

// use a regex to look for a word in a string 
// case-sensitive 
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
//  --> freeCodeCamp

// Match Method \\
// .match() can be used to extract any matches in strings that we do find 
// apply to a string and pass regex in as argument 
// ex:
// extract 'coding' from string 
// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/i
// let result = extractStr.match(codingRegex)
// or can pass in the regex as an argument
// let result = extractStr.match(/coding/i)

// use "g" flag to find more than the first match 
// ex:
// Find both cases of "twinkle" in the string 
// let twinkleStar = "Twinkle, twinkle, little star";
//   flags can be combined, below uses i and g flag
// let starRegex = /twinkle/ig
// let result = twinkleStar.match(starRegex)
//  --> Twinkle, twinkle

// WildCard Period \\
// using "." character allows us to search for patterns without knowing all the patterns 
// wildcard character will match any one character 
// ex:
// make regex that matches below string, but not "there is a bug in my code"
// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /un./
// let result = unRegex.test(exampleStr);

// CHARACTER CLASSES \\
// this is a balance between matching literal patterns, and the wildcard period that matches everything 
// allows you to define a group of characters you want to match by placing them in brackets 
// ex: 
// Find all the vowels in the string 
// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/ig
// let result = quoteSample.match(vowelRegex);

// Matching range of characters 
// use the hyphen to define a range of characters, like in the alphabet 
// also works on numbers 
// ex:
// Match all letters in the string 
// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/ig
// let result = quoteSample.match(alphabetRegex)
// --> returns all letters 
//   can fit the range inbetween letters to define a word 
// let alphabetRegex = /q[a-z]ick/ig
// --> will return quick

// Match letters and numbers 
// Can combine numbers and letters range to find all 
// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/ig; 
// let result = quoteSample.match(myRegex); 

// NEGATING CHARACTER SETS \\ 
// use a caret ^ character after opening bracket and before the characters you don't want matched 
// ex: [^thingsThatWillNotBeMatched] will not match anything after the caret inside brackets

// Match characters that occur one or more times, or 0 or more times \\

// The + character allows us to match a character or group of characters 
// let difficultSpelling = "Mississippi";
// let myRegex = /s+/;
// let result = difficultSpelling.match(myRegex);
//  --> returns all instances of 'ss'

// The * sign matches characters that occur zero or more times 
// chewiQuote = "Aaaaaaaargh!"
// let chewieRegex = /Aa*/;
// let result = chewieQuote.match(chewieRegex);
// --> returns "Aaaaaaaaa"

// GREEDY/LAZY MATCHES \\
// finds the longest/shortest part of a string that matches 
// regex's are greedy by default 
// add ? character to change a regex to lazy match 
// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*>/;
// let result = text.match(myRegex);
//  --> <h1>Winter is coming</h1>
// we can grab just the h1 by using a ? character in the regex 
// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?>/; // Change this line
// let result = text.match(myRegex);
// --> <h1>
// using regex to parse HTML should be avoided, but can be used for html pattern matching 

// MATCHING STRING PATTERNS \\

// Matching beginnging string patters 
// the caret ^ character can be used outside of a character set to search for patterns at the beginning of strings 
// **DO NOT confuse this with using the caret ^ to negate characters inside a character set (ex: [^negatethiswholeset])
// ex:
// let firstString = "Ricky is first and can be found.";
// let firstRegex = /^Ricky/;
// firstRegex.test(firstString);
//  --> returns true 
// let notFirst = "You can't find Ricky now.";
// firstRegex.test(notFirst);
//  --> returns false 

// Matching ending string patterns (anchor character)
// use dollar sign $ character to search for patterns at the end of strings 
// ex:
// let theEnding = "This is a never ending story";
// let storyRegex = /story$/;
// storyRegex.test(theEnding);
//  --> returns true
// let noEnding = "Sometimes a story will have to end";
// storyRegex.test(noEnding);
//  --> returns false 

// MATCHING ALL LETTERS, NUMBERS, SYMBOLS \\

// we can use character classes to search all letters in alphabet -> [a-z]
// we can instead use shorthand \w, which equals [A-za-z0-9_]
// this character class matches all letters and numbers and the underscore character
// ex:
// let longHand = /[A-Za-z0-9_]+/;
// let shortHand = /\w+/;
// let numbers = "42";
// let varNames = "important_var";
// longHand.test(numbers);
// shortHand.test(numbers);
// longHand.test(varNames);
// shortHand.test(varNames);
// all tests would return true 

// if \w searchs all alphanumerics, we can use \W to search the opposite of alphanumerics 
// \W is the same as [^A-Za-z0-9_]
// let shortHand = /\W/;
// let numbers = "42%";
// let sentence = "Coding!";
// numbers.match(shortHand);
// sentence.match(shortHand);
// first match --> ["%"]
// second match --> ["!"]

// shortcut for finding digits or numbers is \d
// \d is the same as [0-9]
// 