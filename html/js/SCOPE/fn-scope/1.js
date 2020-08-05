
// function foo(a) {
//     var b;
//     b = a + bar(a * 2)
//     function bar(a) {
//         return a - 1
//     }
//     console.log(b * 3)
// }


// foo(2)

// function foo() {

//     function bar(a) {
//         i = 3
//     }
// }

// 自执行函数

var a = 2;
(function() {    // 函数表达式(function(){})()
    var a = 3
    console.log(a)
})()

console.log(a*2)