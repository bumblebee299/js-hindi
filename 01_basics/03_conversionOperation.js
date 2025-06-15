let score = "33"
console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)

let value = "33abc"
console.log(typeof value)
let convert = Number(value)    
console.log(typeof convert)
console.log(convert)

let nu = null
console.log(typeof nu)
let nuconvert = Number(nu)
console.log(typeof nuconvert)
console.log(nuconvert)

let undef = undefined
console.log(typeof undef)
let undefconvert = Number(undef)
console.log(typeof undefconvert)
console.log(undefconvert)

let tr = true
console.log(typeof tr)
let trconvert = Number(tr)
console.log(typeof trconvert)
console.log(trconvert)

let st = "shrawan"
console.log(typeof st)
let stconvert = Number(st)
console.log(typeof stconvert)
console.log(stconvert)

// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true ; 0 => false
// "" => false 
// "shrawan" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber) 