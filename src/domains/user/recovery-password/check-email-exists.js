const { isEmpty } = require('lodash')
const { SevenBoom } = require('graphql-apollo-errors')

const checkEmailExists = async (db, data) => {
  const user = db('users')
    .select('email')
    .where('email', data.email)
    .first()

  if (isEmpty(user)) return SevenBoom.badRequest('Este email não está cadastrado')

  return Promise.resolve(data.email)
}

module.exports = checkEmailExists
