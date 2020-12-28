const requireDirectory = require('require-directory')
const Router = require('koa-router')

class InitManager{
  static initCore(app){
    InitManager.app = app
    InitManager.initLoadRouters()
    InitManager.loadConfig()
  }

  static loadConfig(path = '') {
    const configPath = path || process.cwd() + '/config/config.js'
    const config = require(configPath)
    global.config = config
  }

  static initLoadRouters() {
    // process.cwd()获取根路径
    const apiDorectory = `${process.cwd()}/app/api`
    requireDirectory(module, apiDorectory,{
      visit: whenLoadModule
    })

    function whenLoadModule(obj) {
      if(obj instanceof Router) {
        InitManager.app.use(obj.routes())
      }
    }
  }
}

module.exports = InitManager