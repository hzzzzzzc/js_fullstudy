// function Person(name) {
//     this.name = name
// }
// let p = new Person('Tom')

// // 1. p.__proto__ = p.prototype
// // 2. Person.__proto__ = Function.prototype

// var foo = {}
// var F = function() {}

// Object.prototype.a = 'value a'
// Function.prototype.b = 'value b'
// console.log(foo.a);  // value a
// console.log(foo.b);  // undefined
// console.log(F.a);    // value a
// console.log(F.b);    // value b


// ----------------------------------------------------------------------------------------------------------------------------

function Person(name) {
    this.name = name
}
let p = new Person('Tom')

// p = {name: 'Tom'}

// new 的实现原理
function myNew(fun) {
    return function() {
        let obj = {
            __proto__: fun.prototype
        }


        return obj
    }
}