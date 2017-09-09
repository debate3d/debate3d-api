module.exports = (root, args, context) => {
  return context
    .db('votes_topic')
    .where({
      uid_topic: root.topic.uid,
      vote: true
    })
}
