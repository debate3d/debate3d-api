const performCreate = require('../../../domains/card/update-deck')
const { merge } = require('lodash')

module.exports = (root, { data }, context) => {
  return context.$loadUser(user => {
    const deck = merge({ }, data, { uid_user: user.uid })
    return performCreate(deck, context.db)
  })
}
