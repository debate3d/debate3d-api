const { isEmpty } = require('lodash')
const db = require('../../../db')

module.exports = function (decodedToken, request, fn) {
  const user = decodedToken.uid

  return db('users')
    .select(['uid'])
    .where({ uid: user })
    .first()
    .then(obj => {
      if (!isEmpty(obj)) {
        return fn(null, true)
      }
      return fn(null, false)
    })
    .catch(err => {
      if (err) throw err
    })
}
