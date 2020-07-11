// 对象是方法和函数构成 
var duck = {
    type: '周黑鸭',
    yz: 99,
    duckSing: function () {
        console.log('gagaga')
    }
}

duck.duckSing()
var cherrio     // 关键字 标识符
// console.log(cherrio)
// console.log(typeof cherrio)
// 变量的类型由值决定
cherrio = []

// 基础类型不包括array array只是object的子类型
 for(var i = 0; i <998 ; i++ ) {
     cherrio.push(duck)
 }
 
var xxx = {
    name = 'xx',
    duckSing: function () {
        console.log('gagaga')
    }
}
var yyy = {
    name = 'yy',
    duckSing: function () {
        console.log('gagaga')
    }
}

const xgg = [xxx,yyy]

for(var i = 0; i < xgg.length; i++ ) {
    if(typeof xgg[i].duckSing == 'function') {
        cherrio.push(xgg[i])
    }
}
if(cherrio.length == 1000) {   
    console.log('ok')
}


for(var i = 0; i<1000; i++) {  
    cherrio.duckSing
}


