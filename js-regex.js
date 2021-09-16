
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
// finds the longest/shortest part of a string that matches the regex pattern and returns it as a match 
// regex's are greedy by default 
// add ? character to change a regex to lazy match 
// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*>/;
// let result = text.match(myRegex);
//  --> <h1>Winter is coming</h1>
// --> .* is basically a return all, so we return the whole string since there is text in between two parentheses

// we can grab just the first h1 by using a ? character in the regex, for a lazy match
// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?>/; // Change this line
// let result = text.match(myRegex);
// --> <h1>
// --> since the first <h1> matches the required pattern, the regex stops searching
// using regex to parse HTML should be avoided, but can be used for html pattern matching 

// MATCHING STRING PATTERNS \\

// Matching beginnging string patterns 
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

// MATCHING ALL LETTERS, NUMBERS, SYMBOLS, WHITESPACE \\

// use \w, which matches all letters and numbers plus the underscore character
// \w equals [A-za-z0-9_]
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

// use \W to search the opposite of alphanumerics 
// \W is the same as [^A-Za-z0-9_], which excludes all numbers and letters 
// let shortHand = /\W/;
// let numbers = "42%";
// let sentence = "Coding!";
// numbers.match(shortHand);
// sentence.match(shortHand);
// first match --> ["%"]
// second match --> ["!"]

// use \d to find all numbers 
// \d is the same as [0-9]
// ex:
// let movieName = "2001: A Space Odyssey";
// let numRegex = /\d/g; // Change this line
// let result = movieName.match(numRegex).length;
// --> counts how many digits in the string, returns 4
// we use the "g" flag to find more than the first instance 

// use \D to find all non-numbers 
// \D is the same as character class [^0-9], which excludes numbers 
// ex: 
// let movieName = "2001: A Space Odyssey";
// let noNumRegex = /\D/g;
// let result = movieName.match(noNumRegex).length;
// --> returns 17, which is count of all characters that are not numbers

// RESTRICT USERNAMES \\
  // 1. Usernames can only use alpha-numeric characters.
  // 2. The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
  // 3. Username letters can be lowercase and uppercase.
  // 4. Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
// answer:
// let username = "JackOfAllTrades";
// let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
// let result = userCheck.test(username);

// MATCH WHITESPACE AND NON-WHITESPACE \\
// use \s to match whitespace and returns, tab, form feed, and new line characters 
// similar to class [\r\t\f\n\v]
// ex:
// let whiteSpace = "Whitespace. Whitespace everywhere!"
// let spaceRegex = /\s/g;
// whiteSpace.match(spaceRegex);
// --> [" ", " "] (all the whitespaces)

// use \S to search for everything except whitespace 
// ex: 
// let whiteSpace = "Whitespace. Whitespace everywhere!"
// let nonSpaceRegex = /\S/g;
// whiteSpace.match(nonSpaceRegex).length;
// --> returns 32 (value of all characters minus whitespace)

// SPECIFY UPPER/LOWER NUMBER OF MATCHES \\
// use quantity specifiers (curly bois {}) to specify a match for a pattern that only occurs a certain number of times 
// the two numbers placed in the curly bois indicate lower and upper range of a pattern 
// this is different from using +, which indicates one or more characters, and *, which indicates zero or more characters 
// ex: finding the letter a that occurs a certain number of times, within a range 
// let A4 = "aaaah";
// let A2 = "aah";
// let multipleA = /a{3,5}h/;
// multipleA.test(A4);
// multipleA.test(A2);
// --> A4 returns true, A2 returns false 
// ex: match phrase "oh no" only when it has 3-6 letter h's 
// let ohStr = "Ohhh no";
// let ohRegex = /oh{3,6}\sno/i;
// let result = ohRegex.test(ohStr);
// --> true 

// lower number of matches 
// use quantity specifier with one number and a comma to specify lower number of matches with no upper limit 
// ex: match string "Hazzah" only when it has 4 or more z's
// let haStr = "Hazzzzah";
// let haRegex = /haz{4,}ah/i; 
// let result = haRegex.test(haStr);

// exact number of matches
// place only one number in curly bois to indicate exact match req'd
// ex: match "Timber" only when m occurs 4 times 
// let timStr = "Timmmmber";
// let timRegex = /tim{4}ber/i; 
// let result = timRegex.test(timStr);

// CHECK FOR ALL OR NONE \\
// use ? character to search for the possible existence of the character that precedes it 
// ex: match both american (favorite) and british (favourite) spellings of the word 
// let favWord = "favorite";
// let favRegex = /favou?rite/i;
// let result = favRegex.test(favWord);

// POSITIVE AND NEGATIVE LOOKAHEAD \\
// positive lookahead: (?=...) looks ahead to makes sure element in search pattern is there, but doesn't actually match 
// negative lookahead: (?!...) looks ahead to make sure element in search pattern is not there. rest of pattern is returned if element is not there
// ex: 
// let quit = "qu";
// let noquit = "qt";
// let quRegex= /q(?=u)/;
// let qRegex = /q(?!u)/;
// quit.match(quRegex);
// noquit.match(qRegex);
//  --> both examples return "q"

// ex: match passwords that are greater than 5 characters long, and have two consecutive digits 
// let sampleWord = "astronaut";
// let pwRegex = /(?=\w{6,})(?=\D*\d{2})/; // Change this line
// let result = pwRegex.test(sampleWord);

// CHECK FOR MIXED GROUPING OF CHARACTERS \\
// use () to check for mixed groups of characters 
// we use the test() method to check the string using the regex
// ex: check the string for either "penguin" or "pumpkin"
// let testStr = "Pumpkin";
// let testRegex = /P(engu|umpk)in/;
// testRegex.test(testStr);
// --> returns true 
