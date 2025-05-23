let a = 10 
const b = 20 
var c = 40  // global access , use throughot the program 

function printNum(){
    var c = 400 
    let a = 40 
    console.log(`in funtion ${a}`);
    
}
printNum() 
console.log(a)