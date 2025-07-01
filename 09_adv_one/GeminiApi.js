// async function geminiApi() {
//     const response = await fetch("https://api.adviceslip.com/advice") 
//     const data = await response.json()
//     console.log(data)
// }
// geminiApi()

fetch("https://api.adviceslip.com/advice")
.then((response)=>{
     return response.json()
}).then((data)=>{
    console.log(data.slip["advice"])
})