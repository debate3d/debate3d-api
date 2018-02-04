const jwt = require('jsonwebtoken')
const { SevenBoom } = require('graphql-apollo-errors')
const { isEmpty, omit } = require('lodash')

module.exports = (db, token) => {
  try {
    const decoded = jwt.verify(token, process.env.API_KEY)

    return db('users')
      .select(['*'])
      .where({ uid: decoded.uid })
      .first()
      .then(obj => {
        if (!isEmpty(obj)) {
          return omit(obj, ['password'])
        }

        return Promise.reject(SevenBoom.unauthorized('Usuário inválido', { token }, 'USER_NOT_FOUND'))
      })
  } catch (err) {
    return Promise.reject(SevenBoom.unauthorized('Usuário inválido', { token }, 'USER_NOT_FOUND'))
  }
}
