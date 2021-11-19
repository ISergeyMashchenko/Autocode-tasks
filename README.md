Task 1. Even numbers in array

Array are given. Implement a function - evenNumbersInArray, for keep only even numbers in array and return it.
Given argument not an array - return "Passed argument is not an array or empty".
Given argument not contains even numbers - return "Passed array not have even numbers in array"

Task 2. Fibonacci numbers

Number are given. Implement a function - fibonacciNumbers, that return number of n-sequence, where n is argument function. 
If given argument not a number return - "Passed argument is not a number". If you well in JS you can do this task with recursion.

Task 3. Detect palindrome string

String are given. Implement a function - detectPalindrom, that can detect palindrome string.
Given argument not an string - return 'Passed argument is not a string'.
Given string is empty - return 'String is empty'.
Given string palindrome - return 'This string is palindrome!'.
Given string is not a palindrome - return 'This string is not a palindrome!'

Task 4. Find number of vowels in string

String are given. Implement a function - findVowels, that find numbers of vowels in string.
Given argument is not a string - return "Passed argument is not a string".
Given string is empty - return "String is empty".
Given string is not contains vowels - return "String is not contains vowels".
Return numbers of vowels in string if string contains vowels.

Task 5. Snake array

Create a function that takes number(it can be any number) and produce a spiral matrix (two-dimensional array) with 
7 columns and 6 rows where the start is the number you passed as an argument. See images below for the pattern. 
In the first example snakeArray(1) was called. The second one snakeArray(-10).

Task 6. Text for role

You are given a list of roles as an array and a play script as a string. 
Each line of the play script is given as follows: <Role: text>. 
The text can contain any characters. Create a function that will regroup the lines according to roles, 
number them and return the result in the form of ready-made text (see example). Each group is displayed as follows:

Role:
i) text
j) text2
... == line break ==

i and j are line numbers in the script. Line indexing starts with one, 
the groups should be displayed in accordance with the order of roles. 
Line breaks between groups are required, line breaks at the end of the text are not taken into account.

Task 7. Sorted-array

The array of objects is given. Create two functions that return sorted products in descending order:
according to rating
according to price (if there are two prices, use newUan)
Original array should not be mutated

Task 8. Data types

For example:
convert('1', 2, 3, '4') // [1, '2', '3', 4]
convert(5, 6, 23, '66') // ['5, '6', '23', 66]

For example:
executeforEach([1,2,3], function(el) {console.log(el * 2)}) // logs 2 4 6

For example:
mapArray([2, '5', 8], function(el) {return el + 3}) // returns [5, 8, 11]

For example:
filterArray([2, 5, 8], function(el) { return el % 2 === 0 }) // returns [2, 8]

For example:
flipOver('hey world') // 'dlrow yeh'

For example:
makeListFromRange([2, 7]) // [2, 3, 4, 5, 6, 7]

For example:
const actors = [
{ name: ‘tommy’, age: 36 },
{ name: ‘lee’, age: 28 }
];

getArrayOfKeys(actors, ‘name’); // [‘tommy’, ‘lee’]

For example:
substitute([58, 14, 48, 2, 31, 29]); // [58, '*', 48, '*', 31, '*']

For example:
const date = new Date(2019, 0, 2);

getPastDay(date, 1); // 1, (1 Jan 2019)
getPastDay(date, 2); // 31, (31 Dec 2018)
getPastDay(date, 365); // 2, (2 Jan 2018)

For example:
formatDate(new Date('6/15/2018 09:15:00')) // "2018/06/15 09:15"
formatDate(new Date()) // gets current local time in given format("YYYY/M/d HH:mm")

Task 9. Data structure and types

I.
Write a title validation function - validateTitle, which takes an argument and validates it by the rules:
- Title length must be less than 2 characters but less than 20.
- Title must start with an uppercase letter
- Function should return ‘VALID’ if the string meets the requirements or ‘INVALID’ if it does not. 
And return 'Incorrect input data' if the given argument not a string. Do not use regular expressions.

II.
Create a function - sum, which takes two arguments: number, represented as string, and number. 
If an argument of type number is divisible by 3, 5 and 15 without remainder – multiply it by -1.
Function should return numeric sum of two arguments.

Task 10. Functions

I.  Create function that gets two arguments: the first one is array of objects, the second one is string (name of author) 
Your function should return quantity of posts with author from argument of function and the comments with the same author. 

II.   Write a function that gets two infinite numbers as strings. You should return the result of these two numbers sum as string. 
Mathematical operation with these two numbers is unavailable. Don’t use BigInt

III.  The new "How to Train Your Dragon” movie has just been released! There are a lot of people at the cinema box office standing in a huge line. 
Each of them has a single 100, 50 or 25 dollars bill. A "Batman v Superman: Dawn of Justice" ticket costs 25 dollars. 
Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line. 
Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line? 
Return YES, if Vasya can sell a ticket to each person and give the change. Otherwise return NO. Can Vasya sell a ticket to each person and give the change? 

Task 11. Functions Advanced

I. Write function "cache":
let complexFunction = function(arg1, arg2) {
	return arg1 + arg2;  // just for example (any logic can be here)
 };
let cachedFunction = cache(complexFunction);
For example:
cachedFunction('foo', 'bar'); // complex function should be executed
cachedFunction('foo', 'bar'); // complex function should not be invoked again,
// instead the cached result should be returned
cachedFunction('foo', 'baz'); // should be executed, 
// because the method wasn't invoked before with these arguments

II. Create object ladder with 3 methods “up”, “down” and “showStep”. Also it has property “step”. Step initially equal to 0. 
It should support chaining calls. Up/down - increasing/decreasing counter, showStep - showing current step counter with console.log()
For example:
ladder.up().up().down().up().showStep(); // 1+1-1+1 = 2

III. Write function applyAll(func, arg1, arg2...) which takes function (sum or mul) and arbitrary number of arguments. 
It should call func( write the realization of sum, mul) with all arguments and return result. Using of call method is mandatory.

Task 12. Fighter game

You should create a function or class ‘Fighter’ which takes an object with fighter properties and returns interface with fighter methods
