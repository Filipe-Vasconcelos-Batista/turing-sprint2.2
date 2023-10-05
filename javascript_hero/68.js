/**while loop
The while loop has only a loop condition. The loop 
code is executed as long as the condition is true. 
If the condition results in false, the loop is 
terminated and the code execution proceeds after the loop.

let threeX = '';
while (threeX.length < 3) {
  threeX = threeX + 'x';
}

As long as threeX has less than 3 characters, it is supplemented by
 'x'. If threeX has the length 3, the loop is terminated.
  threeX has the value 'xxx'.
Exercise
Write a function spaces that takes a natural number n and returns 
a string of n spaces.

Example: spaces(1) should return ' '. */
const spaces = num =>{
    let space=""
    while(space.length<num){
        space=space+ " "
    }
    return space
}
console.log(spaces(5))