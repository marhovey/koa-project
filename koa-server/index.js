const Koa = require('koa')
const app = new Koa()
const router = require('./router')
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, ()=>{console.log('start port 3000')});