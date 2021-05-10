const par = "I am Working. I am JS. Beautiful, I am worth it";
console.log(par);
let a = 221;
let b = a - 5;
const c = 100; // constant 변하지 않는 값
console.log(b, a);



// String
const myname = "Jun";
console.log(myname);

// Array
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(daysOfWeek[0]);

// Object 
const junInfo = {
    name: "Jun",
    age: 20,
    gender: "Male",
    isHandsome: true,
    favMovies: ["Along the gods", "LOTR", "Oldboy"],
    favFood: [
        {
            name: "Meat",
            fatty: false
        },
        {
            name: "Cheese burger",
            fatty: true
        }
    ]
}

console.log(junInfo);
console.log(junInfo.name);
console.log(junInfo.age);

junInfo.age = 25;
console.log(junInfo.age);

// Function - function name(){code}
function sayHello(name, age){
    console.log("Hello!", name);
    console.log(`Hello ${name} you are ${age} years`);  // use ``
}
sayHello("Jun", 20);

function Hello(name, age){
    return `Hello ${name} you are ${age} years`;
}
const greetJun = Hello("Jun", 25);
console.log(greetJun);

const calculator = {
    plus: function(a,b){
        return a+b;
    },
    multiply: function(a,b){
        return a*b;
    },
    sub: function(a,b){
        return a-b;
    },
    squared: function(a,b){
        return a**b;
    }
}
const plus = calculator.plus(5, 6);
console.log(plus);
console.log("Hello");
/* Event - click, resize, submit, input, change, load before closing printing 
function handleClick(event){
    console.log(event);
}
window.addEventListener("resize",handleClick);

function handleClick(){
    title.style.color = "blue";
}
title.addEventListener("click", handleClick);

// if-else
if(10 > 5){
    console.log('hi');
}
*/

/*
//const title = document.getElementById("title");
//console.log(title);

// DOM - Document Of Module
console.error("Test");

// querySelector - id : #name, class : 
const title = document.querySelector("#title");
title.innerHTML = "Hi! From JS";

document.title = 'I own you';

// Event - click, resize, submit, input, change, load before closing printing 



const BASE_COLOR = "blue";
const OTHER_COLOR = "peru";

function handleClick(){
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else{
        title.style.color = BASE_COLOR;
    }
}


function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}
init();

// When you are Offline or Online, it works
function handleOffline(){
    console.log("Bye Bye");
}
function handleOnline(){
    console.log("Welcone Back")
}
window.addEventListener("offline", handleOffline);
window.addEventListener("online",handleOnline);

/*
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    const hasClass = title.classList.contains(CLICKED_CLASS); // True or False
    if(hasClass){
        title.classList.remove(CLICKED_CLASS);
    }
    else{
        title.classList.add(CLICKED_CLASS);
    }
}

function init(){
    title.addEventListener("click", handleClick);
}
init();
*/