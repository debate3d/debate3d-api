module.exports = (args, { db }, context) => {
  const { page } = args
  const offset = (page - 1) * 20
  return db('users')
    .where({ is_debater: true })
    .orderBy('ponts', 'desc')
    .limit(20)
    .offset(offset)
}
