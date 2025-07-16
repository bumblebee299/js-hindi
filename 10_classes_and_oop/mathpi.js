// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter)

const chai = {
    name: 'ginger',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni")
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,"name",{
    Writable : false,
    enumerable : false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));