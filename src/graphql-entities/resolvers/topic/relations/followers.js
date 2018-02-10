const { isEmpty } = require('lodash')

module.exports = (user, args, context) => {
  if (isEmpty(user)) return []

  return context
    .db('topics_followers')
    .where('uid_topic', user.uid)
    .where('deleted', false)
}
