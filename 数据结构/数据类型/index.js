function test(person) {
    person.age = 26
    person = {
        name:'yyy',
        age: 30
    }
    return person
}

const p1 = {
    name: 'xxx',
    age: 25
}
const p2 = test(p1)
// console.log(p1);
// console.log(p2);

// 函数传参是传递对象的副本
// p1 和 person 具有相同的指针, person被修改 , p1也会被修改
// peoson拥有了一个新的内存地址

class PrimitiveString {
    static [Symbol.hasInstance] (x) {
        return typeof x === 'string'
    }
}

