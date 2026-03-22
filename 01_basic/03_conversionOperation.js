// let score = 33 
// let score = "33" 
let score = "abc33" 
// let score = null

// let score = undefined 

let valueInNummber = Number(score)

// console.log(typeof valueInNummber)

// console.log(valueInNummber)

// "33" => 33 
// "33abc" => NaN
// true => 1 ; false => 0  

// let loggedIn = 1 
// let loggedIn = 0 
// let loggedIn = ""  type is string 
// let loggedIn = "govind" 

// console.log(typeof "")
let booleanLoggedIn = Boolean (loggedIn)

// console.log(booleanLoggedIn) 

// 1 => true ; 0 => false 
// "" => false ; "govind" => true 

// console.log([].toString())   // ""
// console.log({}.toString())  // [object object] 

// ******************* Operation ********************* // 

//  type  coercion 
// automatically converting one data type into another

// If any operand is a string, + becomes string concatenation

1 + 2 + "3"  // "33"
"1" + 2 + 3  // "123" move left to right 

// (- * / %) These operators force numeric conversion 

"10" - 5    // 5
"10" * 2    // 20
"10" / 2    // 5

Boolean([])   // true All objects are truthy
Boolean({})   // true All objects are truthy
Boolean("")   // false empty string is falsy 

// Equality Coercion (== vs ===)
// == → allows coercion (dangerous)
// === → no coercion (safe)


// JS follows this fixed coercion order for == 
// Abstract Equality Algorithm (simplified)
// If one side is Boolean → convert to Number
// If one side is Object → convert to Primitive -> ""
// If String vs Number → convert String → Number


