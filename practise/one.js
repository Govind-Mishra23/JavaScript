// const data =function (name , age , branch){
//         return (`My name is ${name} and my age is ${age} and my branch is ${branch}`)
//     }
// function info1 (str="hi"){
//     console.log(`hello ${str}`)
// } 
// function info2 (str="hi"){
//     console.log("hello" + str)
// } 
// function info3 (){
//     console.log("hello")
// } 

// IIFE 
(
    function(){
        console.log("heello sir")
    }
)() ; 

// setTimeout(function(){
//     console.log("Hiii")
// },5000)

function selectLang(lang){
    let data ; 
    console.log(data)
    if(lang == 'java'){
        function javaCom(){
            return "java compiler calling"
        }
        data = javaCom() ;
    }
    if(data == undefined){
        data = "default lang"
    }
    return data ;  
}

console.log( selectLang('ja')) ; 

// info3("heelllo") 

// info1("How are u ?") 
// const sum = (a,b) => a+b 
// console.log(data("Govind", 20 , "CSE"))
// console.log(data) 
// const res = (sum(4,5));
// console.log(res)