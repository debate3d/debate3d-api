const performUpdate = require('../../../domains/topic/update-topic')

module.exports = (root, { data }, { $loadUser, db }) => {
  return $loadUser(user => {
    data.user = user
    return performUpdate(data, db)
  })
}
