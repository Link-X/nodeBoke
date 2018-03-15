const moment = require('moment')
var _ = require('underscore')
module.exports = function (io) {
  let usocket = {}
  let room = {}
  io.on('connection', (socket) => {
    socket.on('newUser', (data = {userName: '', userId: ''}) => {
      // 用户加入
      if (!data || !data.userId) {
        return
      }
      usocket[data.userName] = data.userId
    })

    socket.on('sendPrivateChat', (data) => {
      // 私聊发送信息
      if (!data.userName || !data.userId) {
        return
      }
      let sendData = {
          userName: data.userName,
          sendName: data.sendName,
          msgTitle: data.msg,
          msgArr: [{
            msg: data.msg,
            sign: 'he',
            id: Math.random() * 1000 + 'node'
          }],
          date: moment().format('YYYY-MM-DD HH:mm:ss'),
          userId: data.userId
      }
      console.log(sendData, usocket[data.userName])
      socket.to(usocket[data.userName]).emit('privatChat', sendData)
    })

    socket.on('join', (data) => {
      // 加入房间
      if (!room[data.roomId]) {
        room[data.roomId] = []
      }
      room[data.roomId].push(data.userName)
      socket.join(data.roomId)
      socket.to(data.roomId).emit('sys', data, room[data.roomId])
    })

    socket.on('sendRoomChat', (data) => {
      // 群发信息
      console.log(data, '1111')
      if (!data.roomId) {
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
      delete(usocket[socket.userName])
    })

  })

  io.on('disconnect', () => {
    console.log(1)
  })

}