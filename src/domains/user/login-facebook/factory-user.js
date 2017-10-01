const generator = require('node-uuid')
const { omit } = require('lodash')

const { returnDateToDb } = require('../../../helpers/common')

module.exports = data => {
  const common = omit(data, 'id')
  const user = {
    created: returnDateToDb(),
    uid: generator(),
    ponts: 0,
    is_subscriber: false
  }

  return Object.assign({ }, common, user)
}
