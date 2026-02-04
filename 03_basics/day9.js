// asynchronous callback promises async await 

// callback function 

// const fetchData = function (callback) {
//     console.log("data is fetching")
//     setTimeout(() => {
//         callback("data recieved") ; 
//     }, 1000)
// }
// fetchData((mess) => console.log(mess)) ; 


// to prevent callback hell we use promises method 

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received!");
    //   reject("Error fetching data!");
    }, 2000);
  });
};

// fetchData()
//   .then((data) => console.log(data)) // success
//   .catch((err) => console.error(err)) // error
//   .finally(() => console.log("Done"));
// Output: Data received! → Done

async function getData() {
  try {
    console.log("Fetching...");
    const data = await fetchData();
    console.log(data);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("Done");
  }
}
// getData();
// Output: Fetching... → Data received! → Done

console.log("a");
setTimeout(() => console.log("b"), 0);
Promise.resolve().then(() => console.log("c"));
console.log("d");


