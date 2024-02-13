/*
JS objects have a special property called prototype, that is either null or references another object.
When we try to read a property, but it's not defined, then JS automatically takes it from the prototype, this is known as prototype inheritance.
*/

let a = {
  name2: "Harry",
  language: "JavaScript",
  run: () => {
    alert("self run");
  },
};
console.log(a);

let p = {
  run: () => {
    alert("run");
  },
};

p.__proto__ = {
  name: "Jackie",
};

a.__proto__ = p;
a.run();
console.log(a.name);
