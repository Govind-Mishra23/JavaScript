// how new keyword works with prototype 

function user (name){
    this.name = name ; 
}
const userone = new user("govind") ; 
console.log(userone)

// step 1 : new keyword create a new empty object {}
// step 2 : Link the Object to the Constructor’s Prototype 
// userone.__proto__ = user.prototype; enables inheritance
// userone → User.prototype → Object.prototype → null

// step 3 : Call the Constructor Function with this
// user.call(userone, "Govind");
// after this object is look like 
// {
//   name: "Govind"
// }

// step 4:new keyword is responsible for  Return the Object Automatically
// After executing the constructor:
// If the constructor does NOT return an object, JavaScript returns the newly created object (userone).
// If it returns an object explicitly, that object is returned instead.
// final result
// const userone = {
//   name: "Govind"
// };

// prototype chain : 
// userone → User.prototype → Object.prototype → null
