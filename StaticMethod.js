// Static methods belong to whole class and to not individual objects.
// They are used when we want to utilize certain methods in our whole program or want to import them, while making sure they are not individually accessible to the objects.

class Animal {
  constructor(name) {
    this.name = Animal.capitalize(name);
  }
  walk() {
    alert("Animal " + this.name + " is walking");
  }
  static capitalize(name) {
    return name.charAt(0).toUpperCase() + name.substr(1, name.length);
  }
}

j = new Animal("jack");
j.walk();
// console.log(j.capitalize("thisa")) // --- > this doesnt work
