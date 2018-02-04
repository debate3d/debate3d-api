const performLogin = require('../../domains/user/login-facebook')

module.exports = (root, { data }, { db }) => {
  return performLogin(data, db)
}
