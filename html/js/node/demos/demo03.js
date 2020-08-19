//引入依赖
const Koa = require('koa')

const app = new Koa()//定义一个新的koa实例

const main = ctx => {     //()可以省略  ctx代表koa上下文
  if (ctx.request.accepts('xml')) {  //ctx.request.accepts()检查http请求的accept的内容的
    ctx.response.type = 'xml'        //accept属于请求头，代表客户端希望接受的数据类型,跟Content-Type类似
    ctx.response.body = '<data>hello world</data>'
  }else if(ctx.request.accepts('html')){
    ctx.response.type = 'html'        
    ctx.response.body = '<p>hello world</p>'
  }else if(ctx.request.accepts('json')){
    ctx.response.type = 'json'        
    ctx.response.body = '{data:hello world}'
  }else {
    ctx.response.type = 'text'        
    ctx.response.body = 'hello world'
  }
  // ctx.response.body = "hello world" //这里放从数据库取得到的数据,也是返回给前端的数据
}
app.use(main)

app.listen(3000,()=>{
  console.log('项目启动ing');
})//3000端口