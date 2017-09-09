module.exports = (user, args, context) => {
  return context
    .db('reactions_users')
    .where('uid_user', user.uid)
}
