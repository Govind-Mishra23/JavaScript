// singleton , when declared as literals not singleton created **********
// Object.create 

// Object literals

const user = {
    name : "Govind" , // name is considered as string bydefault "name"
    "full Name" : "Govind Mishra",
    age : 21,
    location : "Delhi" ,
    isLoggedIn : false, 
    lastLoginDays : ["Monday", "TuesDay"]
} ; 
// console.log(user["name"]); // Govind 
// console.log(user.name); // Govind 
// now we cant access full name by dot operator 
// console.log(user["full Name"]);

// *** use Symbol datatype as key 

let mysym1 =  Symbol("myKey1") 
const user2 = {
    name : "Govind ", 
    mysym1 : "new Symbol"
}
// console.log(user2.mysym1);
// console.log(typeof user2.mysym1) //   

// use as Symbol best approach for Symbol datatype as key  , use square braket in key or accesing both

let user3 = {
    name : "Govind" , 
    [mysym1] : "type of mysym1 is now Symbol"
}
console.log(user3.mysym1); // undefined bcz cant access using dot operator 
console.log(user3[mysym1]);
console.log(typeof user3[mysym1]);

const user4 = {
    name : "govind", 
    age : 21 , 
    salaray  : "120 k ", 
    role : "developer"
}
// user4.age = 20 
// console.log(user4.age)
// Object.freeze(user4) // now no change will be applied on user4 
// user4.age = 19 
// console.log(user4)

// now declare function within user4 
// user4.loggedIn = false 
// user4.greeting = function (){
//     console.log("hello user4");
// }
// user4.greetingTwo = function () {
//     console.log(`hello  ${this.name}`)
// }

// console.log(user4.greeting());
// console.log(user4.greetingTwo())
// console.log(user4)


// let obj = new Object() ; 
// obj.name = "alice" ;
// // console.log(obj.name)
// let obj2 = Object.create(obj) 
// obj2.age = 30
// for(let key in obj){
//     console.log(obj.key)
// }
const arr = [1,2,3,5] 
for(let idx in arr){
    arr[idx]
}




