const returnOffset = require('./return-offset')
const { groupBy } = require('../../../../helpers/database')
const returningTopics = require('./returning-topics')
const tables = require('../../../../helpers/tables')

module.exports = (root, args, context) => {
  const LIMIT = 10
  const { page } = root
  const offset = returnOffset(page, LIMIT)
  return groupBy(tables.cards(), 'uid_topic', 'uid_topic')
    .offset(offset)
    .limit(LIMIT)
    .then(returningTopics)
}
