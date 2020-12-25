const Router = require('koa-router')
const { HttpException, ParameterException } = require('../../../core/http-exception')
const { PositiveIntegerValidator } = require('../../validators/validator')
const router = new Router()

router.post('/v1/:id/classic/latest', (ctx, next) => {
  const path = ctx.params
  const query = ctx.request.query
  const headers = ctx.request.header
  const body = ctx.request.body
  // 去除同步node_modules文件夹
  const v = new PositiveIntegerValidator().validate(ctx)
  ctx.body = {
    path,
  }
  // throw new Error('API Eception')
})

module.exports = router