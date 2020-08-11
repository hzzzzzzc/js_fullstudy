// 实现一个函数执行出来的结果都是累加的
// 函数里面没有

function add() {
    var num = 0
    function a() {
        console.log(++num);
    }
    return a
}

var result = add()
result()
result()
result()
result()

