# 词法作用域

代码在执行之前需要编译，编译的过程分为

1. 词法化
 - 父级作用域不能取子级作用域中的字符，子级作用域可以调用父级作用域
 - 执行阶段做作用域的查找工作,由内而外的 (只要找到第一个标识符后就会停止 --- 遮蔽效应)
 - 全局变量会变成全局对象  var a = 10  ==> window.a = 10

2. 欺骗词法
 - eval() 让原本不属于某处的代码好像在书写时就存在于程序的这个位置 修改传给它的变量所处的词法作用域
          eval() 通常用来执行动态创建的代码