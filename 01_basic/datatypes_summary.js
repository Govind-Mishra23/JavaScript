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

// const funcVar = function() {
//     console.log("Hello World")
// }

// console.log(typeof funcVar)
// console.log(typeof objVar) 
// console.log(typeof sub)

 // ****************** Memory **************************

// Stack (Primitive), Heap(Non - Primitive) 

let nameOne = "Govind Mishra" 
let nameTwo = nameOne ; 
nameTwo = "Govind"
console.log(nameOne)
console.log(nameTwo)

// stack create assign copy to new variable 
// but in heap memory variable reference to data 

const clgData1 = {
    id : "abc123",
    name : "Govind"
}
const clgData2 =  clgData1 
clgData2.id = "abc456"
console.log(clgData1.id)
console.log(clgData2.id)

 