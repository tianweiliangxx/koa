
module.exports = {
  environment: 'dev',
  database: {
    dbName: 'koa',
    host: '39.106.29.84',
    port: 3306,
    user: 'root',
    password: 'root'
  },
  security: {
    secretKey: "abcdefg",
    expiresIn: 60*60*24*30
  }
}
