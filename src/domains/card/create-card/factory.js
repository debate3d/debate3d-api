const generator = require('node-uuid')
const { returnDateToDb } = require('../../../helpers/common')

module.exports = data => {
  const uid = generator()
  const object = {
    uid,
    created: returnDateToDb(),
    edited: false,
    ponts: 0
  }

  return Object.assign({ }, data, object)
}
