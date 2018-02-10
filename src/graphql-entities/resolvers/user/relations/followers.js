const { isEmpty } = require('lodash')

const isModerator = user => user.is_moderator === true

module.exports = (user, args, context) => {
  if (isEmpty(user)) return []

  if (isModerator(user)) {
    return context
      .db('moderators_followers')
      .where('uid_moderator', user.uid)
      .where('deleted', false)
  }

  return []
}
