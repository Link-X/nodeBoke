const db = require('../db/db')
module.exports = {
  getRoomData (params) {
    // 查询房间数据
    let where = {
      roomName: params.roomName,
      createById: params.createById
    }
    return db.query('room').where(where).select()
  }
}