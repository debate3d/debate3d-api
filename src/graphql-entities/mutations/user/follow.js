const followModerator = require('../../../domains/user/follow')

module.exports = (root, { data }, { db, $loadUser }) => {
  return $loadUser(followModerator(db, data))
}
