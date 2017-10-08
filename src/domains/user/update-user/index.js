const canUpdateUser = require('./can-update-user')
const updateUser = require('./update-user')

const { graphqlErrorHandler } = require('../../../helpers/bugnag')

const mutationUpdateUser = (uid_user, data, db) => {
  return canUpdateUser(db, uid_user)
    .then(_ => updateUser(data, db, uid_user))
    .catch(graphqlErrorHandler)
}

module.exports = mutationUpdateUser
