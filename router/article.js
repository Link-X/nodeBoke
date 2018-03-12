const express = require('express')
const article = require('../service/article')
let router = express.Router()

router.post('/article/add', (req, res, next) => {
  let params = req.body
  let judeg = {
    title: params && params.title,
    createBy: params && params.createBy,
    createById: params && params.createById,
    classify: params && params.classify
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
  article.add(params).then(data => {
    res.send({
      code: 100,
      data
    })
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
  article.del(params).then(data => {
    res.send({
      code: 200,
      data
    })
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
  article.list(params).then(data => {
    res.send({
      code: 200,
      data
    })
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
  article.compile(params).then(data => {
    res.send({
      code: 200,
      data
    })
  })
})

module.exports = router