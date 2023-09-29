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
console.log(`lets fucking go`);

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
const todoJSON=JSON.stringify(todos);
console.log(todoJSON)