const { head, toInteger } = require('lodash')

const hasEntity = countObj => toInteger(countObj.count) !== 0

module.exports = (db, uid_user, uid_topic) => {
  const condition = {
    uid_user,
    uid_topic
  }

  return db('votes_topic')
    .where(condition)
    .count('id')
    .then(head)
    .then(hasEntity)
}
