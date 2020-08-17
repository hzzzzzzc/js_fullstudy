let xq = new Promise(function(resolve,reject){
    setTimeout(()=>{
      console.log('aaa');
      resolve('a is ok')
    },2000)
  })
  
  xq.then((res)=>{
    console.log(res);
    marry()
  })
  .then((res)=>{
    console.log(res);
    baby1()
  })
  
  function marry(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log('bbb');
        resolve('b is ok')
      },1000)
    })
  }
  function baby1(){
    setTimeout(()=>{
      console.log('ccc');
    },500)
  }
  // xq()
  // marry()
  // baby1()