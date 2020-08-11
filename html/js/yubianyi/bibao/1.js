// function test() {
//     var arr = []
//     for(var i = 0; i < 10; i++) {

//       (function(i){
//         arr[i] = function(){
//           console.log(i);
//         }
//       })(i);
//     }
//     return arr
//   }
//   for(var i = 0; i < 10; i++ ){
//     test()[i]()
//   }


function a() {
    function b() {
        var bbb = 234
        console.log(aaa);
    }
     var aaa = 123
     return b 
}
var glob = 100
var demo = a()
demo()