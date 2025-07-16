class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return`${this._password}shrawan`
    }
    set password(value){
        this._password = value
    }
}
const shrawan = new User("chai@chai.com","123")
console.log(shrawan._email);
console.log(shrawan._password);

console.log(shrawan.email);
console.log(shrawan.password);