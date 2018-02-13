const { isEmpty } = require('lodash')

const topic = ({ uid_moderator }, args, { db }) => {
  if (isEmpty(uid_moderator)) return null

  return db('users')
    .select(['ponts', 'name', 'nickname'])
    .where('uid', uid_moderator)
    .first()
}

module.exports = topic
