/*
  许道斌 
  2018年3月9日15:27:40
*/
const Express = require('express')
const socketIo = require('socket.io')
const app = Express()
const server = require('http').Server(app)
const io = socketIo(server)
const socketInit = require('./socket/index')

socketInit(io)

app.use(Express.static('./public'))

server.listen(5001, () => {
  console.log('server runing at 127.0.0.1:5001')
})