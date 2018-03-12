const user = require('../model/user')
module.exports = {
  addUser (params = {}) {
    user.addUser(params).then(data => {
      return data
    })
  },
  getUserData (params) {
    // 查询用户数据
    user.getUserData(params).then(data => {
      return data
    })
  },
  compileUser (params) {
    user.compileUser(params).then(data => {
      return data
    })
  }
}