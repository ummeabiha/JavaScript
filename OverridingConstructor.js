class Employee {
  constructor(name) {
    console.log(`${name} - Employee's constructor is here`);
    this.name = name;
  }
  login() {
    console.log(`Employee has logged in`);
  }

  logout() {
    console.log(`Employee has logged out`);
  }

  requestLeaves(leaves) {
    console.log(`Employee has requested ${leaves} leaves - Auto approved`);
  }
}

class Programmer extends Employee {
  constructor(name) {
    // this.name; // it will give error, as this must be written after super constructor.
    super(name); // must utilize this constructor
    console.log(`This is a newly written constructor`);
  }
  // constructor(...args){ ---> If there is no constructor in the child class, this is created automatically
  //   super(...args)
  // }
  requestCoffee(x) {
    console.log(`Employee has requested ${x} coffees`);
  }
  requestLeaves(leaves) {
    super.requestLeaves(4);
    console.log("One extra is granted");
    // console.log(`Employee has requested ${leaves + 1} leaves (One extra)`)
  }
}

let e = new Programmer("Harry");
e.login();
e.requestLeaves(3);
