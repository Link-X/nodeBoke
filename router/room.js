const express = require('express')
const room = require('../service/room')
let router = express.Router()

router.post('/room/getRoom', (req, res, next) => {
  let params = req.body
  let judeg = {
    roomName: params.roomName,
    createById: params.createById
  }
  for (let key in judeg) {
    if (!judeg[key]) {
      res.send({
        code: 100,
        msg: `${key}不能为空`
      })
      return
    }
  }
  room.getRoomData(params).then(data => {
    res.send({
      code: 200,
      data
    })
  })
})

module.exports = router