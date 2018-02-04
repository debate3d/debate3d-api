const { graphqlErrorHandler } = require('../../../helpers/bugnag')

const UpdateUserTokenDevice = (root, { data }, { d, $loadUser }) => {
  return $loadUser()
    .then(user => {
      if (user.uid !== data.uid) {
        return new Error('Você não pode mudar um token device que não é seu')
      }

      return true
    })
    .catch(graphqlErrorHandler)
}

module.exports = UpdateUserTokenDevice
