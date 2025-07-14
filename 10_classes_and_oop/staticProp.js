class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
    static createId(){
        return`123`
    }
}
const shrawan = new user("shrawan")
console.log(shrawan)
console.log(shrawan.createId())