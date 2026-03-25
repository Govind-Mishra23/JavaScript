console.log(typeof typeof 123); // string bcz type of always return string 

function foo() {
    return
    {
        name: "JoshTech"
    }
}
console.log(typeof foo()); // undefined bcz Automatic Semicolon Insertion (ASI) so in real looks return ; so foo() return undefined and type of undefined is undefined 

console.log(typeof NaN); // "number"
console.log(Math.max()); // -Infinity
 console.log(typeof function () {}) // function
 typeof (() => {})      // "function"
 console.log(typeof class Test {}); // function 

 console.log(parseInt('324b12')) // 324 
console.log(Number('45')) // 45 

console.log("123" + 23) // 12323 // convert number to string and then concat 

console.log([] + []); // "" both are same object then convert to primitive 
console.log([] + {}); // "[object object]" // here also [] convert to "" and {} convert to [object object]
console.log({} + []); // 0 {} at start of a line treat as empty block not as object so remain +[] unary forces to number conversion [] convert to 0 
console.log(({}) + []); // "[object object]"

console.log([] == ![]) // true bcz ! first convert into boolean [] == false then boolean convert to number [] = 0 now 0 == false again boolean convert to number  0 == 0

console.log(+"100"); // 100 
console.log(-"100"); // -100  Unary + and - convert strings to numbers
console.log(+true); // 1
console.log(!"JS"); // false


console.log("Hello" || "World");// Returns the first truthy value.  If none are truthy, it returns the last falsy value.
console.log("" && "World"); // Returns the first falsy value.  If none are falsy, it returns the last truthy value




function test() {
  console.log(this);
}
test();


console.log(!!"false"); // true
// The ! operator has right-to-left associativity then treated as !(!"false")


console.log(null == undefined); // true
console.log(null === undefined); // false




// js Copy code
// window (browser) / global (node)
// Non-strict mode Function call → this = global object
// Strict mode disables global this return undefined 


// hw type coercion , parseInt 


for(var i = 0 ; i < 3 ; i++){
    setTimeout(() => {
        console.log(i) ; 
    }, 1000)
}
// ** The for loop runs synchronously and completes first, creating only one shared i because var is function-scoped. setTimeout callbacks are pushed to the task queue and executed later by the event loop, but each callback closes over the same i reference. By the time the callbacks run, i is already 3, so 3 is printed three times. stack -> web apis -> task queue -> stack (event loop)

// ***** fixed by let : let is block-scoped, so in a for loop JavaScript creates a new lexical environment for each iteration. Each setTimeout callback closes over a different i reference instead of a shared one. The event loop behavior remains the same, but when the callbacks execute, each one reads its own preserved value of i, so 0, 1, and 2 are printed.

// ** fixed with iife 
for(var i = 0 ; i < 3 ;i++){
    (function (x) {
        setTimeout(() => {
            console.log(x) ;  
        }, 1000)
    },(i))
}
// IIFE creates a new execution context per iteration so each timer callback closes over a unique variable, while the event loop behavior remains unchanged.


// ****** deep copy vs shallow copy 

let user1 = {
  name: "Govind",
  address: {
    city: "Delhi"
  }
};

let user2 = { ...user1 }; // shallow copy
user2.address.city = "Mumbai";
console.log(user1.address.city); // Mumbai ❗

 let arr1 = [1,2,3,4]
 let arr2 = arr1 
 console.log(arr1 === arr2)
 arr2[0] = 99 
 console.log(arr1) // shallow copy 

// A deep copy creates completely independent memory for all nested levels.
let str = "govind" 
let str2 = str.toUpperCase() ; 
console.log(str === str2)







