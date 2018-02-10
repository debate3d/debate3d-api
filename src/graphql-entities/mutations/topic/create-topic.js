const performCreate = require('../../../domains/topic/create-topic')
const { merge } = require('lodash')

module.exports = (root, { data }, context) => {
  return context.$loadUser(user => {
    const topic = merge({ }, data, { uid_author: user.uid })
    return performCreate(topic, context.db)
  })
}
