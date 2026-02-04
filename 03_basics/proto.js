// const obj = { name: "Alice" };
// console.log(obj.__proto__); 
// console.log(obj.__proto__.__proto__);


// function and prototype

function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function() {
  console.log("Hi " + this.name);
};

const p1 = new Person("Bob");
// console.log(p1.name); // Bob 
p1.sayHi()
