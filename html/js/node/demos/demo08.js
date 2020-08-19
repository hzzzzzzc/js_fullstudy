const Koa = require('koa')
const app = new Koa()


const main = ctx => {
    ctx.response.body = 'hello, world'
}
const logger = (ctx, next) => {
    ctx.response.body = `${ctx.request.url}-${ctx.request.method}-${Date.now()}`
    next()
}


app.use(logger)
app.use(main)
app.listen(3000)