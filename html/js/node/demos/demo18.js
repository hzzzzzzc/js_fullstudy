const Koa = require('koa')
const app = new Koa()  

const handle = async (ctx, next) => {
  // 捕捉错误,如果出错，我们直接输出一个错误页面
 // 用 p 标签 装 内容 something error，you should concat adminster
  try {
      await next()
  } catch(err) {
    ctx.response.status = err.statusCode 
    ctx.response.type = 'html'
    ctx.response.body = '<p>something error，you should concat adminster</p>'
      ctx.app.emit('error', error, ctx)
  }
}

const main = ctx => {
    ctx.throw(500)
}

app.on('error', function(err) {
    console.log(err);
    console.log('logger', err.message);
})
app.use(main)
app.use(handle)
app.listen(3000)