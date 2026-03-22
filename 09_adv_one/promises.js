// create promises // promise is an object to represend fullfill rejected or pending states 
// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//    // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is compelete');
//        resolve() // use to build connection bw resolve and then if resolve method executed then, .then invoked  
//     }, 2000)
// })

// then is directed connection between resolve , when resolve() is called then callback function is passed 
// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// create promises without using any refernce variable to store 

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)

// }).then(function(){
//     console.log("Async 2 resolved");
// })

// parametric resolve access via then method 
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("data has been sent")
//         resolve({username: "Chai", email: "chai@example.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user["email"]);
//     console.log(user.username)
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

//  promiseFour
//  .then((user) => {
//     console.log(user);
//     return username
// })
// .then((username) => {
//     console.log(username);
//     return user ; 
// }) 
// .catch(function(error){
//     console.log(error);
// })
// .finally(() => console.log("The promise is either resolved or rejected"))



// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// });
//  asynchronous code allow to run in the background . It does not block the main thread , code can continue running while waiting things , async fundtion always return promise
// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()

// async function with fetch object  

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//          await : wait until the Promise is resolved
//         const data = await response.json() // .json() is a method of promise object to read data 
//         console.log(data[0].address);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

// fetch object with then method 

// fetch('https://api.github.com/users/hiteshchoudhary')
//  .then((response)=>{
//     return response.json()  
//  }).then(function (data){
//     console.log(data["name"]) 
//  }).catch((error) =>{
//     console.log(error)
//  })

// ***  promise.all
// yes this is also available, kuch reading aap b kro.

// const p1 = Promise.resolve(10);
// const p2 = new Promise(res => setTimeout(() => res(20), 1000));
// const p3 = Promise.resolve(30);

// if one premise is rejected then state becomes rejected handle by catch block 

// Promise.all([p1, p2, p3])
//   .then(values => {
//     console.log(values);
//   })
//   .catch((err) => {
//    console.log(err) ; 
//   }
// )

// Order is preserved, not based on completion time.
 // Because results are stored by index, not by completion time.


 // ***** question faang level of promise object 
 // 1 

 console.log("A");

setTimeout(() => console.log("B"), 0); // macrotask 

Promise.resolve() // microtask 
  .then(() => console.log("C"))
  .then(() => console.log("D"));

console.log("E");
// output : A E C D B 

// 2 
const p = new Promise((resolve, reject) => {
  resolve("RESOLVED");

  setTimeout(() => {
    console.log("Timeout");
  }, 0);
});

p.then(v => console.log(v));

console.log("END");

// output :END RESOLVED Timeout 

// ** 3 

const p1 = Promise.resolve("A");
const p2 = new Promise((_, reject) =>
  setTimeout(() => reject("B"), 100)
);
const p3 = new Promise(res =>
  setTimeout(() => res("C"), 200)
);
Promise.all([p1, p2, p3])
  .then(console.log)
  .catch(err => console.log("Error:", err));

// output : Error: B 


// ** 4 
Promise.resolve(1)
  .then(val => {
    console.log(val);
    return val * 2;
  })
  .then(val => {
    console.log(val);
    return Promise.resolve(val * 3);
  })
  .then(val => {
    console.log(val);
  });

  // output :1 2 6 
  
  // **  5 
  Promise.resolve()
  .then(() => {
    console.log("P1");

    setTimeout(() => {
      console.log("T1");
    }, 0);

    return Promise.resolve().then(() => {
      console.log("P2");
    });
  })
  .then(() => {
    console.log("P3");
  });

// output : P1 P2  P3 T1  




