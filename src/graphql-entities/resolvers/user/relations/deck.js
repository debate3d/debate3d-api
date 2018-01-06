const { isEmpty } = require('lodash')

module.exports = (user, args, context) => {
  if (isEmpty(user)) return []

  return context
    .db('decks_store')
    .where('uid_user', user.uid)
}
