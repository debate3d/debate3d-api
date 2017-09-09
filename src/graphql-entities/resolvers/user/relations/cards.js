module.exports = (user, args, context) => {
  return context
    .db('cards')
    .where('uid_author', user.uid)
}
