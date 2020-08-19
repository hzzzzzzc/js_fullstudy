// 引入依赖 commonJS
const Koa = require('koa')

const app = new Koa()  // 定义一个新的koa实例

const main = ctx => {
    ctx.response.body = "0.0"
}
app.use(main)

app.listen(3000,() => {
    console.log('启动！');
}) 