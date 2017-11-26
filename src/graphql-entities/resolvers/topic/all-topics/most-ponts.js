const returnOffset = require('./return-offset')

module.exports = (root, { db }, context) => {
  const LIMIT = 10
  const { page } = root
  const offset = returnOffset(page, LIMIT)

  return db('topics')
    .select('*')
    .orderBy('ponts', 'desc')
    .offset(offset)
    .limit(LIMIT)
}
