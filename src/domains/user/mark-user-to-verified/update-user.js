const { isEmpty } = require('lodash')
const length = rows => isEmpty(rows)

const updateUser = (uid, data, db) => {
  const user = Object.assign({ }, data, { is_verified: true })

  return db('users')
    .update(user)
    .where({ uid })
    .then(length)
}

module.exports = updateUser
