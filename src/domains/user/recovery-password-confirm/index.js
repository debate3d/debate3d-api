const { isEmpty } = require('lodash')
const { SevenBoom } = require('graphql-apollo-errors')
const checkTokenValid = require('./check-token-valid')
const resetPassword = require('./reset-password')
const sendMail = require('./send-email')

const recoveryPassword = (db, data) => {
  return checkTokenValid(data.token)
    .then(resetPassword(db, data))
    .then(result => {
      if (isEmpty(result)) {
        return SevenBoom.badImplementation('Um erro aconteceu')
      }
      return result[0]
    })
    .then(sendMail)
}

module.exports = recoveryPassword
