// ** how js rumtime works 
// call stack , web api, task queues, event loop 

// event loop is mechanism to decide how js to be non blocking and async despite being single threaded 
// asynchrounous is used to maintain non blocking behaviour of js even having single threaded 

// task queue is two type micro (high priority) and macro 

console.log("start");

setTimeout(() => {
  console.log("timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("promise");
});

console.log("end");

// Execution Flow

// start → sync → stack

// setTimeout → Web API → macrotask queue
// Promise.then → microtask queue  

// end → sync
// Now stack is empty 👇
// Microtasks run first → "promise"
// Macrotasks → "timeout"

// *** IMP SUMMARY 
// JS is single-threaded
// setTimeout has minimum delay
// Promises execute microtasks
// 0ms ≠ immediate