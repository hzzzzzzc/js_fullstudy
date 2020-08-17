// 实现一个函数执行出来的结果都是累加的

function add() {
    var num = 0
    function a() {
        console.log(++num);
    }
    return a
}

var result = add()

// add()()
// add()()
// add()()
// add()()


result()
result()
result()
result()