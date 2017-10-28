const { update } = require('../../helpers/database')

module.exports = (db, uid) => {
  return update(db('users'), { is_debater: true }, { uid })
}
