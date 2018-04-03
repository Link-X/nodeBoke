const room = require('../model/room')

module.exports = {
  async getRoomData (params) {
   let data = await room.getRoomData(params)
   return data
  },
  async addRoom (params) {
    let data = await room.addRoom(params)
    return data
  },
  async joinRoom (params) {
    let data = await room.joinRoom(params)
    return data
  },
  async groupList (params) {
    let data = await room.groupList(params)
    return data
  },
  async getGroupData (params) {
    let data = await room.getGroupData(params)
    return data
  }
}