const { countField } = require('../../../helpers/database')
const { head, toInteger } = require('lodash')

const hasDeck = countObj => toInteger(countObj.count) !== 0

module.exports = (db, uid_user, uid_card) => {
  const condition = {
    uid_user,
    uid_card
  }
  return countField(db('decks_store'), 'id', condition).then(head).then(hasDeck)
}
