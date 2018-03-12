const space = require('../model/space')

module.exports = {
  getUserSpaceData (params) {
    space.getUserSpaceData(params).then(data => {
      return data
    })
  },
  del (params) {
    space.del(params).then(data => {
      return data
    })
  }
}