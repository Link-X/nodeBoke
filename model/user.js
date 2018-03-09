const db = require('../db/db')
module.exports = {
  addUser (params = {}) {
    // 新增用户
    let where = {
      userName: params.userName
    }
    db.query('user').thenAdd(params, where, true).then(data => {
      // ( data.type: exist表示已存在，add新增 )
      return data
    })
  },
  getUserData (params) {
    // 查询用户数据
    return db.query('user').where(params).select()
  }
}