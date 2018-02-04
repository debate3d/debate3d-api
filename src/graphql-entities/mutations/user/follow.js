const followModerator = require('../../../domains/topic/follow')

module.exports = (root, { data }, { db, $loadUser }) => {
  return $loadUser(followModerator(db, data))
}
