module.exports = (user, args, context) => {
  return context
    .db('decks_store')
    .where('uid_user', user.uid)
}
