const Mysql = require('node-mysql-promise')

let mysql = Mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'xu'
})

module.exports = {
  query (table) {
    return mysql.table(table)
  }
}
