const getUserOnUsers = require('./get-user-on-users')
const getUserOnProviders = require('./get-user-on-providers')
const perfomLogin = require('./perform-login')

const { graphqlErrorHandler } = require('../../../helpers/bugnag')

module.exports = (data, db) => {
  return getUserOnUsers(db, data)
    .then(getUserOnProviders(db, data))
    .then(perfomLogin(db))
    .catch(graphqlErrorHandler)
}
