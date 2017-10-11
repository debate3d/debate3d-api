const performCreate = require('../../domains/user/create-subscriber')
const { merge } = require('lodash')

module.exports = (root, { data }, context) => {
  return context.$loadUser(user => {
    const subscriber = merge({ }, data, { uid_user: user.uid })
    return performCreate(subscriber, context.db)
  })
}
