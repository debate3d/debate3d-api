const { countField } = require('../../../helpers/database')
const { head, toInteger } = require('lodash')

const hasCards = countObj => toInteger(countObj.count) !== 0

module.exports = (db, uid_author, uid_topic) => {
  const condition = {
    uid_author,
    uid_topic
  }
  return countField(db('cards'), 'uid', condition).then(head).then(hasCards)
}
