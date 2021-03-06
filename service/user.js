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
  },
  async getFriend (params) {
    // 查找好友
    let data = await user.getFriend(params)
    return data
  },
  async addFriend (params) {
    let data = await user.addFriend(params)
    return data
  },
  async friendList (params) {
    let data = await user.friendList(params)
    return data
  }
}