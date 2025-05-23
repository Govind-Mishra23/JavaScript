// let a = 10 
// const b = 20 
// var c = 40  // global access , use throughot the program 

// function printNum(){
//     var c = 400 
//     let a = 40 
//     console.log(`in funtion ${a}`);
    
// }
// printNum() 
// console.log(a)

//  ************ closure concept 

// function one () {
//     const name = "Govind"
//     function two () {
//         const website = "youtube" 
//         console.log(name); // name can be access 
        
//     }
//      console.log(website) not defined show error  
//     two()
// }
// one () 

// ***** interesting and imp for interview 
addOne(4)  // it will not show error bcz function can access 
function addOne (num) {
    return num + 1 
}

console.log(addTwo(4)) // it will show error bcz addTwo is not initilization 
const addTwo = function (num) {
    return num + 2
}
 


