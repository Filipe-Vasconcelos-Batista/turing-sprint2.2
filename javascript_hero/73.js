/**The arguments object
Inside every function an arguments object is accessible. It is 
an Array-like object that contains the values of the arguments 
passed to the function.

function add() {
  let arg0 = arguments[0];
  let arg1 = arguments[1];
  return arg0 + arg1;
}

let sum = add(1, 2);

add is called with arguments 1 and 2. So arguments[0] contains the 
value 1 and arguments[1] contains the value 2.

With the arguments object you can access the passed arguments without 
parameters. This is useful, for example, if you want to write a 
function that processes an arbitrary number of arguments.

function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
}

let s1 = add(2, 4);
let s2 = add(2, 3, 5, 7);

We iterate over all passed arguments and sum them up. 
Thereby arguments.length returns the
 number of passed arguments. Now we can call add with an arbitrary
  number of arguments.
Exercise
Write a function max that calculates the maximum of an arbitrary 
number of numbers.

Example: max(1, 2) should return 2 and max(2, 3, 1) 
should return 3. */
function max(){
    let bigger=0
    for (let i = 0; i < arguments.length; i++) {
        if(arguments[i]>bigger){
            bigger=arguments[i]
        }
        else{
            continue
        }
    }
    return bigger
}
console.log(max(1, 2),max(2, 3, 1))