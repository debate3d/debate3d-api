const { isEmpty } = require('lodash')
const FIELDS = [
  'uid',
  'ponts',
  'name',
  'nickname',
  'avatar_id'
]

const topic = ({ uid_moderator }, args, { db }) => {
  if (isEmpty(uid_moderator)) return null

  return db('users')
    .select(FIELDS)
    .where('uid', uid_moderator)
    .first()
}

module.exports = topic
