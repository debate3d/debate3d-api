const perform = require('../../../domains/user/mark-user-to-verified')

module.exports = (root, { data }, { db, $loadUser }) => {
  return $loadUser().then(({ uid }) => perform(uid, data, db))
}
