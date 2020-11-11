// 什么是拷贝？ 什么是深拷贝？ 什么是浅拷贝？

//  let a = { age : 1}
//  let b = a
//  a.age = 2
//  console.log(b) // b = {age : 2}

 // 复制内存地址指针的操作叫做浅拷贝

 // Object.assign   (如果拷贝的属性是原始值类型，那么是深拷贝；如果是引用类型，则是浅拷贝)
 // 深拷贝 (不会受原数据影响的赋值操作叫做深拷贝)
 let a = { age : 1}
//  let b = Object.assign({}, a)  
 let b = JSON.parse(JSON.stringify(a)) // 标准深拷贝方法
 a.age = 2
//  console.log(b) // b = {age : 1}

 let c = {
     age : 250,
     jobs : {
         first : 'coding'
     }
 }
 let d = {...c}
 c.age = 2
 c.jobs.first = 'waiter'
 console.log(d);


// JSON.parse(JSON.stringify()) 的缺陷
// 1.会忽略undefined
// 2.会忽略Symbol
// 3.不能序列化函数
// 4.不能解决循环引用的对象