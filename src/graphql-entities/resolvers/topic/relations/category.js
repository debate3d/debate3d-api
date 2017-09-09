module.exports = (root, args, context) => {
  return context
    .db('categories')
    .where('id', root.id_category)
    .first()
}
