const room = require('../model/room')

module.exports = {
  async getRoomData (params) {
   let data = await room.getRoomData(params)
   return data
  },
  async addRoom (params) {
    let data = await room.addRoom(params)
    return data
  }
}