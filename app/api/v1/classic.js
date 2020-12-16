const Router = require('koa-router')
const { HttpException } = require('../../../core/http-exception')
const router = new Router()

router.post('/v1/:id/classic/latest', (ctx, next) => {
  const path = ctx.params
  const query = ctx.request.query
  const headers = ctx.request.header
  const body = ctx.request.body
  if (query) {
    const error = new HttpException('出现了错误', 10001, 400)
    throw error
  }
  ctx.body = {
    path,
  }
  // throw new Error('API Eception')
})

module.exports = router