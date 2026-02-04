// $$$$$$ constructor function 

function user (username , loginCount, isLoggedIn){
    this.username = username; 
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn; 
    this.sayHi = function () {
    console.log(`Hi! ${this.username} `);
  };
    return this ;
} 
const userOne = new user("govind", 30, false) ;
const userTwo = new user("mishra", 30, false) ;
console.log(userOne.sayHi())
console.log(typeof userOne) // object 
console.log(typeof user) // function


 




















// class in JS is syntactic sugar over the prototype system.

// Constructor Function (Before ES6)

// this is normal function but use as constructor 
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHi = function () {
//   return "Hi, " + this.name;
// };

// const p1 = new Person("Alice");
// console.log(p1.sayHi());

// memory view of the Person.prototype 
// Person.prototype → {
//  constructor: Person,
//  sayHi: function
// }



// ES6 class — Syntactic Sugar

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     return "Hi, " + this.name;
//   }
// }

// const p2 = new Person("Alice");
// console.log(typeof p2)
// const res = p2.sayHi()
// console.log(res) 



// INHERITANCE

// class Animal {
//   constructor(type) {
//     this.type = type;
//   }

//   speak() {
//     return `${this.type} makes a sound`;
//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super("Dog"); // must call super first
//     this.name = name;
//   }

//   speak() {
//     return `${this.name} barks`;
//   }
// }

// const d = new Dog("Bruno");
// console.log(d.speak())