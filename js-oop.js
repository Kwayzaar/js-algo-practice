// CONSTRUCTORS \\
// create new objects and define the properties and behaviors of that object 
// conventions: 
  // defined with capitalized name to distinguish from functions
  // use "this" to set properties of object they will create
  // define properties and values instead of returning values, like a function would 
// ex:
// function Dog() {
//   this.name = "Remy";
//   this.color = "Gray";
//   this.numLegs = 4;
// }

// USING CONSTRUCTORS TO CREATE OBJECTS \\
// We can create a new object by calling the constructor with "new", and assign it a name 
// The constructor will give the object all the properties it has 
// function Dog() {
//   this.name = "Rupert";
//   this.color = "brown";
//   this.numLegs = 4;
// }

// let hound = new Dog() //this is the object being created 
// --> hound = { name: 'Rupert', color: 'brown', numLegs: 4 }

// EXTEND CONSTRUCTOR TO RECEIVE ARGUMENTS \\
// We can create constructors to accept parameters, so that we can pass new values into objects when they are created with a constructor 
// function Dog(name, color) {
//   this.name = name // <-- pass the arguments in here 
//   this.color = color //<-- and here 
//   this.numLegs = 4
// }

// let terrier = new Dog("Gus", "white")
// --> { name: 'Gus', color: 'white', numLegs: 4 }

