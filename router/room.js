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
        msg: `${key}不能为空`
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

router.post('/room/joinRoom', (req, res, next) => {
  let params = req.body
  let judeg = {
    friendGroupName: params.friendGroupName,
    friendGroupId: params.friendGroupId,
    addAccountName: params.addAccountName,
    addAccountId: params.addAccountId
  }
  for (let i in judeg) {
    if (!judeg[i]) {
      res.send({
        code: 100,
        msg: `${i}不能为空`
      })
      return
    }
  }
  room.joinRoom(params).then(data => {
    res.send({
      code: 200,
      data
    })
  })
})

router.post('/room/groupList', (req, res, next) => {
  let params = req.body
  if (!params.addAccountId) {
    res.send({
      code: 100,
      msg: '错误'
    })
  }
  room.groupList(params).then(data => {
    res.send({
      code: 200,
      data
    })
  })
})

router.post('/room/getGroupData', (req, res, next) => {
  let params = req.body
  if (!params.id) {
    res.send({
      code: 100,
      msg: '错误'
    })
  }
  room.getGroupData(params).then(data => {
    res.send({
      code: 200,
      data
    })
  })
})

module.exports = router