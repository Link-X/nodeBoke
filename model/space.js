const db = require('../db/db')
module.exports = {
  getUserSpaceData (params) {
    // 获取用户空间动态
    let where = {
      userId: params.userId
    }
    return db.query('space').where(where).select()
  },
  del (params) {
    // 删除动态
    let where = {
      id: params.id,
      userId: params.userId
    }
    return db.query('space').where(where).delete()
  }
}
