const bestTopic = (root, args, { db }) => {
  return db('topics')
    .where('is_private', false)
    .orderBy('ponts', 'desc')
    .first()
}

module.exports = bestTopic
