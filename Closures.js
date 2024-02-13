//Closure is a function with its lexical environment

msg= "Hello, world!";

function Hello(){
  let msg= "Good Morning"; // local variable created by Hello() 
  console.log(msg);

  // Hello2() is the inner function i.e. closure 
  let greet= function Hello2(){
    // uses the variable declared in parent function
    console.log("Hello2", msg); // references to the msg variable
  }
  return greet;
}

let greet= Hello();
greet();


// The closure function returns a referenced value, not the hard coded value. Henoce, on changing the value of a variable even after the execution of the closure, it will return the new value
function displayName(){
  var studentname= "Abiha";
  function studentName(){
    console.log(studentname); // this will print Sara 
  }
  studentname= "Sara";
  return studentName;
}

let studentname= displayName();
studentname(); 

//Nested Closures
function returnFunc() {
  const x = () => {
    let a = 1;
    console.log(a);
    const y = () => {
      // let a = 2
      console.log(a);
      const z = () => {
        // let a = 3
        console.log(a);
      };
      z(); //999
    };
    a = 999;
    y(); //999
  };
  return x;
}

let a = returnFunc();
a();


// *****************************************************************************************/

// OUTPUT: 5 5 5 5
for (var i = 1; i <= 4; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}

/* This issue occurs because of the way closures work in JavaScript and how the setTimeout function interacts with them. In your code, you're using a loop to iterate from 1 to 4 and scheduling a setTimeout function for each iteration. However, the setTimeout function runs asynchronously, and by the time it executes, the loop has already completed, and the variable i has reached its final value, which is 5. */

// ************************************************************************ //

// OUTPUT: 1 2 3 4
for (var i = 1; i <= 4; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, 0);
  })(i);
}

/* An IIFE (Immediately Invoked Function Expression) is a function that is immediately invoked after it's defined. In this case, it takes a parameter j and immediately invokes the function with the current value of i. This creates a new scope for each iteration of the loop, and j holds the specific value of i for that iteration.
When the setTimeout function inside the IIFE executes, it prints the value of j, which is the correct value for the corresponding iteration. */
