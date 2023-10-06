//const unmovable
//let changeable
//primitives
//types of data(primitive): strings, Numbers, Boolean, null, undefined,Symbol
const name="John";//string ,no need for semicolon
const age=30; //number
const rating=4.5;//also num
const isCool=true;//boolean
const x=null;//null
const y=undefined;//undefined
let z;//undefined

console.log(typeof isCool);
//non primitives:
//object


//concatenation
console.log("My name is " + name + " and I am " + age);
//template string
console.log(`My name is ${name} and Im ${age} years old`);
console.log(`lets go`);

//strings properties and methods
const s="Hello World!";
//properties
console.log(s.length);
// methods are funtions associated with an object
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(""));

const S="technology, computers, it, code";
console.log(S.split(", "));

//Arrays lists in python: Variables that hold multiple values
//creating one using a constructor
const numbers= new Array(1,1,1,1,1,1,1);
console.log("the array n1", numbers)
//not using constructor
//in javascript an array can take any tipe of data from string to num in the same array
const fruits=["apples", "oranges", "pears"];
console.log("the 2 array: ", fruits)
// add elements to an array
fruits[3]="grapes"
console.log("version 2 of fruits:" , fruits)
//notice that although u choose const to start that array you can actually manipulate it
//the only thing you cannot do is to reassign it: fruits=[] or youll get an error

//to add a value to the end of the array use the .push method
fruits.push("mango")
console.log("version 3 of fruits:" , fruits)

//to add A value at the beggining of the array you can use .unshift method
fruits.unshift("watermelon")
console.log("version 4 of fruits:" , fruits)

//to check if something is an array use the .isArray method
console.log(Array.isArray(fruits))
// to fin the index of an element use the .indexOf method
console.log(fruits.indexOf("oranges"))
//objects
const person={
    firstName:"john",
    lastName:"Doe",
    age:30,
    hobbies:["music", "movies", "sports"],
    adress:{
        street:"50 main st",
        city:"Boston",
        state:"MA"
    }
};
//to call ocjects
console.log(person.adress.city);
//if we wanted to make elements of the object as a variable
const{firstName,lastName, adress:{city}}=person;
console.log(city);

//to add elements to the object
person.email="john@gmail.com";
console.log(person)
//arrays with objects inside
const todos=[
    {
        id:1,
        text:"take out trash",
        isCompleted:true
    },
    {
        id:2,
        text:"Meeting with boss",
        isCompleted:true
    },
    {
        id:3,
        text:"Dentist appt",
        isCompleted:false
    }
]
console.log(todos[1].text);
//create a json with the variables
//for example to send to a server or something like that~
//you can do that directely with stringify()
const todoJSON=JSON.stringify(todos);
console.log(todoJSON)


//LOOPS

//For loops
//writes for() and ibnside the (it takes 3 parameters):
//assignement of the interatable/variable for(let i=0)
//condition that needs to be met for(let i=0; i<10)
//last is the increment for(let i=0;i<10; i++)
//every parts is divided by a semicolon ;
for(let i= 0; i<10;i++){
    console.log(`For Loop Number: ${i}`);
}
//notice that the condition above is met because 
//its i smaller than ten, not equal

//While Loops
//the major diferences is that you set
//the variable outside of the loop
let i=0
//the loop itself only takes the condition while(i<10)
while(i<10){
    console.log(`While Loop Number: ${i}`);
//and the incrementations goes inside the loop itself
    i++;
}
//but if we want to loop through the arrays?
//lets use the todolist above as an example:
//lets use the For Loop by only changing the condition:
for(let i= 0; i<todos.length;i++){
    //we use the length method because it will give us
    //the number of items in the array wish means
    //even if you change the array in the future this function would still work
    console.log(todos[i].text);
    //in this case we are the .text  to print only the strings
    //delete it  and it prints in the console every single element of the array
}
// but the are better methods to loop through an array such as:
//For Of Loop
//the structure is similar to a for loop but more readable
for(let todo of todos){
    //lets break this apart:
    //let todo is setting up a variable, like let i=0
    //so you can call it whatever you like, usually its used a similar name 
    //to make it more readable
    //of todos  that is the name of the array signaling thats what you want to loop through
    //what it means is that you want to go through every element of the array of that name
    console.log(`For Of Loop: ${todo.text}`)
}

//we also have what is called the high order array methods:
//forEach loops through the array as the above methods
//first it takes the array name: todos
//next the method: todos.forEach()
//inside the brackets it takes a function: todos.forEach(function(){})
//inside that functions brackets it takes the variable name:todos.forEach(function(todo){})
todos.forEach(function(todo){
    console.log(`For Each Loop: ${todo.text}`)
});
//you can also do these with arrow functions:

