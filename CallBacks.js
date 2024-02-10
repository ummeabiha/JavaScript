// SYNCHRONOUS---> Execution of instructions in the order, in which they are defined.
console.log(1);
console.log(2);
console.log(3);

// ASYNCHRONOUS---> Execution of next instructions immediately, and doesn't block the flow.
console.log(1);
console.log(2);
setTimeout(() => {
  console.log("Hello");
}, 4000); // 4s---> 4000ms;
console.log(3);
console.log(4);

//Output ---> 1, 2, 3, 4, "Hello"

// **************************************************************** //
// CALLBACK--> Function passed as an argument to another function.
let sum = (a, b) => {
  console.log(a + b);
};
let calculator = (a, b, SumCallBack) => {
  SumCallBack(a, b);
};
//make sure to not write sum with parentheses i.e. sum(), as it would generate an error, as the calculator function doesn't take parameter as a function
calculator(1, 2, sum);

/*************************************************************************/
// CALLBACK HELL --> Nested Callbacks stacked below one another forming a pyramid structure (Pyramid of Doom). This style of programming becomes difficult to unerstand and manage.

let getData = (dataId) => {
  setTimeout(() => {
    console.log("data", dataId);
  }, 2000);
};

getData(1); //will start 2 sec timer and then immediately move on to the next line
getData(2); //will start 2 sec timer and then immediately move on to the next line
getData(3); //will start 2 sec timer and then immediately move on to the next line

//due to this, all three of them will be printed concurrently (aik sath)

//We need to call getData(1) first, then getData(2) and then getData(3) --> each after one another
let getData2 = (dataId, getNextData) => {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
};

//we can not pass getData2 (callback in this) so we need to define a function here
//This style of programming is CallBack Hell, which is a problem as it maked code difficult to understand
console.log("Getting Data 1");
getData2(1, () => {
  console.log("Getting Data 2");
  getData2(2, () => {
    console.log("Getting Data 3");
    getData2(3, () => {
      console.log("Getting Data 4");
      getData2(4);
    });
  });
});
