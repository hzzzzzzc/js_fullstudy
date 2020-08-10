// function foo() {
//     console.log(this.a)
// }

// var obj = {
//     a : 2
// }

// foo.call(obj)  // bind

// var a = {
//     user : '蜗牛',
//     fn : function(q, w) {
//         console.log(this.user)
//         console.log(q + w)
//     }
// }
// 

// var b = a.fn
// var arr = [10, 20000000000]
// b.apply(a, arr)

var a = {
    user: '蜗牛',
    fn: function (e, d, f) {
        console.log(this.user)
        console.log(e, d, f)
    }
}
var b = a.fn
var c = b.bind(a, 1, 2, 3)
c(2, 2, 2)
