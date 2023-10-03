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

//loops
//for loops
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
else{
    console.log("x is 10???")
}
