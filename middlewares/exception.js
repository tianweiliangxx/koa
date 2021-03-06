const { HttpException } = require('../core/http-exception')

const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    const isHttpException = error instanceof HttpException
    const isDev = global.config.environment === 'dev'
    if (!isHttpException && isDev) {
      throw error
    }
    if (isHttpException) {
      ctx.body = {
        msg: error.msg,
        error_code: error.errorCode,
        request: `${ctx.method} ${ctx.path}`
      }
      ctx.status = error.code
    } else {
      ctx.body = {
        msg: 'we made a mistake',
        error_code: 999,
        request: `${ctx.method} ${ctx.path}`
      }
      ctx.status = 500
    }
    // error 堆栈调用信息
    // error 简化清楚明了的信息 给前端
    // HTTP 状态码
    // message
    // error_code开发者自定义信息
    // request_url 当前请求的url

    // 已知错误 try catch
    // 未知错误 潜在错误 开发者不知道出错
  }
}
module.exports = catchError