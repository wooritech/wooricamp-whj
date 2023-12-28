let a = 2;
let b = 5;

console.log(a + b); //7
console.log(a - b); //-3
console.log(a * b); //10
console.log(a / b); //0.4


let c = 12;
console.log(c); //12

c = 999;
console.log(c); //999

const d = 12;
console.log(d); //12

d = 999;
console.log(d); // TypeError: Assignment to constant variable.

let this = 'Hello!'; // SyntaxError
let if = 123; // SyntaxError
let break = true; // SyntaxError