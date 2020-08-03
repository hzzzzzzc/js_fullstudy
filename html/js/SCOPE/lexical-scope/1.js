var a = 3
function foo(a) {
   var b = a + 1

    function bar(c) {
        console.log(a, b, c)
    }
    bar(5)
}


foo(2)
console.log(a)
