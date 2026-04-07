const person1 = {
    name : "Govind",
    greet : function () {console.log(this.name)}
}

function greet(city){
    console.log(` ${this.name} lives in ${city}`)
}
greet.call(person1, "Delhi")
const fn = person1.greet ; // fn have reference of greet not the refernce of person1 
fn() ; // undefined bcz this depends on how function is call not where it is defined 
fn.call(person1) // Govind

const arr1 = new Array(1,2,3,4,5) ; 
let maxVal1 = Math.max.apply(null, arr1) ; 
let maxVal2 = Math.max.call(null, 1,2,3,4,5,6)
console.log(maxVal1)
console.log(maxVal2)

const person2 = {
    name : "josh",
    greet : function () {console.log(this.name)}
}
const fn2 = person2.greet.bind(person2) ; 
fn2() ; 

function multiply (a, b){
    console.log(a) // 2 
    return a * b ; 
}
const double = multiply.bind(null, 2) ; 
console.log(double(10))
