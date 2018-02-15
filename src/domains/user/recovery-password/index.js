const checkEmailExists = require('./check-email-exists')
const loadToken = require('./load-token')
const sendMail = require('./send-email')

const recoveryPassword = (db, data) => {
  return checkEmailExists(db, data)
    .then(loadToken)
    .then(sendMail)
}

module.exports = recoveryPassword
