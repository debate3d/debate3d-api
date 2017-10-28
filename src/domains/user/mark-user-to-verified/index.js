const updateUser = require('./update-user')
const { graphqlErrorHandler } = require('../../../helpers/bugnag')

module.exports = (uid, data, db) => {
  return updateUser(uid, data, db).catch(graphqlErrorHandler)
}
