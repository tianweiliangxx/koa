const requireDirectory = require('require-directory')
const Router = require('koa-router')

class InitManager{
  static initCore(app){
    InitManager.app = app
    InitManager.initLoadRouters()
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