//map allows us to creat a new array from an existing array
//(prety usefull because many times you dont want to lter the 
//original array just manipulate some data)
//its formated pretty much the same way as the one before
//just change the .forEach to .map:todos.map(function(todo){
//but because it returns an array you have to assign a variable:
// const todoText= todos.map(function(todo){})
//the goal here is to loop through and return an array of just the text/string values
const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(`map: ${todoText}`)
//notice how it returns an array of just the text strings

//filter allows to create a new array based on a condition
//for this example lets try to make an array of only the completed todos
//as in the third element is isCompleted:true
//same bases as Before, change map to .filter
//const todoText2 = todos.map(function(todo)
//inside the loop you put your condition so it knows what to assign to
//the new array:
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});
console.log(`filter: ${todoCompleted}`)

//now you can also combo/chain these methods lets say, you only want to
//assign to the new array the text?
const todoCompleted2 = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text
});
console.log(`filter version 2: ${todoCompleted2}`)
// notices that all the diferent methods are inside the first bracket()
//you can chain/combo a lot of stuff 

//Conditionals
//lets start with the simple if statement
let newx=10;
//
if(newx==10){
    console.log("x is 10")
}
//notice that the equality operator == does not match the data 
//types if its a string or a number it mnakes no diference
//so changing that to a string makes no diference :
//
if(newx=="10"){
    console.log("x is 10?")
}
//same results
//to match also data types we have the sttrict equality operator ===

if(newx===10){
    console.log("x is with a strict equality the num 10")
}
//else if statement is checked if your if statements and else if that came before
//do are not true
else if(newx < 10){
console.log("x is greater than 10")
}
//try adding a true statement here for example x<11 to see what its 
//logged
//else ads something for the program to do none of the if statesments
//are true
else{
    console.log("x smaller than 10???")
}

//lets now learn multiple conditions
let newy=10;
//lets use the same logic as b4
//you can use the logical OR operator: || so if one of these is correct 
//it will print (or is correct)
if(newx>5 || newy>10 ){
    console.log("OR is correct")
}//you can also use the logical AND operator: &&
//in that case in order for the next line to be printed both need to be true
if(newx>5 && newy>10){
    console.log("AND is correct")
}// you can also use the ternary operator
//wish allows to assign variables based on a condition
//in this case we will assign a variable named color based on the value 
//of  variable named colorx
//we start by defining the colorx
let colorx=11;
//then we make the variable color: let color
//we put the assign signal in fron as is usual: let color=
//and here were it is diferent, we put the if statement:
//let color=colorx>10
//and we add a ? wish will let js know that it is a conditional:
//let color = colorx>10 ?
//we then add the first value to assign : let color = colorx> 10 ? "red"
//then we add a : wich works like an else statement
//let color = colorx> 10 ? "red":
//and we end by adding the alternative value to assign if the first
//condition is not true:
let color = colorx> 10 ? "red": "blue";
console.log(color)
//what we have writen above is the equivalent to:
if (colorx >10){
    let color="red";
    console.log(color);
}else{
    let color="blue";
    console.log(color);
}
//but in a lot faster and readable way

//SWITCHES
//switches are another way to avaluate a condition
//lets use the example above
// we start by using the switch(): switch()
//inside we put the variable name we want to verify: switch(color)
//then we write the case followed by the conditions:
//switch(color){case "red":
//after that you input what you want it to do at that point (ill use console logs as allways)
switch(color){
    case "red":
        console.log("color is red")
        break
    case "blue":
        console.log("color is blue")
        break
    //each case works as its own else if
    //for the else in this statement we use the default
    //as if none of the cases are true
    //then it will default to this option
    default:
        console.log("color not red or blue")
        break
}

//Functions
//lets start by creating a function that adds 2 numbers
//with the function keyword:function addNum()
//inside those parentesis you can put your parameters, in this example
//the numbers to be added: function addNum(num1,num2)
//open the brackets and write the output of the funtion inside of them
//in this case again ill use a console log for demonstration
function addNum(num1,num2){
    console.log(num1+num2)
}
//nothing happened at this point in the console
//that is because we have not called our function for that we write
//the functioin name with the two parameter inside the parentesis:
addNum(1,2)
//what happens if we call it without parameters??:
addNum()
//youll notice that you have just gotten a NaN
//Not a number
// if you wanna know more about NaN consult : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN?retiredLocale=de
//to avoid this we can set up a default value
//by adding that default value after = in each of the parameters:
function addNumWithDefault(num1=1,num2=1){
    console.log(num1+num2)
}

//and if you call it without arguments:
addNumWithDefault()

//most cases in reality you are gonna use a console.log
//youll want your function to return something when is called
//like so:
function addNumWithReturn(num1=1,num2=1){
    return(num1+num2)
}
//if you call upon this function, youll notice that nothing gets
//logged in the console:
addNumWithReturn(4,3)

