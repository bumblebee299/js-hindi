// singleton
// Object.create

//object literals
const JsUser = {
    name : "shrawan",
    "full_name" : "shrawan yadav",
    age : 20,
    email : "shrawan@google.com",
    isLoggedIn : false,
    lastLoginDays : ["monday","tuesday"]
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser.full_name);
// console.log(JsUser["full_name"]);
// console.log(JsUser.age);
// console.log(JsUser["age"]);
// console.log(typeof JsUser["age"]);



const mysym = Symbol("key1")
// console.log(mysym)

const User = {
    key : "mykey2",
    [mysym] : "mykey3"
}
// console.log(User.key);
// console.log(typeof User.key);
// console.log(User[mysym]);
// console.log(typeof User["mysym"]);


//overwrite valus
JsUser.email = "phooljhadi@gmail.com"
// console.log(JsUser);

//freez object so, no one can make changes in it 
// Object.freeze(JsUser)



JsUser.greeting = function(){
    console.log("hello user bhaiya");
    console.log(`hello js user, ${this.name}`);
    
}
// console.log(JsUser.greeting); // => function (anonymous)
console.log(JsUser.greeting());


