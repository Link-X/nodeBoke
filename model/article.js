const db = require('../db/db')
import moment from 'moment'

module.exports = {
  add (params) {
    // 添加文章
    params.createDate = moment().format('YYYY-MM-DD HH:mm:ss')
    return db.query('article').add(params)
  },
  del (params) {
    // 删除文章
    let where = {
      id: params.id
    }
    return db.query('article').where(where).delete()
  },
  list (params = {page: 1, pageSize}) {
    // 查询文章分页列表
    return db.query('article').page(params.page, params.pageSize).select()
  },
  listCount (oFilter = {}) {
    return db.query('article').where(oFilter).count('id')
  },
  compile (params) {
    // 编辑文章
    let where = {
      id: params.id
    }
    return db.query('article').where(where).update(params)
  }
}