const article = require('../model/article')

module.exports = {
  async add (params) {
    // 添加文章
    let data = await article.add(params)
    return data
  },
  async del (params) {
    // 删除文章
    let data = await article.del(params)
    return data
  },
  async list (params) {
    // 查询文章分页列表
    let data = await article.list(params)
    let dataTotal = await article.listCount()
    return {
      data: data,
      dataTotal: dataTotal
    }
  },
  async compile (params) {
    // 编辑文章
    let data = await article.compile(params)
    return data
  }
}