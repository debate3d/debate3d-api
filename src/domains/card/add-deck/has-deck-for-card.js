const { head, toInteger } = require('lodash')

const hasDeck = countObj => toInteger(countObj.count) !== 0

module.exports = (db, uid_user, uid_card) => {
  const condition = {
    uid_user,
    uid_card
  }

  return db('decks_store')
    .where(condition)
    .count('id')
    .then(head)
    .then(hasDeck)
}
