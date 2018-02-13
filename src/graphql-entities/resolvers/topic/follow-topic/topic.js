const { isEmpty } = require('lodash')
const FIELDS = [
  'uid',
  'ponts',
  'title',
  'nickname',
  'url_image',
  'id_position'
]

const topic = ({ uid_topic }, args, { db }) => {
  if (isEmpty(uid_topic)) return null

  return db('topics')
    .select(FIELDS)
    .where('uid', uid_topic)
    .first()
}

module.exports = topic
