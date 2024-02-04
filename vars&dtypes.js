// undefined= pta he nhi ismai kia hai
// null= pta he ismai kia hai but value nhi given (absence of an object)
// = is a assignment operator

// Javascript is a dynamically types language. We do not have to tell the datatype of a variable.
// for e.g. if we are working in python while initializing the variable we have to define its datatype. Whereas, in JS there is no such thing.

// e.g. fullName= "Abiha"
// fullName= 25
// console.log(fullName)
// output---> 25 (dynamic nature allows string and int to be stores in a single variable)

// ******************************************************************
//PRIMITIVE DATATYPES

fullName = "Abiha"; //string

age = 19; //number

salary = 50.56; //float

x = null; //object
typeof x; //object

isFollow = false; //boolean

let x = BigInt(123); //bigInt ---> Output: 123n

let y = Symbol("Hello"); //Hello!---> Output: Symbol(Hello!)

y = undefined; // undefined

fullName = 25; //dynamic nature of JS

// ******************************************************************

//NON-PRIMITIVE DATATYPES (arrays, functions)
//objects--> key-value pairs

const student = {
  fullName: "Abiha",
  age: 19,
  cgpa: 3.777,
  isPass: true,
};

console.log(student.fullName); //Abiha //object.key
console.log(student["age"]); //19 //object["key"]
// console.log(student[age]); error

student["fullName"]= "Sara" //will be changed from Abiha to Sara
student["age"]= student["age"]+2 //21


// HOW ARE WE ABLE TO MODIFY NAME or AGE OF Students when the object is declared as const????????
//Since Student is an obj we can change the values for its keys, as  for displaying error here compiler needs to reference the memory address. 
//That is why we are able to change the values of const objects, but not const variables

// ******************************************************************
//LET, CONST & VAR
// var: variable can be re declared & updated. A global scope variable. (not recommended)
// let: variable can not be re declared but can be updated. A block scope variable.
// const: variable can not be re declared or updated. A block scope variable.

// PROBLEM WITH VAR (Allows Redeclaration)
var age = 29;
var age = 59;
var age = 80;
console.log(age);

//LET WILL GIVE ERROR ON REDECLARATION
// let age= 29;
// let age= 59;

//INSTEAD WE CAN UPDATE USING LET
let ageOfAbiha = 29;
ageOfAbiha = 59;

const name = "Abiha";

//CONST WILL GIVE ERROR ON REDECLARATION AND UPDATION
// const fullName = "Sara";
// fullName = "Sara";

let a;
console.log(a); //undefined

var b;
console.log(b); //undefined

// const b; //it must be initialized in the case of const
// console.log(b); //error

// ******************************************************************
// BLOCK SCOPE OF LET AND CONST
{
  let c = 10;
  console.log(c); //10
}

console.log(c); //error not defined

{
  let c = 20;
  console.log(c); //20
}

// ******************************************************************
let greeting;
console.log(greeting); //undefined
greeting = "Hello World!";

// ******************************************************************
// console.log(greetings); //error (as greetings variable is not declared)
// let greetings = "Hello World!";
