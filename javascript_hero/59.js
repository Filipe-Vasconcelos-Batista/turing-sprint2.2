/**Array: slice()
With slice you can copy a subarray from an array:

let abcd = ['a', 'b', 'c', 'd'];
let ab = abcd.slice(0, 2);
let bc = abcd.slice(1, 3);
let bcd = abcd.slice(1, 4);

The first parameter specifies the start index (included) and the second parameter specifies the end index (excluded). The original array will not be modified.
Exercise
Write a function halve that copies the first half of an array. With an odd number of array elements, the middle element should belong to the first half.

Example: halve([1, 2, 3, 4]) should return [1, 2]. */
const halve = arr =>{
    let x= arr.length / 2;
    return arr.slice(0,Math.ceil(x))
}
console.log(halve([1, 2, 3, 4]),halve([1, 2, 3, 4,5]))

