/*Arrays
Arrays are objects for storing multiple values. Arrays are preferably created with square brackets.

let languages = ['C', 'C++', 'Java'];
let primes = [2, 3, 5, 7, 11];
let emptyArray = [];
let a = 'Douglas';
let b = 12;
let c = true;
let someValues = [a, b, c];

Exercise
Write a function toArray that takes 2 values and returns these values in an array.

Example: toArray(5, 9) should return the array [5, 9].*/

const toArray=(x , y)=> [x,y]
const newArray=toArray(1,2)
console.log(newArray)