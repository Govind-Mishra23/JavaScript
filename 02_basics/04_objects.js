// const tinderuser = new Object ()
const tinderuser = {}
tinderuser.id = "abc123"
tinderuser.name = "Govind"
tinderuser.loggedIn = false 

const regularuser = {
    email : "govind123@gmail.com", 
    fullname : userFullName = {
        firstName : "Govind" , 
        lastName : "Mishra"
    }
}
// console.log(regularuser.fullname.firstName) 
// console.log(regularuser.fullname)

// combine two objects use spread operator is better approach 

const obj1 = {1 : "a", 2 : "b"} 
const obj2 = {3: "a" , 4 : "b"}

// const obj3 = {obj1 , obj2}
// console.log(obj3)

// const obj4 = {...obj1, ...obj2}
// console.log(obj4)

// combine using assign 
// const obj5 = Object.assign({} ,obj1, obj2)
// console.log(obj5)

// get all key  and value , return array of string 

// const allKeys = Object.keys(tinderuser)
// console.log(allKeys)
// console.log(Object.values(tinderuser)) // also return array 
// console.log(Object.entries(tinderuser))

// now check for property or key exist or not use hasOwnproperty 
console.log (tinderuser.hasOwnProperty("id")) 