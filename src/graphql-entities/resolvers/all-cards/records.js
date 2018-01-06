const { isEmpty } = require('lodash')

module.exports = (parent, _args, { db }) => {
  if (isEmpty(parent)) return []

  const { root, args } = parent

  const { page } = args
  const offset = (page - 1) * 10

  const query = db('cards')
    .select('cards.*')
    .orderBy('ponts', 'desc')
    .where(`cards.${root.key}`, root.uid)
    .limit(10)
    .offset(offset)

  if (root.not_private_topics) {
    query
      .leftJoin('topics', 'cards.uid_topic', 'topics.uid')
      .where('topics.is_private', false)
  }

  return query
}
