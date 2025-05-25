 // Immediately Inovoked Function Expression IIFE 

//  function isConnected () {
//     console.log("db connected") 
//  }
//  isConnected()

// ******* iife function 
 
(function isConnected () {
    // named IIFE 
    console.log("db connected") 
    var a = 10 
    return a
     
 })() ;

// **** IIFE function can be used as arrow function but in first IIFE use semicolon (;) for end the current exectution of function 

((name) => {
    console.log("DB connected two " + name);
})("govind") ; // semicolon as terminator


 

  


 

 // IIFE function is used to immidetly invoked or excute after define 

 // IIFE function is used to private variable in funciton and not accessable in global scope and used to dont mess declare variable outside the function 
