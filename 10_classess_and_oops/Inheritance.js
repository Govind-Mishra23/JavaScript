// 1️⃣ Inheritance using prototypes (old-school but important)


// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHello = function () {
//   console.log("Hello, I'm " + this.name);
// };

// function Student(name, rollNo) {
//   Person.call(this, name); // inherit properties
//   this.rollNo = rollNo;
// }

// Student.prototype = Object.create(Person.prototype); // create an empty object and link with newobj.__proto__ = Person.protoype  
// Student.prototype.constructor = Student;

// const p1 = new Person("govind") ; 
// const s1 = new Student("xyz", 17) 
// console.log(s1.sayHello())
// console.log(p1.sayHello()) 





// const user = {
//     name : "govind"
// }
// const role = {
//     id : 1 
// }

// const salary = {
//     sal : 80000
// }
// user.__proto__ = role ; // user inherit the property of role 
// console.log(user.name) ; 
// console.log(user.id)
// console.log(user.salary) // undefined 

// protoype chain 

// user
//  ↓
// role
//  ↓
// Object.prototype
//  ↓
// null



//  approach to understand inheritance between object

const p1 = {
    fname : "govind",
    lname : "garg", 
    getfullName : function(){
        return `${this.fname} ${this.lname}`
    }
}

p1.greet = function (){
    console.log (`hello ${this.fname}`)
}

console.log(p1.getfullName()) ;
const p2 = Object.create(p1) ; 

// console.log(p1)
// console.log(p2) ; // return {} 
console.log(p2.greet()) // but can access the instance property of p1 