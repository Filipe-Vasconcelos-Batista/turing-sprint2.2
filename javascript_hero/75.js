/**String: split()
The split method splits a string into substrings using a separator 
string. The substrings are returned as an array. The original
 string is not changed.

let date = '31-10-2017';
let parts = date.split('-');
let day = parts[0]; // '31'
let month = parts[1]; // '10'
let year = parts[2]; // '2017'

Here, the separator string is the hyphen. It splits the
 date string into three parts. These three parts are assigned
  as an array to the variable parts. Afterwards, the individual parts.
are assigned to separate variables.
Exercise
Write a function add that takes a string with a summation task
 and returns its result as a number. A finite number of natural numbers
  should be added. The summation task is a string of the form 
  '1+19+...+281'.

Example: add('7+12+100') should return 119. */
const add=str=>{
    let newStr=str.split("+")
    let sum=0
    for(let i=0;i<newStr.length;i++){
        sum = sum + parseInt(newStr[i])
    }
    return sum
}
console.log(add('7+12+100'))