// function test() {
//     var food = 'apple'
//     function a() {
//         console.log(food);
//     }
//     function b() {
//         console.log(food);
//     }
// }

// 想一个方法把连个函数返回出来
function fruit() {
    var food = 'apple'
    var obj = {
        eatFood : function() {
            if(food != '') {
                console.log('i am eating ' + food);
                food = ''
            }else {
                console.log('There is nothing');
            }
        },
        pushFood: function(myFood) {
            food = myFood
        }
    }
    return obj
}

var person = fruit()
person.eatFood()
person.eatFood()
person.pushFood('shit')
person.eatFood()
