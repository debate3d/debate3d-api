const performCreate = require('../../../domains/user/update-user')
const { merge } = require('lodash')

module.exports = (root, { data }, { $loadUser, db, dataLoader }) => {
  return $loadUser(user => {
    const card = merge({ }, data)
    return performCreate(user.uid, card, db)
      .then(result => {
        dataLoader.users.clear(user.uid)
        return Promise.resolve(result)
      })
  })
}
