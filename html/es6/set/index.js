// const s = new Set()  // 类数组 Set {}
// console.log(s) 
// let arr = [2, 3, 4, 5, 2]

// // for (let item of arr) {
// //     console.log(item)
// //     item.name = 'xxx'
// // }
//   arr.forEach((x) => {
//      s.add(x)
//   })
//   console.log(s)

//   const set = new Set(document.querySelectorAll('div'))
//   console.log(set.size)

//  数组去重
// let arr = [2, 3, 4, 5, 2]
// console.log([...new Set('ssaasdagas')])

// const s = new Set()
// s.add(5)
// s.add('5')
// console.log(s)


// let arr = [1, 2, 3, 4, 5, 5, 5, 4]
// console.log(arr.indexOf(2))

// Set 遍历
let set = new Set(['red', 'green', 'blue'])
 for (let item of set.keys()) {
    console.log(item)
}