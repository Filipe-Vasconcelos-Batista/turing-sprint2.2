/**Factorial
Let us practice the for loop with the factorial used in 
mathematics. The factorial of a positive integer n, denoted by 
n!, is the product of all positive integers less than or equal to n. 
For example, 3! = 1*2*3 = 6. By definition, 0! = 1.

Exercise
Write a function 
factorial that calculates the factorial of a positive integer.

Example: factorial(3) should return 6. */
const factorial=int =>{
    let fact=1;
    for(let i=1; i <= int; i++){
        fact=fact * i;
    }
    return fact;
}
console.log(factorial(3))