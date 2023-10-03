/*Set array elements
Just as you can get array elements by an index, you can set them by this index. It does not matter whether the array was previously filled or empty.

let languages = [];
languages[0] = 'C';
languages[1] = 'C++';
languages[2] = 'Java';

Here an empty array is filled successively with the listed values.
Exercise
Write a function setFirstElement that takes an array and an 
arbitrary variable. The variable should be inserted as the 
first element in the array. The array should be returned.

Example: setFirstElement([1, 2], 3) should return [3, 2].*/
const setFirstElement=(arr, num) =>{
    arr[0]=num
    return arr};
console.log(setFirstElement([1, 2], 3))