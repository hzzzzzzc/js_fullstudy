// js是单线程的
function a() {
    let name = '蜗牛'
    console.log(name);
}

function b() {
    setTimeout(() => {
        console.log('0.0');
    },1000)

}
function c() {
    console.log('000');
}
b()
a()
c()
