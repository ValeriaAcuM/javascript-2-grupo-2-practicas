/* Fun with ES6 Classes #1 - People, people, people del autor donaldsebleung
https://www.codewars.com/kata/56f7f8215d7c12c0e7000b19 */
/* Define a class Person with the following properties:
A constructor that accepts 4 arguments: firstName/FirstName (defaults to "John" if not set), lastName/LastName (defaults to "Doe" if not set), age/Age (defaults to 0 if not set) and gender/Gender (defaults to "Male" if not set). These should be stored in this.firstName/this.FirstName, this.lastName/this.LastName, this.age/this.Age and this.gender/this.Gender respectively.
A method sayFullName/SayFullName that accepts no arguments and returns the full name (e.g. "John Doe")
A class/static method greetExtraTerrestrials/GreetExtraTerrestrials that accepts one parameter raceName and returns "Welcome to Planet Earth raceName". For example, if the race name is "Martians", it should say "Welcome to Planet Earth Martians" */
class Person {
  constructor (firstName = 'John' || 'Jane', lastName = 'Doe', age = 0, gender = 'Male') {
    this.firstName = firstName; 
    this.lastName = lastName; 
    this.age = age;
    this.gender = gender;
  };
  sayFullName() {
    return `${this.firstName} ${this.lastName}`;
  };
  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }
};


/* 
Fun with ES6 Classes #2 - Animals and Inheritance del autor donaldsebleung
https://www.codewars.com/kata/56f935002e6c0d55fa000d92 */
/* Preloaded for you in this Kata is a class Animal:
Task
Define the following classes that inherit from Animal.
I. Shark
The constructor function for Shark should accept 3 arguments in total in the following order: name, age, status. All sharks should have a leg count of 0 (since they obviously do not have any legs) and should have a species of "shark".
II. Cat
The constructor function for Cat should accept the same 3 arguments as with Shark: name, age, status. Cats should always have a leg count of 4 and a species of "cat".
Furthermore, the introduce/Introduce method for Cat should be identical to the original except there should be exactly 2 spaces and the words "Meow meow!" after the phrase. For example:
var example = new Cat("Example", 10, "Happy");
example.introduce() === "Hello, my name is Example and I am 10 years old.  Meow meow!"; // Notice the TWO spaces - very important
III. Dog
The Dog constructor should accept 4 arguments in the specified order: name, age, status, master. master is the name of the dog's master which will be a string. Furthermore, dogs should have 4 legs and a species of "dog".
Dogs have an identical introduce/Introduce method as any other animal, but they have their own method called greetMaster/GreetMaster which accepts no arguments and returns "Hello (insert_master_name_here)" (of course not the literal string but replace the (insert_master_name_here) with the name of the dog's master). */

// Get Coding :)
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, status);
    this.name = name;
    this.age = age;
    this.status = status;
    this.legs = 0;
    this.specie = "shark";
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, status);
    this.name = name;
    this.age = age;
    this.status = status;
    this.legs = 4;
    this.specie = "cat";
  }
  introduce(){
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor (name, age, status, master) {
    super(name, age, status, master);
    this.name = name;
    this.age = age;
    this.status = status;
    this.legs = 4;
    this.specie = "dog";
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
};



/* Fun with ES6 Classes #6 - Fake Files (Basic) del autor donaldsebleung
https://www.codewars.com/kata/5784c8116211383b5f0001d3 */
class File {
  constructor(fullName, contents) {
    this.fullName = fullName;
    this.contents = contents;
    this.filename = filename;
    this.extension = extension;
  }
  getContents() {
    return `Este es el contenido ${this.contents}`;
  }
  write(str) {
    return this.contents = str;
  }
  gets() {
    return 
  }
  getc(){
    return
  }
}