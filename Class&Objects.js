// ********************** OBJECT AND PROTOTYPE ********************** //
/* A JS object is an entity having state and behavior (properties & methods)
JS objs have special property called prototype (i.e. __proto__) */
//If obj and prototype have same method then obj method is utilized
//objs by default inherit builtin methods & props from prototype

//DIRECT WAY OF CREATING AN OBJECT
const student = {
  fullName: "Abiha",
  cgpa: 3.777,
  marks: 90.0,
  printMarks: function () {
    console.log(`marks= ${this.marks}`);
  },
};

student.printMarks();

//CREATING A PROTOTYPE
const employee = {
  calTax() {
    console.log("Tax rate is 10%");
  },

  // other way of defining function
  // calTax2: function(){
  //     console.log("Tax rate is 10%");
  // }
};

const karanArjun = {
  salary() {
    console.log("Salary is 5000");
  },

  //if the obj and prototype have same function, then karanArjun's (object) function will be accessed
  calTax() {
    console.log("Tax rate is 20%");
  },
};

//object will be able to access the functions of employee (prototype)
//object would be a reference to an prototype i.e. we can directly access employee from karanArjun
karanArjun.__proto__ = employee;

// ********************** CLASSES ********************** //
// program- code template for creating objects
// In class we do not need to separate functions with a comma, unlike objects.
// same template pai multiple objects bnany hain tou class use krein gein

class Car {
  /* constructor is a special method which is automatically invoked when new is declared. 
    It is used to initialize objects*/
  constructor(brandName, milage) {
    this.brandName = brandName; //parameterized constructor
    this.milage = milage; //parameterized constructor
    console.log(`Creating new car ${brandName}... Having Milage ${milage}`);
  }

  start() {
    console.log("Start");
  }

  stop() {
    console.log("Stop");
  }

  setBrand(brandName) {
    //this.brandName is a property of objects created under this class
    // brandName is argument value to set the property
    this.brandName = brandName;
  }
}

//Objects of Car
let fortuner = new Car("fortuner", 2500); //constructor invoke

let lexas = new Car("lexas"); //constructor invoke

// ********************** INHERITANCE ********************** //
// passing props & methods from parent to child class
// if child & parent methods are same, then child mehod will be used (Method Overriding)

/************* Example # 1 *************/
class Parent {
  hello() {
    console.log("Hello!");
  }
}

class Child extends Parent {}

let child = new Child();
child.hello();

/************* Example # 2 *************/
class Person {
  constructor() {
    this.species = "homo sapiens";
  }
  eat() {
    console.log("Eating!");
  }
  sleep() {
    console.log("Sleeping!");
  }
  work() {
    console.log("Do Nothing!");
  }
}

class Engineer extends Person {
  work() {
    this.sleep();
    console.log("Working! Solve Problem!");
  }
}

class Doctor extends Person {
  work() {
    console.log("Treat Patients!");
  }
}

let abiha = new Engineer();
abiha.eat();
abiha.work();

let sana = new Doctor();
sana.work(); //Doctor's work function will be called

/************* Super KeyWord *************/
// Calls the constructor of its parent class to access its properties and methods
class Person2 {
  constructor(name) {
    this.name = name;
    this.species = "homo sapiens";
  }
  eat() {
    console.log("Eating!");
  }
}

class Engineer2 extends Person2 {
  constructor(branch, name) {
    /* in order to set name of Engineer, we need to pass the name variable from here, else the name will be undefined Reason: we created a variable but did not pass any value in it. As the process of exection is as follows:
    1- Child Constructor
    2- Goes to Parent Constructor using Super Keyword, and Executes the Parent constructor
    3- Execute the Child constructor
    */
    super(name); //to invoke parent class constructor, in order to avoid errors
    this.branch = branch;
  }

  work() {
    //two ways of calling parents function
    this.eat();
    super.eat();
    console.log("Working! Solve Problem!");
  }
}

let sara = new Engineer2("Software", "Sara");
sara.work();
