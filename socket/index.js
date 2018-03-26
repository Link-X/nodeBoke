const moment = require('moment')
var _ = require('underscore')
let usocket = {}
let room = {}
function privateSocket(io, toId) {
  // 寻找socket 保存的 socket 对象
  return (_.findWhere(io.sockets.sockets, { id: toId }));
}
module.exports = function (io) {
  io.on('connection', (socket) => {
    socket.on('newUser', (data = { userName: '', userId: '' }) => {
      // 用户加入
      if (!data || !data.userId) {
        return
      }
      // 保存用户的名字对应 上 socket生成的id
      usocket[data.userId] = socket.id
      socket.emit('yesEnter', socket.id)
    })

    socket.on('sendPrivateChat', (data) => {
      // 私聊发送信息
      // console.log(data)
      if (!data.toUserId || !usocket[data.toUserId]) {
        return
      }
      let sendData = {
        userName: data.userName,
        sendName: data.sendName,
        msgTitle: data.msg,
        msg: data.msg,
        sing: data.sign,
        msgArr: [{
          msg: data.msg,
          sign: 'he',
          id: Math.random() * 1000 + 'node'
        }],
        date: moment().format('YYYY-MM-DD HH:mm:ss'),
        userId: data.userId,
        toUserId: data.toUserId
      }
      var toId
      if (toId = usocket[data.toUserId]) {
        // 找出接收消息的socket 触发事件
        privateSocket(io, toId).emit('privatChat', sendData)
      }
    })

    socket.on('join', (data) => {
      // 加入房间
      console.log(data)
      if (!room[data.roomId]) {
        room[data.roomId] = []
      }
      // 保存一份房间用户列表
      room[data.roomId].push(data.userName)
      socket.join(data.roomId)
      socket.to(data.roomId).emit('sys', data, room[data.roomId])
    })

    socket.on('sendRoomChat', (data) => {
      // 群发信息
      if (!data.roomId || !data.userName) {
        return
      }
      socket.to(data.roomId).emit('roomMessage', data)
    })

    socket.on('leave', (data) => {
      // 退出房间
      socket.leave(data.roomId)
      socket.to(data.roomId).emit('sys', data.userName + '退出了房间')
    })

    socket.on('disconnect', () => {
      // 用户退出
      delete (usocket[socket.userName])
    })

  })

  io.on('disconnect', () => {
    console.log(1)
  })

}