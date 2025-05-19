// Primitve 

// 7 types : Number , String , Boolean , Null , Undefined , Symbol , BigInt 


// Non - Primitive (Refrence Type)
// Arrays , Objects, Functions 
// have same typeof which is object  

const sub = ["java", "ds", "webD"] ; 

const objVar = {
    name : "Govind", 
    marks : 90
}

const funcVar = function() {
    console.log("Hello World")
}

console.log(typeof funcVar)
console.log(typeof objVar) 
console.log(typeof sub)