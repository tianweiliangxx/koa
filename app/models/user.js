const bcrypt = require('bcryptjs')

const { sequelize: db } = require('../../core/db')

const { Sequelize, Model } = require('sequelize')

class User extends Model {

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
