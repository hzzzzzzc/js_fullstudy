const Koa = require('koa')
const app = new Koa()  
const route = require('koa-route')
const redirect = ctx => {
    ctx.response.redirect('/')
    ctx.response.body = '<a href="/">Index Page</a>'
}
const main = ctx => {
    ctx.response.body = "0.0"
}




app.listen(3000)