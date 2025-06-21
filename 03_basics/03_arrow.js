const user = {
    username : "shrawan",
    price : 999,

    welcome : function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

// user.welcome()
// console.log(this);




// function chai(){
//     let username = "shrawan"
//     console.log(this.username)
//     // console.log(this);
// }
//  chai()


//  const chai = function(){
//     let username = "shrawan"
//     console.log(this.username)
// }
// chai()

 
// const bhai = () => {
//     let username = "shrawan"
//     console.log(this.username)
//     console.log(this)
// }
// bhai()




const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,7));


const sumTwo = (num1, num2) =>(num1 + num2)
console.log(addTwo(3,7));
