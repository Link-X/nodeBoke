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
  },
  joinRoom (params) {
    // 加入群聊
    let where = {
      friendGroupId: params.friendGroupId,
      addAccountId: params.addAccountId
    }
    params.addCreateDate = moment().format('YYYY-MM-DD HH:mm:ss')
    return db.query('friendGroup').thenAdd(params, where, true)
  },
  groupList (params) {
    // 查找加入的群聊列表
    return db.query('friendGroup').where({ addAccountId: params.addAccountId }).select()
  },
  getGroupData (params) {
    // 获取群详情
    let where = {
      id: params.id
    }
    return db.query('room').where(where).select()
  }
}