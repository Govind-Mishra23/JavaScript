// const user = {
//     name: "govind", 
//     price : 999,
//     greet : function (){
//         console.log(`Hello , ${this.name}`);
//         console.log(this) // this keyword is refer to current object also not desirable works in funtion 
//     }
// }
// user.greet() ;  

// const user = {
//     name: "govind", 
//     price : 999,
//     greet : function (){
//         console.log(`Hello , ${this.name}`);
//         console.log(this) // this keyword is refer to current object also not desirable works in funtion 
//     }

// }
// console.log(this) // empty object in node environment but in browser return globla object which is window ***************************** Interview 

// ******* this keyword in function 

// function checkThis() {
//     console.log(this); // return reference Object [global]
// }
// checkThis() 

// function chai (){
//     username = "govind" 
//     console.log(this.username) // also output in not govind it will be same referce object global
// }
// chai()

// ********** arrow function 

// const chai = () =>{
//     let userName = "govind"
//     console.log(this) // empty curlybraces {}
//     console.log(this.userName) // undefined 
// }
// chai()

// const add = (a, b) =>{
//     return a+b 
// }

// ******* Implicit return 
// const add  = (a,b) =>( a+b) // use in react mostly

// **** Implicit return of object using () undefined if dont use paranthesis

const returnObj = () => ({username : "Govind"}) 
console.log(returnObj())