// ***** map method create a new array 
// map transforms every element and returns a new array.
const myNums = [1,2,3,4,5,6,7,8,9,10] 

const newNum = myNums.map((val) =>val+10)
console.log(newNum) // [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
console.log(myNums) // [1,2,3,4,5,6,7,8,9,10] 


// const newNum1 = myNums.forEach((val) => val+10)
// console.log(newNum1) // **** output : undefined

// ***** use chaining in  method of array 

const result = myNums
                .map((val) => val *10)
                .map((val) => val +1)
                .filter((val) => val >=50)
//console.log(result)                



