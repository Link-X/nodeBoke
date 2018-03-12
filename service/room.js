const room = require('../model/room')

module.exports = {
  async getRoomData (params) {
   let data = await room.getRoomData(params)
   return data
  }
}