module.exports = (root, args, context) => {
  return context
    .db('reactions_users')
    .where({
      uid_card: root.uid,
      reaction: false
    })
}
