const { isEmpty } = require('lodash')

module.exports = (user, args, context) => {
  if (isEmpty(user)) return []

  return context
    .db('moderators_followers')
    .where('uid_user', user.uid)
    .where('deleted', false)
}
