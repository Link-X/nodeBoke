const db = require('../db/db')
module.exports = {
  getRoomData (params) {
    // 查询房间数据
    return db.query('room').where(params).select()
  }
}