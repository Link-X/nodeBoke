const user = require('../model/user')
module.exports = {
  async addUser (params = {}) {
    // 新增用户
    let data = await user.addUser(params)
    return data
  },
  async getUserData (params) {
    // 查询用户数据
    let data = await user.getUserData(params)
    return data
  },
  async compileUser (params) {
    // 修改用户资料
    let data = await user.compileUser(params)
    return data
  }
}