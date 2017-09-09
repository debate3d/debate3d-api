module.exports = (root, _args, context) => {
  const { args, topic } = root
  const { page } = args
  const offset = (page - 1) * 10
  return context
    .db('cards')
    .orderBy('ponts', 'desc')
    .where('uid_topic', topic.uid)
    .limit(10)
    .offset(offset)
}
