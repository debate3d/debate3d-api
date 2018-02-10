const followTopic = require('../../../domains/topic/follow')

module.exports = (root, { data }, { db, $loadUser }) => {
  return $loadUser(followTopic(db, data))
}
