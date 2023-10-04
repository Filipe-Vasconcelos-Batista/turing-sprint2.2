/* null
Besides undefined JavaScript knows another value for "no value": null. You can assign the value null to a variable and test for null with strict equality:

let foo = null;
if (foo === null) {
  foo = 1;
}

It is a mistake that JavaScript has two values for "no value". One should always treat undefined and null equally.
Exercise
Write a function cutComment that takes one line of JavaScript and returns a possible line comment trimmed. If the line contains no line comment, null should be returned. For simplicity, we assume that the code does not contain the comment characters within a string.

Example: cutCommt('let foo; // bar') should return 'bar'.
*/