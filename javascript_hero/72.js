/**Nested loops
Loops can be nested into each other. In case of a for loop
 you have to use two different loop variables.

let a = [[1, 7, 3], [2, 8, 5], [9, 0, 4]];
let sum = 0;
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    sum = sum + a[i][j];
  }
}

The code snippet calculates the sum of all elements of a 
two-dimensional array.
Exercise
Write a function sum that calculates the sum of all elements of a 
two-dimensional array.

Example: sum([[1, 2], [3]]) should return 6. */
const sum = arr =>{
    let som=0;
    for(let i=0; i<arr.length; i++){
        for(let j=0 ;j<arr[i].length; j++){
            som=som + arr[i][j]
        }
    }
    return som
}
console.log(sum([[1, 2], [3]]))