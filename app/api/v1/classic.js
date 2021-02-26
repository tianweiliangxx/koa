const Router = require('koa-router')
const { HttpException, ParameterException } = require('../../../core/http-exception')
const router = new Router({
  prefix: '/v1/classic'
})

const { PositiveIntegerValidator } = require('../../validators/validator')
const {Auth} = require('../../../middlewares/auth')

router.post('/latest', new Auth().m, (ctx, next) => {
  // const path = ctx.params
  // const query = ctx.request.query
  // const headers = ctx.request.header
  // const body = ctx.request.body
  // const v = new PositiveIntegerValidator().validate(ctx)
  // // 通过lin-validator获取http参数
  // const id = v.get('path.id')
  // ctx.body = {
  //   path,
  //   id,
  // }
  // throw new Error('API Eception')
})

module.exports = router
