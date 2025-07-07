// const promiseOne = new Promise(function(resolve,rejected){
//     setTimeout(function(){
//         console.log("aysnc task is completed");
//         resolve()
//     },1000)
// })
// promiseOne.then(function(){
//     console.log("promise consumed");
    
// })


// new Promise(function(resolve,rejected){
//     setTimeout(() => {
//         console.log("async task 2")
//         resolve()
//     },1000)
// }).then(() => {
//     console.log("promise 2 consumed")
// })


// const promiseThree = new Promise(function(resolve,rejected){
//     setTimeout(function(){
//         resolve({username : "shrawan", password : "123"})
//     },1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
// })



// const promiseFour = new Promise(function(resolve,rejected){
//     let error = false
//     if(!error){
//         setTimeout(function(){
//         resolve({username : "phooljhadi", password : "321"})
//     },1000)
//     }else{
//         rejected("E : error something went wrong")
//     }
    
// })
// promiseFour.then(function(user){
//     console.log(user);
//     return user.username
// }).then(function(myName){
//     console.log(myName)
// }).catch((error) => {
//     console.log(error)
// }).finally(() => (console.log('The promise is either resolved or rejected')))

// async await

const promiseFive = new Promise(function(resolve,rejected){
    let error = true
    if(!error){
        setTimeout(function(){
        resolve({username : "phooljhadi", password : "321"})
    },1000)
    }else{
        rejected("E : error something went wrong")
    }
    
})
async function consumePromise(){
    try{
        const response = await promiseFive
        console.log(response)
    }catch(error){
        console.log(error)
    }
}
consumePromise()


fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})


async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
getAllUsers()
