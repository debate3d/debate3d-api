module.exports = (root, args, context) => {
  return context
    .db('topics')
    .where('uid', root.uid_topic)
    .first()
}
