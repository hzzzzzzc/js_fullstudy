// 中间件🗡

const Koa = require('koa')
const app = new Koa()
const fs = require('fs').promises

const main =  async function(ctx) {
    ctx.response.type = 'html'
    ctx.response.body = await fs.readFile('./template.html')
}

app.use(main)
app.listen(3000)