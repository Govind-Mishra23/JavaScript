class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`user name is ${this.username}`)
    }
    static createId (){
        return `123`
    }
}

const govind = new User("Govind") ; 
// console.log(govind.createId()) ; 

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }

}
const t1 = new Teacher("GM", "GM@gmail.com")
console.log(t1.createId())