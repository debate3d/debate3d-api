const { head } = require('ramda')
const { isEmpty } = require('lodash')

const count = (parent, args, { db }) => {
  if (isEmpty(parent)) return 0

  const { root } = parent
  const query = db('topics')
    .where('uid_author', root.uid)
    .count('*')

  if (root.not_private_topics) {
    query.where('is_private', false)
  }

  return query
    .then(head)
    .then(({ count }) => count)
}

const records = (parent, _args, { db }) => {
  if (isEmpty(parent)) return []

  const { root, args } = parent
  const { page } = args
  const offset = (page - 1) * 10
  const query = db('topics')
    .where('uid_author', root.uid)

  if (root.not_private_topics) {
    query.where('is_private', false)
  }

  return query
    .orderBy('ponts', 'desc')
    .limit(10)
    .offset(offset)
}

module.exports = {
  count,
  records
}
