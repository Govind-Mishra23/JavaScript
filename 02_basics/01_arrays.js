const myArr = [1,2,3,4,5]
const myHeros = ["govind", "coding"]

const myArr2 = new Array(1,2,3,4,5)


// Array Methods 
const newArr = myArr.join() // return string 
console.log(newArr)
console.log(typeof newArr)

// slice splice ******** interview 
console.log("a ", myArr)
const myn1 = myArr.slice(1,3)

console.log(myn1) 
console.log("b ", myArr) 

const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("c ", myArr)