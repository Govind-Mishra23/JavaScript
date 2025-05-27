// for of 
// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4]
for(const val of arr){
    // console.log(val)
}
const greetings = "hello world!"
for(const charGreet of greetings){
    // console.log(charGreet)
}

// Maps holds key value pair 
const map= new Map() 
map.set('IN', "INDIA")
map.set('US', "AMERICA")

// console.log(map)

for(const [key, value] of map){
    // console.log(key + ":-" + value)
}

// ***** my object is not iterable by this way 
const myObj = {
    game1 : 'NFS', 
    game2 : "HERO"
}

for(const [key, value] of myObj){
        console.log(key + ":-" + value)
}