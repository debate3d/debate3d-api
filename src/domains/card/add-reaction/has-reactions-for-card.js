const { countField, hasEntity } = require('../../../helpers/database')
const { head } = require('lodash')

module.exports = (db, uid_user, uid_card) => {
  const condition = {
    uid_user,
    uid_card
  }
  return countField(db('reactions_users'), 'id', condition).then(head).then(hasEntity)
}
