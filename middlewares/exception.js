const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    // error 堆栈调用信息
    // error 简化清楚明了的
    ctx.body = '服务器有问题'
  }
}
module.exports = catchError