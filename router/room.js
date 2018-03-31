const express = require('express')
const room = require('../service/room')
let router = express.Router()

router.post('/room/getRoom', (req, res, next) => {
  // 获取房间
  let params = req.body
  let judeg = {
    roomName: params.roomName
  }
  if (!judeg.roomName) {
    res.send({
      code: 100,
      msg: '房间名或房间号不能为空'
    })
    return
  }
  room.getRoomData(params).then(data => {
    res.send({
      code: 200,
      data
    })
  })
})

router.post('/room/addRoom', (req, res, next) => {
  let params = req.body
  let judeg = {
    roomName: params.roomName,
    createBy: params.createBy,
    createById: params.createById
  }
  for (let key in judeg) {
    if (!judeg[i]) {
      res.send({
        code: 100,
        msg: `$${key}不能为空`
      })
      return
    }
  }
  room.addRoom(params).then(data => {
    res.send({
      code: 200,
      data
    })
  })
})

module.exports = router