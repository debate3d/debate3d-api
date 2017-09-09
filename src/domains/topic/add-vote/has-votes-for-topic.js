const { countField, hasEntity } = require('../../../helpers/database')
const { head } = require('lodash')

module.exports = (db, uid_user, uid_topic) => {
  const condition = {
    uid_user,
    uid_topic
  }
  return countField(db('votes_topic'), 'id', condition).then(head).then(hasEntity)
}
