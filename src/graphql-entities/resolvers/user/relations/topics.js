module.exports = (user, args, context) => {
  return context
    .db('topics')
    .where('uid_author', user.uid)
}
