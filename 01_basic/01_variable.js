let name = "Govind ji" 
const id = "2023b0101204"
var sub = "math"

// id = "2023b0101205"  show error bcz value cant be changed if once declare 

name = "govind"
sub = "java"

var a1= "govind" 
const a2 = "govind"
console.log(a1 === a2)
/* var is not used nowadays 
 because of local and functional scope 
*/


//  console.table([name, id, sub]) 

// Creation Phase (Memory allocation / Hoisting phase)

// Variables (var, let, const) and functions are allocated in memory.

// var gets undefined.

// let / const stay uninitialized (Temporal Dead Zone).

// Functions are hoisted with their body.
