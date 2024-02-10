// Array--> collection of elements
// Array is an object (non-primitive)
// Array are mutable which can be directly accessed and changed

let marks= [90, 70, 85, 24];
console.log(marks);
console.log(marks.length); //property not a method

//**************************************************************************************/ 
// Looping Over Arrays

// For Loop
for (let i=0; i<marks.length; i++){
    console.log(marks[i]);
}

// For Of Loop
for (let i of marks) {
    console.log(i);
}

//**************************************************************************************/ 
// Array Methods
let foodItems= ["Potato", "Apple", "Strawberry", "Tomato"];
let drinks= ["Coca Cola", "Pakola", "7UP", "Sprite"];

//Push() adds the item at the end of an original array
foodItems.push("Chips", "Burgers");
console.log(foodItems);

// Pop() removes the item from the end of an original array & returns it
let deleted= foodItems.pop();
console.log(`Deleted Item ${deleted}`);
console.log(foodItems);

// toString() converts the array elements into a string but does not change the original array
console.log(foodItems.toString());

// Concat() joins multiple arrays and returns result (doesnot change the original array)
console.log(foodItems.concat(drinks));

// Unshift() adds to start of a array
foodItems.unshift("Pasta");

// Shift() Removes Item from the start of an array & returns
let sDel= foodItems.shift();
console.log(sDel);

// Slice() Returns a piece of the array slice(startidx, endidx)
console.log(foodItems.slice(1,3));

// Splice() Change original array (add, remove, replace) splice(startidx, delCount, newEl1)
// 2nd index sy start krky 3 elements delete krny hain and us 2nd index pai "jam" insert krna hai
console.log("\n", foodItems);
foodItems.splice(2,3,"jam");
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