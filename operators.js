// AIRTHEMATIC OPERATORS
let a = 5;
let b = 2;
console.log("a= " + a + ", b= " + b);
console.log("a + b= ", a + b);
console.log("a - b= ", a - b);
console.log("a * b= ", a * b);
console.log("a / b= ", a / b);
console.log("a % b= ", a % b); //Modulus operator (gives a value of remainder e.g. 3%2=1)
console.log("a ** b= ", a ** b); //Exponentiation (5^2= 25)

//UNARY OPERATORS
console.log("a++ = ", a++); //shows 5 as it incremented after it has been printed (a is now equals to 6)
console.log("++a = ", ++a); //7

console.log("a-- = ", a--); //7
console.log("--a = ", --a); //5

//ASSIGNMENT OPERATORS (VALUES ASSIGN KRNA)
a += 1;
a -= 1;
a *= 1;
a %= b;
a **= b;

//COMPARISON OPERATORS (VALUES COMPARE KRNA)
console.log("a == b : ", a == b); //equals to
//if a= "5" and b= 5; a=b will return true as JS will implicitly convert string to number to make comparison
console.log("a === b : ", a === b); //equals to & type
console.log("a != b : ", a != b); //not equals to
console.log("a !== b : ", a !== b); //not equals to & type
console.log("a >= b : ", a >= b);
console.log("a <= b : ", a <= b);
console.log("a > b : ", a > b);
console.log("a < b : ", a < b);

//LOGICAL OPERATORS
// The && (logical AND) operator returns the value of the second operand if the first operand is truthy. If the first operand is falsy, it returns the value of the first operand. In this case, both a and b are truthy because they are non-zero numbers. Therefore, the result of a && b would be the value of b, which is 2.
console.log("a && b", a && b);

// The || (logical OR) operator returns the value of the first operand if it is truthy. If the first operand is falsy, it returns the value of the second operand. In this case, a is truthy (since it's a non-zero number), so the result of a || b would be the value of a, which is 5.
console.log("a || b", a || b);

console.log(!a); //false (returns true if a=0 or a= null or a=undefined)

//TERNARY OPERATORS
//condition? true output : false output
let age = 20;
console.log(age > 18 ? "adult" : "not adult");
