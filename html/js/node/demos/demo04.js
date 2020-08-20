const fs = require('fs')

const Koa = require('koa')
const app = new Koa()
const main = ctx => {
    ctx.response.type = 'html'
    ctx.response.dody = fs.createReadStream('./template.html') 
}
app.use(main)
app.listen(3000,() => {
    console.log('启动！');
}) 