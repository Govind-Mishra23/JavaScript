// create promises // promise is an object to represend fullfill rejected or pending states 
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
   // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve() // use to build connection bw resolve and then if resolve method executed then, .then invoked  
    }, 2000)
})

// then is directed connection between resolve 
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
//     return user.username
// })
// .then((username) => {
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(() => console.log("The promise is either resolved or rejected"))



// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// });
//  asynchronous code allow to run in the background . It does not block the main thread , code can continue running while waiting things 
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

fetch('https://api.github.com/users/hiteshchoudhary')
 .then((response)=>{
    return response.json()  
 }).then(function (data){
    console.log(data["name"]) 
 }).catch((error) =>{
    console.log(error)
 })

// promise.all
// yes this is also available, kuch reading aap b kro.