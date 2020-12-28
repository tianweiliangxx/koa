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
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  openid: { // 微信用户的标识
    type: Sequelize.STRING(64),
    unique: true // 唯一
  }
}, { sequelize: db })