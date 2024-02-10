/*
Asyn Function always returns a promise
Await pauses the execution of its surrounding async function until the promise is settled.

Purpose--> to simplify asynchronous programming

we can convert any normal function into asynchronous function
*/

// async function hello() {
//   console.log("Hello");
// }

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Weather Data");
//       resolve(200);
//     }, 2000);
//   });
// }

// async function getWeatherData() {
//   await api();
//   await api();
// }

async function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("Success");
    }, 2000);
  });
}

async function getAllData(){
    console.log("Getting Data 1");
    await getData(1);
    console.log("Getting Data 2");
    await getData(2);
    console.log("Getting Data 3");
    await getData(3);
    console.log("Getting Data 4");
    await getData(4);
    console.log("Getting Data 5");
    await getData(5);
    console.log("Getting Data 6");
    await getData(6);
}

// getAllData();

// As we have seen in CallBack and Promises, we don't need to define function, and we can call them immediately, but in Async-Await we need to define async function. To resolve this we have IIFE

/* Immediately Invoked Function Expression
function that is called immediately as it is defined, it has no name and can be defined only with a function keyword */

// Automatic execution with function calling 
(async function () {
  console.log("Getting Data 1");
  await getData(1);
  console.log("Getting Data 2");
  await getData(2);
  console.log("Getting Data 3");
  await getData(3);
  console.log("Getting Data 4");
  await getData(4);
  console.log("Getting Data 5");
  await getData(5);
  console.log("Getting Data 6");
  await getData(6);
})();