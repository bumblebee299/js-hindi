// forof 

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
    
}


const greetings = "hello world!"
for (const greet of greetings) {
    // console.log(`characters ${greet}`);
    
}


// map datatype

const map = new Map()
map.set('IN', "India")
map.set('USA', " United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key of map) {
    console.log(key);
}    

for (const [key] of map) {
    console.log(key);
}    

for (const [key, value] of map) {
    console.log(key, ":-", value);
}    
