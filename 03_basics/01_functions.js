function sayMyName(){
    // console.log("s");
    // console.log("h");
    // console.log("r");
    // console.log("a");
    // console.log("w");
    // console.log("a");
    // console.log("n");
    
}
sayMyName()

function addTwoNumbers(number1,number2){
    console.log(number1 + number2)
    return number1 * number2
}
console.log(addTwoNumbers(2,5))


function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return
        
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("shrawan"));


function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,300,400))


const user = {
    username : "shrawan",
    price : 999
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user)
handleObject({
    username : "phooljhadi",
    price : 199
})


const myNewArray = [200,300,400,500]

function handleArray(anyArray){
    return anyArray[1]
}
console.log(handleArray(myNewArray))
console.log(handleArray([1,2,3,4,5]));
