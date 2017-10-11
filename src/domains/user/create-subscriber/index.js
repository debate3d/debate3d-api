const checkCupomExists = require('./check-cupom-exists')
const setSubscriber = require('./set-subscriber')
const checkIfCupomHasInvalid = require('./check-if-cupom-has-invalid')

const { graphqlErrorHandler } = require('../../../helpers/bugnag')

module.exports = (data, db) => {
  return checkCupomExists(db, data)
    .then(checkIfCupomHasInvalid(db, data))
    .then(setSubscriber(db, data))
    .catch(graphqlErrorHandler)
}
