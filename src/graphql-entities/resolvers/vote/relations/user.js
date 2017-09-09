module.exports = (root, args, context) => {
  return context
    .db('users')
    .where('uid', root.uid_user)
    .first()
}
