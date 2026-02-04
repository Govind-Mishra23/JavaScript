function setuername (username) {
    this.username = username ;
    console.log("called") 
}

function createuser (username , email , password) {
    // setuername(username) 
    setuername.call(this, username) 
    this.email = email ; 
    this.password = password
}
const u1 = new createuser("xyz", "xyz@gmail.com", 12) ; 
console.log(u1) 