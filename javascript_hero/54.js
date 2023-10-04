/* Array: length
Like strings, arrays have the property length. Here it returns the number of elements in the array:

let languages = [];
let len0 = languages.length;
languages[0] = 'C';
let len1 = languages.length;
languages[1] = 'C++';
let len2 = languages.length;

The empty array contains no elements. len0 is 0. Now we fill the array step by step. len1 is 1 and len2 is 2.
Exercise
Write a function getLastElement that takes an array and returns the last element of the array.

Example: getLastElement([1, 2]) should return 2.*/
const getLastElement=arr=>{
    let i=arr.length-1;
    return arr[i]
}
console.log(getLastElement([12,2]))