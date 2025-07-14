class user {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
class Teacher extends user{
    constructor(username, email, password){
        // this.username = username     :-error
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`); 
    }
}
const chai = new Teacher("chai", "chai@gmail.com", "123")
chai.addCourse()
chai.logMe()

const masalaChai = new user("masalaChai")
masalaChai.logMe()
// masalaChai.addCourse()      :-error