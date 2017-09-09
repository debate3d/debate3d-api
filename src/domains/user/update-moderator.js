const { update } = require('../../helpers/database')

module.exports = (db, uid) => {
  const condition = { uid }

  return update(db('users'), { is_moderator: true }, condition)
}
