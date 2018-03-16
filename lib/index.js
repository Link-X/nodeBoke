/*
  许道斌 
  2018年3月9日15:27:40
*/
const Express = require('express')
const bodyParse = require('body-parser')
const socketIo = require('socket.io')
const app = Express()
const server = require('http').Server(app)
const io = socketIo(server)
const socketInit = require('../socket/index')
const room = require('../router/room')
const space = require('../router/space')
const user = require('../router/user')
const article = require('../router/article')
const path = require('path')

socketInit(io)

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials','true');
  next();
})
app.use(Express.static('./public'))

app.use(bodyParse.urlencoded({extended: false}))
app.use(bodyParse.json())

app.use('/', Express.static(path.join(__dirname, './static')))
app.use('/api', user, room, space, article)

server.listen(5005, () => {
  console.log('server runing at 127.0.0.1:5005')
})
