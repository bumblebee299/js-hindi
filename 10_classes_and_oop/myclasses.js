// function user(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password
// }
// user.prototype.encryptPassword = function(){
//     return`${this.password}abc`
// }
// const chai = new user("chai", "chai@gmail.com", "123")
// console.log(chai.encryptPassword());

// with class constructor
class user{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return`${this.password}abc`
    }
}
const chai = new user("chai", "chai@gmail.com", "123")
console.log(chai.encryptPassword());
