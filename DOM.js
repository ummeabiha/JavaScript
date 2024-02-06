// WHY SHOULD WE WRITE JS IN SEPARATE FILE?
// improve readibility
// improve modularity
// helps in browser caching

// WINDOW OBJECT
// represents an open window in a browser.
// global object that contains methods and properties.
// automatically created by browser.
// browser object (not JS object)
// all code renders in window object.
window.console.log("Hello world!");

// DOCUMENT OBJECT MODEL
// when web page is loaded, the browser creates a DOM of the page.
//to access the HTML elements in JS
// the HTML elements are converted to objects in JS which are called as document avaible in out window object. window.document

// window--> document (model of HTML code) ---> DOM ---> tree like structure --> individual elements boxes are called nodes (objects)

//DOM STRUCTURE
// window (node)---> document (node) ---> html (node)---> head & body

//it displays the properties of the document object (we want to print object)
console.dir(window.document);
console.dir(document.body);
console.dir(document.head);
//print document elements
console.log(window.document);
console.log(document.body);
console.log(document.head);

document.body.style.background = "red";
document.body.childNodes[3].innerText = "abcd";

//DOM MANIPULATION

//SELECTION WITH ID
console.dir(document.getElementById("heading"));
//when the id element is not present in html, & we try to access it using JS, the output will be shown as "null"
console.dir(document.getElementById("headings"));

//************************************************************** */
//**************ACCESSING DOM ELEMENTS***************/

//SELECTION WITH CLASS NAME
let heading2 = document.getElementsByClassName("heading2");
console.dir(heading2);
console.log(heading2);
//when the class element is not present in html, & we try to access it using JS, the output will be shown as empty html collection i.e. HTMLCollection[]
console.log(document.getElementsByClassName("headings"));

/************************************************************** */
//SELECTION WITH TAG
console.log(document.getElementsByTagName("p"));

/************************************************************** */
//QUERY SELECTOR
console.dir(document.querySelector("p")); //tag sy matching 1st element will be returned
console.dir(document.querySelectorAll("p")); //tag sy matching all elements i.e. Node List will be returned

//************************************************************** */
//**************PROPERTIES OF DOM ELEMENTS***************/

let divEle = document.querySelector("div");
console.log(divEle);

// 1- TAG NAME
console.log(divEle.tagName);

// 2- INNER TEXT (text content of element along with its children)
console.log(divEle.innerText);
// divEle.innerText= "none";

// 3- INNER HTML (plain text content or HTML content of element)
console.log(divEle.innerHTML);
// divEle.innerHTML= "<div>inner div</div>";

// 4- TEXT CONTENT (returns text content even for hidden elements)
console.log(divEle.textContent);
