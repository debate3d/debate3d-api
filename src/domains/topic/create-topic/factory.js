const generator = require('node-uuid')
const { returnDateToDb } = require('../../../helpers/common')

const factoryTopic = data => Object.assign({ }, data, {
  uid: generator(),
  created: returnDateToDb(),
  ponts: 0
})

module.exports = factoryTopic
