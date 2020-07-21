// let a = 1
// let b = 2
// let c = 3

// let[a, b, c] = [1, 2, 3]

// let [foo, [[bar], baz]] = [1, [[2], 3]]

// let [x, y] = [1, 2, 3]

// let [head, ...tail] = [1, 2, 3, 4]

// console.log(tail)

// let [x, y = 'aaa'] = ['a', undefined]  // undefined解构默认是不成功的


// let[x = 1, y = x] = [2]
// console.log(y)

// let{foo: baz} = {foo: 'aaa', bar: 'bbb'}
// console.log(baz)

// let obj = {
//     name: 'zc',
//     desc: {
//         alone: false,
//         age: 20,
//         sanwei:[50, 100, 150]
//     }
// }
//  let {name, desc:{alone,age,sanwei: [x, y, z]}} = obj

// console.log(name,alone,age,x,y,z)

let [a, b, c, d, e] = 'hello'
console.log(a, b, c, d, e)