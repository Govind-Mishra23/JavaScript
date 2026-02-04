// ES6 
// class User {

//     //  constructor
//     constructor(username , id){
//         this.username = username; 
//         this.id = id ; 
//     }
//                     //     method 
//     increaseId(){
//         return ++this.id; 
//     }
// }

// const u1 = new User("govind", 1) ; // constructor is used to create object 
// console.log(u1.increaseId()) ; 

// behind the scence 

// function User (username, id){
//     this.username = username; 
//     this.id = id ; 
// }
// User.prototype.increaseId= function (){
//     return ++this.id; 
// }
// const u1 = new User("Govind", 1) ; 
// console.log(u1.increaseId()) ; 


//  $$$$$$$$$$$$$$$$$$$$ INHERITANCE 

class Teacher {
    constructor(username){
        this.username = username
    }
    logMe() {
        console.log(`${this.username} loggin in `)
    }
}

class Student extends Teacher {
    constructor(username, email, password){
        super(username) ; 
        this.email = email ; 
        this.password = password ;
    }

    enrollCourse(){
        console.log("enrolled")
    }

}

const s1 = new Student ("Govind", "govind@gmail.com", 123) ; 
const t1 = new Teacher("js sir")

console.log(t1 === s1) 
console.log(t1 === Teacher)
console.log(t1 instanceof Teacher) // true 
console.log(s1 instanceof Teacher) // true
console.log(t1 instanceof Student) // false

// console.log(s1.logMe());
// console.log(s1.email);




// behind the scence 

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