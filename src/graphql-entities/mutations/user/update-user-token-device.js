// const { graphqlErrorHandler } = require('../../../helpers/bugnag')
const performUpdate = require('../../../domains/user/update-user-token-device')

const UpdateUserTokenDevice = (root, { data }, { db, $loadUser }) => {
  return performUpdate(db, data)
  // return $loadUser()
  //   .then(user => {
  //     if (user.uid !== data.uid) {
  //       return new Error('Você não pode mudar um token device que não é seu')
  //     }
  //
  //   })
  //   .catch(graphqlErrorHandler)
}

module.exports = UpdateUserTokenDevice
