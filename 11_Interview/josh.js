console.log(typeof typeof 123); // string bcz type of always return string 

function foo() {
    return
    {
        name: "JoshTech"
    }
}
console.log(typeof foo()); // undefined bcz Automatic Semicolon Insertion (ASI) so in real looks return ; so foo() return undefined and type of undefined is undefined 


