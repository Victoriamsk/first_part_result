//Задание 1

var a = 5;
let b = 10;
const c = 13;

console.log(a, b, c);

a = 15;
b = 20;
c2 = 30;

console.log(a, b, c2);

//Задание 2

const a = 100;
a = 20;
console.log(a);
Uncaught TypeError: Assignment to constant variable.
at script.js:18:3

console.log(a)
let a = 15;
console.log(a);
Cannot access 'a' before initialization
at script.js:22:13

console.log(a);
var a;
a = 10;
console.log(a);
undefined
10

// Задание 3

let productName = 'milk';
let productPrice = 100;
let productQuantity = 5;
let resultCost = productPrice * productQuantity;

console.log("Вы купили " + productName + ' ' + productQuantity + " шт. по " + productPrice + " ₽. Всего было потрачено: " + resultCost + " ₽");

//Задание 4

typeof 'Hello' //string
typeof 10 //number
typeof {} //ob]ect
typeof null //object
typeof undefined //underfind
typeof true //boolean
typeof [] //ob]ect
typeof (() => {}) //function

//Задание 5

10 == 10 //true
10 != 10 //false
12 == 'Привет' //false
10 < 11 //true
12 > 20 //false 
true && true //true
true && false //false 
false && true //false
false || true //true
true || false //true
true || true //true
10 <= 10 // true
18 <= 20 //true
50 >= 50 //true
51 >= 50 //true
{} === {} //SyntaxError: Unexpected token '==='
{} == {} //SyntaxError: Unexpected token '=='

//Задание 6

let a = 5;
let b = 10;

console.log(a > b);