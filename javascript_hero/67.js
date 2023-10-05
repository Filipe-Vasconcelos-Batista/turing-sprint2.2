/**Loops and arrays
for loops are handy for traversing arrays. In the following example,
 the elements of an array are added together:

let sum = 0;
for (let i = 0; i < myArray.length; i++) {
  sum = sum + myArray[i];
}

Exercise
Write a function mean that accepts an array filled with numbers and 
returns the arithmetic mean of those numbers.

Example: mean([1, 2, 3]) should return (1+2+3)/3 = 2. */
const mean=arr=>{
    let carrilo=0;
    for (let i=0; i<=arr.length-1;i++){
        carrilo=carrilo+arr[i];
    }
    return carrilo/arr.length
}
console.log(mean([1, 2, 3]))