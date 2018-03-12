const article = require('../model/article')

module.exports = {
  add (params) {
    // 添加文章
    article.add(params).then(data => {
      return data
    })
  },
  del (params) {
    // 删除文章
    article.del(params).then(data => {
      return data
    })
  },
  list (params) {
    // 查询文章分页列表
    let data = {
      data: null,
      dataTotal: null
    }
    article.list(params).then(data => {
      data.data = data
    })
    article.listCount().then(data => {
      data.dataTotal = data
    })
  },
  compile (params) {
    // 编辑文章
    article.compile(params).then(data => {
      return data
    })
  }
}