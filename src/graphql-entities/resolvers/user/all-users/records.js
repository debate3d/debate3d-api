module.exports = (args, { db }, context) => {
  const { page } = args
  const offset = (page - 1) * 20
  return db('users')
    .orderBy('ponts', 'desc')
    .limit(20)
    .offset(offset)
}
