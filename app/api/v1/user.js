const Router = require('koa-router')

const { RegisterValidator } = require('../../validators/validator')

const router = new Router({
  prefix: '/v1/user'
})

router.post('/register', async (ctx) => {
  // email password1 password2 nickname
  const v= new RegisterValidator().validate(ctx)
})

module.exports = router