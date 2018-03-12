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
const room = require('./router/room')
const space = require('./router/space')
const user = require('./router/user')

socketInit(io)

app.use(Express.static('./public'))

app.use('/', Express.static(path.join(__dirname, './static')))

app.user('/api', user, room, space)

server.listen(5001, () => {
  console.log('server runing at 127.0.0.1:5001')
})