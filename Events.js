// The change in state of an object is called event.
// Events are fired to notify code of interesting changes that may impact code execution.

// **********************************************************************
/********************* THREE WAYS OF EVENT HANDLING *********************/
/* 1-  INLINE EVENT HANDLING
HTML ky through events define krna 
DRAWBACKS: Large block of events can not be handeled. Can make code confusing. */

/* 2-  JS EVENT HANDLING
DRAWBACKS: Can define event for once only */

/* 3-  EVENT LISTENERS
Multiple event listeners can be added for one event.
Two Args: event(function to perform) and callback (handler). */

// **********************************************************************
/********************* JS EVENT HANDLING *********************/

let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
  console.log("Btn1 clicked");
  let a = 25;
  a++;
  console.log(a);
};

// 1- If we have handeled events using inline and JS methods both. The priority will be given to the JS Event Handling.

let box1 = document.querySelector("div");
box1.onmouseover = () => {
  box1.style.backgroundColor = "black";
};

// 2- Once the event is handled, it cannot be defined again, if we do so the priority will be given to the last Event Handling.
btn1.onclick = () => {
  console.log("Btn1 is clicked after it has been handled again");
};

//EVENT OBJECTS
// Has details about the event
// Have access to Event Object's properties and methods
/*
node.event=(e)=>{
    e is event object
}
*/

btn1.onclick = (e) => {
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX, e.clientY);
};

box1.onmouseover = (e) => {
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX, e.clientY);
};

// **********************************************************************
/********************* EVENT LISTENERS *********************/
btn1.addEventListener("click", (e) => {
  console.log("Event Listener Clicked 1");
  console.log(e.clientX, e.clientY);
});

btn1.addEventListener("click", (e) => {
  console.log("Event Listener Clicked 2");
});

const handler3 = (e) => {
  console.log("Event Listener Clicked 3");
};

btn1.addEventListener("click", handler3);

btn1.addEventListener("click", (e) => {
  console.log("Event Listener Clicked 4");
});

//REMOVING HANDLER 3
// While removing the handler the reference to the original function is necessary.
// For this we need to store the handler3 function in some variable so that it refers to same function. As distinct event listeners have distinct memory spaces.
btn1.removeEventListener("click", handler3);

//If we try to remove the handler4 directly, it won't do anything, as it is referring to different memory spaces
btn1.removeEventListener("click", (e) => {
  console.log("Event Listener Clicked 4");
});


//DARK AND LIGHT MODE SWITCH BUTTON
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", (e) => {
  if (currMode === "light") {
    currMode ="dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    currMode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
  }

  console.log(currMode);
});
