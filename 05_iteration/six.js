// const coding = ["js", "java", "ruby", "python", "cpp"]
// const values = coding.forEach((lang) => {
//     console.log(lang)
//     return lang 
// }); 
// console.log(values) // ** return undefined ****

// ****** use case of filter 

const myNums = [1,2,3,4,5,6,7,8,9,10] 
// let result = myNums.filter((num) => num > 2) // implicit return 
// console.log(result)

// let result = myNums.filter((num) => {
//     return num>4 // *** explicit return 
// })
// console.log(result)

// const newNums = [] 
// myNums.forEach((num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)

let books = [
    { title: "Book 1", genre: "History", publish: "2023-05-15", edition: 1 },
    { title: "Book 2", genre: "Science Fiction", publish: "2024-02-20", edition: 2 },
    { title: "Book 3", genre: "History", publish: "2022-09-10", edition: 1 },
    { title: "Book 4", genre: "Mystery", publish: "2023-11-30", edition: 1 },
    { title: "Book 5", genre: "Non-fiction", publish: "2023-08-05", edition: 2 },
    { title: "Book 6", genre: "Thriller", publish: "2024-01-25", edition: 2 },
    { title: "Book 7", genre: "History", publish: "2022-12-12", edition: 1 },
    { title: "Book 8", genre: "Historical Fiction", publish: "2023-06-28", edition: 1 },
    { title: "Book 9", genre: "History", publish: "2024-04-17", edition: 3 },
    { title: "Book 10", genre: "Biography", publish: "2023-03-08", edition: 1 }
];


let userBooks= books.filter((bk) => bk.genre == 'History')
userBooks = books.filter((bk) => {return bk.edition === 1})
console.log(userBooks)

