let myDate = new Date()
// console.log(typeof myDate) // **********
// console.log(myDate) 
// console.log(myDate.toString())
// console.log(myDate.toDateString())

// let myCreatedDate = new Date(2026, 2, 19) month index is 0 based in this type of input 
// let myCreatedDate = new Date("2023-01-7") month index is 1 based in this string input
let myCreatedDate = new Date("05-1-2024") 

// let mytimeStamp = Date.now() 
// console.log(mytimeStamp)
// console.log(myCreatedDate.getTime()) // output is in milisecond 

// console.log(myCreatedDate.toDateString())

// console.log(Date.now())
// now convert milisecond output in second ************ interview quesion 
// console.log(Math.floor(Date.now() / 1000)) basic method 


let newDate = new Date() 
console.log(newDate)
console.log(newDate.toDateString())
console.log(newDate.getMonth() + 1) // 0 based indexing 

newDate.toLocaleString('Default', {
    weekday : "long"
})