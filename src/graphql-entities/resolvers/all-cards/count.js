module.exports = (root, args, context) => {
  const { topic } = root
  return context
    .db('cards')
    .where('uid_topic', topic.uid)
    .count('*')
    .then(result => {
      const { count } = result[0]
      return count
    })
}
