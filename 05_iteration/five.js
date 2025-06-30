const programming = ["java", "javascript", "python", "ruby"]

programming.forEach(function (language) {
    console.log(language)
})
for(const lang of programming){
    console.log(lang)
}
for(const lang in programming){
    console.log(programming[lang]) ; 
}


// **** use arrow function 
// programming.forEach((lang) => {
//     console.log(lang)
// })


// ***** pass direct function in forEach
// function printMe(item){
//     console.log(item)
// }
// programming.forEach(printMe) // printMe is referece for function 

programming.forEach((lang, index, arr) => {
    // console.log(lang, index, arr)
})

// ******** iteration on object which is store in array 

const details = [
    {
        langName : "java",
        ques : 300
    },
    {
        langName : "python",
        ques : 200
    },
    {
        langName : "javaScript",
        ques : 250
    }
]
details.forEach((item) => {
    // console.log(item.langName )
})

