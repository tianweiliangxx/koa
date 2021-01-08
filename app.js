const Koa = require('koa')
const parser = require('koa-bodyparser')
const InitManager = require('./core/init')
const catchError = require('./middlewares/exception')

const app = new Koa()
app.use(catchError)
app.use(parser())

InitManager.initCore(app)
// 应用程序对象 中间件

// 发送http KOA 接受HTTP

// 中间件就是函数


app.listen(3000)