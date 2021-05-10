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
    console.log(`Hello ${name} you are ${age} years`);
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