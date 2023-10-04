/** undefined
Up to now we had always initialized variables at declaration.

// declaration and initialization
let x = 1;

However, you can also declare a variable and initialize it later.

let x; // declaration
x = 1; // initialization

Variables that were not initialized have the value undefined.

Uninitialized variables can also occur on function calls. If you call a function with a parameter without an argument, the parameter gets the value undefined:

function echo(x) {
  return x;
}

// function call without argument
let y = echo();

echo is called without any argument. The parameter x receives the value undefined. Since echo simply returns it's parameter, y also gets the value undefined.

A function that expects a parameter can be called without an argument. When writing functions, you should always consider what should happen in this case. It is good practice in such a case to assign a default value to the parameter. We had seen this with the string method charAt(index). Normally this method returns the character at position index. If we call charAt without an argument, index gets the default 0. The character at position 0 is returned.

To check for undefined, use strict equality. Therefore, charAt could contain the following code snippet:

if (index === undefined) {
  index = 0;
}

Exercise
Write a function hello having one parameter and returning 'Hello <parameter>!'. If hello is called without an argument, 'Hello world!' should be returned.

Example: hello('Nala') should return 'Hello Nala!'. */
const hello= (str = "world") => `Hello ${str}!`
console.log(hello("nana"))