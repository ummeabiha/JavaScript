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

document.body.style.background ='red';
document.body.childNodes[3].innerText= 'abcd';

//DOM MANIPULATION
document.getElementById('heading');
document.getElementsByClassName('heading2');