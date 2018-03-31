const db = require('../db/db')
import moment from 'moment'

module.exports = {
  getRoomData (params) {
    // 查询房间数据
    let where = {
      roomName: params.roomName
    }
    return db.query('room').where(where).select()
  },
  addRoom (params) {
    // 创建群聊
    params.createData = moment().format('YYYY-MM-DD HH:mm:ss')
    return db.query('room').add(params)
  }
}