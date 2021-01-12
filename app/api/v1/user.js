const Router = require('koa-router')
const bcrypt = require('bcryptjs')


const {User} = require('../../models/user')
const {RegisterValidator} = require('../../validators/validator')

const router = new Router({
  prefix: '/v1/user'
})

router.post('/register', async (ctx) => {
  // email password1 password2 nickname
  const v = await new RegisterValidator().validate(ctx)
  const user = {
    email: v.get('body.email'),
    password: v.get('body.password'),
    nickname: v.get('body.nickname')
  }
})

module.exports = router
