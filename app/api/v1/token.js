const Router = require('koa-router')
const {TokenValidator} = require('../../validators/validator')
const { loginType } = require('../../lib/enum')
const {User} = require('../../models/user')
const {generateToken} = require('../../../core/util')

const router  = new Router({
  prefix: '/v1/token'
})

router.post('/', async (ctx) => {
  const v = await new TokenValidator().validate(ctx)
  let token;
  // 判断登陆方式
  switch (v.get('body.type')) {
    case loginType.USER_EMAIL:
      token = await emailLogin(v.get('body.account'), v.get('body.secret'))
      break;
    case loginType.USER_MINI_PROGRAM:
      break;
    default:
      throw new global.errs.ParameterException('没有相应函数进行处理')
  }
  ctx.body = {
    token
  }
})

// 验证账号密码
async function emailLogin(account, secret) {
  const user = await User.verifyEmailPassword(account, secret)
  return token = generateToken(user.id, 2)
}

module.exports = router
