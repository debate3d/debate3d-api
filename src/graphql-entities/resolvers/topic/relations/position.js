module.exports = (root, args, context) => {
  return context
    .db('position')
    .where('id', root.id_position)
    .first()
}
