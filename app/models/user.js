const bcrypt = require('bcryptjs')

const {sequelize: db} = require('../../core/db')

const {Sequelize, Model} = require('sequelize')

class User extends Model {
  static async verifyEmailPassword(email, plainPassword) {
    const user = await User.findOne({
      where: {
        email
      }
    })
    if (!user) {
      throw new global.errs.AuthFailed('用户不存在')
    }
    const correct = bcrypt.compareSync(plainPassword, user.password)
    if(!correct) {
      throw new global.errs.AuthFailed('密码不正确')
    }
    return user
  }
}

User.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true, // 主键，不可重复
    autoIncrement: true // 自增
  },
  nickname: Sequelize.STRING,
  email: {
    type: Sequelize.STRING(128),
    unique: true // 唯一
  },
  password: {
    type: Sequelize.STRING,
    set(val) {
      // 扩展 设计模式 观察者模式
      // ES6 Reflect
      const salt = bcrypt.genSaltSync(10) // 加密后的字符数
      const psw = bcrypt.hashSync(val, salt)
      this.setDataValue('password', psw)
    }
  },
  openid: { // 微信用户的标识
    type: Sequelize.STRING(64),
    unique: true // 唯一
  }
}, {
  sequelize: db,
  tableName: 'user'
})

module.exports = {
  User
}
