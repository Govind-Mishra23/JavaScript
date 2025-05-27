const myObject = {
    js : "JavaScript", 
    cpp : "c++", 
    rb : "rubby",
    swift : "swift by apple"
}
// console.log(myObject.js)
// console.log(myObject["js"])

for (const key in myObject){
    // console.log(key)

   // console.log(myObject.key) // key is a variable, not the literal word "key"
    // console.log(myObject[key]) // always use bracket notataion in iteration 
}

// const programming = ["java", "javascript", "python", "ruby"]

// for(const key in programming) {
//     console.log(key) // 0 1 2 3 
//     console.log(programming[key])
// }

// ******* for in loop in map is not iterable 

const map = new Map() 
map.set('IN', "INDIA")
map.set('US', "AMERICA")

// console.log(map)
for(const [key, value] in map){
    // console.log(key)
    console.log(key + ":-" + value)
}
