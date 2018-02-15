const recoveryPasswordConfirm = require('../../../domains/user/recovery-password-confirm')

module.exports = (root, { data }, { db, $loadUser }) => {
  return recoveryPasswordConfirm(db, data)
}
