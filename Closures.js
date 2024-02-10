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
