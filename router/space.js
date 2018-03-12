const express = require('express')
const space = require('../service/space')
let router = express.Router()

router.post('/space/getSpace', (req, res, next) => {
  let params = req.body
  if (!params.userId) {
    res.send({
      code: 100,
      msg: '查询用户不能为空'
    })
  }
  space.getUserSpaceData(params).then(data => {
    res.send({
      code: 200,
      data
    })
  })
})

router.post('/space/del', (req, res, next) => {
  let params = req.body
  let judeg = {
    id: params.id,
    userId: params.userId
  }
  for (let key in judeg) {
    if (!judeg[key]) {
      res.send({
        code: 100,
        msg: `${key}不能为空`
      })
      return
    }
    space.del(params).then(data => {
      res.send({
        code: 200,
        data
      })
    })
  }
})

module.exports = router