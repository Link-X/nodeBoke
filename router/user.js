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
  // 校验是否有空值
  for (let key in judeg) {
    if (!judeg[key]) {
      res.send({
        code: 100,
        msg: `${key}不能为空`
      })
      return
    }
  }
  user.addUser(params).then(data => {
    res.send({
      code: 200,
      data
    })
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
  user.getUserData(params).then(data => {
    if (!data.length) {
      res.send({
        code: 1,
        msg: "用户名或密码错误"
      })
      return
    }
    res.send({
      code: 200,
      data
    })
  })
})

router.post('/user/getFriend', (req, res, next) => {
  // 查找用户
  let params = req.body
  if (!params.userNumber) {
    res.send({
      code: 1,
      msg: '账号不能为空'
    })
    return
  }
  user.getFriend(params).then(data => {
    res.send({
      code: 200,
      data
    })
  })
})

router.post('/user/addFriend', (req, res, next) => {
  //添加好友
  let params = req.body
  for (let i in params) {
    if (!params[i]) {
      res.send({
        code: 1,
        msg: `${i}不能为空`
      })
      return
    }
  }
  user.addFriend(params).then(data => {
    res.send({
      code: 200,
      data
    })
  })
})

router.post('/user/compile', (req, res, next) => {
  // 修改用户信息
  let params = req.body
  let judeg = {
    iphone: params && params.iphone,
    id: params && params.id
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
  user.compileUser(params).then(data => {
    res.send({
      code: 200,
      data
    })
  })
})

module.exports = router