//so we need to wrap it in a console log to print that result
console.log(`this is the wraped in log result : ${addNumWithReturn(4,3)
}`)
//Arrow Function
//introducted in es6 or es 2015
//they have the following structure:
// we start by naming it as a variable: const addNumArrow
//then add a equal sign: const addNumArrow =
//the parameters: const addNumArrow= (num1=1,num2=1)
//after that add a fat arrow =>:const addNumArrow= (num1=1,num2=1)=>
//and the rest is the same as before
const addNumArrow= (num1=1,num2=1) =>{
    return(num1+num2)
}
console.log(addNumArrow())
// and  it works
//but still since we only have 1 expression we can trim it down a lot more
//we can remove the {}
//to return you dont need to use the return keyword delete it!!!
//y«if you only use one parameter you dont need the parentesys of the parameter
//try to delete one parameter and the parentesys to check(it should print the value without add)
//it will look like this:
//const addNumArrow= num1 =>num1+ 5;

//console.log(addNumArrow(1))


//Error Handling in javascript
/** 
 * Try{} lets you test a block of code for error
 * catch handles the error
 * throw creates costum error
 * finnaly lets you exectute code after try and catch
*/
try{//to use this the javascript must be correct it only catches runtime errors
    console.log("start of the try runs");
    unicycle;//does not exist starts error
    console.log("end of the try runs -- never reached")
}
 catch(err){//the error makes it jump to this 
    console.log("error has ocurred" + err.stack); //.stack is optional
}finally{//the finnaly allows the program to continue
    console.log("This will allways run");
}
console.log("... then the execution continues");
/** lets create another example for the throw  */

let json="{'age':30}";

try{
let user = JSON.parse(json);
if (!user.name){
    throw new SyntaxError("Incomplete data: no name");
}
console.log(user.name);
}catch(e){
    console.log("JSON Error: "+ e);
}
/**
 * While using your JavaScript playground, try to determine the following:

    What occurs when you throw an error (throw new Error('Oops!')) 
    within the catch block?
    hrowing an error within the catch block: If you throw an error 
    within a catch block, the error
     will not be caught by the same try-catch-finally block. 
     It will need to be caught by an outer try-catch block if
      one exists, otherwise it will terminate the execution of 
      the current function.

    What transpires if you return a value in the try block and 
    also in the finally block?
    Returning a value in the try and finally blocks: If you
     return a value in both the try and finally blocks, the value
      from the finally block will be returned. The finally block
       always executes after the try and catch blocks, and its
        return value will override any previous return values.

    What happens if you throw an error in the catch block and 
    return a value in the finally block?
    Throwing an error in the catch block and returning a value
     in the finally block: If you throw an error in the catch
      block and return a value in the finally block, the function 
      will return the value from the finally block. This is because
       the finally block always executes, regardless of what happens 
       in the try and catch blocks.

    Is it possible to access a variable declared in the 
    try block from the catch or finally block?
    Accessing a variable declared in the try block 
    from the catch or finally block: Variables declared within a
     block (using let or const) are not accessible outside of that
      block due to JavaScript’s block scoping rules. So, you
       cannot access a variable declared in the try block from 
       the catch or finally blocks. However, if you declare a variable
        without let or const (or with var), it will be hoisted 
        and can be accessed from anywhere within the function.

 */
/*
        def get_full_name(first_name, last_name):
            return f"{first_name} {last_name}"
*/
const getFullName=(firstName, lastName)=> `${firstName} ${lastName}`;
console.log(getFullName("Filipe","Batista"))
/*
        def wrap_in_an_object(first_name, last_name):
            return {'firstName': first_name, 'lastName': last_name}
*/
const wrapInAnObject=(firstName,lastName) =>`firstName: ${firstName},  lastName: ${lastName}`
console.log(wrapInAnObject("Filipe","Batista"))
/*
        def join_arrays(array1, array2):
            return array1 + array2
*/
const joinArrays=(arr1 , arr2)=> arr1.concat(arr2)
console.log(joinArrays([1,2],[3,4]))
/*
        def contains_value(array, value):
            return value in array
*/
const containsValue=(arr, value)=> arr.indexOf(value)
console.log(containsValue([1,2,3,4,5,6],5))
/*.
        def multiply(a, b=1):
            return a * b
*/
const multiply= (num1,num2=1)=> num1*num2;
console.log(multiply(4))
/*
            def to_person_object(first_name, last_name, age):
            return {
                'firstName': first_name,
                'lastName': last_name,
                'age': age,
            }
*/

/*
        def create_object(key, value):
            return {key: value}
*/
/*
        def print_array_elements(array):
            for element in array:
                print(element)
*/
/*
        def print_object_properties(obj):
            for key, value in obj.items():
                print(f"{key}: {value}")
*/
/*
        class Person:
            def __init__(self, name):
                self.name = name
        
            def say_hello(self):
                print(f"Hello, my name is {self.name}")
*/        
/*        
        person = Person('Jane')
        person.say_hello()
*/        