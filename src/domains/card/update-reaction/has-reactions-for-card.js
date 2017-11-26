const { head, toInteger } = require('lodash')

const hasEntity = countObj => toInteger(countObj.count) !== 0

module.exports = (db, uid_user, uid_card) => {
  const condition = {
    uid_user,
    uid_card
  }

  return db('reactions_users')
    .where(condition)
    .count('uid')
    .then(head)
    .then(hasEntity)
}
