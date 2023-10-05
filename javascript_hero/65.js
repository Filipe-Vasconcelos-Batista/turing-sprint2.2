/**for loop
Loops can execute code blocks several times. JavaScript knows different kinds of loops. The simplest one is the for loop.

let sum = 0;
for (let i = 1; i < 3; i++) {
  sum = sum + i;
}

The for loop consists of three control expressions and the loop code. 
The three control expressions follow the for keyword in parentheses. 
They are separated by semicolons. The first expression is the start expression.
 It is executed once at the beginning of the loop. 
 The so-called loop variable is normally initialized here. 
 The second expression is the loop condition. It is evaluated to true 
 or false before each loop iteration. If this expression evaluates 
 to true, the
loop code is executed. If this expression evaluates to false, the loop
is terminated and the program execution continues after the loop. The
third expression, called the final expression, is executed 
after each loop iteration. The loop variable is normally increased here.
Then a new loop iteration is started with a new evaluation of the loop
condition. The loop code follows the three control expressions in brackets. 
In our example sum has the value 0 initially. In the start expression i is
initialized with 1. The loop condition 1 < 3 is fulfilled,
so the loop code is executed. sum receives the value 0 + 1,
i. e. 1. Now in the final expression i is increased by 1.
(i++ is identical to i = i + 1). i thus receives the value 2. The second loop starts with the
evaluation of the loop condition. This condition (2 < 3) is still fulfilled. The
loop code is executed again and sum is now given the value 1 + 2, that is
3. In the final expression i is increased again and gets the value 3.
The loop condition 3 < 3 is no longer fulfilled. The loop is terminated and the
program execution continues after the loop. Our c
ode example has added all natural numbers smaller than 3.
Exercise
Write a function addTo that accepts a number as a parameter and adds all 
natural numbers smaller or equal than the parameter. 
The result is to be returned.

Example: addTo(3) should return 1+2+3 = 6. */
const addTo=int =>{
    let sum=0;
    for(let i=0; i <= int; i++){
        sum=sum + i;
    }
    return sum;
}
console.log(addTo(3))