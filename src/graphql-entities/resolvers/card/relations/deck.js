module.exports = (root, args, context) => {
  return context
    .db('decks_store')
    .where('uid_card', root.uid)
}
