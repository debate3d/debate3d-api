const { select } = require('../../../../helpers/database')
const tables = require('../../../../helpers/tables')
const returnOffset = require('./return-offset')

module.exports = (root, args, context) => {
  const LIMIT = 10
  const { page } = root
  const offset = returnOffset(page, LIMIT)
  return select(tables.topics(), '*')
    .orderBy('ponts', 'desc')
    .offset(offset)
    .limit(LIMIT)
}
