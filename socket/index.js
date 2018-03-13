module.exports = function (io) {
  let usocket = {}
  let room = {}
  io.on('connection', (socket) => {
    socket.on('new user', (data) => {
      // 用户加入
      usocket[data.userName] = data.userId
    })

    socket.on('send private chat', (data) => {
      // 私聊发送信息
      socket.to(usocket[data.userName]).emit('private chat', data)
    })

    socket.on('join', (data) => {
      // 加入房间
      if (!room[data.roomId]) {
        room[data.roomId] = []
      }
      room[data.roomId].push(data.userName)
      socket.join(data.roomId)
      socket.to(data.roomId).emit('sys', data.userName + '进入聊天室', room[data.roomId])
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