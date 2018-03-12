const express = require('express')
const user = require('../service/user')
let router = express.Router()

router.post('/user/add', (req, res, next) => {
  // 新用户
  let params = req.body
  let judeg = {
    userName: params && params.userName,
    password: params && params.password,
    iphone: params && params.iphone
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
  let data = user.addUser(params)
  res.send({
    code: 200,
    data
  })
})

router.post('/user/getUser', (req, res, next) => {
  // 登入用户
  let params = req.body
  let judeg = {
    iphone: params && params.iphone,
    password: params && params.password
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
  let data = user.getUserData(params)
  res.send({
    code: 200,
    data
  })
})

router.post('/user/compile', (req, res, next) => {
  // 修改用户信息
  let params = req.body
  let judeg = {
    iphone: params && params.iphone,
    id: params && params.id
  }
  for (let key in params) {
    if (!judeg[key]) {
      res.send({
        code: 100,
        msg: `${key}不能为空`
      })
      return
    }
  }
  let data = user.compileUser(params)
  res.send({
    code: 200,
    data
  })

})

module.exports = router
