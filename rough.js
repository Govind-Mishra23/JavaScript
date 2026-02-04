// const arr = [1,2,3,5] 
// // for(let idx in arr){
// //     console.log(arr[idx])
// // }
// // let obj = {
// //     name : "govind",
// //     age : 30
// // }

// // $$$$$$$$$$$$$ Even though key contains a string, dot notation doesn’t evaluate variables—it treats key as a literal property name, so only bracket notation can be used for dynamic property access. $$$$
// // console.log(obj.name)
// // for(let key in obj){
// //     console.log(key)
// //     console.log(obj[key])
// //     console.log(obj.key)
// // }

// // let obj1 = Object.create(obj)
// // obj1.x = 1
// // // Object.freeze(obj1);
// //  obj1.x = 2; // silently fails in non-strict mode
// //  obj1.name = "x"
// // console.log(obj1.hasOwnProperty("name"))

// // const obj = { a: 1 };
// // let obj2 = obj;

// // obj2.a = 5;
// // obj2 = { a: 10 };

// // console.log(obj.a);

// // const obj = { 2: "b", 1: "a", x: "c" };

// // console.log(Object.keys(obj));


// // const add = function  (a, b) {
// //     console.log(b)
// //     console.log(a + b) 
// // }
// // const arr1 = [3,4,2,1]
// // arr1.sort((x,y) => y-x) ; 
// // console.log(arr1) 


// // console.log(total(1,2,3,4)); // 10
// function total() {
//   let sum = 0;
//   for (let i=0; i<arguments.length; i++) {
//     sum += arguments[i];
//     console.log(arguments[i])
//   }
//   return sum;
// }


// // console.log(total(1,2,3)); // 6

// function total(...nums) {
//   return nums.reduce((a,b) => a+b, 0);
// }

// const arrsize = function () {
//     return arguments.length ; 
// }
// const arrsize1 = () => {
//     return arguments.length
// }
// console.log(arrsize(1,2,3,4,5))
// console.log(arrsize1(1))

// sayHi();

// let sayHi = function () {
//   console.log("Hi");
// };

// function greet(g1, g2) {
//   console.log(g1 + " " + this.name + " " + g2);
// }

// const obj = { name: "Alice" };

// greet.call(obj, "Hi", "!");      // Hi Alice !
// greet.apply(obj, ["Hi", "!"]);   // Hi Alice !
// const bound = greet.bind(obj, "Hi");
// bound("!");                      // Hi Alice !

// const calsum = function (arr){
//     let sum = 0 ; 
//     for(let i = 0 ; i<arr.length; i++){
//         sum += arr[i]
//     }
//     return sum 
// }

// let arr = [1,2,3,4,5]

// console.log(calsum(arr))

// function show() {
//   console.log(this);
// }
// show(); 

console.log(this)








