
// ********** rest in function parameters, collect the remaining things in array 
function sum (a, b , ...rest){
    console.log(rest)
    let sum = rest.reduce((val, acc) => acc+ val) ; 
    console.log(sum)
}
// sum (1,2,3,4,5,6,7)

// ******* spread in object 

const user =  {
    name : "govind", 
    age : 20
}

const newUser = {
    ...user ,
    age : 10 , 
    city : "delhi"
}
// console.log(newUser)
// console.log(user.age) 


// ***  Array destructuring

const colors = ["red", "green", "blue"];

const [c1, c2] = colors;

// console.log(c1); // red
// console.log(c2); // green


// **** Object destructuring

const details = {
    name : "govind", 
    age : 13, 
    city : "delhi"
} 

// const {name , age , hometown} = details 
// console.log(hometown) // undefined 
// ** key name is take same during destructure 
// const {name , age, city} = details 
// console.log(city)

// ** Rename while destructuring

const {name : username , city} = details; 
// console.log(username)
// console.log(city)


// **** Rest in destructuring of array 
const arr = [1,2,3,4,5]
const [first, second , ...rest] = arr ;
// console.log(rest) // [3,4,5] 

// **** Rest in destructuring of object 

const user1 = {
  name: "Govind",
  age: 20,
  branch: "CSE",
  city: "Delhi"
};

const { name, ...remain } = user;

// console.log(name); // Govind

// console.log(rest); // { age: 20, branch: "CSE", city: "Delhi" }


// ** Rest vs Spread with objects
const { a, ...res } = user1;   // REST → collects
const copy = { ...user1 };     // SPREAD → copies
copy.name = "mishra"
// console.log(user1)
// console.log(copy)

// ******* exercise 

const postsDB = [
  {
    postName: "JavaScript Tips",
    stats: {
      likes: 120,
      comments: 25
    }
  },
  {
    postName: "React Basics",
    stats: {
      likes: 98,
      comments: 18
    }
  },
  {
    postName: "Node.js Guide",
    stats: {
      likes: 150,
      comments: 30
    }
  },
  {
    postName: "DSA Practice",
    stats: {
      likes: 200,
      comments: 45
    }
  },
  {
    postName: "Web Dev Roadmap",
    stats: {
      likes: 175,
      comments: 40
    }
  }
];

// 1. Extract postName and likes from the first post using destructuring 
// const firstObj = postsDB[0] ; 
// const {postName, stats} = firstObj 
// const {likes, comments} = stats 
// console.log(postName, likes) 
// ** one line sol 
// const { postName, stats: { likes } } = postsDB[0]; // stats is give refernce error bcz likes is vairbale stats is path to extract like 
// console.log(postName, likes);


// 2. From the second post, extract: postName comments

 const {postName, stats: {comments}} = postsDB[1] 
//  console.log(postName, comments)

 // total like 
 const totalLike = postsDB.reduce((sum, {stats : {likes}}) => {
    return sum + likes 
 }, 0)
 console.log(totalLike) 

 const totoalLike = postsDB.reduce((sum1 , post) => {
    return sum1 + post.stats.likes
 }, 0)


 // *****  Q.2 swap variable using destructring 
 let a1 = 10 ; let b1 = 20
 [a, b] = [b,a] 
 // explain : internally created temp array to story the value of rhs b and a bcz in assigment js traverse right to left 



 


