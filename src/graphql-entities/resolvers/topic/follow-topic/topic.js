const { isEmpty } = require('lodash')

const topic = ({ uid_topic }, args, { db }) => {
  if (isEmpty(uid_topic)) return null

  return db('topics')
    .select(['ponts', 'title', 'nickname'])
    .where('uid', uid_topic)
    .first()
}

module.exports = topic
