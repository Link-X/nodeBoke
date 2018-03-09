const db = require('../db/db')
module.exports = {
  getUserData (params) {
    return db.query('user').where(params).select()
  }
}