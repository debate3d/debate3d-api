const performCreate = require('../../domains/user/update-user')
const { merge } = require('lodash')

module.exports = (root, { data }, context) => {
  return context.$loadUser(user => {
    const card = merge({ }, data)
    return performCreate(user.uid, card, context.db)
  })
}
