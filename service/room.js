const room = require('../model/room')

module.exports = {
  getRoomData (params) {
   room.getRoomData(params).then(data => {
     return data
   })
  }
}