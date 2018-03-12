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
  let data = space.getUserSpaceData(params)
  res.send({
    code: 200,
    data
  });
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
    let data = space.del(params)
    res.send({
      code: 200,
      data
    })
  }
})

module.exports = router