module.exports = (parent, _args, { db }) => {
  const { root, args } = parent
  const { page } = args
  const offset = (page - 1) * 10
  return db('cards')
    .orderBy('ponts', 'desc')
    .where(root.key, root.uid)
    .limit(10)
    .offset(offset)
}
