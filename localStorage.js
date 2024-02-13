/*
Cookies are sent with each request. 
When we want that certain information is not sent on server each time it is enabled, we use local storage.

local storage is a web storage object which are not sent to the server with each request.
This data survives a full page request and even a full browser restart. 

IMP NOTES:
In local storage keys and values both are strings.
to store obj in local storage we can use json.stringify()
*/


// 1- Set Item (Can update also using this)
localStorage.setItem("Name", "Abiha"); 

let key= prompt("Enter key you want to set: ");
let val= prompt("Enter key you want to value: ");
localStorage.setItem(key, val); 

// 2- Get Item (displays the value of the key)
console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

// 3- Remove Item
if(key == 'red' || key == 'green'){
    localStorage.removeItem(key);
}

// 4- Clears the localStorage
if (key==0){
    localStorage.clear();
}

// 5- key(index) get the key on given position 
console.log(localStorage.key(0));

// 6- length (no of stored items in the localStorage)
console.log(localStorage.length);