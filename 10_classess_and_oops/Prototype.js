// const user = {
//   name: "Govind"
// };

// console.log(user.__proto__); // refers to object 




// function is also object internally 
// function multiplyby5 (num) {
//     return num * 5 ;
// }
// multiplyby5.number = 10 ; 
// console.log(multiplyby5(10)) ; // 50 
// console.log(multiplyby5.number) // function inhert property of object 
// console.log(multiplyby5.prototype) 

// constructor function (important understanding of new)
// function createUser(item , price) {
//    this.item = item ; 
//    this.price = price 
// }
// createUser.prototype.increment= function (){
//     return this.price++ ; 
// }
// createUser.prototype.show = function () {
//     console.log(`price is ${this.price}`) ; 
// }

// const chai = new createUser("chai", 10)
// const tea = new createUser("tea", 100)
// chai.increment() 
// console.log(chai.show())

// const user = {
//   name: "Govind    "
// };
//  in string inject new method called as trueLength 
// String.prototype.trueLength = function () {
//     return this.trim().length ; 
// }

 

// console.log(user.name.length);      // 10
// console.log(user.name.trueLength()) // 6  









