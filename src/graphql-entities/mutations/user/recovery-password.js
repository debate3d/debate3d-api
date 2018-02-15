const recoveryPassword = require('../../../domains/user/recovery-password')

module.exports = (root, { data }, { db, $loadUser }) => {
  return recoveryPassword(db, data)
}
