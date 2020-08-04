// 什么是拷贝？ 什么是深拷贝？ 什么是浅拷贝？

 let a = { age : 1}
 let b = a
 a.age = 2
 console.log(b) // b = {age : 2}

 // 复制内存地址指针的操作叫做浅拷贝