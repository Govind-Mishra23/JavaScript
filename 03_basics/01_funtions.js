function addNum (n1 , n2) {
    // console.log(Array.from(n))
    return n1+n2 
}

const sum = addNum(3,5) // 8 
// addNum (3, 's')  // 3s 
// addNum (5, "4") // 54 
// console.log(addNum(5,null )) // 5 
// console.log(sum)

// function isLoggedIn(userName) {
//     // if(userName ==  undefined) {
//     //     return "username is not valid"
//     // }
//     if(!userName) {
//          console.log("enter username for val")
//          return
//     }
//     return  `${userName} is just loggedIn`
// }
// console.log(isLoggedIn("Govind")) // Govind just loggedIn
// console.log(isLoggedIn()) // username is not valid

// ******** use of rest operator 
// function calculateCartPrice(...num1) {
//     return num1 
// }
// console.log(calculateCartPrice(2, 200, 500))

// example 2 

// function calculateCartPrice (val1, val2, ...num1){
//     console.log(val1)
//     return num1 
// }
// console.log(calculateCartPrice(100, 200, 400, 500))

// const user = {
//     name : "Govind", 
//     age : 18 
// }
// function handleObject (anyObject){
//     console.log(`${anyObject.name} is ${anyObject.age} year old`)
// }
// handleObject(user)
// handleObject({
//     name: "Govind" , 
//     age: 40
// })


const arr1 = [4,5,6]
function handleArrays(arr1){
    console.log(arr1)
}
// handleArrays([1,2,3])
handleArrays(arr1)