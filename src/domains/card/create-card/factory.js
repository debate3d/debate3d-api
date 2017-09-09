const generator = require('node-uuid')
const { returnDateToDb } = require('../../../helpers/common')

module.exports = data => Object.assign({ }, data, {
  uid: generator(),
  created: returnDateToDb(),
  edited: false,
  ponts: 0
})
