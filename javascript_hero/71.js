/** break and continue
break terminates the current loop. The program continues after 
the loop.

let words = 'blue white red';
let indexFirstSpace = -1;
for (let i = 0; i < words.length; i++) {
  if (words.charAt(i) === ' ') {
    indexFirstSpace = i;
    break;
  }
}

If the character with the index i in words is a space, the if 
condition is fulfilled. indexFirstSpace gets the value of the loop 
variable i. Now, break will be executed. The loop will be 
terminated and the program execution continues after the loop.

continue terminates the current loop iteration. The program execution 
jumps to the loop head.

let sum = 0;
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  sum = sum + i;
}

If i is an odd number, the following applies: i modulo 2
 = 1. The if condition is not fulfilled. Code execution 
 continues after if and i is added to sum. If i is an even 
 number, the following applies: i modulo 2 = 0. The if condition 
 is fulfilled and continue will be excecuted. The code execution
  jumps directly to the loop head. i is not added to sum.
   So all odd numbers smaller than 10 are added up.

break and continue can be used in all loops (for, while, do...while).
Exercise
Write a function isPrime that checks whether a passed number is
prime. In case of a prime number it should return true, otherwise
false.

Example: isPrime(7) should return true and isPrime(8)
 should return false.*/

const isPrime = num =>{
    let prime= false
    for (let i = 2; i<=num; i++){
        if (num%i===0){
            if(num===i){
                prime=true
            }
            break
        }
    }
    return prime
}
console.log(isPrime(7), isPrime(8),isPrime(2))