const express = require('express')
const article = require('../service/article')
let router = express.Router()

router.post('/article/add', (req, res, next) => {
  let params = req.body
  if (!params.createById || params.createBy) {
    res.send({
      code: 100,
      msg: '创建人不能为空'
    })
    return
  }
  let data = article.add(params)
  res.send({
    code: 100,
    data
  })
})

router.post('/article/del', (req, res, next) => {
  let params = req.body
  if (!params.id) {
    res.send({
      code: 100,
      msg: '文字id不能为空'
    })
    return
  }
  let data = article.del(params)
  res.send({
    code: 200,
    data
  })
})

router.post('/article/list', (req, res, next) => {
  let params = req.body
  if (!params.page) {
    res.send({
      code: 100,
      msg: 'page不能为空'
    })
    return
  }
  let data = article.list(params)
  res.send({
    code: 200,
    data
  })
})

router.post('/article/compile', (req, res, next) => {
  let params = req.body
  if (!params.id) {
    res.send({
      code: 100,
      msg: 'id不能为空'
    })
    return
  }
  let data = article.compile(params)
  res.send({
    code: 200,
    data
  })
})

module.exports = router