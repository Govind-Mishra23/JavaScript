// ***** use case of reduce method 

const myNums = [1,2,3]

// const mytotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc : ${acc}, currval : ${currval}`)
//     return acc+currval
// }, 0)
// console.log(mytotal)

// const myTotal = myNums.reduce((acc, currval) => {
//      console.log(`acc : ${acc}, currval : ${currval}`)
//      return acc + currval
// }, 0)
// console.log(myTotal)

// const myTotal = myNums.reduce((acc, currval) => acc+currval, 0)
// console.log(myTotal)

// *** real example of reduct 

const shoppingCart = [
    { item: "Book", price: 250 },
    { item: "Pen", price: 20 },
    { item: "Notebook", price: 100 },
    { item: "Bag", price: 500 }
];

const cartPrice = shoppingCart.reduce((acc, i) => acc+ i.price, 0) 
console.log(cartPrice)