const performUpdate = require('../../../domains/user/update-subscriber')
const { isEqual } = require('lodash')

const { graphqlErrorHandler } = require('../../../helpers/bugnag')

const isAdministrator = user => isEqual(user.administrator, true)
  ? Promise.resolve(user)
  : Promise.reject(new Error('Operação não autorizada'))

module.exports = (root, { data }, { db, $loadUser }) => {
  return $loadUser(isAdministrator)
    .then(performUpdate(data, db))
    .catch(graphqlErrorHandler)
}
