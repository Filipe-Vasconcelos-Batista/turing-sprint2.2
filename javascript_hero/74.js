/**NaN
NaN is a value representing Not-A-Number. Numeric operations or 
functions return NaN if they cannot calculate a value. We had 
seen this with parseInt. It returns NaN, if it can't parse a 
number. Another example is the calculation of the square root 
from a negative number:

let age = parseInt('Babylon');
let length = Math.sqrt(-1);

Both age and length get the value NaN.

If you want to test for NaN, you unfortunately can't use strict
 equality. NaN is the only value in JavaScript that when compared 
 to itself returns false. That is, NaN === NaN results in false. 
 To check if a value is NaN use the Number.isNaN function:

let input = 'Babylon';
let message;
let age = parseInt(input);
if ( Number.isNaN(age) ) {
  message = 'Input is not a number!';
}

The following task is challenging.
Exercise
Write a function parseFirstInt that takes a string and returns the
 first integer present in the string. If the string does not
  contain an integer, you should get NaN.

Example: parseFirstInt('No. 10') 
should return 10 and parseFirstInt('Babylon') should return NaN. 
Could Not Solve this one*/
function parseFirstInt(input) {

  let inputToParse = input;

  for (let i = 0; i < input.length; i++) {
    let firstInt = parseInt(inputToParse);
    if (!Number.isNaN(firstInt)) {
      return firstInt;
    }
    inputToParse = inputToParse.substr(1);
  }

  return NaN;
}
