// Array--> collection of elements
// Array is an object (non-primitive)
// Array are mutable which can be directly accessed and changed

let marks = [90, 70, 85, 24];
console.log(marks);
console.log(marks.length); //property not a method

//**************************************************************************************/
// Looping Over Arrays

// For Loop
for (let i = 0; i < marks.length; i++) {
  console.log(marks[i]);
}

// For Of Loop
for (let i of marks) {
  console.log(i);
}

//**************************************************************************************/
// Array Methods
let foodItems = ["Potato", "Apple", "Strawberry", "Tomato"];
let drinks = ["Coca Cola", "Pakola", "7UP", "Sprite"];

//Push() adds the item at the end of an original array
foodItems.push("Chips", "Burgers");
console.log(foodItems);

// Pop() removes the item from the end of an original array & returns it
let deleted = foodItems.pop();
console.log(`Deleted Item ${deleted}`);
console.log(foodItems);

// toString() converts the array elements into a string but does not change the original array
console.log(foodItems.toString());

// Concat() joins multiple arrays and returns result (doesnot change the original array)
console.log(foodItems.concat(drinks));

// Unshift() adds to start of a array
foodItems.unshift("Pasta");

// Shift() Removes Item from the start of an array & returns
let sDel = foodItems.shift();
console.log(sDel);

// Slice() Returns a piece of the array slice(startidx, endidx)
console.log(foodItems.slice(1, 3));

// Splice() Change original array (add, remove, replace) splice(startidx, delCount, newEl1)
// 2nd index sy start krky 3 elements delete krny hain and us 2nd index pai "jam" insert krna hai
console.log("\n", foodItems);
foodItems.splice(2, 3, "jam");
console.log("\n", foodItems);

// Add Element
foodItems.splice(2, 0, "mango");
console.log("\n", foodItems);

// Delete Element
foodItems.splice(3, 1);
console.log("\n", foodItems);

// Replace Element
foodItems.splice(1, 1, "cookie");
console.log("\n", foodItems);

//**************************************************************************************/
//WHAT ARE HIGHER ORDER FUNCTIONS / METHODS (HOD/HOM) ????????????//
/*
HOD takes functions either as parameters or returns a function as a value
Such as: forEach is a HOD function
*/

//**************************************************************************************/
//ForEach Loop in Arrays

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

//forEach will take each array element as a value here.
//forEach automatically executes the function, we do not need to do it.
arr.forEach(function printValue(val) {
  console.log(val);
});

let cities = ["Lahore", "Faisalabad", "Karachi", "Hyderabad"];
cities.forEach((val) => {
  console.log(val.toUpperCase());
});

/*FOR EACH CAN TAKE 3 PARAMATERS i.e. value, index, and array (optional)*/
cities.forEach((val, idx, arr) => {
  console.log(val.toUpperCase(), idx, arr);
});

//**************************************************************************************/
// MAP in Arrays
// Map and ForEach are very similar to each other. They both are utilized to access each element of an array. The only difference is map returns a new array, but forEach() does not.
// forEach() is used to perform simple calculations, while map() is used when we need a new array with some specific operation performed on it.

arr.map((val) => {
  console.log(val);
});

let calSq = arr.map((val) => {
  return val * val;
});

console.log(calSq);

//**************************************************************************************/
/* FILTER METHOD
Creates a new array of values that give true for a specified condition or filter
*/
let even = arr.filter((val) => {
  return val % 2 == 0;
});
console.log(even);

let odd = arr.filter((val) => {
  return val % 2 !== 0;
});
console.log(odd);

//**************************************************************************************/
/* REDUCE METHOD
Performs some operations and reduce the array to a single. It return that single value.

It works like this:
for suppose let arr= [1,2,3,4]
const output= arr.reduce((res, curr)=>{
    return res+curr;
});

1st iteration
res=1, curr= 2 ---> after execution res=3
2nd iteration
res= 3, curr= 3 ---> after execution res=6
3rd iteration
res= 6, curr= 4 ---> after execution res=10

Output will be 10
*/

const output = arr.reduce((res, curr) => {
  return res + curr;
});

console.log(output);

// Find the largest element in the array
const largest = arr.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});

console.log(largest);
