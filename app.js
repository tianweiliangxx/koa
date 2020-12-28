const Koa = require('koa')
const InitManager = require('./core/init')
const catchError = require('./middlewares/exception')
require('./app/models/user')

const app = new Koa()
app.use(catchError)

InitManager.initCore(app)
// 应用程序对象 中间件

// 发送http KOA 接受HTTP

// 中间件就是函数


app.listen(3000)