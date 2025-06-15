let score = "33"
// console.log(typeof score)
// console.log(typeof (score))

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)

let val = "33abc"
// console.log(typeof val)
let convert = Number(val)    
// console.log(typeof convert)
// console.log(convert)

let nu = null
// console.log(typeof nu)
let nuconvert = Number(nu)
// console.log(typeof nuconvert)
// console.log(nuconvert)

let undef = undefined
// console.log(typeof undef)
let undefconvert = Number(undef)
// console.log(typeof undefconvert)
// console.log(undefconvert)

let tr = true
// console.log(typeof tr)
let trconvert = Number(tr)
// console.log(typeof trconvert)
// console.log(trconvert)

let st = "shrawan"
// console.log(typeof st)
let stconvert = Number(st)
// console.log(typeof stconvert)
// console.log(stconvert)

/*
 "33" => 33
 "33abc" => NaN
 true => 1 ; false => 0
 */

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

/*
 1 => true ; 0 => false
 "" => false 
 "shrawan" => true
*/

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber) 

//*****************************Operations*******************************//

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " shrawan"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")
// console.log(1 + "2" + 2)

console.log(+true);
console.log(+"");

let x = 3;
const y = x++;

console.log(x,y);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(a,b);
// Expected output: "a:4, b:4"





