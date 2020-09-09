//防抖函数
export function debounce(func,delay) {
    let timer
  
    //闭包，有缓存，会保存timer
    return function(...args) {
  
      if(timer) {
        clearTimeout(timer)
      }
  
      timer = setTimeout(() => {
        func.apply(this,args)
      }, delay);
    }
  }
  //a.apply(b),把a的this作用域指向b的作用域