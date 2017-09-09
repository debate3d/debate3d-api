module.exports = (root, args, context) => {
  return context
    .db('cards')
    .where('uid', root.uid_card)
    .first()
}
