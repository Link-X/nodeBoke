const space = require('../model/space')

module.exports = {
  async getUserSpaceData (params) {
    let data = await space.getUserSpaceData(params)
    return data
  },
  async del (params) {
    let data = await space.del(params)
    return data
  }
}