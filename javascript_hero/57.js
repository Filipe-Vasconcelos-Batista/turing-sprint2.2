/**Array: indexOf()
The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present. Counting starts with 0.

let systems = ['Debian', 'Ubuntu', 'Mint'];
let i1 = systems.indexOf('Mint');
let i2 = systems.indexOf('Windows');

i1 gets the value 2 and i2 gets the value -1. For a complete reference see MDN web docs.
Exercise
Write a function add that adds an element to the end of an array. However, the element should only be added if it is not already in the array.

Example: add([1, 2], 3) should return [1, 2, 3] and add([1, 2], 2) should return [1, 2]. */
const add = (arr,num) =>{
  if (arr.indexOf(num)=== -1){
    arr.push(num)
    return arr
  }
  else{
    return arr
  }
}

console.log(add([1, 2], 3), add([1, 2], 2))