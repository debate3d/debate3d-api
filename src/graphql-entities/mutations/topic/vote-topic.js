const performCreate = require('../../../domains/topic/add-vote')
const { merge } = require('lodash')

module.exports = (root, { data }, context) => {
  return context.$loadUser(user => {
    const vote = merge({ }, data, { uid_user: user.uid })
    return performCreate(vote, context.db)
  })
}
