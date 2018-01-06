const { head, prop } = require('ramda')
const { isEmpty } = require('lodash')

module.exports = (parent, args, { db }) => {
  if (isEmpty(parent)) return 0

  const { root } = parent
  const query = db('cards')
    .where(`cards.${root.key}`, root.uid)
    .count('cards.uid')

  if (root.not_private_topics) {
    query
      .leftJoin('topics', 'cards.uid_topic', 'topics.uid')
      .where('topics.is_private', false)
  }

  return query
    .then(head)
    .then(prop('count'))
}
