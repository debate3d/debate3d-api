module.exports = (root, args, context) => {
  return context
    .db('votes_topic')
    .count('id')
    .where('uid_topic', root.topic.uid)
    .then(row => {
      return row[0].count
    })
}
