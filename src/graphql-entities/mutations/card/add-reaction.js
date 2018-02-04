const performCreate = require('../../../domains/card/add-reaction')
const { merge } = require('lodash')

module.exports = (root, { data }, context) => {
  return context.$loadUser(user => {
    const reaction = merge({ }, data, { uid_user: user.uid })
    return performCreate(reaction, context.db)
  })
}
