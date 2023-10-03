/*Get array elements
The elements of an array are accessed by an index beginning with 0.

let languages = ['C', 'C++', 'Java'];
let c = languages[0];
let cPlusPlus = languages[1];
let java = languages[2];

Exercise
Write a function getFirstElement that takes an array and returns the first element of the array.

Example: getFirstElement([1, 2]) should return 1.*/ 
const getFirstElement =arr => arr[0]
console.log(getFirstElement([1, 2]))