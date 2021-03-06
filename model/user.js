const db = require('../db/db')
import moment from 'moment'

module.exports = {
  addUser (params = {}) {
    // 新增用户
    let where = {
      iphone: params.iphone
    }
    params.createData = moment().format('YYYY-MM-DD HH:mm:ss')
    // ( data.type: exist表示已存在，add新增 )
    return db.query('user').thenAdd(params, where, true)
  },
  getUserData (params) {
    // 查询用户数据
    return db.query('user').where(params).select()
  },
  compileUser (params) {
    // 修改用户信息
    let where = {
      iphone: params.iphone,
      id: params.id
    }
    return db.query('user').where(where).update(params)
  },
  getFriend (params) {
    // 查找好友
    let where = {
      iphone: params.iphone
    }
    let data = ['createDate', 'id', 'iphone', 'signature', 'userImg', 'userName']
    return db.query('user').where(where).field(data).select()
  },
  addFriend (params) {
    // 添加好友
    let where = {
      friendId: params.friendId,
      userId: params.userId
    }
    params.createData = moment().format('YYYY-MM-DD HH:mm:ss')
    // ( data.type: exist表示已存在，add新增 )
    return db.query('friend').thenAdd(params, where, true)
  },
  friendList (params) {
    // 查询好友列表
    return db.query('friend').where({userId: params.userId}).select()
  }
}