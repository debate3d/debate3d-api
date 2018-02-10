const performCreate = require('../../../domains/card/create-card')
const { merge } = require('lodash')

module.exports = (root, { data }, context) => {
  return context.$loadUser(user => {
    const card = merge({ }, data, { uid_author: user.uid })
    return performCreate(card, context.db)
  })
}
