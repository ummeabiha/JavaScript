// Hoisting refers to the process whereby the interpreter appears to move the declarations to the top of the code before execution.

// Variables can thus be referenced before they are declared. 

// JS only hoists declarations, but not the initializations. The variable will be undefined until the line where it is initialized is reached.

// let a;
// Following two lines will run successfully due to JavaScript hoisting
console.log(a);  // undefined in the case of var. Else, it will display an error in the case if let and const. 

greet();
function greet() {
  console.log("Good morning");
};

var a = 9; // Declaration hoisted to the top but initialization is not
console.log(a); // 9

// Function and Class Expressions are not hoisted For e.g.
greetings();  // Cannot access greet before initialization
const greetings= ()=>{
    console.log("Hello");
}


// Hoisting with let and const variables
/* Variables declared with let or const are hoisted WITHOUT a default initialization. So accessing them before the line they were declared throws ReferenceError: Cannot access 'variable' before initialization.

But variables declared with var are hoisted WITH a default initialization of undefined. So accessing them before the line they were declared returns undefined. */

console.log(number)

let number = 10
// or const number = 10

console.log(number)
// You get an error that says: ReferenceError: Cannot access 'number' before initialization.

/*
Temporal Dead Zone
There's a name for the period during execution where let/const variables are hoisted but not accessible: it's called the Temporal Dead Zone.

Again, the code from above:

console.log(number)

let number = 10

console.log(number)
The number variable is in a temporal dead zone where JavaScript knows of its existence (because its declaration is hoisted) but it's not accessible (as it doesn't have an initialization). */